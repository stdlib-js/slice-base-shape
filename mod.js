// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t=Math.ceil;function r(r){var a,n,e;return n=r.start,null===(e=r.stop)&&(e=-1),(a=r.step)>0&&n>=e||a<0&&n<=e?0:t((e-n)/a)}function a(t){var a,n,e;for(a=t.data,n=[],e=0;e<a.length;e++)n.push(r(a[e]));return n}export{a as default};
//# sourceMappingURL=mod.js.map
