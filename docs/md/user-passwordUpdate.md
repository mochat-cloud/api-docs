# 更新员工账户登录密码
### `PUT`  [已完成]
```
https://demoapi.mo.chat/user/passwordUpdate
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| oldPassword  | String  | 必填 | 旧密码 |
| newPassword  | String  | 必填 | 新密码 |
| againNewPassword  | String  | 必填 | 确认新密码 |


#### 响应示例

```json
{
  "code": "200",
  "msg": "成功",
  "data": []
}
```