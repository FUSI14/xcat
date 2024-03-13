Component({
	data: {
		selected: -1,
	  color: "#f0f0f0",
	  selectedColor: "#3cc51f",
	  list: [{
		selected: 0,
		pagePath: "/pages/index/index",
		iconPath: "/icon/guide-no.png",
		selectedIconPath: "/icon/guide-yes.png"
	  }, {
		selected: 0,
		pagePath: "/pages/kepu/kepu",
		iconPath: "/icon/kepu-no.png",
		selectedIconPath: "/icon/kepu-yes.png"
	  }
	  , {
		selected: 0,
		pagePath: "/pages/ground/ground",
		iconPath: "/icon/kepu-no.png",
		selectedIconPath: "/icon/kepu-yes.png"
	  }
	  , {
		selected: 0,
		pagePath: "/pages/my/my",
		iconPath: "/icon/kepu-no.png",
		selectedIconPath: "/icon/kepu-yes.png"
	  }
	]
	},
	attached() {
	},
	methods: {
	  switchTab(e) {
		const data = e.currentTarget.dataset
		const url = data.path
		wx.switchTab({url})
		this.setData({
		  selected: data.index
		})
		console.log(data.index)
	  }
	}
  })