# 列表
### `GET`  [已完成]
```
https://demoapi.mo.chat/workContactTag/index
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| page  | Number  | 可选 | 页码 |
| perPage  | Number  | 可选 | 每页显示数 |
| groupId  | Number  | 可选 | 分组id |


#### 响应示例

```json
 {
    "page":{
              "perPage" : "20",    //每页显示数
              "total" : "1",       //总条数
              "totalPage" : "1",   //总页数
           },
    "syncTagTime":"2020-09-23 15:42:43",    //最后一次同步标签时间
    "list":[
              {
                 "id":"11"      //标签id
                 "name":"优质"   //标签名称
                 "contactNum":"3"  //客户数
              },
              ......
           ]
}
```