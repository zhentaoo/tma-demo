const login = () => {
  return new Promise((resolve, reject) => {
    tt.login({
      success: function (res) {
        if (res.code) {
          tt.setStorageSync('login.code', res.code);
          resolve({
            hasLogin: true,
            code: res.code
          });
        }
        else {
          tt.showModal({
            title: '本地接口调用成功，但登录失败了'
          });
          reject({
            hasLogin: false
          });
        }
      },
      fail: function () {
        tt.showModal({
          title: '调用登录接口失败'
        });
        reject({
          hasLogin: false
        });
      }
    });
  });
};

const getUserInfo = () => {
  return login()
    .then(loginRes => new Promise((resolve, reject) => {
      tt.getUserInfo({
        withCredentials: true,
        success: function (res) {
          tt.showToast({
            title: 'success'
          });
          console.info('get user info data is ', res);
          resolve(loginRes);
        },
        fail() {
          tt.showModal({
            title: '调用 getUserInfo 失败，检查是否需要 login'
          });
          reject(loginRes);
        }
      });
    }));
};

module.exports = {
  getUserInfo,
  login
};