Page({
    data: {
        list: [{
                name: '开放接口',
                open: false,
                pages: [{
                        name: '登录 Login',
                        path: 'login/login'
                    }, {
                        name: '获取用户信息 Getsetting',
                        path: 'get-user-info/get-user-info'
                    }, {
                        name: '分享 Share',
                        path: 'share/share'
                    }, {
                        name: '选择收货地址 ChooseAddress',
                        path: 'choose-adress/choose-adress'
                    }, {
                        name: '支付 Pay',
                        path: 'payment/payment'
                    }, {
                        name: '授权与设置 Authorize',
                        path: 'authorize/authorize'
                    }
                    // {
                    //     name: 'TODO 内容安全',
                    //     path: ''
                    // }, {
                    //     name: 'TODO 数据分析',
                    //     path: ''
                    // }
                ]
            },
            {
                name: '网络',
                open: false,
                pages: [{
                        name: '发起请求 Request',
                        path: 'request/request'
                    }, {
                        name: '上传文件 UploadFile',
                        path: 'upload-file/upload-file'
                    }, {
                        name: '下载/保存文件 DownloadFile',
                        path: 'download-file/download-file'
                    },
                    {
                        name: 'WebSocket',
                        path: 'web-socket/web-socket'
                    }
                ]
            }, {
                name: '媒体',
                open: false,
                pages: [{
                    name: '图片 Image',
                    path: 'image/image'
                }, {
                    name: '录音 RecorderManager',
                    path: 'voice/voice'
                }, {
                    name: '音频 AudioContext',
                    path: 'inneraudio/inneraudio'
                }, {
                    name: '视频 Video',
                    path: 'video/video'
                }]
            }, {
                name: "文件",
                open: false,
                pages: [{
                    name: '文件 File',
                    path: 'file-process/file-process'
                }, {
                    name: '文件管理系统 FileSystemManager',
                    path: 'filesystem/filesystem'
                }]
            }, {
                name: '数据缓存',
                open: false,
                pages: [{
                    name: '数据缓存 Storage',
                    path: 'storage/storage'
                }]
            },
            {
                name: '位置',
                open: false,
                pages: [{
                    name: '获取当前位置 GetLocation',
                    path: 'get-location/get-location'
                }, {
                    name: '使用原生地图查看位置 OpenLocation',
                    path: 'open-location/open-location'
                }]
            },
            {
                name: '设备',
                open: false,
                pages: [{
                    name: '获取手机网络类型 GetNetworkType',
                    path: 'get-network-type/get-network-type'
                }, {
                    name: '获取手机系统信息 GetSystemInfo',
                    path: 'get-system-info/get-system-info'
                }, {
                    name: '监听手机内存状态 OnMemoryWarning',
                    path: 'on-memory-warning/on-memory-warning'
                }, {
                    name: '监听网络状态 OnNetworkStatusChange',
                    path: 'on-network-status-change/on-network-status-change'
                }, {
                    name: '监听加速度计数据 Accelerometer',
                    path: 'accelerometer/accelerometer'
                }, {
                    name: '监听罗盘数据 Compass',
                    path: 'on-compass-change/on-compass-change'
                }, {
                    name: '扫码 ScanCode',
                    path: 'scan-code/scan-code'
                }, {
                    name: '监听用户截屏 OnUserCaptureScreen',
                    path: 'capture-screen/capture-screen'
                }, {
                    name: '振动 Vibrate',
                    path: 'vibrate/vibrate'
                }, {
                    name: '打电话 MakePhoneCall',
                    path: 'make-phone-call/make-phone-call'
                }, {
                    name: '剪贴板 ClipboardData',
                    path: 'get-clipboard-data/get-clipboard-data'
                }]
            }, {
                name: '界面',
                open: false,
                pages: [{
                    name: '显示操作菜单 ActionSheet',
                    path: 'action-sheet/action-sheet'
                }, {
                    name: '显示模态弹窗 Modal',
                    path: 'modal/modal'
                }, {
                    name: '显示消息提示框 Toast',
                    path: 'toast/toast'
                }, {
                    name: '引导收藏小程序 FavoriteGuide',
                    path: 'favor-guide/favor-guide'
                }, {
                    name: '设置页面标题 SetNavigationBarTitle',
                    path: 'set-navigation-bar-title/set-navigation-bar-title'
                }, {
                    name: '设置导航栏 SetNavigationBar',
                    path: 'set-navigation-bar/set-navigation-bar'
                }, {
                    name: '页面跳转 NavigateTo',
                    path: 'navigator/navigator'
                }, {
                    name: '下拉刷新 PullDownRefresh',
                    path: 'pull-down-refresh/pull-down-refresh'
                }, {
                    name: '创建动画 CreateAnimation',
                    path: 'animation/animation'
                }, {
                    name: '创建绘图 CreateCanvasContext',
                    path: 'canvas/canvas'
                }, {
                    name: '页面滚动 PageScrollTo',
                    path: 'page-scroll/page-scroll'
                },{
                    name: '设置 SetTabBar',
                    path: 'tabbar-setting/tabbar-setting',
                    navigateCustom: 'tabbar-setting'
                }]
            }
        ],
        customView: null
    },
    toggleSwitch(e) {
        let {
            index
        } = e.currentTarget.dataset;
        let {
            list
        } = this.data;
        this.setData({
            list: list.map((item, idx) => {
                item.open = idx === index ? !item.open : false;
                return item;
            })
        });
    },

    switchView(e) {
      this.setData({
        customView: e.currentTarget.dataset.view
      });
      tt.pageScrollTo({
        scrollTop: 0
      });
    },

    switchBack(e) {
      tt.setNavigationBarTitle({
        title: '小程序能力展示'
      });
      this.setData({
        customView: null
      });
    }
});
