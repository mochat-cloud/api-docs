# 新建客户群分组提交
### `POST`  [已完成]
```
https://demoapi.mo.chat/workRoomGroup/store
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| corpId  | Number  | 必填 | 企业微信授权ID |
| workRoomGroupName  | String  | 必填 | 客户群分组名称 |


#### 响应示例

```json
{
  "code": "200",
  "msg": "成功",
  "data": []
}
```