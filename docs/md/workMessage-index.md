# 列表
### `GET`  [已完成] (分页参数见公共部分)
```
https://demoapi.mo.chat/workMessage/index
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| workEmployeeId  | Number  | 必填 | 员工ID |
| type  | Number  | 可选 | 类型 0所有 1文本、2图片、3图文、4音频、5视频、6小程序、7文件 100其它 |
| toUserType  | Number  | 必填 | 类型 0内部员工 1外部客户 2群 |
| toUserId  | Number  | 必填 | 聊天对象的id(员工ID/客户ID/群ID) |
| content  | Number  | 可选 | 聊天内容 |
| dateTimeStart  | Number  | 可选 | 聊天内容开始时间 |
| dateTimeEnd  | Number  | 可选 | 聊天内容结束时间 |

#### 响应参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| action  | Number  | 必填 | 消息动作 0.send(发送消息) 1.recall(撤回消息) 2.switch(切换企业日志) |
| name  | String  | 必填 | 发送人名称 |
| avatar  | String  | 必填 | 发送人头像 |
| isCurrentUser  | Number  | 必填 | 是否为聊天当时人 0否 1是 |
| type  | Number  | 必填 | 类型 1文本、2图片、3图文、4音频、5视频、6小程序、7文件 100其它 |
| content  | String[]  | 必填 | 消息内容，详情见下面例子 |
| msgDataTime  | String  | 必填 | 消息时间 |


#### 响应示例

```json
[{
      "action": 1,
      "name": "昵称",
      "avatar": "http://path/a.jpg",
      "isCurrentUser": 1,
      "type": 1,
      "content": {},
      "msgDataTime": "2018-09-18 20:20:30"
 }]
```