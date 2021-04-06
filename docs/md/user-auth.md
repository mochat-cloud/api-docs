# 登陆
### `POST`  [完成]
```
https://demoapi.mo.chat/user/auth
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| phone  | String  | 必填 | 手机号 |
| password  | String  | 必填 | 密码 |

#### 响应参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| token  | String  | 必填 | 用户token |
| expire  | String  | 必填 | token失效时间(分钟) |


#### 响应示例

```json
{
    "code": "200",
    "msg": "登陆成功",
    "data": {
        "token": "asdfasdfasdfasdfasdf",
        "expire": "3600"
    }
}
```