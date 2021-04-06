# 角色权限列表
### `GET`  [已完成]
```
https://demoapi.mo.chat/role/permissionByUser
```



#### 响应示例

```json
[
       {
           "menuId"            :  1,                       // 菜单id
           "name"              :  "系统设置",               // 菜单名称
           "level"             :  "1",                     // 菜单级别 1-一级, 2-二级,3-三级,4-四级,5-五级
           "dataPermission"    :  "1",                     // 数据权限 1-否, 2-是
           "icon"              :  "1"                      // 图标
           "linkUrl"           :  "1"                      // 链接
           "linkType"          :  "1"                      // 链接类型 1-内部链接 2-外部链接
           "parentId"          :  "0"                      // 父级id
           "children"          :  [                        // 子级数据
               {
                   "menuId"            :  1,                       // 菜单id
                   "name"              :  "系统设置",               // 菜单名称
                   "level"             :  "1",                     // 菜单级别 1-一级, 2-二级,3-三级,4-四级,5-五级
                   "dataPermission"    :  "1",                     // 数据权限 1-否, 2-是
                   "icon"              :  "1"                      // 图标
                   "linkUrl"           :  "1"                      // 链接
                   "linkType"          :  "1"                      // 链接类型 1-内部链接 2-外部链接
                   "parentId"          :  "1"                      // 父级id
                   "children"          : []                        // 子级数组
               }
               ......
           ]

       },
       {
           "menuId"            :  1,                       // 菜单id
           "name"              :  "系统设置",               // 菜单名称
           "level"             :  "1",                     // 菜单级别 1-一级, 2-二级,3-三级,4-四级,5-五级
           "dataPermission"    :  "1",                     // 数据权限 1-否, 2-是
           "icon"              :  "1"                      // 图标
           "linkUrl"           :  "1"                      // 链接
           "linkType"          :  "1"                      // 链接类型 1-内部链接 2-外部链接
           "parentId"          :  "0"                      // 父级id
           "children"          :  [                        // 子级数据
               {
                   "menuId"            :  1,                       // 菜单id
                   "name"              :  "系统设置",               // 菜单名称
                   "level"             :  "1",                     // 菜单级别 1-一级, 2-二级,3-三级,4-四级,5-五级
                   "dataPermission"    :  "1",                     // 数据权限 1-否, 2-是
                   "icon"              :  "1"                      // 图标
                   "linkUrl"           :  "1"                      // 链接
                   "linkType"          :  "1"                      // 链接类型 1-内部链接 2-外部链接
                   "parentId"          :  "1"                      // 父级id
                   "children"          : []                        // 子级数组
               }
               ......
           ]

       },
       ......
   ]
```