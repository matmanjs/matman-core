const path = require('path');
const matmanCore = require('../lib');

matmanCore.serialize(path.join(__dirname, './before'), path.join(__dirname, './after'), { debug: false });

console.log(require('./after'));