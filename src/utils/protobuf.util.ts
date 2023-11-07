import { camelCase } from 'lodash';

export function toCamelCase<T>(data: Record<string, any>): T {
  return Object.entries(data).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [camelCase(key)]: value,
    };
  }, {} as T);
}
