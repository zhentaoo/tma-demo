Page({
  data: {
    loading: false
  },
  onReady(){
  },
  makeRequest: function() {
    var self = this

    self.setData({
      loading: true
    });

    this.requestTask = tt.request({
      url: 'https://docs.bytedance.net/api/resource_package/get_info/?package_version=17',
      data: {
        noncestr: Date.now()
      },
      success: function(result) {
        tt.showToast({
          title: '请求成功',
          icon: 'success',
        });
        self.setData({
          loading: false
        });
        this.requestTask = null;
      },
      fail: function({errMsg}) {
        self.setData({
          loading: false
        });
      }
    });
  },
  abortRequest() {
    let requestTask = tt.request({
      url: 'https://docs.bytedance.net/api/resource_package/get_info/?package_version=17',
      data: {
        noncestr: Date.now()
      },
      success: function(result) {
        tt.showToast({
          title: '请求成功',
          icon: 'success',
        });
      },
      fail: function({errMsg}) {
        tt.showToast({
          title: '发送并取消成功',
          icon: 'success',
        });
      }
    });
    requestTask.abort();

  }
})
