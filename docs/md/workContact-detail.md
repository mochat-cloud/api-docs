# 客户详情
### `GET`  [已完成]
```
https://demoapi.mo.chat/workContact/detail
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| wxExternalUserid  | string  | 必填 | 客户微信userid |

#### 响应参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| id  | Number  | 必填 | id |
| name  | String  | 必填 | 名称 |
| avatar  | String  | 必填 | 头像 |
| corpId  | Number  | 必填 | 企业ID |


#### 响应示例

```json
{
    "id": 11,
    "name": "aaa",
    "avatar": "http://....",
    "corpId": 1
}
```