import Long from 'long';
import { LongUtil } from './long.util';

describe('LongUtil', () => {
  describe('fromBigInt', () => {
    it('should convert bigint to Long', () => {
      const num = BigInt('9223372036854775807');
      const long = LongUtil.fromBigInt(num);
      expect(long).toEqual(Long.fromString('9223372036854775807'));

      const num2 = BigInt('-9223372036854775808');
      const long2 = LongUtil.fromBigInt(num2);
      expect(long2).toEqual(Long.fromString('-9223372036854775808'));
    });

    it("should return undefined if bigint is greater than '9223372036854775807'", () => {
      const num = BigInt('9223372036854775808');
      const long = LongUtil.fromBigInt(num);
      expect(long).toBeUndefined();
    });

    it("should return undefined if bigint is less than '-9223372036854775808'", () => {
      const num = BigInt('-9223372036854775809');
      const long = LongUtil.fromBigInt(num);
      expect(long).toBeUndefined();
    });
  });

  describe('toBigInt', () => {
    it('should convert Long to bigint', () => {
      const long = Long.fromString('9223372036854775807');
      const num = LongUtil.toBigInt(long);
      expect(num).toEqual(BigInt('9223372036854775807'));

      const long2 = Long.fromString('-9223372036854775808');
      const num2 = LongUtil.toBigInt(long2);
      expect(num2).toEqual(BigInt('-9223372036854775808'));

      const long3 = Long.fromString('0');
      const num3 = LongUtil.toBigInt(long3);
      expect(num3).toEqual(BigInt('0'));
    });
  });
});
