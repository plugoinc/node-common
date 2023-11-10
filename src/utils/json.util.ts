export class JsonUtil {
  /**
   * parse object to string with BigInt value safely
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt#use_within_json}
   *
   * @param {Record<string, any>} data - The data to be stringified.
   * @returns {string} The stringified data.
   */
  public static stringify(data: Record<string, any>): string {
    return JSON.stringify(data, (k, v) => {
      if (typeof v === 'bigint') {
        return v.toString();
      }
      return v;
    });
  }
}
