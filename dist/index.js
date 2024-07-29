"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=v(function(o,t){"use strict";var u=require("@stdlib/slice-multi"),a=require("@stdlib/ndarray-base-reverse-dimension"),n=require("@stdlib/ndarray-base-slice"),c=require("@stdlib/ndarray-base-ndims");function q(e,r){var i=c(e);return i===0?n(e,new u,!0,r):i===1?n(e,new u(null),!0,r):a(e,-2,r)}t.exports=q});var f=s();module.exports=f;
/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
