// pages/API/file-process/file-process.js
Component({
  data: {

  },
  properties: {

  },
  methods: {
    /**
     *  调用端能力，保存文件到本地
     */
    saveFile() {
      this.toast('正在保存', 'loading');
      tt.downloadFile({
          url: 'https://smartprogram.baidu.com/docs/img/file-simple.pdf',
          success: res => {
              tt.saveFile({
                  tempFilePath: res.tempFilePath,
                  success: res => {
                      this.toast('保存成功', 'none');
                      this.setData({
                          'filePath': res.savedFilePath,
                          'hasFile': true
                      });
                  },
                  fail: err => {
                      this.toast('保存失败，请稍后重试', 'none');
                  }
              });
          },
          fail: err => {
              this.toast('保存失败，请稍后重试', 'none');
          }
      });
    },
    openFile() {
      // 目前API还不支持
        const filePath = this.getFile('请先保存文件');
        if (!filePath) {
            return;
        }
        tt.openDocument({
            filePath,
            fileType: 'pdf'
        });
    },
    getFileInfo() {
      const filePath = this.getFile('请先保存文件');
      if (!filePath) {
          return;
      }
      tt.getFileInfo({
          filePath,
          digestAlgorithm: 'md5',
          success: res => {
              tt.showModal({
                  title: '文件信息',
                  content: JSON.stringify(res),
                  showCancel: false
              });
              console.log('getFileInfo success', res);
          },
          fail: err => {
              this.toast('fail', 'none');
              console.log('getFileInfo success', err);
          }
      });
    },
    getSavedFileList() {
      tt.getSavedFileList({
          success: res => {
              tt.showModal({
                  title: '文件列表信息',
                  content: '目前保存文件数' + res.fileList.length,
                  showCancel: false
              });
              console.log('getSavedFileList success', res);
          },
          fail: err => {
              this.toast('fail', 'none');
              console.log('getSavedFileList fail', err);
          }
      });
    },
    getLocalfileInfo() {
      // 目前API还不支持
      const filePath = this.getFile('请先保存文件');
      if (!filePath) {
          return;
      }
      tt.getSavedFileInfo({
          filePath,
          success: res => {
              tt.showModal({
                  title: '文件信息',
                  content: JSON.stringify(res),
                  showCancel: false
              });
              console.log('getSavedFileInfo success', res);
          },
          fail: err => {
              this.toast('fail', 'none');
              console.log('getSavedFileInfo fail', err);
          }
      });
    },
    deleteFile() {
      const filePath = this.getFile('无可删除文件');
      if (!filePath) {
          return;
      }

      tt.removeSavedFile({
          filePath,
          success: res => {
              this.setData({filePath: ''});
              this.setData({disabled: true});
              this.toast('已删除', 'none');
          },
          fail: err => {
              this.toast('操作失败，请稍后重试', 'none');
          }
      });
    },
    getFile(errTips) {
        const filePath = this.data.filePath;
        if (!filePath) {
            this.toast(errTips, 'none');
        }
        return filePath;
    },
    toast(title, icon) {
        tt.showToast({title, icon});
    }
  }
})