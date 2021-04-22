# 消息列表-提醒发送
### `POST`  [已完成]
```
https://demoapi.mo.chat/contactMessageBatchSend/remind
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| batchId  | Number  | 必填 | 群发ID |
| batchEmployIds  | string  | 可选 | 群发成员ID,多个用英文逗号隔开 |


#### 响应示例

```json
{
}
```