import { EventListener, ElementSelector } from './types';

export function subscribe(eventName: string, listener: EventListener, element: Element | Document = document): void {
    element.addEventListener(eventName, listener as EventListenerOrEventListenerObject);
}

export function unsubscribe(eventName: string, listener: EventListener, element: Element | Document = document): void {
    element.removeEventListener(eventName, listener as EventListenerOrEventListenerObject);
}

export function publish(eventName: string, data?: any): void {
    const event = new CustomEvent(eventName, { detail: data });
    document.dispatchEvent(event);
}

export function waitForElement(selector: ElementSelector): Promise<Element | null> {
    return new Promise((resolve) => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(() => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document, {
            childList: true,
            subtree: true,
        });
    });
}

export function waitForElements(selector: ElementSelector): Promise<NodeListOf<Element>> {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (document.querySelectorAll(selector)) {
                return resolve(document.querySelectorAll(selector));
            }

            const observer = new MutationObserver(() => {
                if (document.querySelectorAll(selector)) {
                    resolve(document.querySelectorAll(selector));
                    observer.disconnect();
                }
            });

            observer.observe(document, {
                childList: true,
                subtree: true,
            });
        }, 300);
    });
}
