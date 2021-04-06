# 查看人员
### `GET`  [完成]
```
https://demoapi.mo.chat/workDepartment/showEmployee
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| departmentId  | Number  | 可选 | 组织ID |
| page  | Number  | 可选 | 页码 |
| perPage  | Number  | 可选 | 每页条数 |


#### 响应示例

```json
{
 "page":{
         "perPage"   : "10",      //每页显示数
         "total"     : "1",       //总条数
         "totalPage" : "3",       //总页数
      },

 "list":[
         {
             "employeeId"    : "11",             //人员id
             "employeeName"  : "张小刚",          //人员姓名
             "phone"         : "188888888888",   //手机号码
             "roleName"      : "技术部主管",      //角色名称
         }
         ......
     ]
}
```