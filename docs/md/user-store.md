# 创建提交
### `POST`  [已完成]
```
https://demoapi.mo.chat/user/store
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| userName  | String  | 必填 | 企业成员名称 |
| phone  | String  | 必填 | 手机号(登录账号) |
| gender  | Number  | 必填 | 性别(1-男2-女) |
| roleId  | Number  | 可选 | 角色 |
| status  | Number  | 必填 | 状态(0-未启用1-正常2-禁用) |


#### 响应示例

```json
{
  "code": "200",
  "msg": "成功",
  "data": []
}
```