# Custom Events

Eine Utility-Bibliothek für DOM-Events und Element-Manipulation mit TypeScript-Unterstützung.

## Installation

```bash
npm install @media-store-net/custom-events
```

## Verwendung

```typescript
import { subscribe, publish, waitForElement } from 'custom-events';

// Event-Handling
subscribe('custom-event', (e) => {
    console.log(e.detail);
});

publish('custom-event', { message: 'Hallo Welt!' });

// DOM-Manipulation
await waitForElement('#my-element').then(element => {
    // Element wurde gefunden
});
```

## API

- `subscribe(eventName: string, listener: EventListener, element?: Element | Document)`
- `unsubscribe(eventName: string, listener: EventListener, element?: Element | Document)`
- `publish(eventName: string, data?: any)`
- `waitForElement(selector: string): Promise<Element | null>`
- `waitForElements(selector: string): Promise<NodeListOf<Element>>`
