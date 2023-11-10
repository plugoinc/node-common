import { format, transports } from 'winston';
import { ConsoleTransportInstance } from 'winston/lib/winston/transports';

export class TransportGenerator {
  /**
   * Returns a new instance of ConsoleTransportInstance with the specified log level for command line.
   *
   * @param level - The log level to use.
   * @returns A new instance of ConsoleTransportInstance.
   */
  public static cli(level: string): ConsoleTransportInstance {
    return new transports.Console({
      level: level,
      format: format.combine(
        format.timestamp(),
        format.colorize(),
        format.simple(),
      ),
    });
  }

  /**
   * Returns a new instance of ConsoleTransportInstance with the given log level for datadog.
   *
   * @param level - The log level to use.
   * @returns A new instance of ConsoleTransportInstance.
   */
  public static dd(level: string): ConsoleTransportInstance {
    return new transports.Console({
      level: level,
      format: format.combine(format.timestamp(), format.json()),
    });
  }
}
