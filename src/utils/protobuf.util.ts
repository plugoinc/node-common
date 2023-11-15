import Long from 'long';

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
}
