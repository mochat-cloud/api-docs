# 客户列表筛选 -- 用户画像
### `GET`  [已完成]
```
https://demoapi.mo.chat/contactField/portrait
```



#### 响应示例

```json
[
    {
         "fieldId":"1",                 //属性id
         "name":"姓名",                  //名称
         "type":"1"                     //属性类型
         "typeText":"单选"               //属性类型文本
         "options": ["保密", "男", "女"], //选项内容
    },
    ......
]
```