# 修改设置
### `POST`  [已完成]
```
https://demoapi.mo.chat/contactBatchAdd/settingUpdate
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| pendingStatus  | Number  | 必填 | 待处理客户提醒开关0关1开 |
| pendingTimeOut  | Number  | 必填 | 待处理客户提醒超时天数 |
| pendingReminderTime  | Time  | 必填 | 待处理客户提醒时间 示例（13:01:01） |
| pendingLeaderId  | Number  | 可选 | 待处理客户提醒管理员ID |
| undoneStatus  | Number  | 必填 | 成员未添加客户提醒开关0关1开 |
| undoneTimeOut  | Number  | 必填 | 成员未添加客户提醒超时天数 |
| undoneReminderTime  | Time  | 必填 | 成员未添加客户提醒时间 示例（13:01:01） |
| recycleStatus  | Number  | 必填 | 回收客户开关0关1开 |
| recycleTimeOut  | Number  | 必填 | 客户超过天数回收 |


#### 响应示例

```json
{
    "code": 200,
    "msg": "",
    "data": {
        "status": 1 // 保存成功1失败0
    }
}
```