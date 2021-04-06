# 敏感词状态修改
### `PUT`  [已完成]
```
https://demoapi.mo.chat/sensitiveWord/statusUpdate
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| sensitiveWordId  | Number  | 必填 | 敏感词ID |
| status  | Number  | 必填 | 状态 1-开启，2-关闭 |


#### 响应示例

```json
{
}
```