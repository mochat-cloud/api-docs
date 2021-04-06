# 状态修改
### `PUT`  [完成]
```
https://demoapi.mo.chat/contactField/statusUpdate
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| id  | Number  | 必填 | 高级属性ID |
| status  | Number  | 必填 | 状态 0关闭 1开启 |


#### 响应示例

```json
{
  "code": "200",
  "msg": "成功",
  "data": []
}
```