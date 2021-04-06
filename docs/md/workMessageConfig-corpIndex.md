# 列表
### `GET`  [已完成]
```
https://demoapi.mo.chat/workMessageConfig/corpIndex
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| corpName  | String  | 可选 | 企业名称 |
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
             "corpId":"1",                                   // 企业微信授权ID
             "corpName":"华泰汽车",                           // 企业名称
             "wxCorpId":"SX000005",                          // 企业微信ID
             "createdAt":"2018-11-09 16:52:59",              // 创建时间
             "chatApplyStatus":0,                            // 会话存档申请进度
             "chatStatus":1,                                 // 聊天记录存档状态
             "messageCreatedAt":"2018-11-09 16:52:59",       // 聊天记录申请时间
         }
         ......
     ]
}
```