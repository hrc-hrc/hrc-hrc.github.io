webpackJsonp([3],{"07vi":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},i,!1,function(t){n("f9tO")},null,null).exports,r=n("/ocq"),o={name:"mhome",data:function(){return{}},created:function(){this.setRem(28.43),this.fontSize(1120);var t=navigator.userAgent.toLowerCase();/(iphone|ipod|ipad|android)/.test(t)||this.$router.push({path:"/"})},methods:{loadinghref:function(){this.$router.push({path:"/mblok"}),location.reload()},setRem:function(t){var e=t||38;function n(){var t=document.getElementsByTagName("html")[0],n=t.clientWidth;n=n>768?768:n,t.style.fontSize=n/e+"px"}window.onresize=n,n()},fontSize:function(t){document.getElementsByTagName("html")[0].style.fontSize}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bb"},[t._m(0),t._v(" "),n("div",{staticClass:"mhome"},[n("div",{staticClass:"m-header"},[n("img",{attrs:{src:"/static/mimg/HHPP1.png",alt:""}}),t._v(" "),n("img",{staticClass:"m-h1",attrs:{src:"/static/mimg/HHPP2.png",alt:""},on:{click:t.loadinghref}}),t._v(" "),n("img",{attrs:{src:"/static/mimg/h.png",alt:""}})]),t._v(" "),t._m(1),t._v(" "),t._m(2)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"aa"},[e("img",{staticClass:"cc",attrs:{src:"/static/mimg/hhpps.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mbottom"},[e("div",[e("a",{attrs:{href:"https://telegr.am/"}},[e("img",{attrs:{src:"/static/mimg/dian.png",alt:""}})])]),this._v(" "),e("div",[e("a",{attrs:{href:"https://www.facebook.com/UsechainFoundation"}},[e("img",{attrs:{src:"/static/mimg/fa.png",alt:""}})])]),this._v(" "),e("div",[e("a",{attrs:{href:"https://twitter.com/usechain"}},[e("img",{attrs:{src:"/static/mimg/face.png",alt:""}})])]),this._v(" "),e("div",[e("a",{attrs:{href:"https://github.com/"}},[e("img",{attrs:{src:"/static/mimg/github.png",alt:""}})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mba"},[e("a",{attrs:{href:"/static/whitepaper.pdf",download:"whitepaper.pdf"}},[e("img",{attrs:{src:"/static/mimg/down.png",alt:""}})])])}]};var m=n("VU/8")(o,c,!1,function(t){n("onaa")},null,null).exports,l={name:"mblok",data:function(){return{}},created:function(){this.setRem(28.43),this.fontSize(1120);var t=navigator.userAgent.toLowerCase();/(iphone|ipod|ipad|android)/.test(t)||this.$router.push({path:"/mblok"})},methods:{setRem:function(t){var e=t||38;function n(){var t=document.getElementsByTagName("html")[0],n=t.clientWidth;n=n>768?768:n,t.style.fontSize=n/e+"px"}window.onresize=n,n()},fontSize:function(t){document.getElementsByTagName("html")[0].style.fontSize}}},h={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mblok"},[e("img",{attrs:{src:"/static/mimg/blok.png",alt:""}})])}]};var u=n("VU/8")(l,h,!1,function(t){n("07vi")},null,null).exports;a.a.use(r.a);var p=new r.a({routes:[{path:"/",name:"home",component:function(t){return n.e(0).then(function(){var e=[n("wUZA")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/m",name:"mhome",component:m},{path:"/mblok",name:"mblok",component:u},{path:"/blog",name:"blog",component:function(t){return n.e(1).then(function(){var e=[n("2wuS")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]});n("7t+N");a.a.config.productionTip=!1,new a.a({el:"#app",router:p,components:{App:s},template:"<App/>"})},f9tO:function(t,e){},onaa:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.cb145a5c02ec79da50b1.js.map