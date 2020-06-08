// pages/API/page-scroll/page-scroll.js
Component({

  data: {

  },

  properties: {

  },

  methods: {

    scrollToBottom() {
      wx.pageScrollTo({
        scrollTop: 3000,
        duration: 300
      });
    },

    scrollToTop() {
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 300
      });
    }
  }

})