import { Controller, Get } from '@nestjs/common';
import { DECORATORS } from '@nestjs/swagger/dist/constants';
import { ApiProperty } from '@nestjs/swagger';
import { TypedApiParam } from './typed-api-param.decorator';

describe('TypedApiParam', () => {
  describe('classのmethodに設定された場合', () => {
    class UserDto {
      @ApiProperty({ required: true })
      id: string;

      @ApiProperty({ required: true })
      name: string;
    }

    @Controller('tests')
    class TestUserController {
      @TypedApiParam<UserDto>({
        name: 'id',
        type: 'string',
        description: 'User ID',
      })
      @Get(':id')
      public get(): UserDto {
        return { id: '1', name: 'test' };
      }
    }

    it('メソッドにmetadataが設定されている', () => {
      const controller = new TestUserController();
      expect(
        Reflect.hasMetadata(DECORATORS.API_PARAMETERS, controller.get),
      ).toBeTruthy();

      const metadata = Reflect.getMetadata(
        DECORATORS.API_PARAMETERS,
        controller.get,
      );
      expect(metadata).toEqual([
        {
          name: 'id',
          type: 'string',
          description: 'User ID',
          in: 'path',
          required: true,
        },
      ]);
    });
  });
});
