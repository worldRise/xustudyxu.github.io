(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{726:function(t,a,s){"use strict";s.r(a);var e=s(17),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"python定制篇-apt软件管理和远程登录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#python定制篇-apt软件管理和远程登录"}},[t._v("#")]),t._v(" Python定制篇-APT软件管理和远程登录")]),t._v(" "),s("h2",{attrs:{id:"apt-介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apt-介绍"}},[t._v("#")]),t._v(" apt 介绍")]),t._v(" "),s("p",[t._v("apt 是Advanced Packaging Tool的简称，是一款安装包管理工具。在Ubuntu下，我们可以使用apt命令进行软件包的安装、删除、清理等，类似于Windows 中的软件管理工具。")]),t._v(" "),s("p",[t._v("unbuntu软件管理的原理示意图:")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"01","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Linux/images/17/01.png",loading:"lazy"}})]),t._v(" "),s("h2",{attrs:{id:"ubuntu-软件操作的相关命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-软件操作的相关命令"}},[t._v("#")]),t._v(" Ubuntu 软件操作的相关命令")]),t._v(" "),s("p",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("sudo apt-get update                                            更新源")])],1),t._v(" "),s("p",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("sudo apt-get install package                               安装包")])],1),t._v(" "),s("p",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("sudo apt-get remove package                            删除包")])],1),t._v(" "),s("p",[t._v("sudo apt-cache search package                         搜索软件包")]),t._v(" "),s("p",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("sudo apt-cache show package                           获取包的相关信息，如说明、大小、版本等")])],1),t._v(" "),s("p",[t._v("sudo apt-get install package --reinstall             重新安装包")]),t._v(" "),s("p",[t._v("sudo apt-get -f install                                           修复安装")]),t._v(" "),s("p",[t._v("sudo apt-get remove package --purge              删除包，包括配置文件等")]),t._v(" "),s("p",[t._v("sudo apt-get build-dep package                        安装相关的编译环境")]),t._v(" "),s("p",[t._v("sudo apt-get upgrade                                          更新已安装的包")]),t._v(" "),s("p",[t._v("sudo apt-get dist-upgrade                                  升级系统")]),t._v(" "),s("p",[t._v("sudo apt-cache depends package                     了解使用该包依赖那些包")]),t._v(" "),s("p",[t._v("sudo apt-cache rdepends package                   查看该包被哪些包依赖")]),t._v(" "),s("p",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("sudo apt-get source package                             下载该包的源代码")])],1),t._v(" "),s("h2",{attrs:{id:"更新ubuntu软件下载地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新ubuntu软件下载地址"}},[t._v("#")]),t._v(" 更新Ubuntu软件下载地址")]),t._v(" "),s("h3",{attrs:{id:"寻找国内镜像源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#寻找国内镜像源"}},[t._v("#")]),t._v(" 寻找国内镜像源")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://mirrors.tuna.tsinghua.edu.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("清华大学开源软件镜像站"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("所谓的镜像源:可以理解为提供下载软件的地方，比如Android手机上可以下载软件的安卓市场;iOS手机上可以下载软件的AppStore")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"02","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Linux/images/17/02.png",loading:"lazy"}})]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"02","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Linux/images/17/03.png",loading:"lazy"}})]),t._v(" "),s("h3",{attrs:{id:"备份ubuntu-默认的源地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#备份ubuntu-默认的源地址"}},[t._v("#")]),t._v(" 备份Ubuntu 默认的源地址")]),t._v(" "),s("p",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("sudo cp /etc/apt/sources.list /etc/apt/sources.list.backup")])],1),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"02","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Linux/images/17/04.png",loading:"lazy"}})]),t._v(" "),s("h3",{attrs:{id:"更新源服务器列表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新源服务器列表"}},[t._v("#")]),t._v(" 更新源服务器列表")]),t._v(" "),s("p",[t._v("先清空 sources.list文件复制镜像网站的地址")]),t._v(" "),s("p",[s("strong",[t._v("echo ' ' > sources.list")])]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"02","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Linux/images/17/05.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("复制镜像网站的地址，拷贝到sources.list文件")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"02","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Linux/images/17/06.png",loading:"lazy"}})]),t._v(" "),s("h3",{attrs:{id:"更新源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新源"}},[t._v("#")]),t._v(" 更新源")]),t._v(" "),s("p",[t._v("更新源地址:"),s("strong",[t._v("sudo apt-get update")])]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"02","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Linux/images/17/07.png",loading:"lazy"}})]),t._v(" "),s("h2",{attrs:{id:"ubuntu-软件安装-卸载的最佳实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-软件安装-卸载的最佳实践"}},[t._v("#")]),t._v(" Ubuntu 软件安装，卸载的最佳实践")]),t._v(" "),s("blockquote",[s("p",[t._v("案例说明:使用apt完成安装和卸载vim 软件，并查询vim软件的信息:(因为使用了镜像网站，速度很快)")]),t._v(" "),s("p",[t._v("sudo apt-get remove vim    //删除")]),t._v(" "),s("p",[t._v("sudo apt-get install vim       //安装")]),t._v(" "),s("p",[t._v("sudo apt-cache show vim   //获取软件信息")])]),t._v(" "),s("h2",{attrs:{id:"远程登录-ubuntu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#远程登录-ubuntu"}},[t._v("#")]),t._v(" 远程登录 Ubuntu")]),t._v(" "),s("h3",{attrs:{id:"ssh介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssh介绍"}},[t._v("#")]),t._v(" ssh介绍")]),t._v(" "),s("p",[t._v("SSH为Secure Shell的缩写，由IETF的网络工作小组(Network Working Group)所制\n定;SSH为建立在应用层和传输层基础上的安全协议。")]),t._v(" "),s("p",[t._v("SSH是目前较可靠，专为远程登录会话和其他网络服务提供安全性的协议。常用于远程登录。几乎所有UNIX/LInux平台都可运行SSH。")]),t._v(" "),s("p",[t._v("使用SSH 服务，需要安装相应的服务器和客户端。客户端和服务器的关系：如果，A 机器想被B 机器远程控制，那么，A 机器需要安装SSH 服务器，B 机器需要安装SSH 客户端。")]),t._v(" "),s("p",[t._v("和CentOS 不一样，Ubuntu 默认没有安装SSHD 服务("),s("strong",[t._v("使用netstat 指令查看: 如果netstat显示没有安装，执行apt install net-tools")]),t._v(")，因此，我们不能进行远程登录。")]),t._v(" "),s("h3",{attrs:{id:"原理示意图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原理示意图"}},[t._v("#")]),t._v(" 原理示意图")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"08","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Linux/images/17/08.png",loading:"lazy"}})]),t._v(" "),s("h3",{attrs:{id:"安装ssh和启用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装ssh和启用"}},[t._v("#")]),t._v(" 安装SSH和启用")]),t._v(" "),s("p",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("sudo apt-get install openssh-server")])],1),t._v(" "),s("p",[t._v("执行上面指令后，在当前这台Linux 上就安装了SSH 服务端和客户端。")]),t._v(" "),s("p",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("service sshd restart")])],1),t._v(" "),s("p",[t._v("执行上面的指令，就启动了 sshd 服务。会监听端口22")]),t._v(" "),s("h3",{attrs:{id:"在windows使用xshell7-xftp7登录ubuntu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在windows使用xshell7-xftp7登录ubuntu"}},[t._v("#")]),t._v(" 在Windows使用XShell7/Xftp7登录Ubuntu")]),t._v(" "),s("p",[t._v("前面我们已经安装了XShell7，直接使用即可。")]),t._v(" "),s("p",[t._v("注意：使用frx 用户登录，需要的时候再 su - 切换成root 用户")]),t._v(" "),s("h3",{attrs:{id:"从一台-linux-系统远程登陆另外一台-linux-系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从一台-linux-系统远程登陆另外一台-linux-系统"}},[t._v("#")]),t._v(" 从一台 linux 系统远程登陆另外一台 linux 系统")]),t._v(" "),s("p",[t._v("在创建服务器集群时，会使用到该技术")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("基本语法")]),t._v(" "),s("p",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("ssh 用户名@IP")])],1)])]),t._v(" "),s("p",[t._v("例如：ssh hspedu@192.168.200.130")]),t._v(" "),s("p",[t._v("使用ssh 访问，如访问出现错误。可查看是否有该文件 ～/.ssh/known_ssh 尝试删除该文件解决，一般不会有问题")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("登出")]),t._v(" "),s("p",[t._v("登出命令:"),s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("exit或者logout")])],1)])]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"09","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Linux/images/17/09.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);