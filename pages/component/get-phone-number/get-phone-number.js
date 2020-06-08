const userActions = require('../../../util/user-actions.js');

Component({
  data: {

  },

  lifetimes: {
    attached() {
      this.getSessionKey()
        .then(sessionKey => {
          this.sessionKey = sessionKey;
        });
    }
  },

  properties: {

  },

  methods: {

    gotPhoneNumber(e) {
      console.log('sessionKey================', this.sessionKey);
      tt.request({
        url: 'https://ghrp2gxy.fn.bytedance.net',
        method: 'POST',
        data: {
          "encryptedData": e.detail.encryptedData,
          "iv": e.detail.iv,
          "session_key": this.sessionKey
        },
        success: (res) => {
          const userInfo = JSON.parse(res.data);
          tt.showModal({
            title: '用户当前的手机号为',
            content: userInfo.phoneNumber
          });
        }
      });
    },

    getSessionKey() {
      return userActions.login()
        .then(({code}) => new Promise((resolve, reject) => {
          tt.request({
            url: 'https://developer.toutiao.com/api/apps/jscode2session',
            data: {
              appid: 'tt07e3715e98c9aac0',
              secret: '4e8d146047fb9d4264421f6d9532980e2cd348d0',
              code: code
            },
            success: (res) => {
              console.log('sessionKey:', res);
              resolve(res.data.session_key);
            },
          });
        }));
    },

    login() {
      tt.login({
        success: res => {
          if (res.code) {
            this.setData({
              hasLogin: true,
              code: res.code
            });
					  tt.setStorageSync('login.code', res.code);
          }
        }
      });
    }
  }
})