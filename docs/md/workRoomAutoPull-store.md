# 创建提交
### `POST`  [已完成]
```
https://demoapi.mo.chat/workRoomAutoPull/store
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| corpId  | Number  | 必填 | 企业微信授信ID |
| qrcodeName  | String  | 必填 | 扫码名称 |
| isVerified  | Number  | 必填 | 添加验证(1-需验证2-直接通过) |
| employees  | String  | 必填 | 使用成员ID(多个英文半角逗号连接) |
| tags  | String  | 必填 | 客户标签ID(多个英文半角逗号连接) |
| leadingWords  | String  | 必填 | 入群引导语 |
| rooms  | Json  | 必填 | 群聊ID(多个英文半角逗号连接) |


#### 响应示例

```json
{
  "code": "200",
  "msg": "成功",
  "data": []
}
```