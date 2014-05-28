fis-pure-demo
=====================================

## 安装fis-pure

```bash
npm install -g fis-pure
```

安装成功后执行 ``pure -h`` 即可看到相关开发命令帮助

## 让代码跑起来！

首先，启动内置的调试服务器：

```bash
pure server start
```

此时fis会启动一个精巧的jetty服务器，并且打开浏览器访问了 http://127.0.0.1:8080 ，现在这个调试环境什么也没有，接下来，我们在命令行下cd到我们下载的样例项目中：

```bash
cd fis-pure-demo
```

第三步，执行fis的编译命令：

```bash
pure release
```

第四步，刷新浏览器，查看我们的项目。

可以看到所有的模块化资源均已自动加载进来了

第五步，优化性能

虽然目前项目可以正常运行，但是这种加载方式会造成连接数过多，让我们调整参数，对资源进行自动合并

```bash
pure release -p
```

再次浏览页面，我们可以发现原有的大量静态资源已经自动合并。

## 目录规范

任何 ``目录规范``、``部署规范``、``编译规范`` 都是可配置的（[配置代码](https://github.com/fex-team/fis-pure/blob/master/pure.js#L28-L67)），这里只介绍内置的规范。

**注意**

如果希望调整目录规范，建议将[配置代码](https://github.com/fex-team/fis-pure/blob/master/pure.js#L28-L67)中roadmap.path的部分整体复制到项目的fis-conf.js中再进行调整，避免配置不符合预期的问题。

内置的规范包括：

1. 扔在 ``modules`` 目录下的js、css、less、coffee文件都是模块化文件，会自动包装define，自己就不要写了。使用require.async或者require加载模块的时候id与文件的对应规则是这样的：
<table>
    <tr>
        <td>文件</td>
        <td>引用id</td>
        <td>举个例子</td>
    </tr>
    <tr>
        <td>/modules/a.js</td>
        <td>a</td>
        <td>require.async('a');</td>
    </tr>
    <tr>
        <td>/modules/b/b.js</td>
        <td>b</td>
        <td>require.async('b');</td>
    </tr>
    <tr>
        <td>/modules/b/c.js</td>
        <td>b/c</td>
        <td>require.async('b/c');</td>
    </tr>
</table>
1. 扔在 ``lib`` 目录下的文件不被认为是模块化的，请直接在页面上使用script或link标签引用。