import{K as x,L as B,M,e as N,d as s,N as y,O as L,P as U,Q as C,R as T,S as G,T as V,V as Z,W as $,v as w,X as z,Y as K,Z as Q,_ as W}from"./BR-9bjsj.js";let o=!1;function X(r){var a=o;try{return o=!1,[r(),o]}finally{o=a}}function h(r){var a;return((a=r.ctx)==null?void 0:a.d)??!1}function F(r,a,f,v){var A;var g=(f&W)!==0,d=!Z||(f&$)!==0,c=(f&z)!==0,D=(f&Q)!==0,m=!1,t;c?[t,m]=X(()=>r[a]):t=r[a];var Y=G in r||V in r,l=c&&(((A=x(r,a))==null?void 0:A.set)??(Y&&a in r&&(e=>r[a]=e)))||void 0,i=v,P=!0,S=!1,E=()=>(S=!0,P&&(P=!1,D?i=T(v):i=v),i);t===void 0&&v!==void 0&&(l&&d&&B(),t=E(),l&&l(t));var u;if(d)u=()=>{var e=r[a];return e===void 0?E():(P=!0,S=!1,e)};else{var O=(g?L:N)(()=>r[a]);O.f|=M,u=()=>{var e=s(O);return e!==void 0&&(i=void 0),e===void 0?i:e}}if((f&K)===0)return u;if(l){var q=r.$$legacy;return function(e,_){return arguments.length>0?((!d||!_||q||m)&&l(_?u():e),e):u()}}var I=!1,R=w(t),n=L(()=>{var e=u(),_=s(R);return I?(I=!1,_):R.v=e});return c&&s(n),g||(n.equals=y),function(e,_){if(arguments.length>0){const b=_?s(n):d&&c?U(e):e;if(!n.equals(b)){if(I=!0,C(R,b),S&&i!==void 0&&(i=b),h(n))return e;T(()=>s(n))}return e}return h(n)?n.v:s(n)}}export{F as p};
