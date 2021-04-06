# 应用验证-js回调
### `GET`  @apiGroup 企业应用
```
https://demoapi.mo.chat-侧边栏域名+/codeAuth
```


#### 响应参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| callValues  | String  | 必填 | 回调参数.base64(json(val)) |
| callValues.data  | String  | 必填 | 回调参数-具体数据 |
| callValues.data.corpId  | String  | 必填 | 企业ID |
| callValues.data.token  | String  | 必填 | 用户token |
| callValues.data.expire  | String  | 必填 | token失效时间 |
| callValues.data.agentId  | String  | 必填 | 应用ID |
| callValues.data.isJsRedirect  | String  | 必填 | 是否跳转回本页面 |
| callValues.data.act  | String  | 必填 | 跳转回本页面时带的自定义参数，如客户标识，素材库标识 |


#### 响应示例

```json
{
    "callValues": "%7B%0A++++%22code%22%3A+200%2C%0A++++%22msg%22%3A+%22%22%2C%0A++++%22data%22%3A+%7B%0A++++++++%22agentId%22%3A+%221%22%2C%0A++++++++%22act%22%3A+%22mediumGroup%22%2C%0A++++++++%22token%22%3A+%22asdfasdfasdfa%22%2C%0A++++++++%22expire%22%3A+3600%0A++++%7D%0A%7D"
}
```