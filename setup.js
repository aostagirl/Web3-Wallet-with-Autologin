require('@babel/register');
require('ts-node').register({ transpileOnly: false });

require('./helpers/setup-helper');

// testing


window.SVGPathElement = window.SVGPathElement || { prototype: {} };
globalThis.indexedDB = {};
