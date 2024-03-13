// pages/cat_card/index.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		catid: 0,
		cat_data: [{
			catid: 0,
			cat_name: "咪咪",
			cat_shape: 111,
			cat_sex: 111,
			cat_now: "在读",
			disposition: 111,
			cat_zone: "北苑",
			cat_from: "正在打听中...",
			cat_photo: [{
					photo: "https://img.zcool.cn/community/017df3601a67e011013e3991c95015.jpg@1280w_1l_2o_100sh.jpg"
				},
				{
					photo: "http://81.71.66.85:9090/i/2024/02/07/10h4zrg.png"
				}
			],
		}, ]
	},
	backevent: function (e) {
		wx.navigateBack({
			delta: 1
		});
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad(options) {
		this.setData({
			catid: options.id
		})
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow() {
    var that = this
    const app = getApp()
    //const server = "http://81.71.66.85:8090"
    const server = app.globalData.server
		console.log(this.data.catid)
		wx.request({
			url: server + '/cat/'+this.data.catid,
			method: "GET",
			dataType: "json",
			header: {
				'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
			},
			success(res) {
				console.log(res.data.data);
				that.setData({
					cat_data: res.data.data
				})
			},
			fail(err) {
				console.log(err);
			}
		})
	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage() {

	}
})