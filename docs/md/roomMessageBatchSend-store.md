# 消息列表-消息创建提交
### `POST`  [已完成]
```
https://demoapi.mo.chat/roomMessageBatchSend/store
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| batchTitle  | String  | 必填 | 群发名称 |
| employeeIds  | String  | 必填 | 群主ID多个用英文逗号隔开 |
| sendWay  | Number  | 必填 | 发送方式 |
| definiteTime  | String  | 必填 | 定时发送时间 |


#### 响应示例

```json
{
}
```