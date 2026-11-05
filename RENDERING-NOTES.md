
# Rendering Strategies Notes

## Task 3: Testing Rendering Strategies

| Strategy | Does View Source contain the actual time? | Does time change on refresh? | Works with JavaScript disabled? |
|---|---|---|---|
| CSR | No, only Loading is present | Yes | No |
| SSR | Yes | Yes | Yes |
| SSG | Yes | No | Yes |
| ISR | Yes | After 5 seconds | Yes |

## Observations

### 1. CSR (Client-Side Rendering)
The server sends an HTML shell with a Loading message. JavaScript generates the actual time in the browser. Without JavaScript, the actual time does not appear.

### 2. SSR (Server-Side Rendering)
The server generates HTML for every request. The actual time is present in View Source and changes on refresh. The page works without JavaScript.

### 3. SSG (Static Site Generation)
HTML is generated once during the build process. The time remains the same on refresh until the page is rebuilt. The page works without JavaScript.

### 4. ISR (Incremental Static Regeneration)
The server generates a static page and reuses it for 5 seconds. After the cache expires, it generates a new page. The page works without JavaScript.


## Task 4: Streaming Test

### Network Panel Observations

- TTFB: (Write your observed value)
- Total Time: (Write your observed value)

### When does streaming help?

Streaming helps when a webpage has some content ready immediately but other content takes longer to load. The server can send the available content first instead of making the user wait for the entire page.

 

 