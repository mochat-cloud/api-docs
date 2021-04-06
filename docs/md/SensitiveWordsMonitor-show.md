# 触发敏感词对话详情.
### `GET`  [已完成]
```
https://demoapi.mo.chat/sensitiveWordsMonitor/show
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| sensitiveWordsMonitorId  | Number  | 必填 | 敏感词监控ID |

#### 响应参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| sender  | String  | 必填 | 发送人名称 |
| msgType  | Number  | 必填 | 类型 1文本、2图片、3图文、4音频、5视频、6小程序、7文件 100其它 |
| sendTime  | String  | 必填 | 消息时间 |
| isTrigger  | Number  | 必填 | 是否触发敏感词 |
| msgContent  | String[]  | 必填 | 消息内容，详情见下面例子 |


#### 响应示例

```json
{
      "content": "你好啊"
 }
```