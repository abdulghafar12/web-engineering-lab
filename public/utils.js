export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export function makeCounter() {
    let count = 0;
    return () => ++count;
}
export function getRequired(selector, root = document) {
    const element = root.querySelector(selector);
    if (!element) {
        throw new Error(`Required element not found: ${selector}`);
    }
    return element;
}
export function describeSlot(slot) {
    return `${slot.day}, ${slot.start}–${slot.end}, Room ${slot.room}`;
}
