# 上传
### `POST`  [完成]
```
https://demoapi.mo.chat/common/upload
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| file  | File  | 必填 | 文件 |
| name  | File  | 可选 | 文件名称 |
| path  | String  | 可选 | 文件目录path |

#### 响应参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| name  | String  | 必填 | 文件名称 |
| mimeType  | String  | 必填 | 文件mime类型 |
| path  | String  | 必填 | url.path |
| fullPath  | String  | 必填 | url |


#### 响应示例

```json
{
    "code": "200",
    "msg": "上传成功",
    "data": {
        "name": "a",
        "mimeType": "image/jpg",
        "path": "/path/a.jpg",
        "fullPath": "https://path/a.jpg"
    }
}
```