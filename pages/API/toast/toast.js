Page({
  toast1Tap: function () {
    tt.showToast({
      title: "默认内容"
    })
  },
  toast2Tap: function () {
    tt.showToast({
      title: "duration 3000",
      duration: 3000
    });
  },
  toast3Tap: function () {
    tt.showToast({
      title: "loading",
      icon: "loading"
    })
  },
  hideToast: function () {
    tt.hideToast()
  },

	showLoadingTap () {
		tt.showLoading({
      title: 'loading',
			mask: false
		})
	},

	hideLoadingTap () {
		tt.hideLoading()
	}
})
