// pages/upload_img/img.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageUrl: ''
  },
  chooseImage() {
    wx.chooseImage({
      count: 1, // 可选择的图片数量
      sizeType: ['compressed'], // 压缩图片
      sourceType: ['album', 'camera'], // 来源：相册或相机
      success:  (res)=> {
        // 将选择的图片上传到服务器
        this.uploadImage(res.tempFilePaths[0]);
      }
    })
  },
  uploadImage(imagePath) {
    wx.uploadFile({
		header: {
			"Content-Type": "multipart/form-data",
			"Authorization": "psPInykBYWUbz7SC3DwoRgNHf6xFJL5Q"
		},
		//请求后台的路径
		url: 'https://sm.ms/api/v2/upload',
		//小程序本地的路径
		filePath: imagePath,
		//后台获取我们图片的key
		name: 'smfile',
		//额外的参数formData
		formData: {
			
		},
		success: function (res) {
		//上传成功
			console.log(res)
			console.log(JSON.parse(res.data).data.url)
		},
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