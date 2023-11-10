import { JSONUtil } from './json.util';

describe('JSONUtil', () => {
  describe('stringify', () => {
    it('should stringify an object with BigInt values', () => {
      const obj = {
        id: BigInt(1),
        name: 'John Doe',
        age: 30,
      };
      const expected = '{"id":"1","name":"John Doe","age":30}';
      const result = JSONUtil.stringify(obj);
      expect(result).toStrictEqual(expected);
    });

    it('should stringify an object with nested BigInt values', () => {
      const obj = {
        id: 1,
        name: 'John Doe',
        age: 30,
        address: {
          street: '123 Main St',
          zip: BigInt(12345),
        },
      };
      const expected =
        '{"id":1,"name":"John Doe","age":30,"address":{"street":"123 Main St","zip":"12345"}}';
      const result = JSONUtil.stringify(obj);
      expect(result).toStrictEqual(expected);
    });

    it('should stringify an array with BigInt values', () => {
      const arr = [BigInt(1), BigInt(2), BigInt(3)];
      const expected = '["1","2","3"]';
      const result = JSONUtil.stringify(arr);
      expect(result).toStrictEqual(expected);
    });

    it('should stringify an object with int values', () => {
      const obj = {
        id: 1,
        name: 'John Doe',
        age: 30,
      };
      const expected = '{"id":1,"name":"John Doe","age":30}';
      const result = JSONUtil.stringify(obj);
      expect(result).toStrictEqual(expected);
    });

    it('should stringify an object with string values', () => {
      const obj = {
        id: '1',
        name: 'John Doe',
        age: '30',
      };
      const expected = '{"id":"1","name":"John Doe","age":"30"}';
      const result = JSONUtil.stringify(obj);
      expect(result).toStrictEqual(expected);
    });

    it('should stringify an object with boolean values', () => {
      const obj = {
        id: true,
        name: 'John Doe',
        age: false,
      };
      const expected = '{"id":true,"name":"John Doe","age":false}';
      const result = JSONUtil.stringify(obj);
      expect(result).toStrictEqual(expected);
    });
    it('should stringify an integer value', () => {
      const value = 1;
      const expected = '1';
      const result = JSONUtil.stringify(value);
      expect(result).toStrictEqual(expected);
    });

    it('should stringify a string value', () => {
      const value = 'hello';
      const expected = '"hello"';
      const result = JSONUtil.stringify(value);
      expect(result).toStrictEqual(expected);
    });

    it('should stringify a boolean value', () => {
      const value = true;
      const expected = 'true';
      const result = JSONUtil.stringify(value);
      expect(result).toStrictEqual(expected);
    });
  });
});
