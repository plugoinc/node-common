import { ApiParam, ApiParamOptions } from '@nestjs/swagger';

/**
 * nestjs swaggerの @ApiParam をラッピングしたdecorator
 * GenericsでDTOクラスを受け取り、そのkeyをApiParamのnameに型づけする
 *
 * @param options Swagger parameter options with typed name property
 * @returns Decorator function
 */
export const TypedApiParam = <T extends object>(
  options: ApiParamOptions & { name: keyof T },
) => {
  return ApiParam({ ...options });
};
