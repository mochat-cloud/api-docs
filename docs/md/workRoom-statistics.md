# 统计折线图.
### `GET`  [已完成]
```
https://demoapi.mo.chat/workRoom/statistics
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| workRoomId  | Number  | 必填 | 客户群ID |
| type  | Number  | 必填 | 统计类型(1-日期2-周3-月) |
| startTime  | String  | 必填 | 开始时间[非必填,type=1必填] |
| endTime  | String  | 必填 | 结束时间[非必填,type=1必填] |


#### 响应示例

```json
{
    "addNum": 2,       // 今日新增成员数
    "outNum": 2,       // 今日退群成员数
    "total": 2,        // 当前群成员数
    "outTotal":2,      // 累计退群成员数

    "addNumRange": 2,       // 当前时间段新增成员数
    "outNumRange": 2,       // 当前时间段退群成员数

    "list":[
         {
             "time":"11",                             // 时间坐标
             "addNum":"10",                           // 新增成员数量
             "outNum":"11",                           // 退群成员数量
         }
         ......
     ]
}
```