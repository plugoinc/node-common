import { ApiProperty } from '@nestjs/swagger';

/**
 * 一覧取得APIのレスポンスDTO
 * ApiPaginatedResponseで指定されたDtoクラスをresultsに持つ
 *
 */
export class PaginatedDto<TData> {
  @ApiProperty()
  total: number;

  @ApiProperty()
  limit: number;

  @ApiProperty()
  offset: number;

  results: TData[];
}
