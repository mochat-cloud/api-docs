# 会话对象列表
### `GET`  [完成]
```
https://demoapi.mo.chat/workMessage/toUsers
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| workEmployeeId  | Number  | 必填 | 员工ID |
| toUsertype  | Number  | 可选 | 类型 0内部员工 1外部客户 2群 |
| name  | String  | 可选 | 搜索名称/备注 |

#### 响应参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| workEmployeeId  | Number  | 必填 | 员工ID |
| toUsertype  | Number  | 必填 | 类型 0内部员工 1外部客户 2群 |
| toUserId  | Number  | 必填 | 聊天对象的id(员工ID/客户ID/群ID) |
| name  | String  | 必填 | 对方名称 |
| avatar  | String  | 必填 | 对方头像 |
| content  | String  | 必填 | 消息 |
| msgDataTime  | String  | 必填 | 最近一条消息时间 |


#### 响应示例

```json
[{
      "workEmployeeId": 22,
      "toUsertype": 1,
      "toUserId": 1,
      "name": "名称",
      "alias": "别名",
      "avatar": "昵称",
      "content": "....",
      "msgDataTime": "2018-09-18 20:20:30"
 }]
```