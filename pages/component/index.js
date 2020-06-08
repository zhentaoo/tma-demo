Page({
    data: {
        list: [{
                "name": "视图容器",
                "open": false,
                "pages": [{
                        "name": "基础视图 view",
                        "path": "view/view"
                    },
                    {
                        "name": "可滚动视图区域 scroll-view",
                        "path": "scroll-view/scroll-view"
                    },
                    {
                        "name": "滑块视图容器 swiper",
                        "path": "swiper/swiper"
                    }
                ]
            }, {
                "name": "基础内容",
                "open": false,
                "pages": [{
                        "name": "文本 text",
                        "path": "text/text"
                    },
                    {
                        "name": "进度条 progress",
                        "path": "progress/progress"
                    },
                    {
                        "name": "图标 icon",
                        "path": "icon/icon"
                    },
                    {
                        "name": "富文本 rich-text",
                        "path": "rich-text/rich-text"
                    }
                ]
            }, {
                "name": "表单组件",
                "open": false,
                "pages": [{
                        "name": "按钮 button",
                        "path": "button/button"
                    },
                    {
                        "name": "多项选择器 checkbox",
                        "path": "checkbox/checkbox"
                    },
                    {
                        "name": "表单 form",
                        "path": "form/form"
                    },
                    {
                        "name": "输入框 input",
                        "path": "input/input"
                    },
                    {
                        "name": "表单组件标签 label",
                        "path": "label/label"
                    },
                    {
                        "name": "底部弹起的滚动选择器 picker",
                        "path": "picker/picker"
                    },
                    {
                        "name": "滚动选择器 picker-view",
                        "path": "picker-view/picker-view"
                    },
                    {
                        "name": "单项选择器 radio",
                        "path": "radio/radio"
                    },
                    {
                        "name": "滑动选择器 slider",
                        "path": "slider/slider"
                    },
                    {
                        "name": "开关选择器 switch",
                        "path": "switch/switch"
                    },
                    {
                        "name": "多行输入框 textarea",
                        "path": "textarea/textarea"
                    }
                ]
            },
            {
                "name": "导航",
                "open": false,
                "pages": [{
                    "name": "页面导航 navigator",
                    "path": "navigator/navigator"
                }]
            },
            {
                "name": "媒体组件",
                "open": false,
                "pages": [{
                        "name": "图片 image",
                        "path": "image/image"
                    },
                    {
                        "name": "视频 video",
                        "path": "video/video"
                    },
                    {
                        "name": "实时视频播放器 live-player",
                        "path": "live-player/live-player"
                    }
                ]
            },
            {
                "name": "画布",
                "pages": [{
                    "name": "画布 canvas",
                    "path": "canvas/canvas"
                }]
            },
            {
                "name": "开放能力",
                "pages": [{
                    "name": "网页容器 webview",
                    "path": "webview/webview"
                }, {
                    "name": "广告 ad",
                    "path": "ad/ad"
                }, {
                  "name": "消息推送客服 contact",
                  "path": "custom-message/custom-message"
                }, {
                  "name": "获取手机号 get-phone-number",
                  "path": "get-phone-number/get-phone-number"
                }]
            }
        ]

    },
    toggleSwitch(e) {
        let {
            index
        } = e.currentTarget.dataset;
        let {
            list
        } = this.data;
        // list.forEach((item) => {
        //    item.open = item.id === id ? !item.open : false;
        // });
        this.setData({
            list: list.map((item, idx) => {
                item.open = idx === index ? !item.open : false;
                return item;
            })
        });
    }
});
