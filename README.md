# @plugoinc/common

This is a common library used for backend development at Plugo.

## ✨ Features

This library has following features.

- Logger
- Result
- some utils

## 🚀 Getting Started

### ⚙️ Prerequisites

Use with Node.js v18 or higher

### 📦 Installation

```bash
npm install @plugoinc/common
```

### 📖 Usage

#### Logger

```typescript
import { PlugoLogger } from '@plugoinc/common';

class MyLogger extends PlugoLogger {
  getTransport() {
    // You must override this method
    return TransportGenerator.dd('debug');
  }
}

const logger = new MyLogger();

// The second argument is converted to JSON and appears in the logs as metadata.
logger.debug('log in `debug` level', { name: 'this some data' });
logger.log('log in `log` level');
logger.warn('log in `warn` level');
logger.error('log in `error` level');
```

### Result

#### Success Class

The Success class represents a successful result. It contains a value property which holds the result of the successful operation.

```typescript
let success = new Success('Operation was successful');
console.log(success.value); // "Operation was successful"
```

#### Failure Class

The Failure class represents a failed result. It contains an error property which holds the error that caused the failure.

```typescript
let failure = new Failure(new Error('Operation failed'));
console.log(failure.error.message); // "Operation failed"
```

#### unwrap

The unwrap function takes a Result and returns the value if the result is a Success, or throws the error if the result is a Failure.

```typescript
let result = new Success('Operation was successful');
console.log(unwrap(result)); // "Operation was successful"

result = new Failure(new Error('Operation failed'));
console.log(unwrap(result)); // throws Error: "Operation failed"
```

#### toResultAsync

The toResultAsync function takes a Promise and returns a Promise that resolves to a Result. If the original Promise resolves, toResultAsync returns a Success with the resolved value. If the original Promise rejects, toResultAsync returns a Failure with the rejected error.

```typescript
let promise = Promise.resolve('Operation was successful');
const result = await toResultAsync(promise);
console.log(result.isSuccess()); // true

promise = Promise.reject(new Error('Operation failed'));
const result = await toResultAsync(promise);
console.log(result.isFailure()); // true
```

## 🪪 License

MIT

## 🚢 Release

> [!NOTE]
> Creating an isolated PR for changing the version in package.json

## 👋 Contributors,

Thank you for your interest in contributing to our project! To streamline the contribution process, we encourage you to follow these steps:

Issue Submission:

Before implementing any changes, please check if there is an existing issue related to the task you want to work on.
If not, please create a new issue to discuss and get feedback on your proposed changes. Make sure to provide a clear title and detailed description.
Fork the Repository:

Once the issue is approved, fork the repository to your GitHub account.
Branching:

Create a new branch for your changes. Use a branch name that succinctly describes your feature or fix.
Implement Changes:

Make the necessary changes in your forked branch.
Pull Request:

When you're ready to submit your changes, open a Pull Request (PR).
Reference the related issue in the PR description using the phrase "Closes #IssueNumber" to automatically link the PR to the issue.
Review and Collaboration:

Be responsive to feedback during the review process. Make any requested changes promptly.
By following this process, we can ensure a smooth and collaborative contribution experience. Thank you for your efforts in making our project better!

🚀 Happy Coding!
