Page({

  data: {
    shareData: {
      desc: '这是默认的分享文案，用户可以直接发送，也可以在发布器内修改'
    }
  },

  onShareAppMessage: function (opt) {
    this.setData({
      from: opt.from
    });
    return Object.assign({}, this.data.shareData, {
      title: opt.from === 'button' ? '这是要分享的小程序标题' : '菜单分享',
      path: '/pages/API/share/share?a=b&from=' + opt.from,
      imageUrl: 'https://s3.pstatp.com/toutiao/static/img/logo.201f80d.png',
      success (res) {},
      fail (err) {}
    })
  },

  open () {
    tt.showShareMenu({
      success () {
      },
      fail () {
      }
    })
  },

  hide() {
    tt.showShareMenu({
      success() {
      },
      fail() {
      }
    })
  },

  backindex () {
    tt.reLaunch({
      url: '/pages/API/index'
    });
  }
})
