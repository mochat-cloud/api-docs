# 导入客户
### `POST`  [已完成]
```
https://demoapi.mo.chat/contactBatchAdd/importStore
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| tags  | Number[]  | 可选 | 标签ID |
| title  | String  | 必填 | 标题. |
| allotEmployee  | Number[]  | 必填 | 分配员工ID |
| file  | File  | 必填 | 文件 |


#### 响应示例

```json
{
    "code": 200,
    "msg": "",
    "data": {
        "successNum": 3     // 导入成功数量
     }
}
```