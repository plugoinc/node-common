import Long from 'long';
import { ProtobufUtil } from './protobuf.util';

describe('LongUtil', () => {
  describe('fromBigInt', () => {
    it('should convert bigint to Long', () => {
      const num = BigInt('9223372036854775807');
      const long = ProtobufUtil.getInt64FromBigInt(num);
      expect(long).toEqual(Long.fromString('9223372036854775807'));

      const num2 = BigInt('-9223372036854775808');
      const long2 = ProtobufUtil.getInt64FromBigInt(num2);
      expect(long2).toEqual(Long.fromString('-9223372036854775808'));
    });

    it("should return undefined if bigint is greater than '9223372036854775807'", () => {
      const num = BigInt('9223372036854775808');
      const long = ProtobufUtil.getInt64FromBigInt(num);
      expect(long).toBeUndefined();
    });

    it("should return undefined if bigint is less than '-9223372036854775808'", () => {
      const num = BigInt('-9223372036854775809');
      const long = ProtobufUtil.getInt64FromBigInt(num);
      expect(long).toBeUndefined();
    });
  });

  describe('toBigInt', () => {
    it('should convert Long to bigint', () => {
      const long = Long.fromString('9223372036854775807');
      const num = ProtobufUtil.getBigIntFromInt64(long);
      expect(num).toEqual(BigInt('9223372036854775807'));

      const long2 = Long.fromString('-9223372036854775808');
      const num2 = ProtobufUtil.getBigIntFromInt64(long2);
      expect(num2).toEqual(BigInt('-9223372036854775808'));

      const long3 = Long.fromString('0');
      const num3 = ProtobufUtil.getBigIntFromInt64(long3);
      expect(num3).toEqual(BigInt('0'));
    });
  });
});

describe('TimestampUtil', () => {
  it('Date <-> Timestamp', () => {
    const now = new Date();
    const timestamp = ProtobufUtil.dateToTimestamp(now);

    expect(ProtobufUtil.timestampToDate(timestamp)).toEqual(now);
  });

  it('ISO8061 String <-> Timestamp', () => {
    // 2023-12-05T09:17:16.878Z
    const timestamp = {
      seconds: Long.fromNumber(1701767836),
      nanos: 878000000,
    };

    expect(ProtobufUtil.timestampToDate(timestamp)).toEqual(
      new Date('2023-12-05T09:17:16.878Z'),
    );
  });
});
