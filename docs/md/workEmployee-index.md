# 成员列表
### `GET`  [已完成]
```
https://demoapi.mo.chat/workEmployee/index
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| corpId  | Number  | 必填 | 企业id |
| status  | Number  | 必填 | 成员状态（可选）（1=已激活，2=已禁用，4=未激活，5=退出企业） |
| name  | String  | 必填 | 成员名称（可选） |
| contactAuth  | String  | 必填 | 外部联系人权限（可选） |

#### 响应参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| employeeId  | string  | 必填 | 成员id |
| thumbAvatar  | String  | 必填 | 头像 |
| name  | String  | 必填 | 名称 |
| gender  | String  | 必填 | 性别（0表示未定义，1表示男性，2表示女性） |
| contactAuthName  | String  | 必填 | 外部联系人权限 |
| applyNums  | string  | 必填 | 发起申请数 |
| statusName  | string  | 必填 | 状态 |
| addNums  | Number  | 必填 | 新增客户数 |
| messageNums  | string  | 必填 | 聊天数 |
| sendMessageNums  | String  | 必填 | 发送消息数 |
| replyMessageRatio  | Number  | 必填 | 已回复聊天占比 |
| averageReply  | string  | 必填 | 平均首次回复时长 |
| invalidContact  | String  | 必填 | 删除/拉黑客户数 |


#### 响应示例

```json
{
   "page":{
         "page"   : "1",
         "perPage" : "20",
         "total" : "1",
         "totalPage" : "1"
        },
   "list":[
      {
        "employeeId": "1",
        "thumbAvatar":"http://"
        "name":"名称",
        "statusName": "已激活"
        "gender": "1",
        "applyNums": "5",
        "addNums": "10",
        "messageNums": "12",
        "sendMessageNums": "13",
        "replyMessageRatio":"23%",
        "averageReply":"237.8分钟",
        "invalidContact":"10"
      }
    ]
}
```