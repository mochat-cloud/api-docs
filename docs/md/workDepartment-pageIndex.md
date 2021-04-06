# 部门列表分页
### `GET`  [完成]
```
https://demoapi.mo.chat/workDepartment/pageIndex
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| name  | String  | 可选 | 组织名称 |
| parentName  | String  | 可选 | 上级组织名称 |
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
             "departmentPath":  "1-1",                    // 序号
             "departmentId"  :  1,                        // 组织id
             "name"          :  "公安部门",                // 组织架构名称
             "level"         :  "一级部门",                // 部门级别
             "parentId"      :  "0",                      // 父级id
             "children"      :  [                         // 子级数组
                 {
                     "departmentPath":  "1-1",                    // 序号
                     "departmentId"  :  1,                        // 组织id
                     "name"          :  1,                        // 组织架构名称
                     "level"         :  "二级部门",                // 部门级别
                     "parentId"      :  "1",                      // 父级id
                     "children"      : []                         // 子级数组
                 }
                 ......
             ]

         }
         ......
     ]
}
```