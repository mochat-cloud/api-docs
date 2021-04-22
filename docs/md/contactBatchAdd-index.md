# 客户列表
### `GET`  [已完成]
```
https://demoapi.mo.chat/contactBatchAdd/index
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| status  | Number  | 可选 | 状态0未分配1待添加2待通过3已添加 |
| searchKey  | String  | 可选 | 搜索关键字（客户手机号[四位数字及以上有效]/客户备注/员工名模糊搜索）. |
| recordId  | Number  | 可选 | 指定导入批次ID（适用于导入批次查看详情） |


#### 响应示例

```json
{
    "code": 200,
    "msg": "",
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 45,                           // 导入客户ID
                "recordId": 26,                     // 导入批次ID
                "phone": "13900139000",             // 导入客户手机号
                "uploadAt": "2021-03-31 17:58:22",  // 导入时间
                "status": 1,                        // 状态0未分配1待添加2待通过3已添加
                "addAt": "2021-03-31 17:58:22",     // 添加客户时间
                "employeeId": 3,                    // 员工ID
                "allotNum": 1,                      // 分配次数
                "remark": "王武",                   // 客户备注
                "tags": [                           // 标签数组
                    {
                        "id": 1,                    // 标签ID
                        "name": "标签名"            // 标签名
                    }
                ],
                "allotEmployee": {                  // 员工资料数组
                    "id": 3,                        // 员工ID
                    "name": "张员工"                // 员工名
                }
            }
        ],
        "first_page_url": "http://127.0.0.1:9510/contactBatchAdd/index?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://127.0.0.1:9510/contactBatchAdd/index?page=1",
        "next_page_url": null,
        "path": "http://127.0.0.1:9510/contactBatchAdd/index",
        "per_page": 15,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}
```