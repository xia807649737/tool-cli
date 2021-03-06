#!/usr/bin/env node

// node支持ES Module
// 模块化
// CMD / AMD / require.js

// CommonJS
// 加载: require()
// 输出: module.exports / export.*

// ES Module
// 加载: import
// 输出: export default / export function / const

//支持ES Module的方式一: webpack编译 / babel-loader
// require('../dist/core');

require("./process");