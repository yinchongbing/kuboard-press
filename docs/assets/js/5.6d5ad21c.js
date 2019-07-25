(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{114:function(e,t,a){e.exports=a.p+"assets/img/image-20190723121433809.7a1b4b00.png"},115:function(e,t,a){e.exports=a.p+"assets/img/image-20190723115721514.bf981ef3.png"},318:function(e,t,a){e.exports=a.p+"assets/img/image-20190723120730196.9793d8ec.png"},319:function(e,t,a){e.exports=a.p+"assets/img/image-20190723120753533.081b6d6b.png"},320:function(e,t,a){e.exports=a.p+"assets/img/image-20190723120832778.e154bccd.png"},321:function(e,t,a){e.exports=a.p+"assets/img/image-20190723120912377.e1404406.png"},322:function(e,t,a){e.exports=a.p+"assets/img/image-20190723120926747.c9754776.png"},323:function(e,t,a){e.exports=a.p+"assets/img/image-20190723120956821.69bcdbbe.png"},324:function(e,t,a){e.exports=a.p+"assets/img/image-20190723121019167.81af1060.png"},325:function(e,t,a){e.exports=a.p+"assets/img/image-20190723121035917.8a2b1320.png"},326:function(e,t,a){e.exports=a.p+"assets/img/image-20190723121055648.2c6ba8d1.png"},327:function(e,t,a){e.exports=a.p+"assets/img/image-20190723121117514.ef774d3a.png"},328:function(e,t,a){e.exports=a.p+"assets/img/image-20190723121132991.69146097.png"},329:function(e,t,a){e.exports=a.p+"assets/img/image-20190723121412027.6888452e.png"},330:function(e,t,a){e.exports=a.p+"assets/img/image-20190717193548703.5167e3b9.png"},348:function(e,t,a){"use strict";a.r(t);var r=a(0),o=Object(r.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"导入-example-微服务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#导入-example-微服务","aria-hidden":"true"}},[e._v("#")]),e._v(" 导入 example 微服务")]),e._v(" "),r("h2",{attrs:{id:"前提"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前提","aria-hidden":"true"}},[e._v("#")]),e._v(" 前提")]),e._v(" "),r("p",[e._v("必须具备如下条件：")]),e._v(" "),r("ul",[r("li",[e._v("Kubernetes 集群 （安装在阿里云，本文将使用阿里云的 NFS 服务作为存储资源，Kuboard 也可以运行在其他云环境或者私有环境中。）")]),e._v(" "),r("li",[e._v("已在集群中安装 Kuboard")])]),e._v(" "),r("h2",{attrs:{id:"创建存储资源"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#创建存储资源","aria-hidden":"true"}},[e._v("#")]),e._v(" 创建存储资源")]),e._v(" "),r("p",[e._v("example中用到了存储卷声明，请在 Kuboard 中 "),r("a",{attrs:{href:"/guide/cluster/storage?id=%E5%88%9B%E5%BB%BA%E5%AD%98%E5%82%A8%E7%B1%BB"}},[e._v("创建存储类")]),e._v(" ，否则不能完成 example 的导入操作。")]),e._v(" "),r("h2",{attrs:{id:"创建名称空间"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#创建名称空间","aria-hidden":"true"}},[e._v("#")]),e._v(" 创建名称空间")]),e._v(" "),r("p",[e._v("创建新的名称空间，用来导入 exmaple。可参考 "),r("a",{attrs:{href:"/guide/cluster/namespace?id=%E5%88%9B%E5%BB%BA%E5%90%8D%E7%A7%B0%E7%A9%BA%E9%97%B4"}},[e._v("创建名称空间")])]),e._v(" "),r("p",[e._v("假设您已经进入了 Kuboard 名称空间界面，如下图所示：")]),e._v(" "),r("p",[r("img",{attrs:{src:a(115),alt:"image-20190723115721514"}})]),e._v(" "),r("h2",{attrs:{id:"导入-example"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#导入-example","aria-hidden":"true"}},[e._v("#")]),e._v(" 导入 example")]),e._v(" "),r("ul",[r("li",[e._v("下载 "),r("a",{attrs:{href:e.$withBase("/kuboard_example.yaml"),download:"kuboard_example.yaml"}},[e._v("kuboard_example.yaml")]),e._v(" 文件")])]),e._v(" "),r("blockquote",[r("p",[e._v("在 Kuboard 中，您无需手写 yaml 文件，此 yaml 文件的内容生成步骤如下：")]),e._v(" "),r("ul",[r("li",[e._v("通过 "),r("a",{attrs:{href:"busybox"}},[e._v("创建工作负载")]),e._v(" 完成微服务应用的部署")]),e._v(" "),r("li",[e._v("通过 "),r("strong",[e._v("导出工作负载")]),e._v(" 将名称空间中的微服务配置导出到一个 yaml 文件中")])])]),e._v(" "),r("ul",[r("li",[e._v("点击 "),r("em",[r("strong",[e._v("导入工作负载")])]),e._v(" 按钮")])]),e._v(" "),r("p",[r("img",{attrs:{src:a(318),alt:"image-20190723120730196"}})]),e._v(" "),r("ul",[r("li",[r("p",[e._v("点击 "),r("em",[r("strong",[e._v("上传文件")])]),e._v(" 按钮")]),e._v(" "),r("p",[e._v("并选择刚才下载的 export_example.yaml 文件")])])]),e._v(" "),r("p",[r("img",{attrs:{src:a(319),alt:"image-20190723120753533"}})]),e._v(" "),r("ul",[r("li",[r("p",[e._v("点击 "),r("em",[r("strong",[e._v("下一步")])])]),e._v(" "),r("p",[e._v("默认选择所有的工作负载")])])]),e._v(" "),r("p",[r("img",{attrs:{src:a(320),alt:"image-20190723120832778"}})]),e._v(" "),r("ul",[r("li",[r("p",[e._v("点击***下一步***")]),e._v(" "),r("p",[e._v("默认选择所有要导入的配置，example中没有使用到配置信息")])])]),e._v(" "),r("p",[r("img",{attrs:{src:a(321),alt:"image-20190723120912377"}})]),e._v(" "),r("ul",[r("li",[r("p",[e._v("点击 "),r("em",[r("strong",[e._v("下一步")])])]),e._v(" "),r("p",[e._v("默认选择所有 Secrets")])])]),e._v(" "),r("p",[r("img",{attrs:{src:a(322),alt:"image-20190723120926747"}})]),e._v(" "),r("ul",[r("li",[r("p",[e._v("点击***下一步***")]),e._v(" "),r("p",[e._v("填写表单：")])])]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("字段名称")]),e._v(" "),r("th",[e._v("填写内容")]),e._v(" "),r("th",[e._v("说明")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("数据卷类型")]),e._v(" "),r("td",[e._v("db-example-storage")]),e._v(" "),r("td",[e._v("NFS：容器组直连NFS"),r("br"),e._v("存储卷声明：容器组使用存储卷声明")])]),e._v(" "),r("tr",[r("td",[e._v("是否新建存储卷声明")]),e._v(" "),r("td",[e._v("创建新存储卷声明")]),e._v(" "),r("td",[e._v("使用已有存储卷声明：可以使用事先创建好的存储卷声明"),r("br"),e._v("创建新存储卷声明：可以创建新存储卷声明")])]),e._v(" "),r("tr",[r("td",[e._v("分配模式")]),e._v(" "),r("td",[e._v("动态分配")]),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("读写模式")]),e._v(" "),r("td",[e._v("可被多节点读写")]),e._v(" "),r("td",[e._v("只能被单节点读写、可被多节点只读、可被多节点读写")])]),e._v(" "),r("tr",[r("td",[e._v("总量")]),e._v(" "),r("td",[e._v("2Gi")]),e._v(" "),r("td",[e._v("2Gi代表 2G空间")])])])]),e._v(" "),r("p",[r("img",{attrs:{src:a(323),alt:"image-20190723120956821"}})]),e._v(" "),r("ul",[r("li",[r("p",[e._v("点击***下一步***")]),e._v(" "),r("p",[e._v("填写表单：")])])]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("字段名称")]),e._v(" "),r("th",[e._v("填写内容")]),e._v(" "),r("th",[e._v("说明")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("cloud-eureka域名")]),e._v(" "),r("td",[e._v("cloud-eureka.example.demo.eip.work")]),e._v(" "),r("td",[e._v("使用您自己的域名，"),r("br"),e._v("在测试环境建议使用如下域名格式："),r("br"),e._v("workloadname.namespace-name.cluster-name.domain.com"),r("br"),e._v("该域名应该解析到您worker节点的外网地址，或者worker 节点 80/443 端口对应负载均衡服务器的外网地址。")])]),e._v(" "),r("tr",[r("td",[e._v("web-example")]),e._v(" "),r("td",[e._v("web-example.example.demo.eip")]),e._v(" "),r("td")])])]),e._v(" "),r("p",[r("img",{attrs:{src:a(324),alt:"image-20190723121019167"}})]),e._v(" "),r("ul",[r("li",[e._v("点击***下一步***")])]),e._v(" "),r("p",[r("img",{attrs:{src:a(325),alt:"image-20190723121035917"}})]),e._v(" "),r("ul",[r("li",[e._v("点击 "),r("em",[r("strong",[e._v("确定")])])])]),e._v(" "),r("p",[r("img",{attrs:{src:a(326),alt:"image-20190723121055648"}})]),e._v(" "),r("ul",[r("li",[e._v("点击 "),r("em",[r("strong",[e._v("应用")])])])]),e._v(" "),r("p",[r("img",{attrs:{src:a(327),alt:"image-20190723121117514"}})]),e._v(" "),r("ul",[r("li",[e._v("点击 "),r("em",[r("strong",[e._v("完成")])])])]),e._v(" "),r("p",[r("img",{attrs:{src:a(328),alt:"image-20190723121132991"}})]),e._v(" "),r("ul",[r("li",[r("p",[e._v("点击 "),r("em",[r("strong",[e._v("已完成")])])]),e._v(" "),r("p",[e._v("可再名称空间中查看到刚才导入的 example 的所有工作负载及存储卷声明")])])]),e._v(" "),r("p",[r("img",{attrs:{src:a(114),alt:"image-20190723121433809"}})]),e._v(" "),r("h2",{attrs:{id:"验证-web-example"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#验证-web-example","aria-hidden":"true"}},[e._v("#")]),e._v(" 验证 web-example")]),e._v(" "),r("ul",[r("li",[e._v("点击工作负载 "),r("em",[r("strong",[e._v("web-example")])])])]),e._v(" "),r("p",[r("img",{attrs:{src:a(329),alt:"image-20190723121412027"}})]),e._v(" "),r("ul",[r("li",[r("p",[e._v("点击 互联网入口中的域名 "),r("em",[r("strong",[e._v("http://web-example.example.demo.eip.work")])])]),e._v(" "),r("p",[r("strong",[e._v("Example 部署成功")])])])]),e._v(" "),r("p",[r("img",{attrs:{src:a(330),alt:"image-20190717193548703"}})]),e._v(" "),r("blockquote",[r("p",[e._v("web-example容器的日志中会出现如下异常，错误原因是，example使用了一个监控套件，该监控套件要求将容器注册到monitor-eureka中，当下我们并没有安装该监控套件。此错误并不影响 example 程序的使用。暂时忽略该异常。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("[DiscoveryClient-InstanceInfoReplicator-0] WARN com.netflix.discovery.shared.transport.decorator.RetryableEurekaHttpClient - Request execution failed with message: java.net.UnknownHostException: monitor-eureka\n[DiscoveryClient-InstanceInfoReplicator-0] WARN com.netflix.discovery.DiscoveryClient - DiscoveryClient_WEB-ADMIN/web-example-7f668c75db-j7ncx - registration failed Cannot execute request on any known server\ncom.netflix.discovery.shared.transport.TransportException: Cannot execute request on any known server\n        at com.netflix.discovery.shared.transport.decorator.RetryableEurekaHttpClient.execute(RetryableEurekaHttpClient.java:112)\n        at com.netflix.discovery.shared.transport.decorator.EurekaHttpClientDecorator.register(EurekaHttpClientDecorator.java:56)\n        at com.netflix.discovery.shared.transport.decorator.EurekaHttpClientDecorator$1.execute(EurekaHttpClientDecorator.java:59)\n        at com.netflix.discovery.shared.transport.decorator.SessionedEurekaHttpClient.execute(SessionedEurekaHttpClient.java:77)\n        at com.netflix.discovery.shared.transport.decorator.EurekaHttpClientDecorator.register(EurekaHttpClientDecorator.java:56)\n        at com.netflix.discovery.DiscoveryClient.register(DiscoveryClient.java:829)\n        at com.netflix.discovery.InstanceInfoReplicator.run(InstanceInfoReplicator.java:121)\n        at java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:511)\n        at java.util.concurrent.FutureTask.run(FutureTask.java:266)\n        at java.util.concurrent.ScheduledThreadPoolExecutor$ScheduledFutureTask.access$201(ScheduledThreadPoolExecutor.java:180)\n        at java.util.concurrent.ScheduledThreadPoolExecutor$ScheduledFutureTask.run(ScheduledThreadPoolExecutor.java:293)\n        at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\n        at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\n        at java.lang.Thread.run(Thread.java:748)\n[DiscoveryClient-InstanceInfoReplicator-0] WARN com.netflix.discovery.InstanceInfoReplicator - There was a problem with the instance info replicator\ncom.netflix.discovery.shared.transport.TransportException: Cannot execute request on any known server\n        at com.netflix.discovery.shared.transport.decorator.RetryableEurekaHttpClient.execute(RetryableEurekaHttpClient.java:112)\n        at com.netflix.discovery.shared.transport.decorator.EurekaHttpClientDecorator.register(EurekaHttpClientDecorator.java:56)\n        at com.netflix.discovery.shared.transport.decorator.EurekaHttpClientDecorator$1.execute(EurekaHttpClientDecorator.java:59)\n        at com.netflix.discovery.shared.transport.decorator.SessionedEurekaHttpClient.execute(SessionedEurekaHttpClient.java:77)\n        at com.netflix.discovery.shared.transport.decorator.EurekaHttpClientDecorator.register(EurekaHttpClientDecorator.java:56)\n        at com.netflix.discovery.DiscoveryClient.register(DiscoveryClient.java:829)\n        at com.netflix.discovery.InstanceInfoReplicator.run(InstanceInfoReplicator.java:121)\n        at java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:511)\n        at java.util.concurrent.FutureTask.run(FutureTask.java:266)\n        at java.util.concurrent.ScheduledThreadPoolExecutor$ScheduledFutureTask.access$201(ScheduledThreadPoolExecutor.java:180)\n        at java.util.concurrent.ScheduledThreadPoolExecutor$ScheduledFutureTask.run(ScheduledThreadPoolExecutor.java:293)\n        at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\n        at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\n        at java.lang.Thread.run(Thread.java:748)\n")])])])])])},[],!1,null,null,null);t.default=o.exports}}]);