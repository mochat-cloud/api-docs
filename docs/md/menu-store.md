# 添加菜单
### `POST`  [已完成]
```
https://demoapi.mo.chat/menu/store
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| level  | Number  | 必填 | 所填菜单级别 1-一级 2-二级 3-三级 4-四级 5-四级的操作 |
| firstMenuId  | Number  | 必填 | 一级菜单id |
| secondMenuId  | Number  | 必填 | 二级菜单id |
| thirdMenuId  | Number  | 必填 | 三级菜单id |
| fourthMenuId  | Number  | 必填 | 四级菜单id |
| name  | String  | 必填 | 菜单名称 |
| icon  | String  | 必填 | 图标 |
| isPageMenu  | Number  | 必填 | 是否为页面菜单 1-是 2-否 |
| linkUrl  | String  | 必填 | 地址 |
| linkType  | String  | 必填 | 地址类型 |
| dataPermission  | Number  | 必填 | 数据权限 1-启用, 2-不启用（查看企业下数据） |


#### 响应示例

```json
{
}
```