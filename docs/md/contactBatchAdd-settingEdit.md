# 获取设置
### `GET`  [已完成]
```
https://demoapi.mo.chat/contactBatchAdd/settingEdit
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| id  | Number  | 必填 | 导入客户批次ID |

#### 响应参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| delRecordNum  | Number  | 必填 | 删除成功批次数量 |
| delContactNum  | Number  | 必填 | 删除成功客户数量 |


#### 响应示例

```json
{
    "code": 200,
    "msg": "",
    "data": {
        "pendingStatus": 1,                 // 待处理客户提醒开关0关1开
        "pendingTimeOut": 1,                // 待处理客户提醒超时天数
        "pendingReminderTime": "13:00:01",  // 待处理客户提醒时间 示例（13:01:01）
        "pendingLeaderId": 1,               // 待处理客户提醒-管理员ID
        "undoneStatus": 1,                  // 成员未添加客户提醒开关0关1开
        "undoneTimeOut": 1,                 // 成员未添加客户提醒超时天数
        "undoneReminderTime": "13:00:02",   // 成员未添加客户提醒时间 示例（13:01:01）
        "recycleStatus": 1,                 // 回收客户开关0关1开
        "recycleTimeOut": 1,                // 客户超过天数回收
        "pendingLeader": {                  // 员工信息
            "id": 1,                        // 员工ID
            "name": "员工一"                // 员工名
        }
    }
}
```