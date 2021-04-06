# 列表
### `GET`  [完成]
```
https://demoapi.mo.chat/contactField/index
```

#### 请求参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| status  | Number  | 可选 | 状态 0关闭 1开启 2全部状态 |

#### 响应参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| id  | Number  | 必填 | 高级属性ID |
| name  | String  | 必填 | 字段标识(性别标识为gender) |
| label  | String  | 必填 | 字段名称 |
| type  | Number  | 必填 | 填写格式 0text 1radio 2 checkbox 3select 4file 5textarea 6date 7dateTime 8number 9phone 10email 11picture |
| typeText  | String  | 必填 | 填写格式文本 |
| options  | String[]  | 必填 | 选项内容 |
| order  | Number  | 必填 | 排序展示 |
| status  | Number  | 必填 | 状态 0关闭 1开启 |
| isSys  | Number  | 必填 | 是否为系统初始化数据 0否1是 |


#### 响应示例

```json
[
     {
         "id": 1,
         "name": "gender",
         "label": "性别",
         "type": 1,
         "typeText": "单选",
         "options": ["保密", "男", "女"],
         "order": 99,
         "status": 1,
         "isSys": 0
     }
]
```