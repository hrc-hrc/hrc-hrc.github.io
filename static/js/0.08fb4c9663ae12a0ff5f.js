webpackJsonp([0],{FGQs:function(t,i,a){"use strict";(function(t){i.a={name:"home",data:function(){return{navlist:["Home","HRC","Scenes","Architecture","Blog","Character","Broker"],navnum:0,imgheight:null}},created:function(){var t=navigator.userAgent.toLowerCase();/(iphone|ipod|ipad|android)/.test(t)&&this.$router.push({path:"/m"})},mounted:function(){var t=document.body.clientHeight;this.imgheight=t},methods:{toblog:function(){this.$router.push({path:"/blog"})},more:function(){t("html,body").animate({scrollTop:t("#nav1")[0].offsetTop},500)},rollclick:function(i){this.navnum=i;var a=t("#nav"+i)[0].offsetTop-65;t("html,body").animate({scrollTop:a},500)}}}}).call(i,a("7t+N"))},RlKG:function(t,i){},wUZA:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=a("FGQs"),e={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"content"},[a("header",{staticClass:"h_header"},[a("div",{staticClass:"h_wrap"},[a("img",{attrs:{src:"/static/image/logo.png",alt:""}}),t._v(" "),a("ul",t._l(t.navlist,function(i,s){return a("li",{class:{active:t.navnum==s},domProps:{innerHTML:t._s(i)},on:{click:function(i){t.rollclick(s)}}})}))])]),t._v(" "),a("div",{staticClass:"img_box"},[a("div",{staticClass:"banner",attrs:{id:"nav0"}},[a("img",{style:{height:t.imgheight+"px"},attrs:{src:"/static/image/Homepage.png",id:"hpage"}}),t._v(" "),t._m(0),t._v(" "),a("p",{staticClass:"lmore",on:{click:function(i){t.more()}}},[a("span",[t._v("Learn more")]),t._v(" "),t._m(1)])]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("div",{staticClass:"news",attrs:{id:"nav4"}},[a("div",{staticClass:"news1"},[a("div",{staticClass:"new-head"},[t._v("Latest News")]),t._v(" "),a("div",{staticClass:"new-middle"},[a("div",{staticClass:"middle1",on:{click:function(i){t.toblog()}}},[a("p",[t._v("HCASH RC2 Launched ！")]),t._v(" "),a("div",{staticClass:"middle2"},[t._v("The coming launch of our new main chain update is the next great leap in the realisation of the original vision\n              for the HCASH ecosystem. In order to ensure the high stability of the main chain, HCASH officially launches\n              the RC2 public test today. In order to give the community a better\n            ")]),t._v(" "),a("div",{staticClass:"middle3"},[t._v("2017-01-02")])]),t._v(" "),t._m(5),t._v(" "),t._m(6)])])]),t._v(" "),t._m(7),t._v(" "),a("img",{attrs:{src:"/static/image/Broker.png",id:"nav6"}})]),t._v(" "),t._m(8)])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("a",{attrs:{href:"/static/whitepaper.pdf",download:"whitepaper"}},[i("img",{staticClass:"wp_img",attrs:{src:"/static/image/whitepaper.png"}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("span",{staticClass:"moreicon"},[i("i",{staticClass:"iconfont"},[this._v(" ")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"HRC",attrs:{id:"nav1"}},[i("img",{attrs:{src:"/static/image/HRC.png"}}),this._v(" "),i("img",{staticClass:"f-img f-img1",attrs:{src:"/static/image/f1.png"}}),this._v(" "),i("img",{staticClass:"f-img f-img2",attrs:{src:"/static/image/f2.png"}}),this._v(" "),i("img",{staticClass:"f-img f-img3",attrs:{src:"/static/image/f3.png"}}),this._v(" "),i("img",{staticClass:"f-img f-img4",attrs:{src:"/static/image/f4.png"}}),this._v(" "),i("img",{staticClass:"f-img f-img5",attrs:{src:"/static/image/f5.png"}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"scenes",attrs:{id:"nav2"}},[i("img",{attrs:{src:"/static/image/Scenes.png"}}),this._v(" "),i("img",{staticClass:"s-img s-img1",attrs:{src:"/static/image/scenes1.png"}}),this._v(" "),i("img",{staticClass:"s-img s-img2",attrs:{src:"/static/image/scenes2.png"}}),this._v(" "),i("img",{staticClass:"s-img s-img3",attrs:{src:"/static/image/scenes3.png"}}),this._v(" "),i("img",{staticClass:"s-img s-img4",attrs:{src:"/static/image/scenes4.png"}})])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"whitepage",attrs:{id:"nav3"}},[a("div",[a("img",{attrs:{src:"/static/image/Architecture.png"}}),t._v(" "),a("img",{staticClass:"a-img a-img1",attrs:{src:"/static/image/archi1.png"}}),t._v(" "),a("img",{staticClass:"a-img a-img2",attrs:{src:"/static/image/archi2.png"}}),t._v(" "),a("img",{staticClass:"a-img a-img3",attrs:{src:"/static/image/archi3.png"}}),t._v(" "),a("img",{staticClass:"a-img a-img4",attrs:{src:"/static/image/archi4.png"}}),t._v(" "),a("img",{staticClass:"a-img a-img5",attrs:{src:"/static/image/archi5.png"}})]),t._v(" "),a("div",{staticClass:"whitepageone"},[a("div",{staticClass:"whitepage1"},[a("div",{staticClass:"whitepage3"},[a("img",{attrs:{src:"/static/image/4.png",alt:""}})]),t._v(" "),a("div",{staticClass:"whitepage2"},[a("div",{staticClass:"whitepage5"},[a("div",{staticClass:"whitepage9"},[a("img",{attrs:{src:"/static/image/5.png",alt:""}})]),t._v(" "),a("div",{staticClass:"whitepage6"},[a("div",{staticClass:"whitepage8"},[t._v("Better support for non-financial businesses")]),t._v(" "),a("div",{staticClass:"whitepage7"},[t._v("Better support for non-financial businesses")])])]),t._v(" "),a("div",{staticClass:"whitepage4"},[t._v("For smart contracts and general protocols, community developers can develop more complex scenarios. Especially\n              scenes that require multi-currency support. The connection between the alliance chain and the chain of the\n              public chain links provides more choices for the future application of the blockchain. Closed and open is no\n              longer an alternative question.")])])])]),t._v(" "),a("div",{staticClass:"whitepagetwo"},[a("div",{staticClass:"whitepage1 whitepage11"},[a("div",{staticClass:"whitepage2"},[a("div",{staticClass:"whitepage5"},[a("div",{staticClass:"whitepage6"},[a("div",{staticClass:"whitepage8"},[t._v("Better support for cross-chain transactions")]),t._v(" "),a("div",{staticClass:"whitepage7"},[t._v("Better support for cross-chain transactions")])]),t._v(" "),a("div",{staticClass:"whitepage9"},[a("img",{attrs:{src:"/static/image/6.png",alt:""}})])]),t._v(" "),a("div",{staticClass:"whitepage4"},[t._v("The blockchain designed according to the principle of parallelism, while using different hierarchical processing\n              consensus to achieve the scalability of the consensus algorithm, can run multiple different consensuses on\n              the local chain at the same time, supporting multiple digital currencies and books, this A feature provides\n              natural convenience for cross-chain operation, and the cross-chain operation itself can be serialized and solidified\n              to provide additional credit proof.")])]),t._v(" "),a("div",{staticClass:"whitepage3"},[a("img",{attrs:{src:"/static/image/1.png",alt:""}})])])]),t._v(" "),a("div",{staticClass:"whitepageone"},[a("div",{staticClass:"whitepage1"},[a("div",{staticClass:"whitepage3"},[a("img",{attrs:{src:"/static/image/3.png",alt:""}})]),t._v(" "),a("div",{staticClass:"whitepage2"},[a("div",{staticClass:"whitepage5"},[a("div",{staticClass:"whitepage9"},[a("img",{attrs:{src:"/static/image/7.png",alt:""}})]),t._v(" "),a("div",{staticClass:"whitepage6"},[a("div",{staticClass:"whitepage8"},[t._v("Flexible data structure on the chain, easy to expand")]),t._v(" "),a("div",{staticClass:"whitepage7"},[t._v("Flexible data structure on the chain, easy to expand")])])]),t._v(" "),a("div",{staticClass:"whitepage4"},[t._v("The blockchain designed according to the principle of parallelism, while using different hierarchical processing\n              consensus to achieve the scalability of the consensus algorithm, can run multiple different consensuses on\n              the local chain at the same time, supporting multiple digital currencies and books, this A feature provides\n              natural convenience for cross-chain operation, and the cross-chain operation itself can be serialized and solidified\n              to provide additional credit proof.")])])])]),t._v(" "),a("div",{staticClass:"whitepagetwo"},[a("div",{staticClass:"whitepage1 whitepage11"},[a("div",{staticClass:"whitepage2"},[a("div",{staticClass:"whitepage5"},[a("div",{staticClass:"whitepage6"},[a("div",{staticClass:"whitepage8"},[t._v("No mining,no waste reactive power,no privileged nodes")]),t._v(" "),a("div",{staticClass:"whitepage7"},[t._v("No mining,no waste reactive power,no privileged nodes")])]),t._v(" "),a("div",{staticClass:"whitepage9"},[a("img",{attrs:{src:"/static/image/8.png",alt:""}})])]),t._v(" "),a("div",{staticClass:"whitepage4"},[t._v("The system introduces the conceptual principle of the super blockchain, including the core data structure and\n              related algorithms; technical solutions, including the overall architecture, technology stack and consensus\n              algorithms; operation and deployment, including node establishment and use, anti-malicious nodes")])]),t._v(" "),a("div",{staticClass:"whitepage3"},[a("img",{attrs:{src:"/static/image/2.png",alt:""}})])])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"middle1 middle11"},[i("p",[this._v("Weekly Development Update - 12 July 2018")]),this._v(" "),i("div",{staticClass:"middle2"},[this._v("The coming launch of our new main chain update is the next great leap in the realisation of the original vision\n              for the HCASH ecosystem. In order to ensure the high stability of the main chain...\n            ")]),this._v(" "),i("div",{staticClass:"middle3 middle4"},[this._v("2017-01-02")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"middle1 middle11"},[i("p",[this._v("HCASH Network Upgrade Announcement\n            ")]),this._v(" "),i("div",{staticClass:"middle2"},[this._v("The coming launch of our new main chain update is the next great leap in the realisation of the original vision\n              for the HCASH ecosystem. In order to ensure the high stability of the main chain...\n            ")]),this._v(" "),i("div",{staticClass:"middle3 middle5"},[this._v("2017-01-02")])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"character",attrs:{id:"nav5"}},[a("img",{staticClass:"character_bg",attrs:{src:"/static/image/Character.png"}}),t._v(" "),a("div",{staticClass:"charaintro_box"},[a("div",{staticClass:"charaintro"},[a("img",{attrs:{src:"/static/image/chara1.png",alt:""}}),t._v(" "),a("p",{staticClass:"cname"},[t._v("Chennault")]),t._v(" "),a("p",{staticClass:"ctext"},[t._v("Founder and CEO of Coin One of the best trading platforms for user experience")])]),t._v(" "),a("div",{staticClass:"charaintro"},[a("img",{attrs:{src:"/static/image/chara2.png",alt:""}}),t._v(" "),a("p",{staticClass:"cname"},[t._v("Benjamin")]),t._v(" "),a("p",{staticClass:"ctext"},[t._v("Co-founder of Coin Capital now CEO of Bigone Exchange")])]),t._v(" "),a("div",{staticClass:"charaintro"},[a("img",{attrs:{src:"/static/image/chara3.png",alt:""}}),t._v(" "),a("p",{staticClass:"cname"},[t._v("Thomas")]),t._v(" "),a("p",{staticClass:"ctext"},[t._v("Block pencil founder Years of IT and financial background")])])])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("footer",{staticClass:"f_footer"},[a("div",{staticClass:"f_wrap"},[a("div",[a("a",{attrs:{href:"https://telegram.org/",target:"_black"}},[a("img",{attrs:{src:"/static/image/telegram.png",alt:""}}),t._v(" "),a("p",[t._v("Telegram")])])]),t._v(" "),a("div",[a("a",{attrs:{href:"https://www.facebook.com/UsechainFoundation",target:"_black"}},[a("img",{attrs:{src:"/static/image/facebook.png",alt:""}}),t._v(" "),a("p",[t._v("Facebook")])])]),t._v(" "),a("div",[a("a",{attrs:{href:"https://twitter.com/usechain",target:"_black"}},[a("img",{attrs:{src:"/static/image/twitter.png",alt:""}}),t._v(" "),a("p",[t._v("Twitter")])])]),t._v(" "),a("div",[a("a",{attrs:{href:"https://github.com/",target:"_black"}},[a("img",{attrs:{src:"/static/image/git.png",alt:""}}),t._v(" "),a("p",[t._v("GitHub")])])])])])}]};var n=function(t){a("RlKG")},c=a("VU/8")(s.a,e,!1,n,"data-v-7c8598d4",null);i.default=c.exports}});
//# sourceMappingURL=0.08fb4c9663ae12a0ff5f.js.map