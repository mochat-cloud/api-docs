# 角色权限保存
### `POST`  [完成]
```
https://demoapi.mo.chat/role/permissionStore
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| roleId  | Number  | 必填 | 角色id |
| menuIds  | String[]  | 必填 | 菜单id的数组 [1,2,3,4,5] |


#### 响应示例

```json
{
}
```