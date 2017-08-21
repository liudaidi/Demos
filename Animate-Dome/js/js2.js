var obj={
	init:function(){
		this._initDom();
		this._initEvent();
	},
	_initDom:function(){
		this._window=$("window");
		this._page1=$(".page1");
	},
	_initEvent:function(){
		this._window.on("touchmove",function (e) {
            e.preventDefault();
        })
        setTimeout(function () {
            $(".page1").find("img").eq(5).show();
        }, 2000)
        $(".page1").on("touchmove",function(){
        	$(this).hide();
        	$(".page2").show();
        	$(".page2").find("img").eq(8).show();
        	$(".page2").find("img").eq(0).show();
        	setTimeout(function(){
        		$(".page2").find("img").eq(1).show().addClass("animated fadeInLeftBig");
        	},500)
        	setTimeout(function(){
        		$(".page2").find("img").eq(2).show().addClass("animated fadeInRightBig");
        	},800)
        	setTimeout(function(){
        		$(".page2").find("img").eq(3).show().addClass("animated fadeInLightBig");
        	},1900)
        	setTimeout(function(){
        		$(".page2").find("img").eq(4).show().addClass("animated fadeInRightBig");
        	},2000)
        	setTimeout(function(){
        		$(".page2").find("img").eq(5).show().addClass("animated fadeInLightBig");
        	},3500)
        	setTimeout(function(){
        		$(".page2").find("img").eq(6).show().addClass("animated fadeOutDown");
        	},4000)
        })
        $(".page2").on("touchmove",function(){
        	$(this).hide();
        	$(".page3").show();
        	setTimeout(function(){
        		$(".page3").find("img").eq(0).show().addClass("animated fadeInLeftBig");
        	},500)
        	setTimeout(function(){
        		$(".page3").find("img").eq(1).show().addClass("animated fadeInDown");
        	},1500)
        	setTimeout(function(){
        		$(".page3").find("img").eq(2).show().addClass("animated flash");
        	},2500)
        	setTimeout(function(){
        		$(".page3").find("img").eq(3).show().addClass("animated flash");
        	},2500)
        })
        $(".page3").on("touchmove",function(){
        	$(this).hide();
        	$(".page4").show();
        	setTimeout(function(){
        		$(".page4").find("img").eq(0).show().addClass("animated fadeInLeftBig");
        	},500)
        	setTimeout(function(){
        		$(".page4").find("img").eq(1).show().addClass("animated rollIn");
        	},1500)
        	setTimeout(function(){
        		$(".page4").find("img").eq(2).show().addClass("animated rollIn");
        	},2500)
        	setTimeout(function(){
        		$(".page4").find("img").eq(3).show().addClass("animated rollIn");
        	},2500)
        	setTimeout(function(){
        		$(".page4").find("img").eq(4).show().addClass("animated rollIn");
        	},2500)
        	setTimeout(function(){
        		$(".page4").find("img").eq(5).show().addClass("animated rollIn");
        	},2500)
        	setTimeout(function(){
        		$(".page4").find("img").eq(7).show().addClass("animated fadeInLeftBig");
        	},3500)
        	setTimeout(function(){
        		$(".page4").find("img").eq(8).show().addClass("animated fadeInRightBig");
        	},4500)
        	setTimeout(function(){
        		$(".page4").find("img").eq(6).show().addClass("animated fadeInRightBig");
        	},5500)
        	setTimeout(function(){
        		$(".page4").find("img").eq(9).show().addClass("animated fadeInLeftBig");
        	},6500)
        })
		$(".page4").on("touchmove",function(){
			$(this).hide();
			$(".page5").show();
			setTimeout(function(){
        		$(".page5").find("img").eq(0).show().addClass("animated rollIn");
        	},500)
        	setTimeout(function(){
        		$(".page5").find("img").eq(1).show().addClass("animated rollIn");
        	},1500)
        	setTimeout(function(){
        		$(".page5").find("img").eq(2).show().addClass("animated rollIn");
        	},2500)
        	setTimeout(function(){
        		$(".page5").find("img").eq(3).show().addClass("animated rollIn");
        	},2500)
        	setTimeout(function(){
        		$(".page5").find("img").eq(7).show().addClass("animated rollIn");
        	},3500)
        	setTimeout(function(){
        		$(".page5").find("img").eq(6).show().addClass("animated rollIn");
        	},4500)
        	setTimeout(function(){
        		$(".page5").find("img").eq(4).show().addClass("animated rollIn");
        	},5500)
        	setTimeout(function(){
        		$(".page5").find("img").eq(5).show().addClass("animated rollIn");
        	},6500)
		})
		$(".page5").on("touchmove",function(){
			//alert(1);
			$(this).hide();
			$(".page6").show();
			setTimeout(function(){
        		$(".page6").find("img").eq(0).show().addClass("animated rollIn");
        	},500)
        	setTimeout(function(){
        		$(".page6").find("img").eq(5).show().addClass("animated fadeInLeftBig");
        	},1500)
        	setTimeout(function(){
        		$(".page6").find("img").eq(4).show().addClass("animated fadeInLeftBig");
        	},2500)
        	setTimeout(function(){
        		$(".page6").find("img").eq(1).show().addClass("animated fadeInLeftBig");
        	},3500)
        	setTimeout(function(){
        		$(".page6").find("img").eq(2).show().addClass("animated fadeInRightBig");
        	},4500)
        	setTimeout(function(){
        		$(".page6").find("img").eq(3).show().addClass("animated fadeInLeftBig");
        	},5500)
		})
		$(".page6").on("touchmove",function(){
			$(this).hide();
			$(".page7").show();
			setTimeout(function(){
        		$(".page7").find("img").eq(0).show().addClass("animated fadeInLeftBig");
        	},500)
			setTimeout(function(){
        		$(".page7").find("img").eq(1).show().addClass("animated swing");
        	},2500)
        	setTimeout(function(){
        		$(".page7").find("img").eq(2).show().addClass("animated fadeInLeftBig");
        	},3500)
        	setTimeout(function(){
        		$(".page7").find("img").eq(3).show().addClass("animated fadeInUpBig");
        	},4500)
        	setTimeout(function(){
        		$(".page7").find("img").eq(4).show().addClass("animated fadeOutDown");
        	},6000)
		})
		$(".page7").on("touchmove",function(){
			$(this).hide();
			$(".page8").show();
			$(".page8").find("img").eq(3).show();
			setTimeout(function(){
        		$(".page8").find("img").eq(0).show().addClass("animated fadeInLeftBig");
        	},500)
			setTimeout(function(){
        		$(".page8").find("img").eq(1).show().addClass("animated fadeInLeftBig");
        	},1500)
        	setTimeout(function(){
        		$(".page8").find("img").eq(2).show().addClass("animated fadeInLeftBig");
        	},2500)
		})
		$(".page8").on("touchmove",function(){
			$(this).hide();
			$(".page9").show();
			setTimeout(function(){
        		$(".page9").find("img").eq(1).show().addClass("animated fadeInRightBig");
        	},500)
        	setTimeout(function(){
        		$(".page9").find("img").eq(0).show().addClass("animated fadeInLeftBig");
        	},1500)
		})
	}
}
obj.init();