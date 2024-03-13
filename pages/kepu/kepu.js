// pages/kepu/kepu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
	kepuGroupList:[
		{
			kepuid:0,
			name:"喂食",
			yes:"http://81.71.66.85:9090/i/2024/02/06/w50nn5.png",
			no:"http://81.71.66.85:9090/i/2024/02/06/w50n4k.png"
		},
		{
			kepuid:1,
			name:"接触",
			yes:"http://81.71.66.85:9090/i/2024/02/06/w5gtxq.png",
			no:"http://81.71.66.85:9090/i/2024/02/06/w5gux3.png"
		},
		{
			kepuid:2,
			name:"疾病",
			yes:"http://81.71.66.85:9090/i/2024/02/06/w5gv3h.png",
			no:"http://81.71.66.85:9090/i/2024/02/06/w5gy4z.png"
		},
		{
			kepuid:3,
			name:"领养",
			yes:"http://81.71.66.85:9090/i/2024/02/06/wcoxzf.png",
			no:"http://81.71.66.85:9090/i/2024/02/06/wcoufc.png"
		},
		{
			kepuid:4,
			name:"绝育",
			yes:"http://81.71.66.85:9090/i/2024/02/06/wcujge.png",
			no:"http://81.71.66.85:9090/i/2024/02/06/wcukvv.png"
		}
	],
	selected_id:0,
	line_1: "http://81.71.66.85:9090/i/2024/02/06/x4nght.png",
  },
 	switchTab:function(e) {
		const data = e.currentTarget.dataset
	  	this.setData({
			selected_id: data.kepuid,
	  })
	},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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