(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/center/center"],{"3a55":function(t,n,e){},"48c3":function(t,n,e){"use strict";e.r(n);var a=e("7a50"),r=e("6c60");for(var u in r)"default"!==u&&function(t){e.d(n,t,(function(){return r[t]}))}(u);e("a16b");var i,c=e("f0c5"),o=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);n["default"]=o.exports},"6c60":function(t,n,e){"use strict";e.r(n);var a=e("a8dc"),r=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);n["default"]=r.a},7790:function(t,n,e){"use strict";(function(t){e("22c9"),e("921b");a(e("66fd"));var n=a(e("48c3"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"7a50":function(t,n,e){"use strict";var a,r=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return a}))},a16b:function(t,n,e){"use strict";var a=e("3a55"),r=e.n(a);r.a},a8dc:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=u(e("a34a")),r=u(e("03ca"));function u(t){return t&&t.__esModule?t:{default:t}}function i(t,n,e,a,r,u,i){try{var c=t[u](i),o=c.value}catch(s){return void e(s)}c.done?n(o):Promise.resolve(o).then(a,r)}function c(t){return function(){var n=this,e=arguments;return new Promise((function(a,r){var u=t.apply(n,e);function c(t){i(u,a,r,c,o,"next",t)}function o(t){i(u,a,r,c,o,"throw",t)}c(void 0)}))}}var o={data:function(){return{isH5Plus:!0,user:{},tableName:"",role:"",menuList:[]}},onLoad:function(){var n=c(a.default.mark((function n(){var e,u,i;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return this.role=t.getStorageSync("role"),e=t.getStorageSync("nowTable"),n.next=4,this.$api.session(e);case 4:u=n.sent,this.user=u.data,this.tableName=e,i=r.default.list(),this.menuList=i;case 9:case"end":return n.stop()}}),n,this)})));function e(){return n.apply(this,arguments)}return e}(),onShow:function(){var n=c(a.default.mark((function n(){var e,u,i;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return this.role=t.getStorageSync("role"),e=t.getStorageSync("nowTable"),n.next=4,this.$api.session(e);case 4:u=n.sent,this.user=u.data,this.tableName=e,i=r.default.list(),this.menuList=i;case 9:case"end":return n.stop()}}),n,this)})));function e(){return n.apply(this,arguments)}return e}(),methods:{onPageTap:function(n){t.navigateTo({url:n,fail:function(){t.switchTab({url:n})}})}}};n.default=o}).call(this,e("543d")["default"])}},[["7790","common/runtime","common/vendor"]]]);