# 群聊列表下拉框
### `PUT`  [已完成]
```
https://demoapi.mo.chat/workRoom/roomIndex
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| name  | String  | 可选 | 群聊名称 |
| roomGroupId  | Number  | 可选 | 群聊分组id |


#### 响应示例

```json
{
    "total":"10",         //总群聊数
    "list": [
               {
                  "roomId":"11"        //群id
                  "roomName":"群聊一"   //群名称
                  "currentNum":"3"    //当前群人数
                  "roomMax":"200"     //群上限
               },
               ......
            ]
}
```