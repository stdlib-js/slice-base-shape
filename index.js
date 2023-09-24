// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e=Math.ceil;function t(t){var n,o,f;return o=t.start,null===(f=t.stop)&&(f=-1),(n=t.step)>0&&o>=f||n<0&&o<=f?0:e((f-o)/n)}return function(e){var n,o,f;for(n=e.data,o=[],f=0;f<n.length;f++)o.push(t(n[f]));return o}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).sliceShape=t();
//# sourceMappingURL=index.js.map
