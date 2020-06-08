var app = getApp();
var userActions = require('../../../util/user-actions.js');
Page({
	onLoad: function () {
		var that = this;
		tt.checkSession({
			success: function () {
				that.setData({
					hasLogin: true
				});
			},
			fail: function () {
				that.setData({
					hasLogin: false
				});
			}
		})
	},

	data: {
		hasLogin: false,
		code: tt.getStorageSync('login.code')
	},

	login: function () {
		userActions.getUserInfo().then(loginInfo => {
      	this.setData(loginInfo);
    });
	},

})
