(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{176:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"基本信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本信息","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本信息")]),t._v(" "),a("p",[a("strong",[t._v("版本信息：")])]),t._v(" "),a("p",[a("strong",[t._v("基于vue-cli 3.0创建的项目，要求Node.js版本8或更高。NVM可以在同台电脑上面管理多个版本的Node")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("npm install "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("g @vue"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("cli\n# or\nyarn global add @vue"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("cli\n")])])]),a("p",[t._v("项目用的element-ui框架，由于项目中有些页面嵌套的以前老版页面（php页面及easyui页面），所以index.html页面要引入easyui的css和js")]),t._v(" "),a("h1",{attrs:{id:"公共组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#公共组件","aria-hidden":"true"}},[t._v("#")]),t._v(" 公共组件")]),t._v(" "),a("p",[t._v("存放目录\n"),a("code",[t._v("src/mixins/index.js")])]),t._v(" "),a("p",[a("strong",[t._v("分页")])]),t._v(" "),a("p",[t._v("有分页的页面只需要引入下面内容，并且调用数据必须是"),a("strong",[t._v("getData")]),t._v("方法")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token operator"}},[t._v("===")]),a("span",{attrs:{class:"token operator"}},[t._v("===")]),a("span",{attrs:{class:"token operator"}},[t._v("===")]),a("span",{attrs:{class:"token operator"}},[t._v("===")]),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v("html"),a("span",{attrs:{class:"token operator"}},[t._v("===")]),a("span",{attrs:{class:"token operator"}},[t._v("===")]),a("span",{attrs:{class:"token operator"}},[t._v("===")]),a("span",{attrs:{class:"token operator"}},[t._v("===")]),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("/*\ntotalSize是接口返回的总页数，必须为Number\n*/")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"mt10 textr"')]),t._v(" v"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"totalSize"')]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("el"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("pagination\n        @size"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("change"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"handleSizeChange"')]),t._v("\n        @current"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("change"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"handleCurrentChange"')]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("current"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("page"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"page"')]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("page"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("sizes"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"[10, 20, 30, 40]"')]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("page"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("size"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"size"')]),t._v("\n        layout"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"total, sizes, prev, pager, next, jumper"')]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("total"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"totalSize"')]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("el"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("pagination"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{attrs:{class:"token operator"}},[t._v("===")]),a("span",{attrs:{class:"token operator"}},[t._v("===")]),a("span",{attrs:{class:"token operator"}},[t._v("===")]),a("span",{attrs:{class:"token operator"}},[t._v("===")]),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v("script"),a("span",{attrs:{class:"token operator"}},[t._v("===")]),a("span",{attrs:{class:"token operator"}},[t._v("===")]),a("span",{attrs:{class:"token operator"}},[t._v("===")]),a("span",{attrs:{class:"token operator"}},[t._v("===")]),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" pagination "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'@/mixins/'")]),t._v("\nmixins"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pagination"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("h1",{attrs:{id:"重点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重点","aria-hidden":"true"}},[t._v("#")]),t._v(" 重点")]),t._v(" "),a("p",[a("strong",[t._v("左侧菜单有跳老版页面和新版vue页面")])]),t._v(" "),a("p",[t._v("跳转方法公用:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("/*\n*type跳转类型：1链接，2vue新页面\n*path跳转地址：接口返回的地址两种,index.php?c=Main&a=hcrmj或者/vue/health/index.html\n*query跳转参数\n*pathName底部菜单中文名字\n*此方法已经全局注入，可以在项目任何一个页面调用\n*/")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("jumpLink")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" query"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pathName"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" path "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("includes")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$route"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("decodeURIComponent")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$route"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("includes")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("refreshWindow")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("includes")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'c=Consult&a=chat'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$router"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("go")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// type 1 代表是后台配置的, /vue开头的代表的是vue新页面, 2代表vue-router")]),t._v("\n    path "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("trim")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("globalMenu "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        type"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        path"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        query"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        pathName\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token regex"}},[t._v("/^\\/vue/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("test")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            path "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("substr")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("4")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$router"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("push")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$router"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("push")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`/iframe/")]),a("span",{attrs:{class:"token interpolation"}},[a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),a("span",{attrs:{class:"token function"}},[t._v("encodeURIComponent")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{attrs:{class:"token string"}},[t._v("`")])]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$router"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("push")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" query "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("1、跳老版本页面\n路径：\n"),a("code",[t._v("src/views/iframe/index.vue")])]),t._v(" "),a("p",[t._v("2、跳新版本vue页面\n根据项目需求新建文件夹及文件")]),t._v(" "),a("p",[a("strong",[t._v("有可能跳转的第一个页面是vue页面，然后点击vue页面的某个按钮是跳转到老版本的页面编辑，编辑成功后要跳回之前的vue页面")])]),t._v(" "),a("p",[a("code",[t._v("app.vue")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("    "),a("span",{attrs:{class:"token function"}},[t._v("bindEvent")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" that "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),t._v("\n        window"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'resize'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("initMainHeight")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("bind")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        window"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'message'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("/*iframe接收消息，传过来的数据都是通过event.data拿到*/")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                that"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$router"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("push")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" event"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data\n                "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token class-name"}},[t._v("err")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[a("code",[t._v("https://wximg.91160.com/health/js/health.js")]),t._v("\n点编辑成功的时候")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("/*把地址发送给主页*/")]),t._v("\nwindow"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("postMessage")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'/health/goodsManage'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token string"}},[t._v('"*"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}],!1,null,null,null);o.options.__file="h91160vue.md";s.default=o.exports}}]);