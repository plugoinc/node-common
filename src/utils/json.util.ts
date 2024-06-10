export class JSONUtil {
  /**
   * parse object to string with BigInt value safely
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt#use_within_json}
   *
   * @param value - The data to be stringified.
   * @returns The stringified data.
   */
  public static stringify(value): string {
    return JSON.stringify(value, (k, v) => {
      if (typeof v === 'bigint') {
        return v.toString();
      }
      return v;
    });
  }

  /**
   * Convert JSON object to string-able object.
   *
   * @param data object
   * @returns string-able object
   */
  public static toStringable(
    data: Record<string, any>,
  ): Record<string, unknown> {
    const _data = Object.assign({}, data);
    Object.keys(_data).forEach((k) => {
      if (typeof _data[k] === 'bigint') {
        _data[k] = _data[k].toString();
      }
    });
    return _data;
  }

  public static parse() {
    return JSON.parse;
  }
}
