# 查看
### `GET`  [完成]
```
https://demoapi.mo.chat/medium/show
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| id  | Number  | 必填 | 素材ID |

#### 响应参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| id  | Number  | 必填 | 素材ID |
| corpId  | Number  | 必填 | 企业ID |
| type  | Number  | 必填 | 类型 1文本、2图片、3图文、4音频、5视频、6小程序、7文件 |
| content  | String[]  | 必填 | 详情,见下面说明 |
| mediumGroupId  | Number  | 必填 | 素材分组ID |


#### 响应示例

```json
{
      "id": 11,
      "corpId": 111,
      "type": 1,
      "content": {},
      "mediumGroupId": 111,
 }
```