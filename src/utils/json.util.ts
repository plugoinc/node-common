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
}
