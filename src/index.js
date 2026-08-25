console.log("Hello from Bun + Node.js!");
console.log(`Runtime: ${typeof Bun !== "undefined" ? `Bun ${Bun.version}` : `Node ${process.version}`}`);
let hello = 'world';
let unusedVariable = 'this will fail lint';