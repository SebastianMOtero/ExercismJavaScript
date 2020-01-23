#!/usr/bin/env node

import { resolveSoa } from "dns";

// The above line is a shebang. On Unix-like operating systems, or environments, this will allow the script to be
// run by node, and thus turn this JavaScript file into an executable. If you don't have a Unix-like operating
// system or environment, for example Windows without WSL, you can use 
//
// node grep.js args
//
// Instead of "./grep.js args".
// 
// Read more about shebangs here: https://en.wikipedia.org/wiki/Shebang_(Unix)
// 
// This is only a SKELETON file for the 'Grep' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const fs = require('fs');

class spawn_grep {
    constructor({pattern, flags, files}) {
        console.log(pattern)
        this.pattern = pattern;
        this.flags = flags;
        this.files = files;
    }

    resolves() {
        let text = fs.readFileSync(`./data/iliad.txt`).toString().split("/n");
        // text = text.split('\n');
        console.log(text);
    }
}