import test from "node:test";
import assert from "node:assert";
import { greet } from "../public/script.js";

test("greet returns correct greeting", () => {
  assert.strictEqual(greet("World"), "Hello, World!");
});
