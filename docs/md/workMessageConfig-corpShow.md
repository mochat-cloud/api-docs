# 企业信息查看
### `GET`  [完成]
```
https://demoapi.mo.chat/workMessageConfig/corpShow
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| corpId  | Number  | 必填 | 后台企业ID |

#### 响应参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| id  | Number  | 必填 | 会话配置ID |
| name  | String  | 必填 | 企业名称 |
| corpId  | String  | 必填 | 后台企业ID |
| wxCorpid  | String  | 必填 | 微信企业ID |
| socialCode  | String  | 必填 | 企业代码 |
| chatAdmin  | String  | 必填 | 企业负责人 |
| chatAdminPhone  | String  | 必填 | 企业负责人电话 |
| chatAdminIdcard  | String  | 必填 | 企业负责人身份证 |
| chatApplyStatus  | Number  | 必填 | 状态 0未开通 大于1为已开通 |


#### 响应示例

```json
{
    "id": 1,
    "name": "...",
    "corpId": "...",
    "wxCorpid": "...",
    "socialCode": "...",
    "chatAdmin": "...",
    "chatAdminPhone": "...",
    "chatAdminIdcard": "..."
    "chatApplyStatus": "..."
}
```