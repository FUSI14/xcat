// index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({
  data: {
   if_zone:true,
   zone_yes: "http://81.71.66.85:9090/i/2024/02/01/shlaiy.png",
   zone_no:"http://81.71.66.85:9090/i/2024/02/03/quemgg.png",
   state_yes:"http://81.71.66.85:9090/i/2024/02/03/qw4gbl.png",
   state_no:"http://81.71.66.85:9090/i/2024/02/03/qsjdwg.png",
   placeGroupList:[
	{
		plaid:0,
		name:"金瀚林",
		yes:"http://81.71.66.85:9090/i/2024/02/04/kjls4x.png",
		no:"http://81.71.66.85:9090/i/2024/02/04/kjlrlz.png"
	},
	{
		plaid:1,
		name:"琴湖",
		yes:"http://81.71.66.85:9090/i/2024/02/04/w068z2.png",
		no:"http://81.71.66.85:9090/i/2024/02/04/w068qh.png"
	},
	{
		plaid:2,
		name:"北苑",
		yes:"http://81.71.66.85:9090/i/2024/02/04/w0qjnr.png",
		no:"http://81.71.66.85:9090/i/2024/02/04/w0qiof.png"
	},
	{
		plaid:3,
		name:"西湖",
		yes:"http://81.71.66.85:9090/i/2024/02/04/w322bu.png",
		no:"http://81.71.66.85:9090/i/2024/02/04/w322d9.png"
	},
	{
		plaid:4,
		name:"逸夫楼",
		yes:"http://81.71.66.85:9090/i/2024/02/04/w3pk3h.png",
		no:"http://81.71.66.85:9090/i/2024/02/04/w3pj95.png"
	}
	],
	cat_data:[
	{
		catid:0,
		cat_name:"咪咪",
		cat_now:"在读",
		cat_zone:"北苑",
		cat_photo:"https://img.zcool.cn/community/017df3601a67e011013e3991c95015.jpg@1280w_1l_2o_100sh.jpg"
	},
	],
	selected_id:0,
	selected_name:"金瀚林"
  },
	switchTab:function(e) {
		const data = e.currentTarget.dataset
      	this.setData({
			selected_id: data.plaid,
			selected_name:data.name
		  })
	},
	cat_card:function(e){
		const data = e.currentTarget.dataset
		wx.navigateTo({ 
	 		url: '../cat_card/index?id='+data.catid
		})
  },
  zoneevent:function(){
	this.setData(
		{
			if_zone: true
		}
	)
  },
  zoneevent_1:function(){
	this.setData(
		{
			if_zone: false
		}
	)
  },
  
  /**
   * 生命周期函数--监听页面显示
   */
  onShow(){
      var that = this 
      //const server = "http://81.71.66.85:8090"
      //const server = "http://192.168.123.122:8080"
      const app = getApp()
      const server = app.globalData.server
    	wx.request({
			url: server+'/cat/',
			method: "GET",
			dataType:"json",
			header: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },	
			success(res){
				console.log(res.data.data);
				that.setData({
					cat_data: res.data.data
				})
			},
			fail(err){
				console.log(err);
			}
		})
  },
})
