Component({

  data: {

  },

  properties: {

  },

  methods: {
    showNavigationBarLoading() {
      tt.showNavigationBarLoading();
    },
    hideNavigationBarLoading() {
      tt.hideNavigationBarLoading();
    },

    showNavigationBarColor() {
      tt.setNavigationBarColor({
        frontColor: "#ffffff",
        backgroundColor: "#F85959",
        success(res) {
          console.log(res);
        },
        fail(res) {
          console.log("setNavigationBarColor调用失败");
        }
      });
    },

    reverseNavigationBarColor() {
      tt.setNavigationBarColor({
        frontColor: "#000000",
        backgroundColor: "#ffffff",
        success(res) {
          console.log(res);
        },
        fail(res) {
          console.log("setNavigationBarColor调用失败");
        }
      });
    }
  }

})