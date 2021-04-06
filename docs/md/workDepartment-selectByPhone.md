# 根据手机号匹配成员部门下拉列表.
### `GET`  [已完成]
```
https://demoapi.mo.chat/workDepartment/selectByPhone
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| phone  | String  | 必填 | 手机号 |
| type  | Number  | 可选 | 获取数据类型(1-全部2-当前企业,默认:1) |


#### 响应示例

```json
{
     [
         {
             "corpId":"1",                             // 企业微信授权ID
             "workDepartmentId":"1",                   // 成员部门ID
             "workDepartmentName":"技术部",             // 成员部门名称
         }
         ......
     ]
}
```