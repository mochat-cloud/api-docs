# 流失客户列表
### `GET`  [已完成]
```
https://demoapi.mo.chat/workContact/lossContact
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| employeeId  | String  | 可选 | 部门成员id（逗号分隔的字符串 如1,2,3） |
| page  | Number  | 可选 | 页码 |
| perPage  | Number  | 可选 | 每页显示数 |


#### 响应示例

```json
{
   "page":{
         "perPage" : "20",    //每页显示数
         "total" : "1",       //总条数
         "totalPage" : "1",   //总页数
        },
   "list":[
      {
        "id": "1",                      //唯一标识
        "contactId": "1",               //客户id
        "avatar": "http://imao.net",    //头像链接
        "nickName": "啊啊啊",            //昵称
        "tag":[                        //标签
                  "待开发客户",
                  "优质客户",
                  ......
              ],
        "employeeName":[               //归属成员
                           "MoChat科技--张子阔",
                           ......
                       ],
        "remark":"张子阔",             //备注(显示删除该客户的操作的姓名)
        "deletedAt":"2020-08-11 17:00:09",   //删除时间
      },
      .....
    ]
}
```