# 编辑标签
### `PUT`  [已完成]
```
https://demoapi.mo.chat/workContactTag/update
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| tagId  | Number  | 必填 | 标签id |
| groupId  | Number  | 必填 | 分组id |
| tagName  | String  | 必填 | 标签名称 |
| isUpdate  | Number  | 必填 | 是否修改信息（1.修改了 2.未修改） |


#### 响应示例

```json
{
}
```