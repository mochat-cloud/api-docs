# 角色修改
### `PUT`  [已完成]
```
https://demoapi.mo.chat/role/update
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| roleId  | Number  | 必填 | 角色ID |
| name  | String  | 必填 | 角色名称 |
| remarks  | String  | 必填 | 角色描述 |
| dataPermission  | Number  | 必填 | 部门数据权限 1-是（查看部门数据） 2-否（查看个人数据） |


#### 响应示例

```json
{
}
```