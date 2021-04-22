# 删除客户导入
### `DELETE`  [已完成]
```
https://demoapi.mo.chat/contactBatchAdd/importDestroy
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| id  | Number  | 必填 | 导入客户批次ID |


#### 响应示例

```json
{
    "code": 200,
    "msg": "",
    "data": {
        "delRecordNum": 1,  // 删除成功批次数量
        "delContactNum": 2  // 删除成功客户数量
     }
}
```