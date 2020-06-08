var util = require('../../../util/util')
var dataUrl = 'https://sf1-ttcdn-tos.pstatp.com/obj/developer/sdk/0000-0001.mp3';


const defaultFormatedTime = '00:00:00';

Page({
	data: {
		formatedCurrentTime: defaultFormatedTime,
		formatedDuration: defaultFormatedTime,
		duration: 0,
		currentTime: 0,
		playing: false,
		paused: false,
		buffered: 0
	},
	onLoad({
		src
	}) {
		if (src) {
			src = decodeURIComponent(src);
			dataUrl = src;
		}
	},
	onShow: function () {
		if (this.innerAudioContext) {
			return;
		}

		this.canUpdateUI = true;
		var iac = this.innerAudioContext = tt.createInnerAudioContext();

		iac.src = dataUrl;
		iac.startTime = 0;
		iac.autoplay = false;
		iac.loop = false;
		iac.obeyMuteSwitch = false;

		iac.onCanplay(() => {
			this.updateUI();
		});

		iac.onPlay(() => {
			this.updateUI();
		});

		iac.onPause(() => {
			this.updateUI();
		});

		iac.onStop(() => {
			this.updateUI();
		});

		iac.onEnded(() => {
			this.updateUI();
		});

		iac.onTimeUpdate(() => {
			this.updateUI();
		});

		iac.onError((err) => {
			this.updateUI();
		});

		iac.onWaiting(() => {
			this.updateUI();
		});

		iac.onSeeking(() => {
			this.updateUI();
		});

		iac.onSeeked(() => {
			this.updateUI();
		});
	},
	updateUI() {
		var iac = this.innerAudioContext;
		if (this.canUpdateUI) {
			this.setData({
				formatedCurrentTime: util.formatTime(parseInt(iac.currentTime) || 0) || defaultFormatedTime,
				formatedDuration: util.formatTime(parseInt(iac.duration) || 0) || defaultFormatedTime,
				duration: parseInt(iac.duration) || 0,
				currentTime: iac.currentTime || 0,
				playing: !iac.paused,
				buffered: parseInt(iac.buffered) || 0
			});
		}
	},
	onUnload() {
		if (this.innerAudioContext) {
			this.innerAudioContext.destroy();
		}
	},
	pause() {
		this.innerAudioContext.pause();
		this.updateUI();
	},
	play() {
		this.innerAudioContext.play();
		this.updateUI();
	},
	stop() {
		this.innerAudioContext.stop();
		this.updateUI();
	},
	seeking(e) {
		// NOTE 应当只禁止更新滑杆，时间还是可以更新
		this.canUpdateUI = false;
	},
	seek(e) {
		this.canUpdateUI = true;
		try {
			this.innerAudioContext.seek(e.detail.value);
		} catch (ex) {}
	},
	setloop(e) {
		this.innerAudioContext.loop = e.detail.value;
	},
	setmute(e) {
		this.innerAudioContext.obeyMuteSwitch = e.detail.value;
	}
})
