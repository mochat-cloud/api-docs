# 菜单状态操作 禁用/启用
### `PUT`  [已完成]
```
https://demoapi.mo.chat/menu/statusUpdate
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| menuId  | Number  | 必填 | 菜单ID |
| status  | Number  | 必填 | 状态  1-启用 2-禁用 |


#### 响应示例

```json
{
}
```