# @plugoinc/common

## 📋 Description

This is a common library used for backend development at Plugo.

## 📦 Packages

- PlugoLogger
- JsonUtil
- ResultUtil
- LongUtil

## 🚀 Getting Started

### 📦 Installation

```bash
npm install @plugoinc/common
```

### 📖 Usage

#### PlugoLogger

```typescript
import { PlugoLogger } from '@plugoinc/common';

class Logger extends PlugoLogger {
  getTransport() {
    return new transports.Console({
      level: 'debug',
      format: format.combine(format.timestamp(), format.json()),
    });
  }
}

const logger = new MyLogger('AppService.name');
```

## 🪪 License

MIT

## 🚢 Release

> [!NOTE]
> Creating an isolated PR for changing the version in package.json

## 🤝 Contributing

Changes are highly welcome. It's mandatory to pass a review through an MR, and it would be good if that MR includes

- Changes
- Reason for the change
- Scope of impact
- Migration guide
