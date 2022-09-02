(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{652:function(t,v,_){"use strict";_.r(v);var a=_(17),d=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"nosql数据库分类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#nosql数据库分类"}},[t._v("#")]),t._v(" NoSQL数据库分类")]),t._v(" "),_("p"),_("div",{staticClass:"table-of-contents"},[_("ul",[_("li",[_("a",{attrs:{href:"#键值数据库"}},[t._v("键值数据库")])]),_("li",[_("a",{attrs:{href:"#列族数据库"}},[t._v("列族数据库")])]),_("li",[_("a",{attrs:{href:"#文档型数据库"}},[t._v("文档型数据库")])]),_("li",[_("a",{attrs:{href:"#图形数据库"}},[t._v("图形数据库")])])])]),_("p"),t._v(" "),_("p",[_("a",{attrs:{href:"http://nosql-database.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("详细信息"),_("OutboundLink")],1)]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("分类")]),t._v(" "),_("th",[t._v("举例")]),t._v(" "),_("th",[t._v("典型应用场景")]),t._v(" "),_("th",[t._v("数据模型")]),t._v(" "),_("th",[t._v("优点")]),t._v(" "),_("th",[t._v("缺点")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("键值数据库")]),t._v(" "),_("td",[_("strong",[t._v("Redis")]),t._v(",Voldemort,Oracle BDB")]),t._v(" "),_("td",[t._v("存储用户信息，比如会话、配置文件、参数、购物车等等。")]),t._v(" "),_("td",[t._v("Key指向Value的键值对，通常用hash table来实现")]),t._v(" "),_("td",[t._v("查找速度快")]),t._v(" "),_("td",[t._v("数据无结构化，通常只能被当做字符串或者二进制数据")])]),t._v(" "),_("tr",[_("td",[t._v("列族数据库")]),t._v(" "),_("td",[t._v("Cassandra,"),_("strong",[t._v("Hbase")]),t._v(",Bigtable")]),t._v(" "),_("td",[t._v("分布式的文件系统")]),t._v(" "),_("td",[t._v("以列簇式存储，将同一列族数据存在一起")]),t._v(" "),_("td",[t._v("吞吐量大，可扩展性强,更容易进行分布式扩展")]),t._v(" "),_("td",[t._v("功能相对局限")])]),t._v(" "),_("tr",[_("td",[t._v("文档型数据库")]),t._v(" "),_("td",[t._v("CouchDB,"),_("strong",[t._v("MongoDB")])]),t._v(" "),_("td",[t._v("Web应用（与Key-Value类似，Value是结构化的，不同的是数据库能够了解Value的内容)")]),t._v(" "),_("td",[t._v("BSON")]),t._v(" "),_("td",[t._v("数据结构要求不严格，表结构可变，不需要像关系型数据库一样需要预先定义表结构")]),t._v(" "),_("td",[t._v("查询性能不高，而且缺乏统一的查询语法。")])]),t._v(" "),_("tr",[_("td",[t._v("图形数据库")]),t._v(" "),_("td",[_("strong",[t._v("Neo4J")]),t._v(",lnfoGrid,lnfiniteGraph")]),t._v(" "),_("td",[t._v("社交网络，推荐系统等。专注于构建关系图谱")]),t._v(" "),_("td",[t._v("图结构")]),t._v(" "),_("td",[t._v("利用图结构相关算法。比如最短路径寻址，N度关系查找等")]),t._v(" "),_("td",[t._v("很多时候需要对整个图做计算才能得出需要的信息，而且这种结构不太好做分布式的集群方案。")])])])]),t._v(" "),_("h2",{attrs:{id:"键值数据库"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#键值数据库"}},[t._v("#")]),t._v(" 键值数据库")]),t._v(" "),_("p",[t._v("键值数据库( Key-Value Database）会使用一个哈希表，这个表中有一个特定的key和一个指针指向特定的value。key可以用来定位value，即存储和检索具体的Value。")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("项目")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("相关产品")]),t._v(" "),_("td",[t._v("Redis、Memcahed、SimpleDB、Riak等等")])]),t._v(" "),_("tr",[_("td",[t._v("数据模型")]),t._v(" "),_("td",[t._v("key-value")])]),t._v(" "),_("tr",[_("td",[t._v("典型应用")]),t._v(" "),_("td",[t._v("内容缓存。会话、配置文件、参数、购物车")])]),t._v(" "),_("tr",[_("td",[t._v("优点")]),t._v(" "),_("td",[t._v("扩展性好、灵活性强、大量写操作时性能高")])]),t._v(" "),_("tr",[_("td",[t._v("缺点")]),t._v(" "),_("td",[t._v("无法存储结构化信息、条件查询效率较低")])]),t._v(" "),_("tr",[_("td",[t._v("使用者")]),t._v(" "),_("td",[t._v("百度云数据库（Redis）、Youtube（Memcached）")])])])]),t._v(" "),_("p",[_("img",{staticClass:"lazy",attrs:{alt:"01","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/NoSQL/images/Nosql2/01.png",loading:"lazy"}})]),t._v(" "),_("h2",{attrs:{id:"列族数据库"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#列族数据库"}},[t._v("#")]),t._v(" 列族数据库")]),t._v(" "),_("p",[t._v("列族数据库采用的是列族数据模型，由多个行构成，每行数据包含多个列族，不同行可以有不同数量的列族。属于同一列族的数据被存在一起。每行数据是通过键值来定位")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("项目")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("相关产品")]),t._v(" "),_("td",[t._v("HBase、BigTable、hadoopDB、Cassandra等等")])]),t._v(" "),_("tr",[_("td",[t._v("数据模型")]),t._v(" "),_("td",[t._v("列族")])]),t._v(" "),_("tr",[_("td",[t._v("典型应用")]),t._v(" "),_("td",[t._v("分布式数据存储于管理")])]),t._v(" "),_("tr",[_("td",[t._v("优点")]),t._v(" "),_("td",[t._v("可扩展性强、容易分布式扩展、复杂性低")])]),t._v(" "),_("tr",[_("td",[t._v("缺点")]),t._v(" "),_("td",[t._v("功能较少、大部分都不支持强事务一致性")])]),t._v(" "),_("tr",[_("td",[t._v("使用者")]),t._v(" "),_("td",[t._v("Facebook（Cassandra）、Yahoo！（HBase）")])])])]),t._v(" "),_("p",[_("img",{staticClass:"lazy",attrs:{alt:"01","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/NoSQL/images/Nosql2/02.png",loading:"lazy"}})]),t._v(" "),_("h2",{attrs:{id:"文档型数据库"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#文档型数据库"}},[t._v("#")]),t._v(" 文档型数据库")]),t._v(" "),_("p",[t._v("数据模型是结构化的文档，半结构化的文档以特定的格式存储，比如JSON。文档型数据库可以看作是键值数据库的升级版，允许之间嵌套键值。")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("项目")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("相关产品")]),t._v(" "),_("td",[t._v("MongoDB、CouchDB、ThruDB等等")])]),t._v(" "),_("tr",[_("td",[t._v("数据模型")]),t._v(" "),_("td",[t._v("版本化的文档")])]),t._v(" "),_("tr",[_("td",[t._v("典型应用")]),t._v(" "),_("td",[t._v("存储、索引并管理面向文档数据或类似半结构化数据。")])]),t._v(" "),_("tr",[_("td",[t._v("优点")]),t._v(" "),_("td",[t._v("性能好、灵活性高、复杂性低、数据结构灵活")])]),t._v(" "),_("tr",[_("td",[t._v("缺点")]),t._v(" "),_("td",[t._v("缺乏统一的查询语法")])]),t._v(" "),_("tr",[_("td",[t._v("使用者")]),t._v(" "),_("td",[t._v("百度云数据库（MongoDB）,SAP（MongoDB）")])])])]),t._v(" "),_("p",[_("img",{staticClass:"lazy",attrs:{alt:"01","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/NoSQL/images/Nosql2/03.png",loading:"lazy"}})]),t._v(" "),_("h2",{attrs:{id:"图形数据库"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#图形数据库"}},[t._v("#")]),t._v(" 图形数据库")]),t._v(" "),_("p",[t._v("图型数据库以图论为基础，一个图是一个数学概念，用来表示一个对象集合，包括顶点及连接顶点的边。图数据库使用图作为数据模型来存储数据。")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("项目")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("相关产品")]),t._v(" "),_("td",[t._v("Neo4j、OrientDB、GraphDB等等")])]),t._v(" "),_("tr",[_("td",[t._v("数据模型")]),t._v(" "),_("td",[t._v("图结构")])]),t._v(" "),_("tr",[_("td",[t._v("典型应用")]),t._v(" "),_("td",[t._v("大量复杂、互连接、低结构化的图结构")])]),t._v(" "),_("tr",[_("td",[t._v("优点")]),t._v(" "),_("td",[t._v("灵活性高、支持复杂的图算法、可以用来构建复杂的关系图谱")])]),t._v(" "),_("tr",[_("td",[t._v("缺点")]),t._v(" "),_("td",[t._v("达观数据（Neo4j）")])])])])])}),[],!1,null,null,null);v.default=d.exports}}]);