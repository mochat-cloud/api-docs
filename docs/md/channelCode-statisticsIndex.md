# 统计分页数据
### `GET`  [已完成]
```
https://demoapi.mo.chat/channelCode/statisticsIndex
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| channelCodeId  | Number  | 必填 | 渠道码ID |
| type  | Number  | 必填 | 统计类型(1-日期2-周3-月) |
| startTime  | String  | 必填 | 开始时间[非必填,type=1必填] |
| endTime  | String  | 必填 | 结束时间[非必填,type=1必填] |
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
             "time":"11",                 // 时间坐标
             "addNumRange": 2,            // 新增客户数
             "defriendNumRange": 2,       // 被客户删除/拉黑的人数
             "deleteNumRange": 2,         // 删除人数
             "netNumRange":2,             // 净增人数
         }
         ......
     ]
}
```