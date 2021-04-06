# 列表
### `GET`  [完成]
```
https://demoapi.mo.chat/medium/index
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| mediumGroupId  | String  | 可选 | 分组ID |
| searchStr  | String  | 可选 | 搜索内容 |
| type  | Number  | 可选 | 类型 0所有 1文本、2图片、3图文、4音频、5视频、6小程序、7文件 |

#### 响应参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| id  | Number  | 必填 | 素材ID |
| title  | String  | 必填 | 标题 |
| type  | Number  | 必填 | 类型 1文本、2图片、3图文、4音频、5视频、6小程序、7文件 |
| content  | String[]  | 必填 | 内容,见下面说明 |
| mediumGroupId  | Number  | 必填 | 素材分组ID |
| mediumGroupName  | String  | 必填 | 素材分组名称 |
| mediaId  | String  | 必填 | wx.media_id |
| userId  | Number  | 必填 | 上传者ID |
| userName  | String  | 必填 | 上传者名称 |
| createdAt  | String  | 必填 | 添加时间 |


#### 响应示例

```json
[{
      "id": 11,
      "title": "...",
      "type": 1,
      "content": {},
      "mediumGroupId": 111,
      "mediumGroupName": "..",
      "userId": 111,
      "userName": "...",
      "createdAt": "2019-2-22",
 }]
```