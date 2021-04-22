module.exports = {
    title: 'MoChat',
    base: '/api/',
    description: '让企业微信开发更简单',
    themeConfig: {
        nav: [
            { text: 'Github', link: 'https://github.com/mochat-cloud/mochat' },
            { text: '应用开发', link: 'https://mochat.wiki/app-dev/example' },
            { text: '数据库字典', link: 'https://mochat.wiki/database/md/tables.html' },
            { text: 'API文档', link: 'https://mochat.wiki/api/' },
        ],
        sidebar: [
            {
                title: '用户管理',
                path: '/md/user-index',
                collapsable: false,
                sidebarDepth: 3,
                children: [
                    '/md/user-index',
                    '/md/user-loginShow',
                    '/md/user-passwordUpdate',
                    '/md/user-show',
                    '/md/user-statusUpdate',
                    '/md/user-store',
                    '/md/user-update',
                    '/md/user-auth',
                    '/md/user-logout',
                ]
            },
            {
                title: '企业管理',
                path: '/md/corp-bind',
                collapsable: false,
                sidebarDepth: 3,
                children: [
                    '/md/corp-bind',
                    '/md/corp-index',
                    '/md/corp-select',
                    '/md/corp-show',
                    '/md/corp-store',
                    '/md/corp-update',
                ]
            },
            {
                title: '员工管理',
                path: '/md/workEmployee-index',
                collapsable: false,
                sidebarDepth: 3,
                children: [
                    '/md/workEmployee-index',
                    '/md/workEmployee-searchCondition',
                    '/md/workEmployee-synEmployee',
                ]
            },
            {
                title: '部门管理',
                path: '/md/workDepartment-index',
                collapsable: false,
                sidebarDepth: 3,
                children: [
                    '/md/workDepartment-index',
                    '/md/workDepartment-pageIndex',
                    '/md/workDepartment-selectByPhone',
                    '/md/workDepartment-showEmployee',
                ]
            },
            {
                title: '员工部门管理',
                path: '/md/workEmployeeDepartment-memberIndex',
                collapsable: false,
                sidebarDepth: 3,
                children: [
                    '/md/workEmployeeDepartment-memberIndex',
                ]
            },
            {
                title: '角色管理',
                path: '/md/role-destroy',
                collapsable: false,
                sidebarDepth: 3,
                children: [
                    '/md/role-destroy',
                    '/md/role-index',
                    '/md/role-permissionByUser',
                    '/md/role-permissionShow',
                    '/md/role-permissionStore',
                    '/md/role-select',
                    '/md/role-show',
                    '/md/role-showEmployee',
                    '/md/role-statusUpdate',
                    '/md/role-store',
                    '/md/role-update',
                ]
            },
            {
                title: '菜单管理',
                path: '/md/menu-destroy',
                collapsable: false,
                sidebarDepth: 3,
                children: [
                    '/md/menu-destroy',
                    '/md/menu-iconIndex',
                    '/md/menu-index',
                    '/md/menu-select',
                    '/md/menu-show',
                    '/md/menu-statusUpdate',
                    '/md/menu-store',
                    '/md/menu-update',
                ]
            },
            {
                title: '渠道活码管理',
                path: '/md/channelCode-contact',
                collapsable: false,
                sidebarDepth: 3,
                children: [
                    '/md/channelCode-contact',
                    '/md/channelCode-index',
                    '/md/channelCode-show',
                    '/md/channelCode-statistics',
                    '/md/channelCode-statisticsIndex',
                    '/md/channelCode-store',
                    '/md/channelCode-update',
                ]
            },
            {
                title: '渠道活码分组管理',
                path: '/md/channelCodeGroup-detail',
                collapsable: false,
                sidebarDepth: 3,
                children: [
                    '/md/channelCodeGroup-detail',
                    '/md/channelCodeGroup-index',
                    '/md/channelCodeGroup-move',
                    '/md/channelCodeGroup-store',
                    '/md/channelCodeGroup-update',
                ]
            },
            {
                title: '批量添加好友',
                path: '/md/contactBatchAdd-index',
                collapsable: false,
                sidebarDepth: 3,
                children: [
                    '/md/contactBatchAdd-index',
                    '/md/contactBatchAdd-allot',
                    '/md/contactBatchAdd-remind',
                    '/md/contactBatchAdd-dashboard',
                    '/md/contactBatchAdd-destroy',
                    '/md/contactBatchAdd-importDestroy',
                    '/md/contactBatchAdd-importIndex',
                    '/md/contactBatchAdd-importStore',
                    '/md/contactBatchAdd-settingEdit',
                    '/md/contactBatchAdd-settingUpdate',
                ]
            },
            {
                title: '素材库管理',
                path: '/md/medium-destroy',
                collapsable: false,
                sidebarDepth: 3,
                children: [
                    '/md/medium-destroy',
                    '/md/medium-groupUpdate',
                    '/md/medium-index',
                    '/md/medium-show',
                    '/md/medium-store',
                    '/md/medium-update',
                ]
            },
            {
                title: '素材库分组管理',
                path: '/md/mediumGroup-destroy',
                collapsable: false,
                sidebarDepth: 3,
                children: [
                    '/md/mediumGroup-destroy',
                    '/md/mediumGroup-index',
                    '/md/mediumGroup-store',
                    '/md/mediumGroup-update',
                ]
            },
            {
                title: '客户管理',
                path: '/md/workContact-batchLabeling',
                collapsable: false,
                sidebarDepth: 3,
                children: [
                    '/md/workContact-batchLabeling',
                    '/md/workContact-detail',
                    '/md/workContact-index',
                    '/md/workContact-lossContact',
                    '/md/workContact-show',
                    '/md/workContact-source',
                    '/md/workContact-synContact',
                    '/md/workContact-track',
                    '/md/workContact-update',
                ]
            },
            {
                title: '客户标签管理',
                path: '/md/workContactTag-allTag',
                collapsable: false,
                sidebarDepth: 3,
                children: [
                    '/md/workContactTag-allTag',
                    '/md/workContactTag-destroy',
                    '/md/workContactTag-detail',
                    '/md/workContactTag-index',
                    '/md/workContactTag-move',
                    '/md/workContactTag-store',
                    '/md/workContactTag-synContactTag',
                    '/md/workContactTag-update',
                ]
            },
            {
                title: '客户标签分组管理',
                path: '/md/workContactTagGroup-destroy',
                collapsable: false,
                sidebarDepth: 3,
                children: [
                    '/md/workContactTagGroup-destroy',
                    '/md/workContactTagGroup-detail',
                    '/md/workContactTagGroup-index',
                    '/md/workContactTagGroup-store',
                    '/md/workContactTagGroup-update',
                ]
            },
            {
                title: '客户所属群管理',
                path: '/md/workContactRoom-index',
                collapsable: false,
                sidebarDepth: 3,
                children: [
                    '/md/workContactRoom-index',
                ]
            },
            {
                title: '客户高级属性管理',
                path: '/md/contactField-batchUpdate',
                collapsable: false,
                sidebarDepth: 3,
                children: [
                    '/md/contactField-batchUpdate',
                    '/md/contactField-destroy',
                    '/md/contactField-index',
                    '/md/contactField-show',
                    '/md/contactField-statusUpdate',
                    '/md/contactField-store',
                    '/md/contactField-update',
                    '/md/contactField-portrait',
                ]
            },
            {
                title: '客户高级属性关联管理',
                path: '/md/contactFieldPivot-index',
                collapsable: false,
                sidebarDepth: 3,
                children: [
                    '/md/contactFieldPivot-index',
                    '/md/contactFieldPivot-update',
                ]
            },
            {
                title: '客户群发',
                path: '/md/contactMessageBatchSend-index',
                collapsable: false,
                sidebarDepth: 3,
                children: [
                    '/md/contactMessageBatchSend-index',
                    '/md/contactMessageBatchSend-store',
                    '/md/contactMessageBatchSend-show',
                    '/md/contactMessageBatchSend-destroy',
                    '/md/contactMessageBatchSend-messageShow',
                    '/md/contactMessageBatchSend-remind',
                    '/md/contactMessageBatchSend-contactReceiveIndex',
                    '/md/contactMessageBatchSend-employeeSendIndex',
                ]
            },
            {
                title: '客户群管理',
                path: '/md/workRoom-batchUpdate',
                collapsable: false,
                sidebarDepth: 3,
                children: [
                    '/md/workRoom-batchUpdate',
                    '/md/workRoom-index',
                    '/md/workRoom-statistics',
                    '/md/workRoom-statisticsIndex',
                    '/md/workRoom-syn',
                    '/md/workRoom-roomIndex',
                ]
            },
            {
                title: '客户群分组管理',
                path: '/md/workRoomGroup-destroy',
                collapsable: false,
                sidebarDepth: 3,
                children: [
                    '/md/workRoomGroup-destroy',
                    '/md/workRoomGroup-index',
                    '/md/workRoomGroup-store',
                    '/md/workRoomGroup-update',
                ]
            },
            {
                title: '自动拉群管理',
                path: '/md/workRoomAutoPull-index',
                collapsable: false,
                sidebarDepth: 3,
                children: [
                    '/md/workRoomAutoPull-index',
                    '/md/workRoomAutoPull-show',
                    '/md/workRoomAutoPull-store',
                    '/md/workRoomAutoPull-update',
                ]
            },
            {
                title: '客户群群发',
                path: '/md/roomMessageBatchSend-index',
                collapsable: false,
                sidebarDepth: 3,
                children: [
                    '/md/roomMessageBatchSend-index',
                    '/md/roomMessageBatchSend-store',
                    '/md/roomMessageBatchSend-show',
                    '/md/roomMessageBatchSend-destroy',
                    '/md/roomMessageBatchSend-messageShow',
                    '/md/roomMessageBatchSend-remind',
                    '/md/roomMessageBatchSend-roomOwnerSendIndex',
                    '/md/roomMessageBatchSend-roomReceiveIndex',
                ]
            },
            {
                title: '会话存档管理',
                path: '/md/workMessage-fromUsers',
                collapsable: false,
                sidebarDepth: 3,
                children: [
                    '/md/workMessage-fromUsers',
                    '/md/workMessage-index',
                    '/md/workMessage-toUsers',
                ]
            },
            {
                title: '会话存档配置管理',
                path: '/md/workMessageConfig-corpIndex',
                collapsable: false,
                sidebarDepth: 3,
                children: [
                    '/md/workMessageConfig-corpIndex',
                    '/md/workMessageConfig-corpShow',
                    '/md/workMessageConfig-corpStore',
                    '/md/workMessageConfig-stepCreate',
                    '/md/workMessageConfig-stepUpdate',
                ]
            },
            {
                title: '敏感词管理',
                path: '/md/sensitiveWord-destroy',
                collapsable: false,
                sidebarDepth: 3,
                children: [
                    '/md/sensitiveWord-destroy',
                    '/md/sensitiveWord-index',
                    '/md/sensitiveWord-move',
                    '/md/sensitiveWord-statusUpdate',
                    '/md/sensitiveWord-store',
                ]
            },
            {
                title: '敏感词分组管理',
                path: '/md/sensitiveWordGroup-select',
                collapsable: false,
                sidebarDepth: 3,
                children: [
                    '/md/sensitiveWordGroup-select',
                    '/md/sensitiveWordGroup-store',
                    '/md/sensitiveWordGroup-update',
                ]
            },
            {
                title: '敏感词监控管理',
                path: '/md/SensitiveWordsMonitor-index',
                collapsable: false,
                sidebarDepth: 3,
                children: [
                    '/md/SensitiveWordsMonitor-index',
                    '/md/SensitiveWordsMonitor-show',
                ]
            },
            {
                title: '欢迎语管理',
                path: '/md/greeting-destroy',
                collapsable: false,
                sidebarDepth: 3,
                children: [
                    '/md/greeting-destroy',
                    '/md/greeting-index',
                    '/md/greeting-show',
                    '/md/greeting-store',
                    '/md/greeting-update',
                ]
            },
            {
                title: '侧边栏管理',
                path: '/md/chatTool-config',
                collapsable: false,
                sidebarDepth: 3,
                children: [
                    '/md/chatTool-config',
                ]
            },
            {
                title: '应用管理',
                path: '/md/agent-oauth',
                collapsable: false,
                sidebarDepth: 3,
                children: [
                    '/md/agent-oauth',
                    '/md/agent-txtVerifyUpload',
                    '/md/agent-store',
                ]
            },
            {
                title: '微信sdk管理',
                path: '/md/wxJsSdk-config',
                collapsable: false,
                sidebarDepth: 3,
                children: [
                    '/md/wxJsSdk-config',
                ]
            },
            {
                title: '公共',
                path: '/md/common-upload',
                collapsable: false,
                sidebarDepth: 3,
                children: [
                    '/md/common-upload',
                ]
            },
        ]
    },
    markdown: {
        toc: {includeLevel: [1, 2, 3]}
    },
}