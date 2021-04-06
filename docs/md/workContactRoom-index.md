# 客户群成员管理-列表
### `GET`  [已完成]
```
https://demoapi.mo.chat/workContactRoom/index
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| workRoomId  | Number  | 必填 | 客户群ID |
| status  | Number  | 可选 | 成员状态(1-正常2-退群) |
| name  | String  | 可选 | 成员名称 |
| startTime  | String  | 可选 | 开始时间 |
| endTime  | String  | 可选 | 结束时间 |
| page  | Number  | 可选 | 页码 |
| perPage  | Number  | 可选 | 每页条数 |


#### 响应示例

```json
{
    "inRoomNum" : 15,        // 当前群成员数量
    "outRoomNum" : 15,       // 累计退群成员数量
    "page":{
        "perPage" : "10",    //每页显示数
        "total" : "1",       //总条数
        "totalPage" : "3",   //总页数
      },
     "list":[
         {
             "workContactRoomId":"1",                   // 客户群成员ID
             "name": "我是谁",                          // 成员名称
             "avatar": "我是谁",                        // 成员头像地址
             "isOwner":1,                               // 是否是群主(1-是2-否)
             "joinTime":"2018-11-09 16:52:59",          // 入群时间
             "otherRooms": [ '开发群', '产品群'],       // 所在其它群
             "outRoomTime":"2018-11-09 16:52:59",       // 退群时间
             "joinScene":1,                             // 入群方式枚举
             "joinSceneText":"其它",                    // 入群方式文本
         }
         ......
     ]
}
```