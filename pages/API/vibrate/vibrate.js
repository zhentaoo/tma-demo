function success () {
  tt.showToast({
    title: 'success',
  });
}

function fail () {
  tt.showToast({
    title: 'fail',
  });
}

Page({
  data: {
     
  },
	onShow () {
    
	},
  short () {
    tt.vibrateShort({
      success,
      fail
    })
  },
  long () {
    tt.vibrateLong({
      success,
      fail
    })
  }
})
