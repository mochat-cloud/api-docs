# 微信后台配置-步骤动作
### `PUT`  [完成]
```
https://demoapi.mo.chat/workMessageConfig/stepUpdate
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| chatApplyStatus  | Number  | 必填 | (会话内容)申请进度 0未申请 1填写企业信息 2添加客服提交资料 3配置后台 4完成 |
| chatWhitelistIp  | String[]  | 必填 | 白名单IP[可信IP地址] |
| chatRsaKey  | String[]  | 必填 | rsa密钥，详情见下 |
| chatSecret  | String  | 必填 | 会话内容存档secret |
| chatStatus  | String  | 必填 | 存档状态 0不存储 1存储 |


#### 响应示例

```json
{
  "code": "200",
  "msg": "成功",
  "data": []
}
```