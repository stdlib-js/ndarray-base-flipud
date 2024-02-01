"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=v(function(o,t){
var u=require('@stdlib/slice-multi/dist'),a=require('@stdlib/ndarray-base-reverse-dimension/dist'),n=require('@stdlib/ndarray-base-slice/dist'),c=require('@stdlib/ndarray-base-ndims/dist');function q(e,r){var i=c(e);return i===0?n(e,new u,!0,r):i===1?n(e,new u(null),!0,r):a(e,-2,r)}t.exports=q
});var f=s();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
