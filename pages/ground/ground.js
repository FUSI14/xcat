// pages/ground/ground.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
	news_photo_list:[
		{
			link:"https://ts1.cn.mm.bing.net/th/id/R-C.e08a7bf86b957153d93bf87fa5fc4385?rik=VW8fCsM5IvuI8A&riu=http%3a%2f%2fimg0.selfimg.com.cn%2fuedvoguecms%2f2019%2f08%2f20%2f1566297158_P066sI.jpg&ehk=kJmngyN5SW%2bRwpSQvpuxE84ctUUqlFwQiGiKSsBB4qM%3d&risl=&pid=ImgRaw&r=0",
		},
		{
			link:"https://bpic.588ku.com/back_origin_min_pic/19/10/22/859f3bdfa2d964f211f681e053fd2f11.jpg!/fw/750/quality/99/unsharp/true/compress/true",
		},
		{
			link:"https://img95.699pic.com/photo/50108/9665.jpg_wh300.jpg!/fh/300/quality/90",
		}
	],
	article_list:[
		{
			artid:0,
			title:"推文标题",
			about:"一句话简介一句话简介一句话简介一句话简介一句话简介一句话简介",
			time:"2023.12.03",
			photo:"https://img.zcool.cn/community/016dd959117b27a801216a3e5506ef.jpg@3000w_1l_0o_100sh.jpg",
			a:"https://mp.weixin.qq.com/s/wPtD9CwOa_zq4RUOKHnLSg",
			top:false
		},
		{
			artid:1,
			title:"推文标题",
			about:"一句话简介",
			time:"2023.12.03",
			photo:"",
			top:true
		},
		{
			artid:2,
			title:"推文标题",
			about:"一句话简介",
			time:"2023.12.03",
			photo:"",
			top:false
		},
		{
			artid:3,
			title:"推文标题",
			about:"一句话简介",
			time:"2023.12.03",
			photo:"",
			top:false
		},
		{
			artid:4,
			title:"推文标题",
			about:"一句话简介",
			time:"2023.12.03",
			photo:"",
			top:false
		},
		{
			artid:5,
			title:"推文标题",
			about:"一句话简介",
			time:"2023.12.03",
			photo:"",
			top:false
    },
    {
			artid:6,
			title:"推文标题",
			about:"一句话简介",
			time:"2023.12.03",
			photo:"",
			top:false
		},
	]
  },
  art_card:function(e){
	const data = e.currentTarget.dataset
	wx.navigateTo({
		url: '../art_card/article?id='+data.artid
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
	var that = this 
      const app = getApp()
      const server = app.globalData.server
    	wx.request({
			url: server+'/tweet-preview/',
			method: "GET",
			dataType:"json",
			header: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },	
			success(res){
				console.log(res.data.data);
				that.setData({
					article_list: res.data.data
				})
			},
			fail(err){
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