(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{182:function(t,s,n){"use strict";n.r(s);var a=n(0),o=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"获取定位信息"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#获取定位信息","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取定位信息")]),t._v(" "),n("p",[n("strong",[t._v("通用的是下面调用方法")]),t._v("\n只有预约医院列表导入的是getLatLngcity，其他代码是一致的")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  getLatLng "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'../../components/mixin.js'")]),t._v("\nmixins"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("getLatLng"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("data")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        lat"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v("''")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        lng"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v("''")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("mounted")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" positions "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getLatAndLng")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lat "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" positions"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentLat"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lng "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" positions"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentLng"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getInfo")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{attrs:{class:"token comment"}},[t._v("//页面需要传经纬度接口")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),n("p",[n("strong",[t._v("另外一种是页面进入需要先获取定位城市和经纬度信息")])]),t._v(" "),n("p",[t._v("1、选在路径中添加"),n("b",{attrs:{color:"#f00"}},[t._v("meta:{ needGetLatAndLng:true}")]),t._v("\n{ path: 'complex.html', component: searchComplex,name:'searchcomplex',meta:{ needGetLatAndLng:true}}")]),t._v(" "),n("p",[t._v("2、plugins中的vueRouter.js做了拦截，如果路由配置中需要传经纬度的话，会先调用经纬度获取信息，然后再接着往下执行")])])}],!1,null,null,null);o.options.__file="getLatLng.md";s.default=o.exports}}]);