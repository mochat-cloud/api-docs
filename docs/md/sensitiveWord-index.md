# 敏感词列表
### `GET`  [已完成]
```
https://demoapi.mo.chat/sensitiveWord/index
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| keyWords  | String  | 可选 | 关键字 |
| groupId  | Number  | 可选 | 分组id |
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
             "sensitiveWordId"   :  1,                       // 敏感词id
             "name"              :  "公安部受到粉丝的",        // 敏感词名称
             "employeeNum"       :  "技术主管",               // 员工触发次数
             "contactNum"        :  "10",                    // 客户触发次数
             "createdAt"         :  "2018-08-25 14:54",      // 创建时间
             "status"            :  "1",                     // 状态 1-开启,2-关闭
         }
         ......
     ]
}
```