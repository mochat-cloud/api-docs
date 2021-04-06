# 企业信息添加
### `POST`  [完成]
```
https://demoapi.mo.chat/workMessageConfig/corpStore
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| corpId  | String  | 可选 | 企业ID |
| socialCode  | String  | 必填 | 企业代码 |
| chatAdmin  | String  | 必填 | 企业负责人 |
| chatAdminPhone  | String  | 必填 | 企业负责人电话 |
| chatAdminIdcard  | String  | 必填 | 企业负责人身份证 |
| chatApplyStatus  | Number  | 必填 | 当前申请进度 1填写企业信息 2添加客服提交资料(已经开通会话内容存档功能) 3更新微信后台设置 |

#### 响应参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| id  | Number  | 必填 | 会话配置ID |


#### 响应示例

```json
{
    "id": 1
}
```