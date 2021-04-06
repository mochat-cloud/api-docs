# 列表
### `GET`  [已完成]
```
https://demoapi.mo.chat/workRoomGroup/index
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
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
             "workRoomGroupId":"1",                   // 客户群分组ID
             "corpId": 10,                            // 企业微信授权ID
             "workRoomGroupName":"潜在组",            // 客户群分组名称
             "createdAt":"2018-11-09 16:52:59",       // 创建时间
         }
         ......
     ]
}
```