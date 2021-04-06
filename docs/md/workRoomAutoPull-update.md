# 更新提交.
### `PUT`  [已完成]
```
https://demoapi.mo.chat/workRoomAutoPull/update
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| workRoomAutoPullId  | Number  | 必填 | 自动拉群ID[必填] |
| isVerified  | Number  | 必填 | 添加验证(1-需验证2-直接通过) |
| employees  | String  | 必填 | 使用成员ID(多个英文半角逗号连接) |
| tags  | String  | 必填 | 客户标签ID(多个英文半角逗号连接) |
| rooms  | String  | 必填 | 群聊ID(多个英文半角逗号连接) |


#### 响应示例

```json
{
  "code": "200",
  "msg": "成功",
  "data": []
}
```