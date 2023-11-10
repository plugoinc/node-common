import { format, transports } from 'winston';
import { PlugoLogger } from './logger';

describe('PlugoLogger class', () => {
  it('should throw when getTransport is not implemented', () => {
    class CustomLogger extends PlugoLogger {}

    const createErrorInstance = () => {
      new CustomLogger();
    };

    expect(createErrorInstance).toThrow(Error('Method not implemented.'));
  });

  it('can be inherited', () => {
    class CustomLogger extends PlugoLogger {
      getTransport() {
        return new transports.Console({
          level: 'debug',
          format: format.combine(format.timestamp(), format.json()),
        });
      }
    }
    const instance = new CustomLogger();
    expect(instance).toBeInstanceOf(CustomLogger);
    expect(instance).toBeInstanceOf(PlugoLogger);
  });
});
