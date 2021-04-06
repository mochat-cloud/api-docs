# 列表
### `GET`  [已完成]
```
https://demoapi.mo.chat/user/index
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| phone  | String  | 可选 | 账户手机号 |
| status  | Number  | 可选 | 账户状态(0-未启用1-正常2-禁用) |
| page  | Number  | 可选 | 页码 |
| perPage  | Number  | 可选 | 每页条数 |


#### 响应示例

```json
{
    "notEnabledNum" : 10,          // 未启用数量
    "normalNum" : 10,              // 正常数量
    "disableNum" : 10,             // 禁用数量
    "page":{
        "perPage" : "10",    //每页显示数
        "total" : "1",       //总条数
        "totalPage" : "3",   //总页数
      },
    "list":[
         {
             "userId":1,                           // 账户ID
             "userName":"华泰汽车",                 // 企业成员名称
             "department":                         // 所属部门
             [
                 {
                     'departmentId':1,
                     'departmentName':"技术部",
                 }
             ],
             "roleName":"部长",                     // 角色
             "phone":"13962274931",                // 手机号[登录账号]
             "status":1,                           // 状态
             "statusText":"启用",                   // 状态文本
             "createdAt":"2018-11-09 16:52:59",    // 创建时间
         }
         ......
     ]
}
```