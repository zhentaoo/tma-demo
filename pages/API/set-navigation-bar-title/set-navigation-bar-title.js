Page({
  setNaivgationBarTitle: function (e) {
    var title = e.detail.value.title || "title"
    tt.setNavigationBarTitle({
      title: title,
      success: function() {
      },
      fail: function(err) {
      }
    })
  }
})
