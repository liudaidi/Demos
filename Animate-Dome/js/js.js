//方法和()内的东西  他们的对象好像都是window  所以全部用this获取的对象会不对  我们需要转换一下self=this  self这个名字可以随便取，他就相当于变量名
function silb(opt) { //opt就是传过来的参的对象
    this.main = opt.main;
    this.next = opt.next;
    this.prev = opt.prev;
    this.type = opt.type;
    this.callback = opt.callback;
    this.auto = opt.auto;
    this.autoTimer = opt.autoTimer || 2000; //传过来的参

    this.info();
    this._infoDom();
    this._infoEvent(); //调用
}
silb.prototype = { //prototype扩展东西
    info: function () {
        this._width = $(window).width(); //计算出window的宽
        this._height = $(window).height();
        this._index = 0; //初始索引(下标)
        this._lock = false;

    },
    _infoDom: function () {
        var self = this;
        this._item = this.main.find("div"); //获取所有的图片
        //console.log(this._item)
        for (var i = 0; i < self._item.length; i++) {
            //self.item[i]显示出来的是html写法 我们需要使用方法$(self._item[i])
            var height = i * self._height; //width应该是图片距离左边的宽度  按顺序排列
            $(self._item[i]).css("-webkit-transform", "translate3d(0," + height + "px,0)") //用定位的图片是叠在一起的  所以我们需要让它们排在一排  按顺序排列
        }
    },
    _infoEvent: function () {
        var self = this;
        this._item.on("touchstart", function (e) {
           // e.preventDefault();
            self._startY = e.touches[0].screenY;
            self._offsetY = 0;
        })
        this._item.on("touchmove", function (e) {
            if (self._lock) {
                return false;
            }
            // e.preventDefault();
            self._moveY = e.touches[0].screenY;
            self._offsetY = self._moveY - self._startY; //滑动的距离
            //console.log(self._offsetX)
            var _height = self._height,
                _offsetY = self._offsetY;
            for (var i = 0; i < self._item.length; i++) {
                //console.log(_width)
                $(self._item[i]).css("-webkit-transform", "translate3d(0," + ((i - self._index) * _height + _offsetY) + "px,0)"); //手指滑动时候不可能一下滑一屏，所以我们要再加上一屏的宽度 可以切换一屏
                $(self._item[i]).css("-webkit-transition", "none"); //动画之前先取消所有的动画
            }

        })
        this._item.on("touchend", function (e) {
            var _offsetY = self._offsetY;
            if (_offsetY < 0) {
                self._start("+1", e.type, self.callback); //e.type是获取事件的类型
            } else if (_offsetY > 0) {
                self._start("-1", e.type, self.callback);
            }
        })

        this.auto && setInterval(function () {
            self._start("+1");
        }, this.autoTimer)

        this.next && this.next.on("click", function (e) { //点击next按钮切换下一张
            self._start("+1", e.type, self.callback);
        })

        this.prev && this.prev.on("click", function (e) { //点击prev按钮切换上一张
            self._start("-1", e.type, self.callback);
        })

    },
    _start: function (num, type, callback) {
        //console.log(num)
        var self = this;
        var index = this._index,
            item = this._item,
            len = item.length,
            height = this._height;
        if (typeof (num) == "number") {
            nowIndex = num;
        }
        if (typeof (num) == "string") {
            nowIndex = index + num * 1; //字符串做一个计算就可以转换成数值型  所以  我们需要用num*1
        }
        if (nowIndex < 0) {
            nowIndex = 0;
        }
        if (nowIndex > len - 1) {
            nowIndex = 0;
            self._infoDom();
        }


        item[nowIndex] && $(item[nowIndex]).css("-webkit-transform", "translate3d(0,0,0)") //当前图片

        item[nowIndex - 1] && $(item[nowIndex - 1]).css("-webkit-transform", "translate3d(0," + (-height) + "px,0)") //上一张图片

        item[nowIndex + 1] && $(item[nowIndex + 1]).css("-webkit-transform", "translate3d(0," + height + "px,0)") //下一张图片

        item[nowIndex] && $(item[nowIndex]).css("-webkit-transition", "all 0.3s")

        item[nowIndex - 1] && $(item[nowIndex - 1]).css("-webkit-transition", "all 0.3s")

        item[nowIndex + 1] && $(item[nowIndex + 1]).css("-webkit-transition", "all 0.3s")

        this._index = nowIndex; //让当前的图片坐标为nowIndex
        //console.log(type)  
        /*if (type.indexOf(this.type) >= 0) {
            this.callback();
        }*/
        callback && this.callback(); 
    },
    getIndex: function () {
        return this._index;
    }

}