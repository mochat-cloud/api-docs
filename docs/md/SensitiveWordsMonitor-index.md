# 列表
### `GET`  [已完成]
```
https://demoapi.mo.chat/sensitiveWordsMonitor/index
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| employeeId  | Number  | 可选 | 成员通讯录ID(多个用英文半角逗号连接) |
| workRoomId  | Number  | 可选 | 客户群ID |
| intelligentGroupId  | Number  | 可选 | 分组ID |
| triggerStart  | String  | 可选 | 触发时间-开始 |
| triggerEnd  | String  | 可选 | 触发时间-结束 |
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
             "sensitiveWordMonitorId":"1",                     // 敏感词监控ID
             "sensitiveWordName":"滚蛋",                        // 敏感词
             "source":"1",                                     // 触发来源枚举(1-客户2-员工)
             "sourceText":"客户",                               // 触发来源文本
             "triggerName":"客户",                              // 触发人
             "triggerScenario":"客户",                          // 触发场景
             "triggerTime":"2018-11-09 16:52:59",              // 触发时间
         }
         ......
     ]
}
```