# 消息列表
### `GET`  [已完成]
```
https://demoapi.mo.chat/contactMessageBatchSend/index
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| page  | Number  | 必填 | 页码 |
| perPage  | Number  | 必填 | 每页显示条数 |


#### 响应示例

```json
"page":{
    "perPage" : "10",    //每页显示数
    "total" : "1",       //总条数
    "totalPage" : "3",   //总页数
},
"list": [
    {
        "id": 1,
        "sendWay": 1,   // 群发类型
        "sendTime": "2021-03-22 02:13:50",  // 发送时间
        "content": [
            {
                "msgType: "image",      消息类型
                "text: {
                    "content": "",
                },          传入时存在，文本消息内容
                "image": {
                    "media_id": "MEDIA_ID",
                    "pic_url":"http://p.qpic.cn/pic_wework/3474110808/7a6344sdadfwehe42060/0"
                },          传入时存在，类型为image时返回
                "link": {
                    "title": "消息标题",
                    "picurl": "https://example.pic.com/path",
                    "desc": "消息描述",
                    "url": "https://example.link.com/path"
                },          传入时存在，类型为link时返回
                "miniprogram": {
                    "title": "消息标题",
                    "pic_media_id": "MEDIA_ID",
                    "appid": "wx8bd80126147dfAAA",
                    "page": "/path/index.html"
                }           传入时存在，类型为miniprogram时返回
            }
        ],                             // 群发消息
        "sendTotal": 1, // 已发送数量
        "notSendTotal": 0,  // 未发送数量
        "receivedTotal": 2, // 送达客户
        "notReceivedTotal": 0,  // 未送达客户
        "definiteTime": "2021-03-22 02:02:00",  // 定时发送时间
        "sendStatus": 1,        // 发送状态
        "createdAt": "2021-03-22 02:13:49"      // 创建时间
    },
    ......
]
```