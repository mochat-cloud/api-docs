# 修改客户详情基本信息
### `PUT`  [已完成]
```
https://demoapi.mo.chat/workContact/update
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| contactId  | Number  | 必填 | 客户id |
| employeeId  | Number  | 必填 | 员工id |
| remark  | String  | 可选 | 备注名称 |
| tag  | String[]  | 可选 | 标签id（数组） |
| description  | String  | 可选 | 描述 |
| businessNo  | String  | 可选 | 客户编号 |


#### 响应示例

```json
{
}
```