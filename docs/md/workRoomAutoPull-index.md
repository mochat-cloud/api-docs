# 列表
### `GET`  [已完成]
```
https://demoapi.mo.chat/workRoomAutoPull/index
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| qrcodeName  | String  | 必填 | 群活码名称[非必填] |
| page  | Number  | 必填 | 页码[非必填] |
| perPage  | Number  | 必填 | 每页条数[非必填] |


#### 响应示例

```json
{
    "page":{
        "perPage" : "10",    //每页显示数
        "total" : "1",       //总条数
        "totalPage" : "3",   //总页数
      },
     "list":[
         {
             "workRoomAutoPullId":"1",                // 自动拉群ID
             "qrcodeUrl":"http://",                   // 二维码地址
             "qrcodeName":"客户群",                   // 群名称
             "contactNum":"1",                        // 客户数
             "createdAt":"2018-11-09 16:52:59",       // 创建时间
             "employees":[                            // 使用成员
                  "李三",
                  "李三",
             ],
             "tags":[                                 // 标签
                  "新标签",
                  "新标签",
              ],
             "rooms": [                                // 群聊
                 {
                     "roomName":"北京地区一群",   // 群名称
                     "stateText":"1",             // 群状态文本
                  }
                  ......
              ],

           }
           ......
     ]
}
```