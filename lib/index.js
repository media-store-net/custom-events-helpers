"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscribe = subscribe;
exports.unsubscribe = unsubscribe;
exports.publish = publish;
exports.waitForElement = waitForElement;
exports.waitForElements = waitForElements;
function subscribe(eventName, listener, element) {
    if (element === void 0) { element = document; }
    element.addEventListener(eventName, listener);
}
function unsubscribe(eventName, listener, element) {
    if (element === void 0) { element = document; }
    element.removeEventListener(eventName, listener);
}
function publish(eventName, data) {
    var event = new CustomEvent(eventName, { detail: data });
    document.dispatchEvent(event);
}
function waitForElement(selector) {
    return new Promise(function (resolve) {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }
        var observer = new MutationObserver(function () {
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
function waitForElements(selector) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            if (document.querySelectorAll(selector)) {
                return resolve(document.querySelectorAll(selector));
            }
            var observer = new MutationObserver(function () {
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
