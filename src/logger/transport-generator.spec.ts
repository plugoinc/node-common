import { transports } from 'winston';
import { TransportGenerator } from './transport-generator';

describe('TransportGenerator', () => {
  describe('cli', () => {
    it('returns a ConsoleTransportInstance with the specified log level for command line', () => {
      const level = 'debug';
      const transport = TransportGenerator.cli(level);
      expect(transport).toBeInstanceOf(transports.Console);
      expect(transport.level).toBe(level);
    });
  });

  describe('dd', () => {
    it('returns a ConsoleTransportInstance with the given log level for datadog', () => {
      const level = 'debug';
      const transport = TransportGenerator.dd(level);
      expect(transport).toBeInstanceOf(transports.Console);
      expect(transport.level).toBe(level);
    });
    it('returns a ConsoleTransportInstance with the given info for datadog', () => {
      const level = 'info';
      const transport = TransportGenerator.dd(level);
      expect(transport).toBeInstanceOf(transports.Console);
      expect(transport.level).toBe(level);
    });
  });
});
