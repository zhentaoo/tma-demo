Page({
    data: {
        webview_url: "https://m.toutiao.com/i6584908261948916238/"
    },
    onLoad (option) {
        if (option.url) {
          this.setData({
            webview_url: decodeURIComponent(option.url)
          })
        }
    }
});
