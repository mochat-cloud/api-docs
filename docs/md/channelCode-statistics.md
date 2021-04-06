# 统计折线图.
### `GET`  [已完成]
```
https://demoapi.mo.chat/channelCode/statistics
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| channelCodeId  | Number  | 必填 | 渠道码ID |
| type  | Number  | 必填 | 统计类型(1-日期2-周3-月) |
| startTime  | String  | 必填 | 开始时间[非必填,type=1必填] |
| endTime  | String  | 必填 | 结束时间[非必填,type=1必填] |


#### 响应示例

```json
{
    "addNum": 2,            // 今日新增客户数
    "defriendNum": 2,       // 今日被客户删除/拉黑的人数
    "deleteNum": 2,         // 今日删除人数
    "netNum":2,             // 今日净增人数

    "addNumLong": 2,            // 时间段-新增客户数
    "defriendNumLong": 2,       // 时间段-被客户删除/拉黑的人数
    "deleteNumLong": 2,         // 时间段-删除人数
    "netNumLong":2,             // 时间段-净增人数

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