import { format, transports } from 'winston';
import { ConsoleTransportInstance } from 'winston/lib/winston/transports';
type WinstonLogLevel =
  | 'error'
  | 'warn'
  | 'info'
  | 'http'
  | 'verbose'
  | 'debug'
  | 'silly';
export class TransportGenerator {
  /**
   * Returns a new instance of ConsoleTransportInstance with the specified log level for command line.
   *
   * @param level - The log level to use.
   * @returns A new instance of ConsoleTransportInstance.
   */
  public static cli(level: WinstonLogLevel): ConsoleTransportInstance {
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
  public static dd(level: WinstonLogLevel): ConsoleTransportInstance {
    return new transports.Console({
      level: level,
      format: format.combine(format.timestamp(), format.json()),
    });
  }
}
