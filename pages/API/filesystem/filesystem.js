// pages/API/filesystem/filesystem.js
Component({
  data: {

  },

  attached() {
    this.fs = tt.getFileSystemManager();
    tt.downloadFile({
        url: 'https://smartprogram.baidu.com/docs/img/file-simple.pdf',
        success: res => {
            this.data.tempFilePath = res.tempFilePath;
            tt.showToast({
                title: '下载临时文件成功',
                icon: 'none'
            });
            console.log(this.data.tempFilePath);
        },
        fail: err => {
            this.toast('保存失败，请稍后重试', 'none');
        }
    });
  },

  properties: {

  },
  methods: {
    access() {
        this.fs.access({
            path: this.data.tempFilePath,
            success: res => {
                tt.showModal({
                    title: '文件存在',
                    content: JSON.stringify(res),
                    showCancel: false
                });
                console.log('access success', res);
            },
            fail: err => {
                tt.showModal({
                    title: '文件不存在',
                    content: JSON.stringify(res),
                    showCancel: false
                });
                console.log('access fail', err);
            }
        });
    },
    accessSync() {
        try {
            let result = this.fs.accessSync(
                this.data.tempFilePath
            );
            console.log('accessSync success', result);
        }
        catch (err) {
            console.log('accessSync fail', err);
        }
    },
    appendFile() {
        this.fs.appendFile({
            tempFilePath: this.data.tempFilePath,
            data: 'appendFile',
            success: res => {
                console.log('appendFile success', res);
            },
            fail: err => {
                console.log('appendFile fail', err)
            }
        });
    },
    appendFileSync() {
        try {
            let result = this.fs.appendFileSync(
                this.data.tempFilePath,
                'appendFileSync'
            );
            console.log('appendFileSync success', result);
        }
        catch (err) {
            console.log('appendFileSync fail', err);
        }
    },
    copyFile() {
        this.fs.copyFile({
            srcPath: this.data.tempFilePath,
            destPath: `${tt.env.USER_DATA_PATH}/mkdir/copyFile.txt`,
            success: res => {
                tt.showModal({
                    title: '拷贝成功',
                    content: '请点击下方获取用户列表按钮查看复制路径',
                    showCancel: false
                });
                console.log('copyFile success', res);
            },
            fail: err => {
                tt.showModal({
                    title: '拷贝失败',
                    content: JSON.stringify(err),
                    showCancel: false
                });
                console.log('copyFile fail', err)
            }
        });
    },
    copyFileSync() {
        try {
            let result = this.fs.copyFileSync(
                this.data.tempFilePath,
                `${tt.env.USER_DATA_PATH}/mkdir/copyFileSync.txt`
            );
            console.log('copyFileSync success', result);
        }
        catch (err) {
            console.log('copyFileSync fail', err);
        }
    },
    getFileInfo() {
        this.fs.getFileInfo({
            filePath: this.data.tempFilePath,
            success: res => {
                tt.showModal({
                    title: '文件信息',
                    content: JSON.stringify(res),
                    showCancel: false
                });
                console.log('getFileInfo success', res);
            },
            fail: err => {
                console.log('getFileInfo fail', err);
            }
        });
    },
    getSavedFileList() {
        this.fs.getSavedFileList({
            success: res => {
              console.log('res::', res);
                tt.showModal({
                    title: '文件列表',
                    content: JSON.stringify(res.fileList),
                    showCancel: false
                });
                console.log('getSavedFileList success', res);
            },
            fail: err => {
                console.log('getSavedFileList fail', err)
            }
        });
    },
    // bdfile://usr/mkdir 在哪
    mkdir() {
        this.fs.mkdir({
            dirPath: `${tt.env.USER_DATA_PATH}/mkdir`,
            success: res => {
                tt.showModal({
                    title: '创建成功',
                    content: JSON.stringify(res),
                    showCancel: false
                });
                console.log('mkdir success', res);
            },
            fail: err => {
                tt.showModal({
                    title: '创建失败',
                    content: JSON.stringify(err),
                    showCancel: false
                });
                console.log('mkdir fail', err);
            }
        });
    },
    mkdirSync() {
        try {
            let result = this.fs.mkdirSync(
                `${tt.env.USER_DATA_PATH}/mkdirSyc`
            );
            console.log('mkdirSync success', result);
        }
        catch (err) {
            console.log('mkdirSync fail', err);
        }
    },
    readdir() {
        this.fs.readdir({
            dirPath: `${tt.env.USER_DATA_PATH}/mkdir`,
            success: res => {
                tt.showModal({
                    title: '读取成功',
                    content: `${tt.env.USER_DATA_PATH}/mkdir` + '目录下文件有：' + JSON.stringify(res.files),
                    showCancel: false
                });
                console.log('readdir success', res);
            },
            fail: err => {
                console.log('readdir fail', err);
                tt.showModal({
                    title: '读取失败',
                    content: JSON.stringify(err),
                    showCancel: false
                });
            }
        });
    },
    readdirSync() {
        try {
            let result = this.fs.readdirSync(
                `${tt.env.USER_DATA_PATH}/readdirSyc'`
            );
            console.log('readdirSync success', result);
        }
        catch (err) {
            console.log('readdirSync fail', err);
        }
    },
    readFile() {
        tt.showModal({
          title: '文件地址',
          content: this.data.tempFilePath
        });
        this.fs.readFile({
            filePath: this.data.tempFilePath,
            encoding: 'hex',
            success: res => {
                tt.showModal({
                    title: '读取本地文件内容',
                    content: res.data,
                    showCancel: false
                });
                console.log('readFile success', res);
            },
            fail: err => {
                console.log('readFile fail', err);
                tt.showModal({
                    title: '读取本地文件内容',
                    content: JSON.stringify(err),
                    showCancel: false
                });
            }
        });
    },
    readFileSync() {
        try {
            let result = this.fs.readFileSync(
                this.data.tempFilePath
            );
            console.log('readFileSync success', result);
        }
        catch (err) {
            console.log('readFileSync fail', err);
        }
    },
    removeSavedFile() {
        this.fs.removeSavedFile({
            filePath: `${tt.env.USER_DATA_PATH}/mkdir/copyFile.txt`,
            encoding: 'utf8',
            success: res => {
                tt.showModal({
                    title: '删除成功',
                    content: JSON.stringify(res),
                    showCancel: false
                });
            },
            fail: err => {
                tt.showModal({
                    title: '删除失败',
                    content: JSON.stringify(err),
                    showCancel: false
                });
                console.log('removeSavedFile fail', err)
            }
        });
    },
    rename() {
        this.fs.rename({
            oldPath: `${tt.env.USER_DATA_PATH}/mkdir/copyFile.txt`,
            newPath: `${tt.env.USER_DATA_PATH}/demo.txt`,
            encoding: 'utf8',
            success: res => {
                tt.showModal({
                    title: '重命名成功',
                    content: JSON.stringify(res),
                    showCancel: false
                });
                console.log('rename success', res);
            },
            fail: err => {
                tt.showModal({
                    title: '重命名失败',
                    content: JSON.stringify(err),
                    showCancel: false
                });
                console.log('rename fail', err)
            }
        });
    },
    renameSync() {
        try {
            let result = this.fs.renameSync(
                this.data.tempFilePath,
                `${tt.env.USER_DATA_PATH}/renameSync/demo.txt`
            );
            console.log('renameSync success', result);
        }
        catch (err) {
            console.log('renameSync fail', err);
        }
    },
    rmdir() {
        this.fs.rmdir({
            dirPath: `${tt.env.USER_DATA_PATH}/mkdir`,
            success: res => {
                tt.showModal({
                    title: '删除成功',
                    content: JSON.stringify(res),
                    showCancel: false
                });
                console.log('rmdir success', res);
            },
            fail: err => {
                tt.showModal({
                    title: '删除失败',
                    content: JSON.stringify(err),
                    showCancel: false
                });
                console.log('rmdir fail', err);
            }
        });
    },
    rmdirSync() {
        try {
            let result = this.fs.rmdirSync(
                `${tt.env.USER_DATA_PATH}/rmdirSync`
            );
            console.log('rmdirSync success', result);
        }
        catch (err) {
            console.log('rmdirSync fail', err);
        }
    },
    saveFile() {
        this.fs.saveFile({
            tempFilePath: this.data.tempFilePath, // 仅为示例，实际上请传真实临时路径地址，如 tt.downloadFile 的 tempFilePath 返回参数
            filePath: `${tt.env.USER_DATA_PATH}/mkdir`,
            success: res => {
                console.log('saveFile success', res);
            },
            fail: err => {
                console.log('saveFile fail', err);
            }
        });
    },
    saveFileSync() {
        try {
            let result = this.fs.saveFileSync(
                '/usr/temp.txt', // 仅为示例，实际上请传真实临时路径地址，如 tt.downloadFile 的 tempFilePath 返回参数
                `${tt.env.USER_DATA_PATH}/`
            );
            console.log('saveFileSync success', result);
        }
        catch (err) {
            console.log('saveFileSync fail', err);
        }
    },
    stat() {
        this.fs.stat({
            path: this.data.tempFilePath,
            success: res => {
                tt.showModal({
                    title: 'stat获取成功',
                    content: JSON.stringify(res.stats),
                    showCancel: false
                });
                console.log('stat success', res);
            },
            fail: err => {
                tt.showModal({
                    title: 'stat获取失败',
                    content: JSON.stringify(res.stats),
                    showCancel: false
                });
                console.log('stat fail', err);
            }
        });
    },
    statSync() {
        try {
            let result = this.fs.statSync(
                this.data.tempFilePath
            );
            console.log('statSync success', result);
        }
        catch (err) {
            console.log('statSync fail', err);
        }
    },
    unlink() {
        this.fs.unlink({
            filePath: `${tt.env.USER_DATA_PATH}/mkdir/copyFile.txt`,
            success: res => {
                tt.showModal({
                    title: '已删除',
                    content: JSON.stringify(res),
                    showCancel: false
                });
                console.log('unlink success', res);
            },
            fail: err => {
                tt.showModal({
                    title: '删除失败',
                    content: JSON.stringify(err.errMsg),
                    showCancel: false
                });
                console.log('unlink fail', err);
            }
        });
    },
    unlinkSync() {
        try {
            let result = this.fs.unlinkSync(
                this.data.tempFilePath
            );
            console.log('unlinkSync success', result);
        }
        catch (err) {
            console.log('unlinkSync fail', err);
        }
    },
    unzip() {
        this.fs.unzip({
            ziptempFilePath: `${tt.env.USER_DATA_PATH}/demo/a.zip`,
            targetPath: `${tt.env.USER_DATA_PATH}/demo/b`,
            success: res => {
                console.log('unzip success', res);
            },
            fail: err => {
                console.log('unzip fail', err);
            }
        });
    },
    writeFile() {
        this.fs.writeFile({
            filePath: this.data.tempFilePath,
            data: 'writeFile',
            success: res => {
                console.log('writeFile success', res);
            },
            fail: err => {
                console.log('writeFile fail', err);
            }
        });
    },
    writeFileSync() {
        try {
            let result = this.fs.writeFileSync(
                this.data.tempFilePath,
                'writeFileSync'
            );
            console.log('writeFileSync success', result);
        }
        catch (err) {
            console.log('writeFileSync fail', err);
        }
    }
  }
})