import{S as s,i as e,s as a,j as t,l as o,m as n,t as r,p as l,q as c,D as i,h as p,u,k as h,b as v,w as f,d as $,e as m,f as d,g,n as x,z as b,X as w}from"./client.aa910643.js";import{P as y,a as j}from"./popover.84ae7a9e.js";function D(s){let e,a;return{c(){e=p("div"),a=u("hover me"),this.h()},l(s){e=h(s,"DIV",{class:!0});var t=v(e);a=f(t,"hover me"),t.forEach($),this.h()},h(){m(e,"class","preview svelte-1y2m3b2")},m(t,o){d(t,e,o),g(e,a),s[2](e)},p:x,d(a){a&&$(e),s[2](null)}}}function E(s){let e,a,t=s[0].replace(/\), /g,"),\n")+"";return{c(){e=p("div"),a=u(t),this.h()},l(s){e=h(s,"DIV",{slot:!0,class:!0});var o=v(e);a=f(o,t),o.forEach($),this.h()},h(){m(e,"slot","popover-content"),m(e,"class","value-popover svelte-1y2m3b2")},m(s,t){d(s,e,t),g(e,a)},p(s,e){1&e&&t!==(t=s[0].replace(/\), /g,"),\n")+"")&&b(a,t)},d(s){s&&$(e)}}}function S(s){let e,a;return e=new y({props:{position:j.LEFT,$$slots:{"popover-content":[E],default:[D]},$$scope:{ctx:s}}}),{c(){t(e.$$.fragment)},l(s){o(e.$$.fragment,s)},m(s,t){n(e,s,t),a=!0},p(s,[a]){const t={};11&a&&(t.$$scope={dirty:a,ctx:s}),e.$set(t)},i(s){a||(r(e.$$.fragment,s),a=!0)},o(s){l(e.$$.fragment,s),a=!1},d(s){c(e,s)}}}function I(s,e,a){let t,{value:o}=e;return i((function(){a(1,t.style.boxShadow=o.slice(0,-1),t)})),s.$$set=s=>{"value"in s&&a(0,o=s.value)},[o,t,function(s){w[s?"unshift":"push"]((()=>{t=s,a(1,t)}))}]}class V extends s{constructor(s){super(),e(this,s,I,S,a,{value:0})}}export{V as S};
