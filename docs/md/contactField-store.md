# 添加
### `POST`  [完成]
```
https://demoapi.mo.chat/contactField/store
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| label  | String  | 必填 | 字段名称 |
| type  | Number  | 必填 | 字段类型 |
| options  | String[]  | 可选 | 选项内容 |
| order  | Number  | 可选 | 排序展示 |
| status  | Number  | 可选 | 状态 0关闭 1开启 |


#### 响应示例

```json
{
  "code": "200",
  "msg": "成功",
  "data": []
}
```