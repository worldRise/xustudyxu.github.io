(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{577:function(t,s,a){"use strict";a.r(s);var n=a(17),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"sleuth-分布式请求链路追踪"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sleuth-分布式请求链路追踪"}},[t._v("#")]),t._v(" Sleuth 分布式请求链路追踪")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#sleuth是什么"}},[t._v("Sleuth是什么")])]),a("li",[a("a",{attrs:{href:"#sleuth之zipkin搭建安装"}},[t._v("Sleuth之zipkin搭建安装")])]),a("li",[a("a",{attrs:{href:"#sleuth链路监控展现"}},[t._v("Sleuth链路监控展现")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"sleuth是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sleuth是什么"}},[t._v("#")]),t._v(" Sleuth是什么")]),t._v(" "),a("p",[a("strong",[t._v("为什么会出现这个技术？要解决哪些问题？")])]),t._v(" "),a("p",[t._v("在微服务框架中，一个由客户端发起的请求在后端系统中会经过多个不同的的服务节点调用来协同产生最后的请求结果，每一个前段请求都会形成一条复杂的分布式服务调用链路，链路中的任何一环出现高延时或错误都会引起整个请求最后的失败。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"image","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting1@master/20220822/image.5re5bq8z1fc0.webp",loading:"lazy"}})]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"image","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting1@master/20220822/image.6ta641owfto0.webp",loading:"lazy"}})]),t._v(" "),a("p",[a("strong",[t._v("是什么")])]),t._v(" "),a("ul",[a("li",[t._v("https://github.com/spring-cloud/spring-cloud-sleuth")]),t._v(" "),a("li",[t._v("Spring Cloud Sleuth提供了一套完整的服务跟踪的解决方案")]),t._v(" "),a("li",[t._v("在分布式系统中提供追踪解决方案并且兼容支持了zipkin")])]),t._v(" "),a("p",[a("strong",[t._v("解决")])]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"image","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting1@master/20220822/image.7afjeo1qgkg0.webp",loading:"lazy"}})]),t._v(" "),a("p",[t._v("产品调库存，发送链路数据，谁调谁，zipkin就记录下来，以图形或网页的形式展现。")]),t._v(" "),a("blockquote",[a("p",[t._v("sleuth\n英 [sluːθ] 美 [sluːθ]\nn. 侦探")])]),t._v(" "),a("h2",{attrs:{id:"sleuth之zipkin搭建安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sleuth之zipkin搭建安装"}},[t._v("#")]),t._v(" Sleuth之zipkin搭建安装")]),t._v(" "),a("ol",[a("li",[t._v("zipkin")])]),t._v(" "),a("p",[t._v("下载")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("SpringCloud从F版起已不需要自己构建Zipkin Server了，只需调用jar包即可")])]),t._v(" "),a("li",[a("p",[t._v("https://repo1.maven.org/maven2/io/zipkin/zipkin-server/")])]),t._v(" "),a("li",[a("p",[t._v("zipkin-server-2.12.9-exec.jar")])])]),t._v(" "),a("p",[t._v("运行jar")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("java -jar zipkin-server-2.12.9-exec.jar\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("strong",[t._v("运行控制台")])]),t._v(" "),a("p",[t._v("http://localhost:9411/zipkin/")]),t._v(" "),a("p",[a("strong",[t._v("术语")])]),t._v(" "),a("p",[t._v("完整的调用链路")]),t._v(" "),a("p",[t._v("表示一请求链路，一条链路通过Trace ld唯一标识，Span标识发起的请求信息，各span通过parent id关联起来")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"image","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting1@master/20220822/image.6l5xfhx822k0.webp",loading:"lazy"}})]),t._v(" "),a("p",[t._v("—条链路通过Trace ld唯一标识，Span标识发起的请求信息，各span通过parent id关联起来。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"image","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting1@master/20220822/image.122mvcbvbqsg.webp",loading:"lazy"}})]),t._v(" "),a("p",[t._v("整个链路的依赖关系如下：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"image","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting1@master/20220822/image.4sehxbkyiju0.webp",loading:"lazy"}})]),t._v(" "),a("p",[t._v("名词解释")]),t._v(" "),a("ul",[a("li",[t._v("Trace：类似于树结构的Span集合，表示一条调用链路，存在唯一标识")]),t._v(" "),a("li",[t._v("span：表示调用链路来源，通俗的理解span就是一次请求信息")])]),t._v(" "),a("h2",{attrs:{id:"sleuth链路监控展现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sleuth链路监控展现"}},[t._v("#")]),t._v(" Sleuth链路监控展现")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("服务提供者")])]),t._v(" "),a("p",[t._v("cloud-provider-payment8001")]),t._v(" "),a("p",[t._v("POM")]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--包含了sleuth+zipkin--\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.cloud"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-cloud-starter-zipkin"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("YML")]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("application")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cloud"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("payment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("service\n\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("zipkin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#<-------------------------------------关键 ")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("base-url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9411")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sleuth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#<-------------------------------------关键")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sampler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#采样率值介于 0 到 1 之间，1 则表示全部采集")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("probability")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    \n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("datasource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" com.alibaba.druid.pool.DruidDataSource            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 当前数据源操作类型")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("driver-class-name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" org.gjt.mm.mysql.Driver              "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mysql驱动包")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" jdbc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3306/db2019"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("?")]),t._v("useUnicode=true"),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("&characterEncoding=utf-8&useSSL=false")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" root\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hsp\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br")])]),a("p",[t._v("业务类PaymentController")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RestController")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Slf4j")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PaymentController")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    \n \t"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@GetMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/payment/zipkin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("paymentZipkin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hi ,i\'am paymentzipkin server fall back，welcome to here, O(∩_∩)O哈哈~"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("    \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("服务消费者(调用方)")])]),t._v(" "),a("p",[t._v("cloue-consumer-order80")]),t._v(" "),a("p",[t._v("POM")]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.cloud"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-cloud-starter-zipkin"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("YML")]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("application")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cloud"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("order"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("service\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("zipkin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("base-url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9411")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sleuth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sampler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("probability")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("业务类")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ====================> zipkin+sleuth")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@GetMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/consumer/payment/zipkin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("paymentZipkin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" restTemplate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getForObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:8001"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/payment/zipkin/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[a("p",[t._v("依次启动eureka7001/8001/80 - 80调用8001几次测试下")]),t._v(" "),a("ul",[a("li",[t._v("发送请求"),a("a",{attrs:{href:"http://localhost:81/consumer/payment/zipkin",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:81/consumer/payment/zipkin"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[a("p",[t._v("打开浏览器访问: "),a("a",{attrs:{href:"http://localhost:9411",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:9411"),a("OutboundLink")],1)])])]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"image","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting1@master/20220822/image.7dtxh37vn600.webp",loading:"lazy"}})]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"image","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting1@master/20220822/image.72ph5v5byno0.webp",loading:"lazy"}})]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"image","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting1@master/20220823/image.2cfayzjw29hc.webp",loading:"lazy"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);