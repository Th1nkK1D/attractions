import{_ as n,a as t,b as o,c,i as r,s as a,d as e,S as f,o as s,p as i,y as u,q as l,g as $,r as m,A as p,h as v,j as h,a0 as d,k as g,t as y,l as x,v as b,w as j,x as R,C as B,D as w,aa as C,L as k,m as D,z as E,B as L,E as q}from"./client.6b3c663a.js";import{B as z}from"./button.7030724e.js";import{C as A}from"./card.5bb059b6.js";import{L as I}from"./label.f798f410.js";import{c as N}from"./classes.7d86155b.js";function O(n){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var r,a=t(n);if(c){var e=t(this).constructor;r=Reflect.construct(a,arguments,e)}else r=a.apply(this,arguments);return o(this,r)}}function P(n,t,o){var c=n.slice();return c[2]=t[o],c}function S(n){var t,o,c,r,a;o=new I({props:{$$slots:{default:[V]},$$scope:{ctx:n}}});for(var e=n[1],f=[],k=0;k<e.length;k+=1)f[k]=G(P(n,e,k));var D=function(n){return j(f[n],1,1,(function(){f[n]=null}))};return{c:function(){t=s("div"),i(o.$$.fragment),c=u();for(var n=0;n<f.length;n+=1)f[n].c();this.h()},l:function(n){t=l(n,"DIV",{class:!0});var r=$(t);m(o.$$.fragment,r),c=p(r);for(var a=0;a<f.length;a+=1)f[a].l(r);r.forEach(v),this.h()},h:function(){h(t,"class",r=d(N("related-components",n[0]))+" svelte-j9fifh")},m:function(n,r){g(n,t,r),y(o,t,null),x(t,c);for(var e=0;e<f.length;e+=1)f[e].m(t,null);a=!0},p:function(n,c){var s={};if(32&c&&(s.$$scope={dirty:c,ctx:n}),o.$set(s),2&c){var i;for(e=n[1],i=0;i<e.length;i+=1){var u=P(n,e,i);f[i]?(f[i].p(u,c),b(f[i],1)):(f[i]=G(u),f[i].c(),b(f[i],1),f[i].m(t,null))}for(B(),i=e.length;i<f.length;i+=1)D(i);w()}(!a||1&c&&r!==(r=d(N("related-components",n[0]))+" svelte-j9fifh"))&&h(t,"class",r)},i:function(n){if(!a){b(o.$$.fragment,n);for(var t=0;t<e.length;t+=1)b(f[t]);a=!0}},o:function(n){j(o.$$.fragment,n),f=f.filter(Boolean);for(var t=0;t<f.length;t+=1)j(f[t]);a=!1},d:function(n){n&&v(t),R(o),C(f,n)}}}function V(n){var t;return{c:function(){t=E("Related Components")},l:function(n){t=L(n,"Related Components")},m:function(n,o){g(n,t,o)},d:function(n){n&&v(t)}}}function _(n){var t,o=n[2].name+"";return{c:function(){t=E(o)},l:function(n){t=L(n,o)},m:function(n,o){g(n,t,o)},p:function(n,c){2&c&&o!==(o=n[2].name+"")&&q(t,o)},d:function(n){n&&v(t)}}}function F(n){var t,o,c;return t=new z({props:{href:n[2].link,$$slots:{default:[_]},$$scope:{ctx:n}}}),{c:function(){i(t.$$.fragment),o=u()},l:function(n){m(t.$$.fragment,n),o=p(n)},m:function(n,r){y(t,n,r),g(n,o,r),c=!0},p:function(n,o){var c={};2&o&&(c.href=n[2].link),34&o&&(c.$$scope={dirty:o,ctx:n}),t.$set(c)},i:function(n){c||(b(t.$$.fragment,n),c=!0)},o:function(n){j(t.$$.fragment,n),c=!1},d:function(n){R(t,n),n&&v(o)}}}function G(n){var t,o;return t=new A({props:{$$slots:{default:[F]},$$scope:{ctx:n}}}),{c:function(){i(t.$$.fragment)},l:function(n){m(t.$$.fragment,n)},m:function(n,c){y(t,n,c),o=!0},p:function(n,o){var c={};34&o&&(c.$$scope={dirty:o,ctx:n}),t.$set(c)},i:function(n){o||(b(t.$$.fragment,n),o=!0)},o:function(n){j(t.$$.fragment,n),o=!1},d:function(n){R(t,n)}}}function H(n){var t,o,c=0!==n[1].length&&S(n);return{c:function(){c&&c.c(),t=k()},l:function(n){c&&c.l(n),t=k()},m:function(n,r){c&&c.m(n,r),g(n,t,r),o=!0},p:function(n,o){var r=D(o,1)[0];0!==n[1].length?c?(c.p(n,r),2&r&&b(c,1)):((c=S(n)).c(),b(c,1),c.m(t.parentNode,t)):c&&(B(),j(c,1,1,(function(){c=null})),w())},i:function(n){o||(b(c),o=!0)},o:function(n){j(c),o=!1},d:function(n){c&&c.d(n),n&&v(t)}}}function J(n,t,o){var c=t.class,r=void 0===c?null:c,a=t.components;return n.$$set=function(n){"class"in n&&o(0,r=n.class),"components"in n&&o(1,a=n.components)},[r,a]}var K=function(t){n(s,f);var o=O(s);function s(n){var t;return c(this,s),t=o.call(this),r(e(t),n,J,H,a,{class:0,components:1}),t}return s}();export{K as R};
