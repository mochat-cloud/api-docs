# 详情
### `GET`  [已完成]
```
https://demoapi.mo.chat/user/show
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| userId  | Number  | 必填 | 子账户ID[必填] |


#### 响应示例

```json
{
     "userId":"1",                              // 子账户ID
     "userName":"张三",                         // 企业员工姓名
     "phone":" 13988889999",                    // 手机号
     "gender":1,                                // 性别
     "department":                              // 所属部门
     [
         {
             'departmentId':1,
             'departmentName':"技术部",
         }
     ],
     "roleId":1,                                // 角色ID
     "roleName":1,                              // 角色名称
     "status": 1,                               // 状态
}
```