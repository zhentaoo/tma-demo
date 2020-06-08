Page({
    onLoad(res) {

    },
    onShow: function (res) {
        this.ctx = tt.createCanvasContext('canvas')
        this.r = 300 / 2;
        this.rem = 300 / 200;

        this.interval = setInterval(() => {
            this.draw();
        }, 1000);
    },
    drawBackground() {
        let ctx = this.ctx;
        let r = this.r;
        let rem = this.rem;

        ctx.save();
        ctx.translate(r, r);
        ctx.beginPath();
        ctx.lineWidth = 10 * rem;
        ctx.arc(0, 0, r - ctx.lineWidth / 2, 0, 2 * Math.PI, false);
        ctx.stroke();

        var hourNumber = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];
        ctx.font = 18 * rem + 'px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        hourNumber.forEach(function (number, i) {
            var rad = 2 * Math.PI / 12 * i;
            var x = Math.cos(rad) * (r - 30 * rem);
            var y = Math.sin(rad) * (r - 30 * rem);
            ctx.fillText(number, x, y);
        });
        for (var i = 0; i < 60; i++) {
            var rad = 2 * Math.PI / 60 * i;
            var x = Math.cos(rad) * (r - 18 * rem);
            var y = Math.sin(rad) * (r - 18 * rem);
            ctx.beginPath();
            if (i % 5 === 0) {
                ctx.fillStyle = '#000';
                ctx.arc(x, y, 2 * rem, 0, 2, 2 * Math.PI, false);
            } else {
                ctx.fillStyle = '#ccc';
                ctx.arc(x, y, 2 * rem, 0, 2, 2 * Math.PI, false);
            }
            ctx.fill();
        }
    },
    drawHour(hour, minute) {
        let ctx = this.ctx;
        let r = this.r;
        let rem = this.rem;

        ctx.save();
        ctx.beginPath();
        var rad = 2 * Math.PI / 12 * hour; //计算时钟转动的弧度
        var mrad = 2 * Math.PI / 12 / 60 * minute; //计算分针转动的弧度
        ctx.rotate(rad + mrad);
        ctx.lineWidth = 6;
        ctx.lineCap = 'round';
        ctx.moveTo(0, 10 * rem);
        ctx.lineTo(0, -r / 2);
        ctx.stroke();
        ctx.restore();
    },
    drawMinute(minute) {
        let ctx = this.ctx;
        let r = this.r;
        let rem = this.rem;

        ctx.save();
        ctx.beginPath();
        var rad = 2 * Math.PI / 60 * minute; //计算分针转动的弧度
        ctx.rotate(rad);
        ctx.lineWidth = 3 * rem;
        ctx.lineCap = 'round';
        ctx.moveTo(0, 10);
        ctx.lineTo(0, -r + 30 * rem);
        ctx.stroke();
        ctx.restore();
    },


    drawSecond(second) {
        let ctx = this.ctx;
        let r = this.r;
        let rem = this.rem;

        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = '#c14443';
        var rad = 2 * Math.PI / 60 * second; //计算秒针转动的弧度
        ctx.rotate(rad);
        ctx.moveTo(-2, 20 * rem);
        ctx.lineTo(2, 20 * rem);
        ctx.lineTo(1, -r + 18 * rem);
        ctx.lineTo(-1, -r + 18 * rem);
        ctx.fill();
        ctx.restore();
    },

    drawDot() {
        let ctx = this.ctx;
        let rem = this.rem;
        ctx.beginPath();
        ctx.fillStyle = '#fff';
        ctx.arc(0, 0, 3 * rem, 0, 2 * Math.PI, false);
        ctx.fill();
    },

    draw() {
        let ctx = this.ctx;

        ctx.clearRect(0, 0, 300, 300); //每一次都要将canvas清空一下，不然秒针就会一直显示在canvas上面
        var now = new Date(); //获得当前时间
        var hour = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();
        this.drawBackground();
        this.drawHour(hour, minutes);
        this.drawMinute(minutes);
        this.drawSecond(seconds);
        this.drawDot();
        ctx.restore();

        ctx.draw();
    },

    onUnload: function () {
        clearInterval(this.interval)
    }
})
