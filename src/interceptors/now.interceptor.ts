import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';

/**
 * requestに一意なアクセス時刻を付与する
 *
 * @description NestJSのControllerでrequestオブジェクトにnowプロパティにアクセスすると、アクセス時の日時が取得できる
 * アクセス時刻を使った処理にはこのnowプロパティを利用する
 *
 * @example
 * // controller
 * \@Get()
 * getNow(@Req() req: Request) {
 *  return req.now;
 * }
 */
export class NowInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    req.now = new Date();
    return next.handle();
  }
}
