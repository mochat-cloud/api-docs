# 批量修改客户群分组
### `PUT`  [已完成]
```
https://demoapi.mo.chat/workRoom/batchUpdate
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| workRoomGroupId  | Number  | 必填 | 客户群分组ID |
| workRoomIds  | String  | 必填 | 客户群ID(多个英文半角逗号连接) |


#### 响应示例

```json
{
  "code": "200",
  "msg": "成功",
  "data": []
}
```