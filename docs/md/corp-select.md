# 企业下拉列表.
### `GET`  [已完成]
```
https://demoapi.mo.chat/corp/select
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| corpName  | String  | 可选 | 企业名称 |


#### 响应示例

```json
{
     [
         {
             "corpId":"1",                            // 企业微信授权ID
             "corpName":"华泰汽车",                   // 企业名称
         }
         ......
     ]
}
```