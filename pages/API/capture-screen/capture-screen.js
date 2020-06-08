Component({

  data: {
    captured: false,
  },

  attached() {
    tt.onUserCaptureScreen(() => {
      this.setData({
        captured: true
      });
    });
  },

  properties: {

  },

  methods: {

  }

})