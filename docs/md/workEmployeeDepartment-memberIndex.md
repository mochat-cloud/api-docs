# 根据部门查成员
### `GET`  [已完成]
```
https://demoapi.mo.chat/workEmployeeDepartment/memberIndex
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| departmentIds  | String  | 必填 | 部门id（逗号隔开的字符串 如1,2,3） |


#### 响应示例

```json
[
    {
         "departmentId":"1",             //部门id
         "departmentName":"产品技术部",    //部门名称
         "employeeId":"2",               //成员id
         "employeeName":"张三",           //成员名称
    },
    ......
]
```