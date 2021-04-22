# 消息详情-客户群接收详情
### `GET`  [已完成]
```
https://demoapi.mo.chat/roomMessageBatchSend/roomReceiveIndex
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| batchId  | Number  | 必填 | 群发ID |
| sendStatus  | Number  | 可选 | 发送状态（1.群主已送达,2.群主未发送） |
| keyWords  | String  | 可选 | 关键词（搜素群聊） |
| employeeIds  | String  | 可选 | 群主ID多个用英文逗号隔开 |
| page  | Number  | 必填 | 页码 |
| perPage  | Number  | 必填 | 每页显示条数 |


#### 响应示例

```json
{
     "page":{
         "perPage" : "10",    //每页显示数
         "total" : "1",       //总条数
         "totalPage" : "3",   //总页数
     },
     "list": [                            // 群聊
         {
             "id":                           //消息结果ID
             "roomId":1,                     // 客户群ID
             "roomName":"北京地区一群",        // 客户群名称
             "roomEmployeeNum":1,            // 群聊成员数量
             "roomCreateTime": "2020-01-03 23:33:52", // 群聊创建时间
             "employeeId": 1,                // 成员ID
             "employeeName": "王硕"           // 成员昵称
             "employeeAlias": "别名"          // 成员别名
             "employeeAvatar: "xxx",         // 成员头像
             "employeeThumbAvatar: "xxx",    // 成员头像缩略图
             "status": 1,                         // 发送状态（发送状态 0-未发送 1-已发送 2-因客户不是好友导致发送失败 3-因客户已经收到其他群发消息导致发送失败）
             "sendTime": "2021-03-15 18:29:11",   // 发送时间
         }
         ......
     ],
}
```