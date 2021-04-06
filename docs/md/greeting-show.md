# 详情
### `GET`  [已完成]
```
https://demoapi.mo.chat/greeting/show
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| greetingId  | Number  | 必填 | 欢迎语ID |


#### 响应示例

```json
{
     "greetingId":"1",                          // 欢迎语ID
     "rangeType":"1",                           // 适用成员类型
     "employees":                               // 适用成员
     [
         {
             "employeeId":"1",
             "employeeName":"张三",
         }
         ...
     ],
     "words":"欢迎",                             // 欢迎语文本
     "mediumId":"1",                            // 素材库ID
     "mediumContent":{},                        // 素材库内容
}
```