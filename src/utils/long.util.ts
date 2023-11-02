import Long from 'long';

export class LongUtil {
  public static fromBigInt(num: bigint | undefined | null): Long | undefined {
    if (num === undefined || num === null) {
      return undefined;
    }
    return Long.fromNumber(Number(num));
  }

  public static toBigInt(num: Long | undefined | null): bigint | undefined {
    if (num === undefined || num === null) {
      return undefined;
    }
    return BigInt(num.toNumber());
  }
}