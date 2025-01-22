export default () => {

    const handleContact = () => {
        window.ssq.push('chatOpen')
    }

    const handleLogin = () => {
        window.ssq.push('setLoginInfo', {
            user_id: '1vme37svub8', // 加密后的用户 id, 必填  对应用户的channel_uid
            user_name: 'test', // 对应用户名
            language: 'zh-CN', // 对应用户语言
            phone: '17311112222', // 对应用户手机号
            email: 'test@test', // 对应用户邮箱
            description: '套餐B\n客户端\n收费客户', // 对应客户资料的用户描述信息，例如套餐信息
            label_names: ['标签值1', '标签值2'], // 对应用户标签，仅支持传系统已创建的标签值
          });
    }

    const handleSendTextMessage = () => {
        // 先打开聊天窗
        window.ssq.push('chatOpen')
        setTimeout(() => {
            window.ssq.push('sendTextMessage', '发送了一条文本消息'); 
        }, 500)
    }

    const options = {
        chatOpen: {
            title: '联系客服',
            handler: handleContact,
        },
        setLoginInfo: {
            title: '登录',
            handler: handleLogin,
        },
        clearUser: {
            title: '退出登录',
            handler: () => { window.ssq.push('clearUser') },
        },
        sendTextMessage: {
            title: '发送文本消息',
            handler: handleSendTextMessage,
        }
    }

    return {
        options,
    }
}