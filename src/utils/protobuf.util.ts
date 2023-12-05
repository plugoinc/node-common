import Long from 'long';
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';

const POSTGRES_MAX_BIGINT = BigInt('9223372036854775807');
const POSTGRES_MIN_BIGINT = BigInt('-9223372036854775808');

export class ProtobufUtil {
  /**
   * BigInt to Long, Long is protobuf int64
   *
   * NOTE: Should only be used for db ids
   *
   * @param id BigInt - db bigint
   * @returns Long - protobuf int64
   */
  public static getInt64FromBigInt(id: bigint) {
    if (id > POSTGRES_MAX_BIGINT || id < POSTGRES_MIN_BIGINT) {
      return undefined;
    }
    return Long.fromString(id.toString());
  }

  /**
   * Long to BigInt, Long is protobuf int64
   *
   * NOTE: Should only be used for db ids
   *
   * @param id Long - protobuf int64
   * @returns BigInt - db bigint
   */
  public static getBigIntFromInt64(id: Long) {
    return BigInt(id.toString());
  }

  /**
   * Date -> Timestamp
   *
   * @param date Date
   */
  public static dateToTimestamp(date: Date): Timestamp;
  public static dateToTimestamp(date: Date | undefined): Timestamp | undefined;
  public static dateToTimestamp(date: Date | undefined): Timestamp | undefined {
    if (!date) return undefined;

    const seconds = Long.fromNumber(date.getTime() / 1_000);
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { seconds, nanos };
  }

  /**
   * Timestamp -> Date
   *
   * @param t Timestamp
   */
  public static timestampToDate(t: Timestamp): Date;
  public static timestampToDate(t: Timestamp | undefined): Date | undefined;
  public static timestampToDate(t: Timestamp | undefined): Date | undefined {
    if (!t) return undefined;

    let millis = (t.seconds.toNumber() || 0) * 1_000;
    millis += (t.nanos || 0) / 1_000_000;
    return new Date(millis);
  }
}
