console.log("Hello from Bun + Node.js!");
console.log(`Runtime: ${typeof Bun !== "undefined" ? `Bun ${Bun.version}` : `Node ${process.version}`}`);
const unusedVariable = 'this will fail lint';
let hello = 'world';