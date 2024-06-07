import { Type, applyDecorators } from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { PaginatedDto } from '../dtos/paginated.dto';

/**
 * 一覧取得APIのレスポンス用Decorator
 *
 * PaginatedDtoに沿ったレスポンスを返すAPIメソッドに付与することで、Swaggerの定義を追加する
 *
 * @param model PaginatedされるDtoクラス
 * @returns Decorator
 * @example
 * \@ApiPaginatedResponse(UserDto)
 * \@Get()
 * findAll(): Promise<PaginatedDto<UserDto>> {
 *  return this.userService.findAll();
 * }
 */
export const ApiPaginatedResponse = <TModel extends Type<any>>(
  model: TModel,
) => {
  return applyDecorators(
    ApiExtraModels(PaginatedDto, model),
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(PaginatedDto) },
          {
            properties: {
              results: {
                type: 'array',
                items: { $ref: getSchemaPath(model) },
              },
            },
            required: ['results'],
          },
        ],
      },
    }),
  );
};
