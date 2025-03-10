import { EventListener, ElementSelector } from './types';
export declare function subscribe(eventName: string, listener: EventListener, element?: Element | Document): void;
export declare function unsubscribe(eventName: string, listener: EventListener, element?: Element | Document): void;
export declare function publish(eventName: string, data?: any): void;
export declare function waitForElement(selector: ElementSelector): Promise<Element | null>;
export declare function waitForElements(selector: ElementSelector): Promise<NodeListOf<Element>>;
