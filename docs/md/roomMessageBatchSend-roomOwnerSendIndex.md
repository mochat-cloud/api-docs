# 消息详情-客户群接收详情
### `GET`  [已完成]
```
https://demoapi.mo.chat/roomMessageBatchSend/roomOwnerSendIndex
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| batchId  | Number  | 必填 | 群发ID |
| sendStatus  | Number  | 可选 | 发送状态（0.未发送,1.已发送, 2.发送失败） |
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
     "list": [       // 群主发送详情
         {
             "id": 3,                // ID
             "employeeId": "1",      // 成员id
             "employeeName": "产品技术部",    // 成员名称
             "employeeAlias: "张三",       // 成员别名
             "employeeAvatar: "xxx",       // 成员头像
             "employeeThumbAvatar: "xxx",  // 成员头像缩略图
             "sendRoomTotal": 8, // 发送群聊总数
             "sendSuccessTotal: // 已发送群聊总数
             "status": 0, // 发送状态
             "sendTime": "", // 发送时间
         },
         ......
     ]
}
```