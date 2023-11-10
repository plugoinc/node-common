import { ConsoleTransportInstance } from 'winston/lib/winston/transports';
import { Logger as WinstonLogger, format, createLogger, config } from 'winston';
import { JSONUtil } from 'src/utils/json.util';

type LogLevel = 'log' | 'error' | 'warn' | 'debug' | 'verbose';

interface LoggerService {
  /**
   * Write a 'log' level log.
   */
  log(message: any, ...optionalParams: any[]): any;
  /**
   * Write an 'error' level log.
   */
  error(message: any, ...optionalParams: any[]): any;
  /**
   * Write a 'warn' level log.
   */
  warn(message: any, ...optionalParams: any[]): any;
  /**
   * Write a 'debug' level log.
   */
  debug?(message: any, ...optionalParams: any[]): any;
  /**
   * Write a 'verbose' level log.
   */
  verbose?(message: any, ...optionalParams: any[]): any;
  /**
   * Set log levels.
   *
   * @param levels log levels
   */
  setLogLevels?(levels: LogLevel[]): any;
}

export class PlugoLogger implements LoggerService {
  private readonly logger: WinstonLogger;
  constructor(context?: string) {
    const logger = createLogger({
      levels: config.npm.levels,
      defaultMeta: { context },
      format: format.combine(
        format.timestamp(),
        format.metadata({
          fillExcept: ['message', 'timestamp', 'level', 'context'],
        }),
      ),
    });
    logger.add(this.getTransport());

    this.logger = logger;
  }

  // eslint-disable-next-line jsdoc/require-returns-check
  /**
   * Returns the transport instance for the logger.
   *
   * @returns The transport instance.
   */
  getTransport(): ConsoleTransportInstance {
    throw new Error('Method not implemented.');
  }

  log(message: any);
  log(message: string, ...meta);
  log(message: string | any, ...meta) {
    if (typeof message === 'string') {
      this.logger.info(message, ...meta);
      return;
    }
    this.logger.info(JSONUtil.stringify(message));
  }

  error(message: any);
  error(message: string, ...meta);
  error(message: string | any, ...meta) {
    if (typeof message === 'string') {
      this.logger.error(message, ...meta);
      return;
    }
    this.logger.error(JSONUtil.stringify(message));
  }

  warn(message: any);
  warn(message: string, ...meta);
  warn(message: string | any, ...meta) {
    if (typeof message == 'string') {
      this.logger.warn(message, ...meta);
      return;
    }
    this.logger.warn(JSONUtil.stringify(message));
  }

  debug(message: any);
  debug(message: string, ...meta);
  debug(message: string | any, ...meta) {
    if (typeof message == 'string') {
      this.logger.debug(message, ...meta);
      return;
    }
    this.logger.debug(JSONUtil.stringify(message));
  }

  verbose(message: any);
  verbose(message: string, ...meta);
  verbose(message: string | any, ...meta) {
    if (typeof message == 'string') {
      this.logger.verbose(message, ...meta);
      return;
    }
    this.logger.verbose(JSONUtil.stringify(message));
  }
}
