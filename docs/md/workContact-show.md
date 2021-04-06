# 查看客户详情
### `GET`  [已完成]
```
https://demoapi.mo.chat/workContact/show
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| contactId  | Number  | 必填 | 客户id |
| employeeId  | Number  | 必填 | 员工id |


#### 响应示例

```json
{
    "name": "啊啊啊",          //名称
    "gender": "1",            //性别（0-未知 1-男性 2-女性）
    "genderText": "男",       //性别
    "remark":"哈哈哈",         //备注名称
    "tag":[                  //标签
             {
                "tagId":"1",   //标签id
                "tagName":"优质客户",   //标签名称
             }
             ......
          ],
    "description":"暂无",       //描述
    "businessNo": "1233333",   //客户编号
    "roomName": [              //所在群
                    "北京地区一群",
                    "北京地区二群",
                    ......
                ],
    "lastContact":"暂无",       //上次联系（本期暂不做）
    "contactTimes":"0",        //联系次数（本期暂不做）
    "employeeName":[          //归属企业成员
                       "MoChat科技--张子阔",
                       ......
                   ]
}
```