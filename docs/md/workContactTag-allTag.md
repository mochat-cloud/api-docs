# 所有标签
### `GET`  [已完成]
```
https://demoapi.mo.chat/workContactTag/allTag
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| groupId  | Number  | 可选 | 分组id（未分组的 该字段传0） |


#### 响应示例

```json
[
   {
       "id":"11"      //标签id
       "name":"优质"  //标签名称
   }
   ......
]
```