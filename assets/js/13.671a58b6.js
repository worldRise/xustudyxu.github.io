(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{393:function(e,t,n){"use strict";n(18),n(58),n(107),n(57),n(42);var a,i,o,r,l,c,s,u=!1,d=[];"undefined"!=typeof document&&(r=function(e){return u||"interactive"===document.readyState||"complete"===document.readyState?e.call(document):d.push((function(){return e.call(this)})),this},c=function(){for(var e=0,t=d.length;e<t;e++)d[e].apply(document);d=[]},s=function(){u||(u=!0,c.call(window),document.removeEventListener?document.removeEventListener("DOMContentLoaded",s,!1):document.attachEvent&&(document.detachEvent("onreadystatechange",s),window==window.top&&(clearInterval(l),l=null)))},document.addEventListener?document.addEventListener("DOMContentLoaded",s,!1):document.attachEvent&&(document.attachEvent("onreadystatechange",(function(){/loaded|complete/.test(document.readyState)&&s()})),window==window.top&&(l=setInterval((function(){try{u||document.documentElement.doScroll("left")}catch(e){return}s()}),5)))),a={fetch:function(e,t){var n="BusuanziCallback_"+Math.floor(1099511627776*Math.random());e=e.replace("=BusuanziCallback","="+n),(o=document.createElement("SCRIPT")).type="text/javascript",o.defer=!0,o.src=e,document.getElementsByTagName("HEAD")[0].appendChild(o),window[n]=this.evalCall(t)},evalCall:function(e){return function(t){r((function(){try{e(t),o&&o.parentElement&&o.parentElement.removeChild&&o.parentElement.removeChild(o)}catch(e){console.log(e),i.hides()}}))}}},i={bszs:["site_pv","page_pv","site_uv"],texts:function(e){this.bszs.map((function(t){var n=document.getElementById("busuanzi_value_"+t);n&&(n.innerHTML=e[t])}))},hides:function(){this.bszs.map((function(e){var t=document.getElementById("busuanzi_container_"+e);t&&(t.style.display="none")}))},shows:function(){this.bszs.map((function(e){var t=document.getElementById("busuanzi_container_"+e);t&&(t.style.display="inline")}))}},t.a=function(){i&&i.hides(),a.fetch("//busuanzi.ibruce.info/busuanzi?jsonpCallback=BusuanziCallback",(function(e){i.texts(e),i.shows()}))}},499:function(e,t,n){"use strict";n.r(t);n(24),n(6),n(25),n(43),n(30),n(107);var a=n(393),i={mounted:function(){"/"!=this.$route.path&&this.initPageInfo()},watch:{$route:function(e,t){"/"!==e.path&&e.path!==t.path&&this.$themeConfig.blogInfo&&this.initPageInfo()}},methods:{initPageInfo:function(){var e=this;if(null==this.$frontmatter.article||this.$frontmatter.article){var t=this.$themeConfig.blogInfo,n=t.eachFileWords,a=t.pageView,i=t.pageIteration,o=t.readingTime;if(n)try{n.forEach((function(t){if(t.permalink==e.$frontmatter.permalink)throw e.addPageWordsCount(t.wordsCount),(o||null==o)&&e.addReadTimeCount(t.readingTime),new Error}))}catch(e){}(a||null==a)&&(this.addPageView(),this.getPageViewCouter(i))}else;},getPageViewCouter:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;Object(a.a)();var n=0,i="9999";setTimeout((function(){var o=document.querySelector(".view-data");if(o&&""==o.innerText){var r=setInterval((function(){o&&""==o.innerText?((n+=t)>5*t&&(o.innerText=i,clearInterval(r)),""==o.innerText?Object(a.a)():clearInterval(r)):clearInterval(r)}),t);e.$once("hook:beforeDestroy",(function(){clearInterval(r),r=null}))}}),t)},addPageView:function(){var e=document.querySelector(".page-view");if(e)e.innerHTML='<a style="color: #888; margin-left: 3px" href="javascript:;" id="busuanzi_value_page_pv" class="view-data"><i title="正在获取..." class="loading iconfont icon-loading"></i></a>';else{var t=document.createElement("div");t.title="浏览量",t.className="page-view iconfont icon-view",t.style.float="left",t.style.marginLeft="20px",t.style.fontSize="0.8rem",t.innerHTML='<a style="color: #888; margin-left: 3px" href="javascript:;" id="busuanzi_value_page_pv" class="view-data"><i title="正在获取..." class="loading iconfont icon-loading"></i></a>';var n=document.createElement("style");n.innerHTML="@keyframes turn {\n        0% {\n          transform: rotate(0deg);\n        }\n        100% {\n          transform: rotate(360deg);\n        }\n      }\n      .loading {\n        display: inline-block;\n        animation: turn 1s linear infinite;\n        -webkit-animation: turn 1s linear infinite;\n      }",document.head.appendChild(n),this.mountedView(t)}},addPageWordsCount:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=document.querySelector(".book-words");if(t)t.innerHTML='<a href="javascript:;" style="margin-left: 3px; color: #888">'.concat(e,"</a>");else{var n=document.createElement("div");n.title="文章字数",n.className="book-words iconfont icon-book",n.style.float="left",n.style.marginLeft="20px",n.style.fontSize="0.8rem",n.innerHTML='<a href="javascript:;" style="margin-left: 3px; color: #888">'.concat(e,"</a>"),this.mountedView(n)}},addReadTimeCount:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=document.querySelector(".reading-time");if(t)t.innerHTML='<a href="javascript:;" style="margin-left: 3px; color: #888">'.concat(e,"</a>");else{var n=document.createElement("div");n.title="预阅读时长",n.className="reading-time iconfont icon-shijian",n.style.float="left",n.style.marginLeft="20px",n.style.fontSize="0.8rem",n.innerHTML='<a href="javascript:;" style="margin-left: 3px; color: #888">'.concat(e,"</a>"),this.mountedView(n)}},mountedView:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".articleInfo-wrap > .articleInfo > .info",i=0,o=document.querySelector(a);if(o)this.isMountedView(e,o)||o.appendChild(e);else{var r=setInterval((function(){(o=document.querySelector(a))?t.isMountedView(e,o)||(o.appendChild(e),clearInterval(r)):i>10&&clearInterval(r)}),n);this.$once("hook:beforeDestroy",(function(){clearInterval(r),r=null}))}},removeElement:function(e){var t=document.querySelector(e);t&&t.parentNode.removeChild(t)},isMountedView:function(e,t){return e.parentNode==t}},beforeMount:function(){clearInterval(this.interval),this.removeElement(".page-view"),this.removeElement(".book-words"),this.removeElement(".reading-time")}},o=n(17),r=Object(o.a)(i,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,null,null);t.default=r.exports}}]);