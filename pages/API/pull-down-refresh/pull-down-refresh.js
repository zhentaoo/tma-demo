Page({
  onPullDownRefresh: function () {
    tt.showLoading({
      title: 'loading...',
      icon: 'loading'
    })
    setTimeout(() => {
      this.stopPullDownRefresh();
    }, 10000);
  },
  stopPullDownRefresh: function () {
    tt.stopPullDownRefresh({
      complete: function (res) {
        tt.hideLoading();
      }
    })
  },
  startPullDownRefresh () {
    tt.startPullDownRefresh();
  },
  onHide(){
  },
  onReachBottom () {
    tt.showToast({
      title: 'onReachBottom',
    })
  }
})
