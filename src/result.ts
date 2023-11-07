export type Result<T, E extends Error> = Success<T> | Failure<E>;

/**
 * Represents a successful result.
 */
export class Success<T> {
  readonly value: T;

  constructor(value: T) {
    this.value = value;
  }

  isSuccess(): this is Success<T> {
    return true;
  }

  isFailure(): this is Failure<Error> {
    return false;
  }
}

/**
 * Represents a failed result.
 */
export class Failure<E extends Error> {
  readonly error: E;

  constructor(error: E) {
    this.error = error;
  }

  isSuccess(): this is Success<unknown> {
    return false;
  }

  isFailure(): this is Failure<E> {
    return true;
  }
}

/**
 * Unwrap a result.
 * if the result is a failure, throw the error.
 * if the result is a success, return the value.
 *
 * @param result x
 * @returns the value of the result
 */
export const unwrap = <T, E extends Error>(result: Result<T, E>): T => {
  if (result.isFailure()) {
    throw result.error;
  }
  return result.value;
};

/**
 * Wrapper for async functions.
 * If the promise resolves, return a success. If it rejects, return a failure.
 *
 * @param asyncFunc async function
 * @returns a promise of a result
 */
export const toResultAsync = async <T, E extends Error>(
  asyncFunc: Promise<T>,
): Promise<Result<T, E>> => {
  return await asyncFunc
    .then((res) => new Success(res))
    .catch((err) => new Failure(err));
};
