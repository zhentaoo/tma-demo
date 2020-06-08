var sourceType = [ ['camera'], ['album'], ['camera', 'album'] ]

Page({
  data: {
    imageList: [],

    sourceTypeIndex: 1,
    sourceType: ['拍照', '相册', '拍照或相册'],

    countIndex: 8,
    count: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  sourceTypeChange: function (e) {
    this.setData({
      sourceTypeIndex: e.detail.value
    });
  },
  countChange: function (e) {
    this.setData({
      countIndex: e.detail.value
    });
  },
  chooseImage: function () {
    var that = this;
    tt.chooseImage({
      sourceType: sourceType[this.data.sourceTypeIndex],
      count: this.data.count[this.data.countIndex],
      success (res) {
        that.setData({
          imageList: res.tempFilePaths
        })
      },
      fail (res) {
        tt.showToast({
          title: res.errMsg,
        });
      }
    })
  },
  previewImage: function (e) {
    var current = e.target.dataset.src;

    tt.previewImage({
      current: current,
      urls: this.data.imageList
    });
  },
  getImageInfo: function () {
    if (!this.data.imageList.length) {
      tt.showToast({
        title: '请选择图片'
      });
      return ;
    }
    tt.getImageInfo({
      src: this.data.imageList[0],
      success(res) {
        tt.showModal({
          title: '第一张图片的信息：',
          content: JSON.stringify(res)
        });
      }
    });
  },

  saveImageToAlbum() {
    if (!this.data.imageList.length) {
      tt.showToast({
        title: '请选择图片'
      });
      return ;
    }
    tt.saveImageToPhotosAlbum({
      filePath: this.data.imageList[0]
    });
  }
});
