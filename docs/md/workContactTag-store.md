# 新增标签
### `POST`  [已完成]
```
https://demoapi.mo.chat/workContactTag/store
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| groupId  | Number  | 必填 | 分组id（未分组传0） |
| tagName  | String[]  | 必填 | 标签名称（传数组） |


#### 响应示例

```json
{
}
```