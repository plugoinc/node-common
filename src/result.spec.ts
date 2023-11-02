import { Failure, Success, toResultAsync, unwrap } from './result';

describe('result', () => {
  describe('Success', () => {
    describe('isSuccess', () => {
      it('should returns true', () => {
        const success = new Success('');
        expect(success.isSuccess()).toStrictEqual(true);
      });
    });
    describe('isFailure', () => {
      it('should returns false', () => {
        const success = new Success('');
        expect(success.isFailure()).toStrictEqual(false);
      });
    });
  });
  describe('Failure', () => {
    describe('isFailure', () => {
      it('should returns true', () => {
        const failure = new Failure(new Error(''));
        expect(failure.isFailure()).toStrictEqual(true);
      });
    });
    describe('isSuccess', () => {
      it('should returns false', () => {
        const failure = new Failure(new Error(''));
        expect(failure.isSuccess()).toStrictEqual(false);
      });
    });
  });

  describe('unwrap', () => {
    it('should throw error if result is failure', () => {
      expect(() => unwrap(new Failure(new Error('')))).toThrow();
    });
    it('should return value if result is success', () => {
      expect(unwrap(new Success('foo'))).toBe('foo');
    });
  });

  describe('toResultAsync', () => {
    it('should return success if promise resolves', async () => {
      const promise = Promise.resolve('foo');
      const result = await toResultAsync(promise);
      expect(result.isSuccess()).toBe(true);
    });
    it('should return failure if promise rejects', async () => {
      const promise = Promise.reject(new Error(''));
      const result = await toResultAsync(promise);
      expect(result.isFailure()).toBe(true);
    });
  });
});
