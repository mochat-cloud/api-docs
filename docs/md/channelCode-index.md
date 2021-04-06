# 渠道码列表
### `GET`  [已完成]
```
https://demoapi.mo.chat/channelCode/index
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| name  | String  | 可选 | 活码名称 |
| type  | Number  | 可选 | 活码类型（0-全部 1-单人 2-多人） |
| groupId  | Number  | 可选 | 分组id |
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
        "channelCodeId": "1",         //渠道码id
        "qrcodeUrl":"http://",        //二维码地址
        "name": "1",                  //名称
        "type": "单人",                //活码类型
        "groupName": "啊啊啊",         //分组名称
        "contactNum": "3",            //客户数
        "tag":[                       //标签
                  "待开发客户",
                  "优质客户",
                  ......
              ],
        "autoAddFriend": "自动通过",    //自动添加好友
      },
      .....
    ]
}
```