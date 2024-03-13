// app.js
App({
	onLaunch() {
		// 展示本地存储能力
		const logs = wx.getStorageSync('logs') || []
		logs.unshift(Date.now())
		wx.setStorageSync('logs', logs)

		// 登录
		wx.login({
				// 发送 res.code 到后台换取 openId, sessionKey, unionId
				success: (res) => {
          //用户的code
                  let userCode = res.code
                  console.log("usercode:"+userCode)
			}

		})
	},
	globalData: {
		userInfo: null,
    openid: "",
    server:"http://81.71.66.85:8090",
	}
})