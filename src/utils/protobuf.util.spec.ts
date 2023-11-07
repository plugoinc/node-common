import { toCamelCase } from './protobuf.util';

describe('protobuf.util', () => {
  it('should be covered to camelCase', () => {
    const any_case = {
      snake_case: 'snake_case value',
      snake_case_2: 'snake_case_2 value',
      camelCase: 'camelCase value',
      'other-case': 'other-case value',
    };
    const camelCase = {
      snakeCase: 'snake_case value',
      snakeCase2: 'snake_case_2 value',
      camelCase: 'camelCase value',
      otherCase: 'other-case value',
    };

    expect(toCamelCase(any_case)).toEqual(camelCase);
  });
});
