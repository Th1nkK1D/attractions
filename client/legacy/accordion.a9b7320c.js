import{S as t,i as n,s as e,O as s,p as a,r as o,t as $,Y as c,a3 as r,v as p,w as l,x as f,P as m,y as i,A as u,k as g,h as d,z as x,B as h,o as k,q as y,g as w,j as v,l as E,n as D,L as b,C as A,D as O,aa as C,Z as j}from"./client.6b3c663a.js";import{L as T,H as P,P as S}from"./layout.de1d7599.js";import{B as N}from"./button.7030724e.js";import{A as B,a as H}from"./accordion-section.a6985714.js";import{C as R}from"./ChevronDownIcon.b85e76a6.js";import{S as F}from"./showcase.cd5fabe0.js";import{R as G}from"./related-components.8b6a570a.js";import{H as I}from"./h2.8d9c4410.js";import{H as Y}from"./h3.9be76c06.js";import{T as z,a as L,b as V,c as M}from"./table.8f97e097.js";import"./classes.7d86155b.js";import"./label.f798f410.js";import"./copyable-code.e834032a.js";import"./asyncToGenerator.3904ce9a.js";import"./card.5bb059b6.js";function q(t,n,e){const s=t.slice();return s[2]=n[e],s}function K(t){let n;return{c(){n=x("Accordion")},l(t){n=h(t,"Accordion")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function Z(t){let n;return{c(){n=x("A controller for multiple collapsible elements, allowing either one open panel at a time or infinite.")},l(t){n=h(t,"A controller for multiple collapsible elements, allowing either one open panel at a time or infinite.")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function J(t){let n,e,s;return{c(){n=x("Content of panel "),e=x(t[2]),s=i()},l(a){n=h(a,"Content of panel "),e=h(a,t[2]),s=u(a)},m(t,a){g(t,n,a),g(t,e,a),g(t,s,a)},p:D,d(t){t&&d(n),t&&d(e),t&&d(s)}}}function Q(t){let n,e,s,c,r;return c=new R({props:{size:"20",class:"ml accordion-chevron"}}),{c(){n=x("open panel "),e=x(t[2]),s=i(),a(c.$$.fragment)},l(a){n=h(a,"open panel "),e=h(a,t[2]),s=u(a),o(c.$$.fragment,a)},m(t,a){g(t,n,a),g(t,e,a),g(t,s,a),$(c,t,a),r=!0},p:D,i(t){r||(p(c.$$.fragment,t),r=!0)},o(t){l(c.$$.fragment,t),r=!1},d(t){t&&d(n),t&&d(e),t&&d(s),f(c,t)}}}function U(t){let n,e,s,c;return e=new N({props:{$$slots:{default:[Q]},$$scope:{ctx:t}}}),e.$on("click",(function(){j(t[5])&&t[5].apply(this,arguments)})),{c(){n=k("div"),a(e.$$.fragment),s=i(),this.h()},l(t){n=y(t,"DIV",{slot:!0});var a=w(n);o(e.$$.fragment,a),s=u(a),a.forEach(d),this.h()},h(){v(n,"slot","handle")},m(t,a){g(t,n,a),$(e,n,null),E(n,s),c=!0},p(n,s){t=n;const a={};64&s&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){c||(p(e.$$.fragment,t),c=!0)},o(t){l(e.$$.fragment,t),c=!1},d(t){t&&d(n),f(e)}}}function W(t){let n,e;return n=new H({props:{$$slots:{handle:[U,({toggle:t})=>({5:t}),({toggle:t})=>t?32:0],default:[J,({toggle:t})=>({5:t}),({toggle:t})=>t?32:0]},$$scope:{ctx:t}}}),n.$on("panel-open",(function(){j(t[1])&&t[1].apply(this,arguments)})),{c(){a(n.$$.fragment)},l(t){o(n.$$.fragment,t)},m(t,s){$(n,t,s),e=!0},p(e,s){t=e;const a={};96&s&&(a.$$scope={dirty:s,ctx:t}),n.$set(a)},i(t){e||(p(n.$$.fragment,t),e=!0)},o(t){l(n.$$.fragment,t),e=!1},d(t){f(n,t)}}}function X(t){let n,e,s=[0,1,2,3,4],a=[];for(let n=0;n<5;n+=1)a[n]=W(q(t,s,n));const o=t=>l(a[t],1,1,(()=>{a[t]=null}));return{c(){for(let t=0;t<5;t+=1)a[t].c();n=b()},l(t){for(let n=0;n<5;n+=1)a[n].l(t);n=b()},m(t,s){for(let n=0;n<5;n+=1)a[n].m(t,s);g(t,n,s),e=!0},p(t,e){if(34&e){let $;for(s=[0,1,2,3,4],$=0;$<5;$+=1){const o=q(t,s,$);a[$]?(a[$].p(o,e),p(a[$],1)):(a[$]=W(o),a[$].c(),p(a[$],1),a[$].m(n.parentNode,n))}for(A(),$=5;$<5;$+=1)o($);O()}},i(t){if(!e){for(let t=0;t<5;t+=1)p(a[t]);e=!0}},o(t){a=a.filter(Boolean);for(let t=0;t<5;t+=1)l(a[t]);e=!1},d(t){C(a,t),t&&d(n)}}}function _(t){let n,e,s;return e=new B({props:{$$slots:{default:[X,({closeOtherPanels:t})=>({1:t}),({closeOtherPanels:t})=>t?2:0]},$$scope:{ctx:t}}}),{c(){n=k("div"),a(e.$$.fragment),this.h()},l(t){n=y(t,"DIV",{slot:!0,class:!0});var s=w(n);o(e.$$.fragment,s),s.forEach(d),this.h()},h(){v(n,"slot","showcase"),v(n,"class","svelte-bic265")},m(t,a){g(t,n,a),$(e,n,null),s=!0},p(t,n){const s={};66&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){l(e.$$.fragment,t),s=!1},d(t){t&&d(n),f(e)}}}function tt(t){let n,e;return{c(){n=k("div"),e=k("pre"),this.h()},l(t){n=y(t,"DIV",{slot:!0});var s=w(n);e=y(s,"PRE",{class:!0}),w(e).forEach(d),s.forEach(d),this.h()},h(){v(e,"class","language-svelte"),v(n,"slot","source")},m(t,s){g(t,n,s),E(n,e),e.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Accordion</span> <span class="token attr-name"><span class="token namespace">let:</span>closeOtherPanels</span><span class="token punctuation">></span></span>\n  <span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">#each</span> <span class="token language-javascript"><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span> </span><span class="token keyword">as</span> <span class="token language-javascript">idx<span class="token punctuation">&#125;</span></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AccordionSection</span> <span class="token attr-name"><span class="token namespace">on:</span>panel-open=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>closeOtherPanels<span class="token punctuation">&#125;</span></span> <span class="token attr-name"><span class="token namespace">let:</span>toggle</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>handle<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>toggle<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>\n          open panel <span class="token language-javascript"><span class="token punctuation">&#123;</span>idx<span class="token punctuation">&#125;</span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ChevronDownIcon</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>20<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ml accordion-chevron<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      Content of panel <span class="token language-javascript"><span class="token punctuation">&#123;</span>idx<span class="token punctuation">&#125;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AccordionSection</span><span class="token punctuation">></span></span>\n  <span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">/each</span><span class="token punctuation">&#125;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Accordion</span><span class="token punctuation">></span></span></code>'},p:D,d(t){t&&d(n)}}}function nt(t){let n;return{c(){n=x("Properties")},l(t){n=h(t,"Properties")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function et(t){let n;return{c(){n=x("Functional Properties")},l(t){n=h(t,"Functional Properties")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function st(t){let n;return{c(){n=x("Name")},l(t){n=h(t,"Name")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function at(t){let n;return{c(){n=x("Default")},l(t){n=h(t,"Default")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function ot(t){let n;return{c(){n=x("Type")},l(t){n=h(t,"Type")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function $t(t){let n;return{c(){n=x("Description")},l(t){n=h(t,"Description")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function ct(t){let n,e,s,c,r,m,x,h;return n=new V({props:{$$slots:{default:[st]},$$scope:{ctx:t}}}),s=new V({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),r=new V({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),x=new V({props:{$$slots:{default:[$t]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=i(),a(s.$$.fragment),c=i(),a(r.$$.fragment),m=i(),a(x.$$.fragment)},l(t){o(n.$$.fragment,t),e=u(t),o(s.$$.fragment,t),c=u(t),o(r.$$.fragment,t),m=u(t),o(x.$$.fragment,t)},m(t,a){$(n,t,a),g(t,e,a),$(s,t,a),g(t,c,a),$(r,t,a),g(t,m,a),$(x,t,a),h=!0},p(t,e){const a={};64&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const o={};64&e&&(o.$$scope={dirty:e,ctx:t}),s.$set(o);const $={};64&e&&($.$$scope={dirty:e,ctx:t}),r.$set($);const c={};64&e&&(c.$$scope={dirty:e,ctx:t}),x.$set(c)},i(t){h||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(r.$$.fragment,t),p(x.$$.fragment,t),h=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(r.$$.fragment,t),l(x.$$.fragment,t),h=!1},d(t){f(n,t),t&&d(e),f(s,t),t&&d(c),f(r,t),t&&d(m),f(x,t)}}}function rt(t){let n,e,s;return{c(){n=k("strong"),e=k("code"),s=x("multiple")},l(t){n=y(t,"STRONG",{});var a=w(n);e=y(a,"CODE",{});var o=w(e);s=h(o,"multiple"),o.forEach(d),a.forEach(d)},m(t,a){g(t,n,a),E(n,e),E(e,s)},d(t){t&&d(n)}}}function pt(t){let n,e;return{c(){n=k("code"),e=x("false")},l(t){n=y(t,"CODE",{});var s=w(n);e=h(s,"false"),s.forEach(d)},m(t,s){g(t,n,s),E(n,e)},d(t){t&&d(n)}}}function lt(t){let n,e;return{c(){n=k("code"),e=x("boolean")},l(t){n=y(t,"CODE",{});var s=w(n);e=h(s,"boolean"),s.forEach(d)},m(t,s){g(t,n,s),E(n,e)},d(t){t&&d(n)}}}function ft(t){let n,e,s,a;return{c(){n=x("Setting this to "),e=k("code"),s=x("true"),a=x(" allows multiple panels to be open at the same time.")},l(t){n=h(t,"Setting this to "),e=y(t,"CODE",{});var o=w(e);s=h(o,"true"),o.forEach(d),a=h(t," allows multiple panels to be open at the same time.")},m(t,o){g(t,n,o),g(t,e,o),E(e,s),g(t,a,o)},d(t){t&&d(n),t&&d(e),t&&d(a)}}}function mt(t){let n,e,s,c,r,m,x,h;return n=new M({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),s=new M({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),r=new M({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),x=new M({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=i(),a(s.$$.fragment),c=i(),a(r.$$.fragment),m=i(),a(x.$$.fragment)},l(t){o(n.$$.fragment,t),e=u(t),o(s.$$.fragment,t),c=u(t),o(r.$$.fragment,t),m=u(t),o(x.$$.fragment,t)},m(t,a){$(n,t,a),g(t,e,a),$(s,t,a),g(t,c,a),$(r,t,a),g(t,m,a),$(x,t,a),h=!0},p(t,e){const a={};64&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const o={};64&e&&(o.$$scope={dirty:e,ctx:t}),s.$set(o);const $={};64&e&&($.$$scope={dirty:e,ctx:t}),r.$set($);const c={};64&e&&(c.$$scope={dirty:e,ctx:t}),x.$set(c)},i(t){h||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(r.$$.fragment,t),p(x.$$.fragment,t),h=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(r.$$.fragment,t),l(x.$$.fragment,t),h=!1},d(t){f(n,t),t&&d(e),f(s,t),t&&d(c),f(r,t),t&&d(m),f(x,t)}}}function it(t){let n,e,s;return{c(){n=k("strong"),e=k("code"),s=x("...")},l(t){n=y(t,"STRONG",{});var a=w(n);e=y(a,"CODE",{});var o=w(e);s=h(o,"..."),o.forEach(d),a.forEach(d)},m(t,a){g(t,n,a),E(n,e),E(e,s)},d(t){t&&d(n)}}}function ut(t){let n,e;return{c(){n=k("code"),e=x("any")},l(t){n=y(t,"CODE",{});var s=w(n);e=h(s,"any"),s.forEach(d)},m(t,s){g(t,n,s),E(n,e)},d(t){t&&d(n)}}}function gt(t){let n,e,s,a;return{c(){n=x("Everything else will be passed to the underlying "),e=k("code"),s=x("<ul>"),a=x(" element.")},l(t){n=h(t,"Everything else will be passed to the underlying "),e=y(t,"CODE",{});var o=w(e);s=h(o,"<ul>"),o.forEach(d),a=h(t," element.")},m(t,o){g(t,n,o),g(t,e,o),E(e,s),g(t,a,o)},d(t){t&&d(n),t&&d(e),t&&d(a)}}}function dt(t){let n,e,s,c,r,m,x,h;return n=new M({props:{$$slots:{default:[it]},$$scope:{ctx:t}}}),s=new M({}),r=new M({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),x=new M({props:{$$slots:{default:[gt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=i(),a(s.$$.fragment),c=i(),a(r.$$.fragment),m=i(),a(x.$$.fragment)},l(t){o(n.$$.fragment,t),e=u(t),o(s.$$.fragment,t),c=u(t),o(r.$$.fragment,t),m=u(t),o(x.$$.fragment,t)},m(t,a){$(n,t,a),g(t,e,a),$(s,t,a),g(t,c,a),$(r,t,a),g(t,m,a),$(x,t,a),h=!0},p(t,e){const s={};64&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const a={};64&e&&(a.$$scope={dirty:e,ctx:t}),r.$set(a);const o={};64&e&&(o.$$scope={dirty:e,ctx:t}),x.$set(o)},i(t){h||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(r.$$.fragment,t),p(x.$$.fragment,t),h=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(r.$$.fragment,t),l(x.$$.fragment,t),h=!1},d(t){f(n,t),t&&d(e),f(s,t),t&&d(c),f(r,t),t&&d(m),f(x,t)}}}function xt(t){let n,e,s,c,r,m,x,h;return e=new L({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),r=new L({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),x=new L({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),{c(){n=k("thead"),a(e.$$.fragment),s=i(),c=k("tbody"),a(r.$$.fragment),m=i(),a(x.$$.fragment)},l(t){n=y(t,"THEAD",{});var a=w(n);o(e.$$.fragment,a),a.forEach(d),s=u(t),c=y(t,"TBODY",{});var $=w(c);o(r.$$.fragment,$),m=u($),o(x.$$.fragment,$),$.forEach(d)},m(t,a){g(t,n,a),$(e,n,null),g(t,s,a),g(t,c,a),$(r,c,null),E(c,m),$(x,c,null),h=!0},p(t,n){const s={};64&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};64&n&&(a.$$scope={dirty:n,ctx:t}),r.$set(a);const o={};64&n&&(o.$$scope={dirty:n,ctx:t}),x.$set(o)},i(t){h||(p(e.$$.fragment,t),p(r.$$.fragment,t),p(x.$$.fragment,t),h=!0)},o(t){l(e.$$.fragment,t),l(r.$$.fragment,t),l(x.$$.fragment,t),h=!1},d(t){t&&d(n),f(e),t&&d(s),t&&d(c),f(r),f(x)}}}function ht(t){let n;return{c(){n=x("Class Properties")},l(t){n=h(t,"Class Properties")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function kt(t){let n,e,s,a,o,$,c;return{c(){n=x("All "),e=k("code"),s=x("<Accordion>"),a=x(" components use the "),o=k("code"),$=x(".accordion"),c=x(" class.")},l(t){n=h(t,"All "),e=y(t,"CODE",{});var r=w(e);s=h(r,"<Accordion>"),r.forEach(d),a=h(t," components use the "),o=y(t,"CODE",{});var p=w(o);$=h(p,".accordion"),p.forEach(d),c=h(t," class.")},m(t,r){g(t,n,r),g(t,e,r),E(e,s),g(t,a,r),g(t,o,r),E(o,$),g(t,c,r)},d(t){t&&d(n),t&&d(e),t&&d(a),t&&d(o),t&&d(c)}}}function yt(t){let n;return{c(){n=x("Falsy values passed to classes will be disregarded.")},l(t){n=h(t,"Falsy values passed to classes will be disregarded.")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function wt(t){let n;return{c(){n=x("Name")},l(t){n=h(t,"Name")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function vt(t){let n;return{c(){n=x("Default")},l(t){n=h(t,"Default")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function Et(t){let n;return{c(){n=x("Type")},l(t){n=h(t,"Type")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function Dt(t){let n;return{c(){n=x("Description")},l(t){n=h(t,"Description")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function bt(t){let n,e,s,c,r,m,x,h;return n=new V({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),s=new V({props:{$$slots:{default:[vt]},$$scope:{ctx:t}}}),r=new V({props:{$$slots:{default:[Et]},$$scope:{ctx:t}}}),x=new V({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=i(),a(s.$$.fragment),c=i(),a(r.$$.fragment),m=i(),a(x.$$.fragment)},l(t){o(n.$$.fragment,t),e=u(t),o(s.$$.fragment,t),c=u(t),o(r.$$.fragment,t),m=u(t),o(x.$$.fragment,t)},m(t,a){$(n,t,a),g(t,e,a),$(s,t,a),g(t,c,a),$(r,t,a),g(t,m,a),$(x,t,a),h=!0},p(t,e){const a={};64&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const o={};64&e&&(o.$$scope={dirty:e,ctx:t}),s.$set(o);const $={};64&e&&($.$$scope={dirty:e,ctx:t}),r.$set($);const c={};64&e&&(c.$$scope={dirty:e,ctx:t}),x.$set(c)},i(t){h||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(r.$$.fragment,t),p(x.$$.fragment,t),h=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(r.$$.fragment,t),l(x.$$.fragment,t),h=!1},d(t){f(n,t),t&&d(e),f(s,t),t&&d(c),f(r,t),t&&d(m),f(x,t)}}}function At(t){let n,e,s;return{c(){n=k("strong"),e=k("code"),s=x("class")},l(t){n=y(t,"STRONG",{});var a=w(n);e=y(a,"CODE",{});var o=w(e);s=h(o,"class"),o.forEach(d),a.forEach(d)},m(t,a){g(t,n,a),E(n,e),E(e,s)},d(t){t&&d(n)}}}function Ot(t){let n,e;return{c(){n=k("code"),e=x("null")},l(t){n=y(t,"CODE",{});var s=w(n);e=h(s,"null"),s.forEach(d)},m(t,s){g(t,n,s),E(n,e)},d(t){t&&d(n)}}}function Ct(t){let n,e;return{c(){n=k("code"),e=x("string")},l(t){n=y(t,"CODE",{});var s=w(n);e=h(s,"string"),s.forEach(d)},m(t,s){g(t,n,s),E(n,e)},d(t){t&&d(n)}}}function jt(t){let n;return{c(){n=x("A class string to add to the component.")},l(t){n=h(t,"A class string to add to the component.")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function Tt(t){let n,e,s,c,r,m,x,h;return n=new M({props:{$$slots:{default:[At]},$$scope:{ctx:t}}}),s=new M({props:{$$slots:{default:[Ot]},$$scope:{ctx:t}}}),r=new M({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),x=new M({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=i(),a(s.$$.fragment),c=i(),a(r.$$.fragment),m=i(),a(x.$$.fragment)},l(t){o(n.$$.fragment,t),e=u(t),o(s.$$.fragment,t),c=u(t),o(r.$$.fragment,t),m=u(t),o(x.$$.fragment,t)},m(t,a){$(n,t,a),g(t,e,a),$(s,t,a),g(t,c,a),$(r,t,a),g(t,m,a),$(x,t,a),h=!0},p(t,e){const a={};64&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const o={};64&e&&(o.$$scope={dirty:e,ctx:t}),s.$set(o);const $={};64&e&&($.$$scope={dirty:e,ctx:t}),r.$set($);const c={};64&e&&(c.$$scope={dirty:e,ctx:t}),x.$set(c)},i(t){h||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(r.$$.fragment,t),p(x.$$.fragment,t),h=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(r.$$.fragment,t),l(x.$$.fragment,t),h=!1},d(t){f(n,t),t&&d(e),f(s,t),t&&d(c),f(r,t),t&&d(m),f(x,t)}}}function Pt(t){let n,e,s,c,r,m;return e=new L({props:{$$slots:{default:[bt]},$$scope:{ctx:t}}}),r=new L({props:{$$slots:{default:[Tt]},$$scope:{ctx:t}}}),{c(){n=k("thead"),a(e.$$.fragment),s=i(),c=k("tbody"),a(r.$$.fragment)},l(t){n=y(t,"THEAD",{});var a=w(n);o(e.$$.fragment,a),a.forEach(d),s=u(t),c=y(t,"TBODY",{});var $=w(c);o(r.$$.fragment,$),$.forEach(d)},m(t,a){g(t,n,a),$(e,n,null),g(t,s,a),g(t,c,a),$(r,c,null),m=!0},p(t,n){const s={};64&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};64&n&&(a.$$scope={dirty:n,ctx:t}),r.$set(a)},i(t){m||(p(e.$$.fragment,t),p(r.$$.fragment,t),m=!0)},o(t){l(e.$$.fragment,t),l(r.$$.fragment,t),m=!1},d(t){t&&d(n),f(e),t&&d(s),t&&d(c),f(r)}}}function St(t){let n;return{c(){n=x("Slots")},l(t){n=h(t,"Slots")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function Nt(t){let n;return{c(){n=x("Default slot")},l(t){n=h(t,"Default slot")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function Bt(t){let n,e,s,a,o,$;return{c(){n=x("The content of the Accordion. Pass one or more "),e=k("a"),s=k("mark"),a=k("code"),o=x("AccordionSection"),$=x(" components or something miscellaneous."),this.h()},l(t){n=h(t,"The content of the Accordion. Pass one or more "),e=y(t,"A",{href:!0});var c=w(e);s=y(c,"MARK",{});var r=w(s);a=y(r,"CODE",{});var p=w(a);o=h(p,"AccordionSection"),p.forEach(d),r.forEach(d),c.forEach(d),$=h(t," components or something miscellaneous."),this.h()},h(){v(e,"href","./docs/components/accordion-section")},m(t,c){g(t,n,c),g(t,e,c),E(e,s),E(s,a),E(a,o),g(t,$,c)},d(t){t&&d(n),t&&d(e),t&&d($)}}}function Ht(t){let n;return{c(){n=x("Prop Name")},l(t){n=h(t,"Prop Name")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function Rt(t){let n;return{c(){n=x("Type")},l(t){n=h(t,"Type")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function Ft(t){let n;return{c(){n=x("Description")},l(t){n=h(t,"Description")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function Gt(t){let n,e,s,c,r,m;return n=new V({props:{$$slots:{default:[Ht]},$$scope:{ctx:t}}}),s=new V({props:{$$slots:{default:[Rt]},$$scope:{ctx:t}}}),r=new V({props:{$$slots:{default:[Ft]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=i(),a(s.$$.fragment),c=i(),a(r.$$.fragment)},l(t){o(n.$$.fragment,t),e=u(t),o(s.$$.fragment,t),c=u(t),o(r.$$.fragment,t)},m(t,a){$(n,t,a),g(t,e,a),$(s,t,a),g(t,c,a),$(r,t,a),m=!0},p(t,e){const a={};64&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const o={};64&e&&(o.$$scope={dirty:e,ctx:t}),s.$set(o);const $={};64&e&&($.$$scope={dirty:e,ctx:t}),r.$set($)},i(t){m||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(r.$$.fragment,t),m=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(r.$$.fragment,t),m=!1},d(t){f(n,t),t&&d(e),f(s,t),t&&d(c),f(r,t)}}}function It(t){let n,e,s;return{c(){n=k("strong"),e=k("code"),s=x("closeOtherPanels")},l(t){n=y(t,"STRONG",{});var a=w(n);e=y(a,"CODE",{});var o=w(e);s=h(o,"closeOtherPanels"),o.forEach(d),a.forEach(d)},m(t,a){g(t,n,a),E(n,e),E(e,s)},d(t){t&&d(n)}}}function Yt(t){let n,e;return{c(){n=k("code"),e=x("Function")},l(t){n=y(t,"CODE",{});var s=w(n);e=h(s,"Function"),s.forEach(d)},m(t,s){g(t,n,s),E(n,e)},d(t){t&&d(n)}}}function zt(t){let n;return{c(){n=x("A callback to force-close all panels except for the calling one.")},l(t){n=h(t,"A callback to force-close all panels except for the calling one.")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function Lt(t){let n,e,s,c,r,m;return n=new M({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),s=new M({props:{$$slots:{default:[Yt]},$$scope:{ctx:t}}}),r=new M({props:{$$slots:{default:[zt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=i(),a(s.$$.fragment),c=i(),a(r.$$.fragment)},l(t){o(n.$$.fragment,t),e=u(t),o(s.$$.fragment,t),c=u(t),o(r.$$.fragment,t)},m(t,a){$(n,t,a),g(t,e,a),$(s,t,a),g(t,c,a),$(r,t,a),m=!0},p(t,e){const a={};64&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const o={};64&e&&(o.$$scope={dirty:e,ctx:t}),s.$set(o);const $={};64&e&&($.$$scope={dirty:e,ctx:t}),r.$set($)},i(t){m||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(r.$$.fragment,t),m=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(r.$$.fragment,t),m=!1},d(t){f(n,t),t&&d(e),f(s,t),t&&d(c),f(r,t)}}}function Vt(t){let n,e,s,c,r,m;return e=new L({props:{$$slots:{default:[Gt]},$$scope:{ctx:t}}}),r=new L({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),{c(){n=k("thead"),a(e.$$.fragment),s=i(),c=k("tbody"),a(r.$$.fragment)},l(t){n=y(t,"THEAD",{});var a=w(n);o(e.$$.fragment,a),a.forEach(d),s=u(t),c=y(t,"TBODY",{});var $=w(c);o(r.$$.fragment,$),$.forEach(d)},m(t,a){g(t,n,a),$(e,n,null),g(t,s,a),g(t,c,a),$(r,c,null),m=!0},p(t,n){const s={};64&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};64&n&&(a.$$scope={dirty:n,ctx:t}),r.$set(a)},i(t){m||(p(e.$$.fragment,t),p(r.$$.fragment,t),m=!0)},o(t){l(e.$$.fragment,t),l(r.$$.fragment,t),m=!1},d(t){t&&d(n),f(e),t&&d(s),t&&d(c),f(r)}}}function Mt(t){let n,e,s,c,r,m,x,h,k,y,w,v,E,D,b,A,O,C,j,T,N,B,H,R,L,V,M,q,J,Q;return n=new P({props:{$$slots:{default:[K]},$$scope:{ctx:t}}}),s=new S({props:{$$slots:{default:[Z]},$$scope:{ctx:t}}}),r=new G({props:{components:Jt}}),x=new F({props:{$$slots:{source:[tt],showcase:[_]},$$scope:{ctx:t}}}),k=new I({props:{id:"properties",$$slots:{default:[nt]},$$scope:{ctx:t}}}),w=new Y({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),E=new z({props:{$$slots:{default:[xt]},$$scope:{ctx:t}}}),b=new Y({props:{$$slots:{default:[ht]},$$scope:{ctx:t}}}),O=new S({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),j=new S({props:{$$slots:{default:[yt]},$$scope:{ctx:t}}}),N=new z({props:{$$slots:{default:[Pt]},$$scope:{ctx:t}}}),H=new I({props:{id:"slots",$$slots:{default:[St]},$$scope:{ctx:t}}}),L=new Y({props:{$$slots:{default:[Nt]},$$scope:{ctx:t}}}),M=new S({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),J=new z({props:{$$slots:{default:[Vt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=i(),a(s.$$.fragment),c=i(),a(r.$$.fragment),m=i(),a(x.$$.fragment),h=i(),a(k.$$.fragment),y=i(),a(w.$$.fragment),v=i(),a(E.$$.fragment),D=i(),a(b.$$.fragment),A=i(),a(O.$$.fragment),C=i(),a(j.$$.fragment),T=i(),a(N.$$.fragment),B=i(),a(H.$$.fragment),R=i(),a(L.$$.fragment),V=i(),a(M.$$.fragment),q=i(),a(J.$$.fragment)},l(t){o(n.$$.fragment,t),e=u(t),o(s.$$.fragment,t),c=u(t),o(r.$$.fragment,t),m=u(t),o(x.$$.fragment,t),h=u(t),o(k.$$.fragment,t),y=u(t),o(w.$$.fragment,t),v=u(t),o(E.$$.fragment,t),D=u(t),o(b.$$.fragment,t),A=u(t),o(O.$$.fragment,t),C=u(t),o(j.$$.fragment,t),T=u(t),o(N.$$.fragment,t),B=u(t),o(H.$$.fragment,t),R=u(t),o(L.$$.fragment,t),V=u(t),o(M.$$.fragment,t),q=u(t),o(J.$$.fragment,t)},m(t,a){$(n,t,a),g(t,e,a),$(s,t,a),g(t,c,a),$(r,t,a),g(t,m,a),$(x,t,a),g(t,h,a),$(k,t,a),g(t,y,a),$(w,t,a),g(t,v,a),$(E,t,a),g(t,D,a),$(b,t,a),g(t,A,a),$(O,t,a),g(t,C,a),$(j,t,a),g(t,T,a),$(N,t,a),g(t,B,a),$(H,t,a),g(t,R,a),$(L,t,a),g(t,V,a),$(M,t,a),g(t,q,a),$(J,t,a),Q=!0},p(t,e){const a={};64&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const o={};64&e&&(o.$$scope={dirty:e,ctx:t}),s.$set(o);const $={};64&e&&($.$$scope={dirty:e,ctx:t}),x.$set($);const c={};64&e&&(c.$$scope={dirty:e,ctx:t}),k.$set(c);const r={};64&e&&(r.$$scope={dirty:e,ctx:t}),w.$set(r);const p={};64&e&&(p.$$scope={dirty:e,ctx:t}),E.$set(p);const l={};64&e&&(l.$$scope={dirty:e,ctx:t}),b.$set(l);const f={};64&e&&(f.$$scope={dirty:e,ctx:t}),O.$set(f);const m={};64&e&&(m.$$scope={dirty:e,ctx:t}),j.$set(m);const i={};64&e&&(i.$$scope={dirty:e,ctx:t}),N.$set(i);const u={};64&e&&(u.$$scope={dirty:e,ctx:t}),H.$set(u);const g={};64&e&&(g.$$scope={dirty:e,ctx:t}),L.$set(g);const d={};64&e&&(d.$$scope={dirty:e,ctx:t}),M.$set(d);const h={};64&e&&(h.$$scope={dirty:e,ctx:t}),J.$set(h)},i(t){Q||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(r.$$.fragment,t),p(x.$$.fragment,t),p(k.$$.fragment,t),p(w.$$.fragment,t),p(E.$$.fragment,t),p(b.$$.fragment,t),p(O.$$.fragment,t),p(j.$$.fragment,t),p(N.$$.fragment,t),p(H.$$.fragment,t),p(L.$$.fragment,t),p(M.$$.fragment,t),p(J.$$.fragment,t),Q=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(r.$$.fragment,t),l(x.$$.fragment,t),l(k.$$.fragment,t),l(w.$$.fragment,t),l(E.$$.fragment,t),l(b.$$.fragment,t),l(O.$$.fragment,t),l(j.$$.fragment,t),l(N.$$.fragment,t),l(H.$$.fragment,t),l(L.$$.fragment,t),l(M.$$.fragment,t),l(J.$$.fragment,t),Q=!1},d(t){f(n,t),t&&d(e),f(s,t),t&&d(c),f(r,t),t&&d(m),f(x,t),t&&d(h),f(k,t),t&&d(y),f(w,t),t&&d(v),f(E,t),t&&d(D),f(b,t),t&&d(A),f(O,t),t&&d(C),f(j,t),t&&d(T),f(N,t),t&&d(B),f(H,t),t&&d(R),f(L,t),t&&d(V),f(M,t),t&&d(q),f(J,t)}}}function qt(t){let n,e;const m=[t[0],Kt];let i={$$slots:{default:[Mt]},$$scope:{ctx:t}};for(let t=0;t<m.length;t+=1)i=s(i,m[t]);return n=new T({props:i}),{c(){a(n.$$.fragment)},l(t){o(n.$$.fragment,t)},m(t,s){$(n,t,s),e=!0},p(t,[e]){const s=1&e?c(m,[1&e&&r(t[0]),0&e&&r(Kt)]):{};64&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(p(n.$$.fragment,t),e=!0)},o(t){l(n.$$.fragment,t),e=!1},d(t){f(n,t)}}}const Kt={name:"Accordion",relatedComponents:[{name:"AccordionSection",link:"./docs/components/accordion-section"}]},{name:Zt,relatedComponents:Jt}=Kt;function Qt(t,n,e){return t.$$set=t=>{e(0,n=s(s({},n),m(t)))},[n=m(n)]}class Ut extends t{constructor(t){super(),n(this,t,Qt,qt,e,{})}}export{Ut as default,Kt as metadata};
