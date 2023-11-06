import Long from 'long';

export class LongUtil {
  public static fromBigInt(num: bigint) {
    if (
      num > BigInt('9223372036854775807') ||
      num < BigInt('-9223372036854775808')
    ) {
      return undefined;
    }
    return Long.fromString(num.toString());
  }

  public static toBigInt(num: Long) {
    return BigInt(num.toString());
  }
}
