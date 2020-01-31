#!/usr/bin/env node

const args = process.argv.slice(2);
const dir = args[0];
const name = args[1].split('--name=')[1];

console.log('hello world');
console.log({ dir, name });
