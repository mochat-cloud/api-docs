# JSSDK-企业、企业应用配置参数
### `GET`  @apiGroup 侧边栏-JSSDK
```
https://demoapi.mo.chat/wxJsSdk/config
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| corpId  | Number  | 必填 | 企业ID(以下所有在地址URL获取) |
| uriPath  | String  | 可选 | 当前页面的uri.path部分 |
| agentId  | Number  | 可选 | 应用ID(不传时为企业config，传时为应用config) |

#### 响应参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| appid  | String  | 必填 | 企业ID |
| corpid  | String  | 必填 | 企业ID |
| agentid  | String  | 必填 | 应用ID |
| nonceStr  | String  | 必填 | 生成签名的随机串 |
| timestamp  | String  | 必填 | 生成签名的时间戳 |
| signature  | String  | 必填 | 签名 |
| beta  | bool  | 必填 | true |
| debug  | bool  | 必填 | 调试 |
| jsApiList  | String[]  | 必填 | 需要使用的JS接口列表 |


#### 响应示例

```json
{
    "appid": "",
    "corpid": "",
    "agentid": "",
    "nonceStr": "",
    "timestamp": "",
    "signature": "",
}
```