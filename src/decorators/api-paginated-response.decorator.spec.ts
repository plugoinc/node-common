import { Controller, Get } from '@nestjs/common';
import { ApiPaginatedResponse } from './api-paginated-response.decorator';
import { PaginatedDto } from '..';
import { DECORATORS } from '@nestjs/swagger/dist/constants';
import { ApiProperty } from '@nestjs/swagger';

describe('ApiPaginatedResponse', () => {
  describe('classのmethodに設定された場合', () => {
    class UserDto {
      @ApiProperty({ required: true })
      id: string;
      @ApiProperty({ required: true })
      name: string;
    }

    @Controller('tests/:testId')
    class TestUserController {
      @ApiPaginatedResponse(UserDto)
      @Get()
      public get(): PaginatedDto<UserDto> {
        return {
          total: 1,
          limit: 1,
          offset: 0,
          results: [{ id: '1', name: 'test' }],
        };
      }
    }

    it('メソッドにmetadataが設定されている', () => {
      const controller = new TestUserController();
      expect(
        Reflect.hasMetadata(DECORATORS.API_RESPONSE, controller.get),
      ).toBeTruthy();
      expect(
        Reflect.getMetadata(DECORATORS.API_RESPONSE, controller.get),
      ).toEqual({
        '200': {
          description: '',
          isArray: undefined,
          schema: {
            allOf: [
              { $ref: '#/components/schemas/PaginatedDto' },
              {
                properties: {
                  results: {
                    items: { $ref: '#/components/schemas/UserDto' },
                    type: 'array',
                  },
                },
                required: ['results'],
              },
            ],
          },
          type: undefined,
        },
      });
    });
  });
});
