require('@babel/register');
require('ts-node').register({ transpileOnly: true });

require('./helpers/setup-helper');

// testing


window.SVGPathElement = window.SVGPathElement || { prototype: {} };
globalThis.indexedDB = {};
