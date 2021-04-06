# 应用验证
### `GET`  @apiGroup 企业应用
```
https://demoapi.mo.chat/agent/oauth
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| agentId  | String  | 必填 | 应用ID(以下所有在地址URL获取) |
| isJsRedirect  | String  | 必填 | 是否跳转回本页面 |
| act  | String  | 必填 | 跳转回本页面时带的自定义参数，如客户标识，素材库标识 |

#### 响应参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| url  | String  | 必填 | 构造的网页授权链接 |


#### 响应示例

```json
{
    "url": "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxCorpId&redirect_uri=http%3a%2f%2fapi.3dept.com%2fcgi-bin%2fquery%3faction%3dget&response_type=code&scope=snsapi_base&state=#wechat_redirect"
}
```