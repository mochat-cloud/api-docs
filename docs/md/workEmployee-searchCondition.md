# 成员列表搜索条件数据
### `GET`  [已完成]
```
https://demoapi.mo.chat/workEmployee/searchCondition
```


#### 响应参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| status  | string[]  | 必填 | 状态 |
| syncTime  | String  | 必填 | 最新同步时间 |
| contactAuth  | string[]  | 必填 | 外部联系人 |


#### 响应示例

```json
{
   "status":[
      {
        "id": "1",
        "name": "已激活"
      }
    ]
 "contactAuth":[
      {
        "id": "1",
        "name": "是"
      }
    ]
    "syncTime": "2020-09-19"
}
```