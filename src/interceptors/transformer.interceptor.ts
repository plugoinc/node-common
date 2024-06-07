import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JSONUtil } from 'src/utils';

export interface Response<T> {
  data: T;
}

/**
 * レスポンスに含まれるBigIntをStringに変換する
 *
 * @description レスポンスのJSONに含まれるBigIntをStringに変換する
 */
@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    return next
      .handle()
      .pipe(map((data) => JSON.parse(JSONUtil.stringify(data))));
  }
}
