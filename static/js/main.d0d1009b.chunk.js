(this["webpackJsonpreact-redux-course"]=this["webpackJsonpreact-redux-course"]||[]).push([[0],{127:function(e,t,n){},132:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){},136:function(e,t,n){},137:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(27),a=n.n(c),o=n(153),s=n(151),i=n(108),u=n.p+"static/media/logo_v4.0905522d.svg",l=n(5),j=function(){return Object(l.jsx)(o.a,{fixed:"top",children:Object(l.jsxs)(s.a,{children:[Object(l.jsx)(o.a.Item,{href:"/",children:Object(l.jsx)(i.a,{size:"small",src:u})}),Object(l.jsx)(o.a.Item,{href:"/",children:"Home"}),Object(l.jsx)(o.a.Item,{to:"/",position:"right",children:"Favorites"})]})})},O=n(154),p=(n(127),n(21)),d=n(39),b=n.n(d),f=n(61),m="SET_POKEMONS",h="SET_ERROR",v="CLEAR_ERROR",x="SEARCH_POKEMON",E=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).POKE_API||"https://pokeapi.co/api/v2/",_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:130,t=fetch("".concat(E,"pokemon?limit=").concat(e));return t},y=function(){var e=Object(f.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(){var e=Object(f.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.url);case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(e){return{type:m,payload:e}},k=function(e,t){return function(n){n(function(e){return{type:x,payload:e}}(e.filter((function(e){var n=e.name.toLowerCase(),r=t.toLowerCase();return n.includes(r)}))))}},w=function(e){var t=e.children,n=Object(p.c)((function(e){return e.error})),r=Object(p.b)();return Object(l.jsxs)("div",{children:[Object(l.jsx)(j,{}),n&&Object(l.jsx)("div",{className:"wrapper",children:Object(l.jsx)(O.a,{onDismiss:function(){var e;r({type:v,payload:e})},content:n,color:"red"})}),Object(l.jsx)("div",{className:"Layout-content",children:t})]})},R=n(156),g=n(152);n(132);function N(){var e=Object(p.c)((function(e){return e.list})),t=Object(p.b)();return Object(l.jsx)("div",{className:"Searcher wrapper",children:Object(l.jsx)(R.a,{children:Object(l.jsx)(R.a.Column,{widescreen:10,largeScreen:10,mobile:16,className:"Searcher",children:Object(l.jsx)(g.a,{aligned:"right",input:{fluid:!0},showNoResults:!1,placeholder:"Encuentra a tu Pokem\xf3n favorito",onSearchChange:function(n){t(k(e,n.target.value))}})})})})}var P=n(59),C=n(82),T=(n(133),function(e){var t=e.pokemon,n=t.id,r=t.name,c=t.sprites,a=t.types;return Object(l.jsx)(R.a.Column,{mobile:16,tablet:8,computer:4,children:Object(l.jsxs)("div",{className:"PokemonCard",children:[Object(l.jsx)(P.a,{name:"favorite",color:"yellow"}),Object(l.jsx)(i.a,{centered:!0,src:c.front_default,alt:"Pokemon image"}),Object(l.jsx)("p",{className:"Pokemon-title",children:r}),a.map((function(e,t){return Object(l.jsx)(C.a,{color:"violet",children:e.type.name},"".concat(n,"-").concat(e.type.name,"-").concat(t))}))]})})}),L=function(e){var t=e.pokemons;return Object(l.jsx)(R.a,{className:"PokemonList",children:t.map((function(e,t){return Object(l.jsx)(T,{pokemon:e},"pokemon-".concat(t))}))})};L.defaultProps={pokemons:[]};var D=L;n(134);var H=function(){var e=Object(p.c)((function(e){return e.list})),t=Object(p.b)();return Object(r.useEffect)((function(){t(function(){var e=Object(f.a)(b.a.mark((function e(t){var n,r,c,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_();case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,c=r.results,e.next=10,y(c);case 10:a=e.sent,t(S(a)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log("FETCH ERROR: ",e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(l.jsxs)("div",{className:"Home",children:[Object(l.jsx)(N,{}),Object(l.jsx)(D,{pokemons:e})]})},I=(n(135),function(){return Object(l.jsx)(w,{children:Object(l.jsx)(H,{})})}),K=(n(136),n(90)),A=n(26),F={list:[]},M=n(107),U=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||K.b)(Object(K.a)(M.a,(function(e){return function(e){return function(t){console.log("dispatch",t),e(t)}}}),(function(e){return function(e){return function(t){var n=t.action;(null===n||void 0===n?void 0:n.type)===h&&console.error(n.payload),e(t)}}}))),W=Object(K.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(A.a)(Object(A.a)({},e),{},{list:t.payload});case h:return Object(A.a)(Object(A.a)({},e),{},{error:t.payload.message});case v:return Object(A.a)(Object(A.a)({},e),{},{error:""});case x:return Object(A.a)(Object(A.a)({},e),{},{list:t.payload});default:return Object(A.a)({},e)}}),U);a.a.render(Object(l.jsx)(p.a,{store:W,children:Object(l.jsx)(I,{})}),document.getElementById("root"))}},[[137,1,2]]]);
//# sourceMappingURL=main.d0d1009b.chunk.js.map