Component({

  data: {
    settings: {
      'userInfo': {
        title: '用户信息',
        hasAuth: false,
        btnTxt: '用户信息授权'
      },
      'userLocation': {
        title: '地理位置',
        hasAuth: false,
        btnTxt: '地理位置授权'
      },
      'address': {
        title: '通讯地址',
        hasAuth: false,
        btnTxt: '通讯地址授权'
      },
      'record': {
        title: '录音功能',
        hasAuth: false,
        btnTxt: '录音功能授权'
      },
      'album': {
        title: '保存到相册',
        hasAuth: false,
        btnTxt: '保存到相册授权'
      },
      'camera': {
        title: '摄像头',
        hasAuth: false,
        btnTxt: '摄像头授权'
      }
    }
  },

  attached() {
    this.showSetting();
  },

  methods: {

    showSetting() {
      tt.getSetting({
        success: ({authSetting}) => {
          let setAuthObj = {};
          for (let scopeName in authSetting) {
            const settingName = scopeName.replace(/scope\./g, 'settings.');
            setAuthObj[settingName + '.hasAuth'] = true;
          }
          this.setData(setAuthObj);
        }
      });
    },

    updateSetting() {
      this.showSetting();
    },

    authAction(e) {      
      const scopeName = 'scope.' + e.currentTarget.dataset.auth;
      console.log('scopeName::', scopeName);
      tt.authorize({
        scope: scopeName,
        success: res => {
          console.log('authorize::', res);
          this.updateSetting();
        }
      });
    },

    openSetting() {
      tt.openSetting({
        success: res => {}
      });
    }
  }

})