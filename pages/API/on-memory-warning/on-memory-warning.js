// pages/API/on-memory-warning/on-memory-warning.js
Component({
  data: {
      data: '内存充足',
      hasMemory: true
  },
  properties: {

  },
  attached() {
    console.log('attached');
    tt.onMemoryWarning(function (res) {
      console.log('onMemoryWarningReceive', res);
      if(res[level] === 10){
          this.setData('data', '内存不足')
      }
    });
  },
  methods: {

  }
})