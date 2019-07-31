(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{10:function(e,t,s){"use strict";function o(e,t,s,o,v,r,n,_){var a,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=s,c._compiled=!0),o&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),n?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),v&&v.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(n)},c._ssrRegister=a):v&&(a=_?function(){v.call(this,this.$root.$options.shadowRoot)}:v),a)if(c.functional){c._injectStyles=a;var i=c.render;c.render=function(e,t){return a.call(t),i(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,a):[a]}return{exports:e,options:c}}s.d(t,"a",function(){return o})},132:function(e,t,s){e.exports=s.p+"assets/img/1.6c9ce1f9.png"},133:function(e,t,s){e.exports=s.p+"assets/img/2.2647173a.png"},134:function(e,t,s){e.exports=s.p+"assets/img/3.ec6b9455.png"},135:function(e,t,s){e.exports=s.p+"assets/img/4.4223b32a.png"},136:function(e,t,s){e.exports=s.p+"assets/img/5.32e965e4.png"},137:function(e,t,s){e.exports=s.p+"assets/img/6.a941b224.png"},169:function(e,t,s){"use strict";s.r(t);var o=s(10),v=Object(o.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"我理解的vue"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#我理解的vue","aria-hidden":"true"}},[e._v("#")]),e._v(" 我理解的vue")]),e._v(" "),o("p",[e._v("• "),o("code",[e._v("vue")]),e._v("是响应式的，即"),o("code",[e._v("JavaScript")]),e._v("代码中变量值的改变会反映到"),o("code",[e._v("HTML")]),e._v("元素中，也就是说，实现了数据和视图（"),o("code",[e._v("HTML")]),e._v("元素）的绑定。")]),e._v(" "),o("p",[e._v("• 以前的做法：如果要改变"),o("code",[e._v("DOM")]),e._v("元素中的内容，我们通常都是使用"),o("code",[e._v("JavaScript")]),e._v("提供的"),o("code",[e._v("DOM API")]),e._v("，先获取到相应的"),o("code",[e._v("DOM")]),e._v("元素，然后进行动态的操作。因为首先要定位到你要修改的"),o("code",[e._v("DOM")]),e._v("元素，然后才能修改数据。如果要改动多个元素的话，我们就需要频繁的进行手动"),o("code",[e._v("DOM")]),e._v("操作。")]),e._v(" "),o("p",[e._v("• 现在的改变：我们无需关心"),o("code",[e._v("DOM")]),e._v("的更新了，只需要改变数据就可以了。因为数据和视图是绑定的，数据的改变会影响到视图，所以"),o("code",[e._v("vue")]),e._v("帮我们自动更新了视图。")]),e._v(" "),o("h2",{attrs:{id:"为什么要安装这个插件？"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#为什么要安装这个插件？","aria-hidden":"true"}},[e._v("#")]),e._v(" 为什么要安装这个插件？")]),e._v(" "),o("p",[o("strong",[e._v("因为vue是进行数据驱动的，仅仅从chrome浏览器的控制台进行element查看，是看不到数据的动向的。")])]),e._v(" "),o("h1",{attrs:{id:"谷歌浏览器chrome的vuejs-devtools-插件的安装"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#谷歌浏览器chrome的vuejs-devtools-插件的安装","aria-hidden":"true"}},[e._v("#")]),e._v(" 谷歌浏览器chrome的vuejs devtools 插件的安装")]),e._v(" "),o("p",[e._v("1 . 下载chrome扩展插件。")]),e._v(" "),o("p",[e._v("在github上下载压缩包并解压到本地，github下载地址："),o("code",[e._v("https://github.com/vuejs/vue-devtools")])]),e._v(" "),o("ol",{attrs:{start:"2"}},[o("li",[o("code",[e._v("npm install")])])]),e._v(" "),o("p",[e._v("下载完成后打开命令行cmd进入"),o("code",[e._v("vue-devtools-master")]),e._v("文件夹，")]),e._v(" "),o("ol",[o("li",[o("p",[o("code",[e._v("npm install")]),e._v("，安装依赖包；")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("npm run build")])])])]),e._v(" "),o("img",{attrs:{src:s(132)}}),e._v(" "),o("p",[o("code",[e._v("npm run build")]),e._v("执行完，会在"),o("code",[e._v("shells>chrome")]),e._v("下的src文件夹里生产如上图所示的几个js文件；")]),e._v(" "),o("img",{attrs:{src:s(133)}}),e._v(" "),o("p",[e._v("若不执行以上命令会报错，无法加载背景脚本"),o("code",[e._v('"build/background.js"')]),e._v("，如下图：")]),e._v(" "),o("img",{attrs:{src:s(134)}}),e._v(" "),o("ol",{attrs:{start:"3"}},[o("li",[e._v('打开shells>chrome>manifest.json并把json文件里的"persistent":false改成true')])]),e._v(" "),o("img",{attrs:{src:s(135)}}),e._v(" "),o("ol",{attrs:{start:"4"}},[o("li",[e._v("扩展chrome插件")])]),e._v(" "),o("p",[e._v("1.打开chrome浏览器，打开更多工具>扩展程序；")]),e._v(" "),o("p",[e._v("2.再点击加载已解压的扩展程序，然后把shells>chrome文件夹放入")]),e._v(" "),o("img",{attrs:{src:s(136)}}),e._v(" "),o("p",[e._v("5， 测试安装成功")]),e._v(" "),o("p",[e._v("在插件的目录下执行npm run dev，这个时候我们的插件就可以运行了,打开localhost:8080可以看到插件已经安装并运行了。")]),e._v(" "),o("img",{attrs:{src:s(137)}})])},[],!1,null,null,null);t.default=v.exports}}]);