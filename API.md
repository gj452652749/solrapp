> 更新时间：2016-04-12

[TOC]
# 基础架构及框架
后端提供restful服务调用接口，前端通过调用restful接口获得返回json/html块，并解析显示

**前端框架：**jquery bootstrap3.x bootstrap-suggest插件(主要是搜索框的搜索建议)

**后端框架：**spring mvc（maven工程，构建restful服务）+ jsoup(用来解析html dom元素)，可以运行src/test/java下面的SearchTest.java看到结果
# 公共错误码
| code		| message |
| :-------- | --------:|
| -1000		|   未知错误	|
| -1001		|   请求ua异常，请求失败|
| -1002 	|   请求缺少参数|
| -1003 	|   请求签名验证失败|
| -1004 	|   请求超时|
| -1005 	|   请求内容不正常  |
| -1006 	|   请求内容不正常  |
| -1007 	|   token超时 |
| -1008 	|   refresh token 不正确|
| -1009 	|   refresh token 超时 |
| -1010 	|   数据库错误 |
| -1111 	|   发生重复  |
| -1212 	|   非法参数  |

###### 返回格式示例
```javascript
{
"d": //数据集合
[
        {
            "return_msg": "ok"
        }
    ],
    "c": 0, //返回码
"info": "0" //额外信息
}
```
---

# 添加google搜索接口
### 请求类型：
###### POST || GET

### 请求地址：
<a href="http://"
target="_blank">http://</a>

### 请求参数

| 参数名 	| 类型	 |	说明	  |	必需	|
| :-------- | --------:|--------:|--------:|
|	type	|int	| 搜索类型(1：google/2：网盘/3：磁力) |	是		|
|	searchword 	|string	| 搜索短语 |	是		|
|	page	|int	| 页码 |	否		|
|	wptype	|int	| 网盘类型(1：全部/2：国内网盘/3：国外网盘)，搜网盘时需要此参数 |	否		|
<font color='red' style='font-size:12pt'>备注</font>

### 返回值
1. json格式，在js里面解析json,并显示
```js
{
    "c": 0,
    "d": [
        {
            "return_msg": "ok"
        }
    ],
    "info": "add ok"
}
```
2. 直接返回google搜索得到的正文部分html（见goguoso_view/search.html），然后在js里面添加返回的html块到dom中

