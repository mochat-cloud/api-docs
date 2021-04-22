# 消息详情-成员详情
### `GET`  [已完成]
```
https://demoapi.mo.chat/contactMessageBatchSend/employeeSendIndex
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| batchId  | Number  | 必填 | 群发ID |
| sendStatus  | Number  | 可选 | 发送状态（0.未发送成员,1.已发送成员,2.发送失败） |
| keyWords  | String  | 可选 | 关键词（成员昵称） |
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
     "list": [
         {
             "id": 1,                            // ID
             "employeeId": 1,                    // 成员Id
             "employeeName": "王朔",              // 成员名称
             "employeeAlias": "王硕",             // 成员别名
             "employeeAvatar": "xxx",             // 成员头像
             "employeeThumbAvatar": "xxx",       // 成员头像缩略图
             "sendContactTotal": 12,             // 发送客户数量
             "status": 1,                        // 发送状态（0.未发送,1.已发送,2.发送失败）
             "sendTime": "2021-03-15 18:29:11", // 发送时间
         }，
        .....
     ]
}
```