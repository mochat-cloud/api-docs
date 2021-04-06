# 微信后台配置-步骤页面
### `GET`  [完成]
```
https://demoapi.mo.chat/workMessageConfig/stepCreate
```


#### 响应参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| id  | Number  | 必填 | 会话配置ID |
| chatApplyStatus  | Number  | 必填 | (会话内容)申请进度 0未申请 1填写企业信息 2添加客服提交资料 3配置后台 4完成 |
| corpName  | String  | 必填 | 企业名称 |
| wxCorpId  | String  | 必填 | 微信企业ID |
| serviceContactUrl  | String  | 必填 | 客服联系方式(图片) |
| chatWhitelistIp  | String[]  | 必填 | 白名单IP[可信IP地址] |
| rsaPublicKey  | String  | 必填 | 公钥 |
| rsaPrivateKey  | String  | 必填 | 私钥 |


#### 响应示例

```json
{
    "id": 1,
    "chatApplyStatus"： 0,
    "corpName"： "测试企业",
    "wxCorpId"： "wxdkdkfje9sd0fd9asdf0",
    "serviceContactUrl": "http://test.com/a.jpg",
    "chatWhitelistIp": ["192.168.0.12", "192.168.0.13"],
    "rsaPublicKey": "...",
    "rsaPrivateKey": "..."
}
```