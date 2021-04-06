# 批量修改
### `PUT`  负责人[是否完成]: [已完成]
```
https://demoapi.mo.chat/contactField/batchUpdate
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| update  | String[]  | 必填 | 修改 |
| update.id  | Number  | 必填 | 高级属性ID |
| update.name  | String  | 必填 | 字段名称 |
| update.type  | Number  | 必填 | 字段类型 |
| update.options  | String[]  | 必填 | 选项内容 |
| update.order  | Number  | 必填 | 排序展示 |
| update.status  | Number  | 必填 | 状态 0关闭 1开启 |
| destroy  | String[]  | 必填 | 删除ID |


#### 响应示例

```json
{
  "code": "200",
  "msg": "成功",
  "data": []
}
```