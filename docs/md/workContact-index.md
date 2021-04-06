# 客户列表
### `GET`  [已完成]
```
https://demoapi.mo.chat/workContact/index
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| keyWords  | String  | 可选 | 关键词（客户姓名、昵称） |
| remark  | String  | 可选 | 备注 |
| fieldId  | String  | 可选 | 用户画像属性id |
| fieldType  | Number  | 可选 | 属性类型（有用户画像属性id时必填） |
| fieldValue  | String  | 可选 | 用户画像筛选值值（有用户画像属性id时必填） |
| gender  | Number  | 可选 | 客户性别（0-未知 1-男性 2-女性 3-全部） |
| addWay  | Number  | 可选 | 客户来源 |
| roomId  | String  | 可选 | 群聊id（逗号分隔的字符串 如1,2,3） |
| groupNum  | String  | 可选 | 客户持群数（0-无群 1-一个 2-多个 3-全部） |
| employeeId  | String  | 可选 | 部门成员id（逗号分隔的字符串 如1,2,3） |
| startTime  | String  | 可选 | 开始时间（如：2020-09-21 11:05:23） |
| endTime  | String  | 可选 | 结束时间（如：2020-09-21 11:05:23） |
| businessNo  | String  | 可选 | 客户编码 |
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
   "syncContactTime":"2020-09-23 15:42:43",    //最后一次同步客户时间
   "list":[
      {
        "id": "1",                      //唯一标识
        "contactId": "1",               //客户id
        "employeeId": "1",              //所属成员id
        "isContact": "1",               //是否是当前登录人的客户（1-是 2-否）
        "avatar": "http://imao.net",    //头像链接
        "gender": "1",                  //性别（0-未知 1-男性 2-女性）
        "genderText": "男",             //性别
        "name": "啊啊啊",                //名称
        "remark": "啊啊啊",              //备注
        "businessNo": "1233333",       //客户编号
        "roomName": [                  //所在群
                        "北京地区一群",
                        "北京地区二群",
                        ......
                    ],
        "addWay": "1",                //来源标识
        "addWayText": "名片分享",       //来源
        "tag":[                       //标签
                  "待开发客户",
                  "优质客户",
                  ......
              ],
        "employeeName": "MoChat科技--张子阔",     //归属成员
        "createTime":"2020-08-11 17:00:09",   //添加时间
      },
      .....
    ]
}
```