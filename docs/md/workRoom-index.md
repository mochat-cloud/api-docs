# 列表
### `GET`  [已完成]
```
https://demoapi.mo.chat/workRoom/index
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| roomGroupId  | Number  | 可选 | 客户群分组ID(选择-未分组-传0) |
| workRoomName  | String  | 可选 | 客户群名称 |
| workRoomOwnerId  | Number  | 可选 | 群主ID(多个用英文半角逗号连接) |
| workRoomStatus  | Number  | 可选 | 群状态(0-正常1-跟进人离职2-离职继承中3-离职继承完成) |
| startTime  | String  | 可选 | 开始时间(例：2020-09-01) |
| endTime  | String  | 可选 | 结束时间(例：2020-10-01) |
| page  | Number  | 可选 | 页码 |
| perPage  | Number  | 可选 | 每页条数 |


#### 响应示例

```json
{
    "page":{
        "perPage" : "10",    //每页显示数
        "total" : "1",       //总条数
        "totalPage" : "3",   //总页数
      },
     "list":[
         {
             "workRoomId":"1",                        // 客户群ID
             "memberNum":"10",                        // 客户群成员数量
             "roomName":"客户群",                     // 客户群名称
             "ownerName":"张三",                      // 群主姓名
             "roomGroup":"潜在客户",                  // 所属分组
             "status":"1",                            // 状态枚举
             "statusText":"正常",                     // 状态文本
             "inRoomNum":1,                           // 今日入群数量
             "outRoomNum":20,                         // 今日退群数量
             "notice":"欢迎大家！",                   // 群公告
             "createTime":"2018-11-09 16:52:59",      // 创建时间
         }
         ......
     ]
}
```