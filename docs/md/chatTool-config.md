# 配置详情
### `GET`  @apiGroup 侧边栏-JSSDK
```
https://demoapi.mo.chat/chatTool/config
```


#### 响应参数字段说明

| 字段  | 类型 | 是否必填 | 描述|
| ------------- | ------------- | ------------------ | ------------------ |
| agents  | String[]  | 必填 | 应用 |
| agents.id  | Number  | 必填 | 应用ID |
| agents.name  | String  | 必填 | 应用名称 |
| agents.squareLogoUrl  | String  | 必填 | 企业应用方形头像 |
| agents.chatTools  | String[]  | 必填 | 应用侧边栏 |
| agents.chatTools.pageName  | String  | 必填 | 应用侧边栏-页面名称 |
| agents.chatTools.pageUrl  | String  | 必填 | 应用侧边栏-页面URL |
| whiteDomains  | String[]  | 必填 | 可信域名 |


#### 响应示例

```json
{
    "agents": [
      {
          "id": 1,
          "name": "应用名称",
          "squareLogoUrl": "企业应用方形头像",
          chatTools: [
              {
                  "pageName": "页面名称",
                  "pageUrl": "页面URL"
              }
          ],
      },
    ],
    "whiteDomains": ["http://xx.com", "http://yy.com"]
}
```