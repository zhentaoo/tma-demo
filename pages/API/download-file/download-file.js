const smallImageUrl = 'https://s3.pstatp.com/toutiao/static/img/logo.201f80d.png';

Page({
  data: {
    percent: 0
  },
  downloadImage () {
    this.download('image', smallImageUrl);
  },
  saveImageToPhotosAlbum () {
    this.save('saveImageToPhotosAlbum', this.data.imageSrc);
  },
  download: function(type, url) {
    var that = this;
    
    if (this.downloading) {
      tt.showToast({
        title: '已有任务正在下载',
      });
      return;
    }
    this.downloading = true;
    
    tt.downloadFile({
      url,
      success: function(res) {
        that.setData({
          [`${type}Src`]: res.tempFilePath
        });
      },
      fail: function(res) {
        tt.showToast({
          title: res.errMsg,
          icon: 'none'
        });
      },
      complete () {
        that.downloading = false;
      }
    });
  },
  save (api, path) {
    if (!path) {
      tt.showToast({
        title: 'NO FILE',
      });
      return ;
    }
    tt[api]({
      filePath: path,
      success () {
        tt.showToast({
          title: 'succeed'
        });
      },
      fail (res) {
        tt.showToast({
          title: res.errMsg,
          icon: 'none'
        });
      }
    });
  },
})
