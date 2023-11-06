import Long from 'long';

const POSTGRES_MAX_BIGINT = BigInt('9223372036854775807');
const POSTGRES_MIN_BIGINT = BigInt('-9223372036854775808');

export class LongUtil {
  public static fromBigInt(num: bigint) {
    if (num > POSTGRES_MAX_BIGINT || num < POSTGRES_MIN_BIGINT) {
      return undefined;
    }
    return Long.fromString(num.toString());
  }

  public static toBigInt(num: Long) {
    return BigInt(num.toString());
  }
}
