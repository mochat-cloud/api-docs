# 菜单详情
### `GET`  [已完成]
```
https://demoapi.mo.chat/menu/show
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| menuId  | Number  | 必填 | 当前菜单id |


#### 响应示例

```json
{
     "menuId"                :   "1",                              // 当前菜单id
     "firstMenuId"           :   "1",                              // 一级菜单id
     "secondMenuId"          :   "2",                              // 二级菜单id
     "thirdMenuId"           :   "3",                              // 三级菜单id
     "fourthMenuId"          :   "7",                              // 四级菜单id
     "level"                 :   "1",                              // 菜单级别
     "name"                  :   "系统设置",                        // 菜单名称
     "icon"                  :   "method",                         // 图标
     "isPageMenu"            :   "1",                              // 是否为页面菜单 1-是 2-否
     "linkUrl"               :   "http://www.baidu.com",           // 地址
     "linkType"              :   "1",                              // 地址类型 1-内部链接 2-外部链接
     "dataPermission"        :   "1",                              // 数据权限 1-启用, 2-不启用（查看企业下数据）
     "status"                :   "1",                              //状态     1-启用, 2-禁用
}
```