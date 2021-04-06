# 修改
### `PUT`  [完成]
```
https://demoapi.mo.chat/contactField/update
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| id  | Number  | 必填 | 高级属性ID |
| label  | String  | 必填 | 字段名称 |
| type  | Number  | 必填 | 字段类型 |
| options  | String[]  | 必填 | 选项内容 |
| order  | Number  | 必填 | 排序展示 |
| status  | Number  | 必填 | 状态 0关闭 1开启 |


#### 响应示例

```json
{
  "code": "200",
  "msg": "成功",
  "data": []
}
```