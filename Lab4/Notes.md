# Task 10: JavaScript Event Loop

## Code snippet

```javascript
console.log("1. Start");

setTimeout(() => {
  console.log("2. Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("3. Promise");
});

console.log("4. End");
```

## Prediction (before running)

My predicted output is:

```text
1. Start
4. End
3. Promise
2. Timeout
```

## Actual output (after running in Chrome DevTools Console)

```text
1. Start
4. End
3. Promise
2. Timeout
```

## Explanation

1. **`1. Start`** runs first because it is synchronous code.
2. **`setTimeout(..., 0)`** schedules its callback as a timer task. A delay of zero does not mean the callback runs immediately.
3. **`Promise.resolve().then(...)`** schedules its callback as a microtask.
4. **`4. End`** runs next because it is synchronous code and the current call stack must finish first.
5. After the synchronous code finishes, JavaScript processes pending microtasks. Therefore, **`3. Promise`** appears next.
6. The timer callback runs afterward, so **`2. Timeout`** appears last.

## Key concepts

- **Synchronous code:** Runs immediately, in order, on the current call stack.
- **Microtask:** A queued job used by Promise callbacks; microtasks are processed after the current synchronous code finishes and before the next timer task.
- **Timer task (macrotask):** The callback scheduled by `setTimeout`; it runs when the call stack is clear and the microtask queue has been processed.
- **Event loop:** Coordinates the call stack and queued work so asynchronous callbacks can run at the appropriate time.

## Conclusion

Even though the `setTimeout` delay is `0`, its callback does not run before the Promise callback. Synchronous statements run first, then Promise microtasks, then the timer callback.

## How I tested it

1. Opened the page in Google Chrome.
2. Opened DevTools with **F12**.
3. Selected the **Console** tab.
4. Pasted and ran the code snippet.
5. Compared the Console output with my prediction.
