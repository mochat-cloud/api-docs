# 渠道码客户
### `GET`  [已完成]
```
https://demoapi.mo.chat/channelCode/contact
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| channelCodeId  | Number  | 必填 | 渠道码id |
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
                "contactId":"1"               //客户id
                "name":"张子阔"                //客户名称
                "employees": [                //归属成员
                                "张子阔",
                                "王慧"
                             ],
                "createTime":"2020-11-20 16:49:50"   //添加时间
             }
             .....
          ]
}
```