# 更新提交
### `PUT`  [已完成]
```
https://demoapi.mo.chat/corp/update
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| corpId  | Number  | 必填 | 企业微信授权ID |
| corpName  | String  | 必填 | 企业名称 |
| wxCorpId  | String  | 必填 | 企业微信ID |
| employeeSecret  | String  | 必填 | 通讯录管理secret |
| contactSecret  | String  | 必填 | 外部联系人管理secret |


#### 响应示例

```json
{
  "code": "200",
  "msg": "成功",
  "data": []
}
```