# 详情
### `GET`  [已完成]
```
https://demoapi.mo.chat/corp/show
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| corpId  | Number  | 必填 | 企业微信授权ID |


#### 响应示例

```json
{
     "corpId":"1",                              // 企业微信授权ID
     "corpName":"华泰汽车",                     // 企业名称
     "wxCorpId":" 14",                          // 企业微信ID
     "employeeSecret":"91110000101174712L",     // 通讯录管理secret
     "contactSecret":"1",                       // 外部联系人管理secret
     "event_callback":"http://www.xxx.com",    // 通讯录事件服务器URL
     "token":"200000",                          // Token
     "encodingAesKey":"2000000",                // EncodingAESKey
}
```