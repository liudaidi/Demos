$(window).on("touchmove", function (e) {
            e.preventDefault();
        })
        setTimeout(function () {
            $(".page1>img:last-child").show();
        }, 2000)
        var getSlib = new silb({
            main: $(".bigbox"),
            callback: function () {
                if (getSlib._index == 1) {
                    getSlib._lock = true;
                    $(".page" + (this._index + 1)).show().siblings().hide();
                    $(".page2>img:first-child").show();
                    $(".page2>img:last-child").show();
                    setTimeout(function () {
                        $(".page2>img:nth-child(2)").show().addClass("animated fadeInLeftBig")
                    }, 600)
                    setTimeout(function () {
                        $(".page2>img:nth-child(3)").show().addClass("animated fadeInLeftBig")
                    }, 1200)
                    setTimeout(function () {
                        $(".page2>img:nth-child(4)").show().addClass("animated fadeInLeftBig")
                    }, 1800)
                    setTimeout(function () {
                        $(".page2>img:nth-child(5)").show().addClass("animated fadeInRightBig")
                    }, 2400)
                    setTimeout(function () {
                        $(".page2>img:nth-child(6)").show().addClass("animated fadeInLeftBig")
                    }, 3000)
                    setTimeout(function () {
                        $(".page2>img:nth-child(7)").show();
                        getSlib._lock = false;
                    }, 3600)
                } else {
                    $(".page2>img").hide();
                }
                if (getSlib._index == 2) {
                    $(".page" + (this._index + 1)).show().siblings().hide();
                    setTimeout(function () {
                        $(".page3>img:first-child").show().addClass("animated fadeInLeftBig")
                    }, 600);
                    setTimeout(function () {
                        $(".page3>img:nth-child(2)").show().addClass("animated fadeInRightBig")
                    }, 1200)
                    setTimeout(function () {
                        $(".page3>img:nth-child(3)").show().addClass("animated pulse")
                    }, 2000)
                    setTimeout(function () {
                        $(".page3>img:last-child").show().addClass("animated pulse")
                    }, 2000)
                } else {
                    $(".page3>img").hide();
                }
                if (getSlib._index == 3) {
                    getSlib._lock = true;
                    $(".page" + (this._index + 1)).show().siblings().hide();
                    setTimeout(function () {
                        $(".page4>img:first-child").show().addClass("animated fadeIn")
                    }, 600)
                    setTimeout(function () {
                        $(".page4>img:nth-child(2)").show().addClass("animated fadeIn")
                    }, 1200)
                    setTimeout(function () {
                        $(".page4>img:nth-child(3)").show().addClass("animated fadeIn")
                    }, 1800)
                    setTimeout(function () {
                        $(".page4>img:nth-child(4)").show().addClass("animated fadeIn")
                    }, 2400)
                    setTimeout(function () {
                        $(".page4>img:nth-child(5)").show().addClass("animated fadeIn")
                    }, 3000)
                    setTimeout(function () {
                        $(".page4>img:nth-child(6)").show().addClass("animated fadeIn")
                    }, 3600)
                    setTimeout(function () {
                        $(".page4>img:nth-child(7)").show().addClass("animated fadeInLeftBig")
                    }, 4200)
                    setTimeout(function () {
                        $(".page4>img:nth-child(8)").show().addClass("animated fadeInRightBig")
                    }, 4200)
                    setTimeout(function () {
                        $(".page4>img:nth-child(9)").show().addClass("animated fadeIn");
                        $(".page4>img:last-child").show().addClass("animated fadeIn")
                        getSlib._lock = false;
                    }, 4800)
                } else {
                    $(".page4>img").hide();
                }
                if (getSlib._index == 4) {
                    getSlib._lock = true;
                    $(".page" + (this._index + 1)).show().siblings().hide();
                    setTimeout(function () {
                        $(".page5>img:first-child").show().addClass("animated fadeIn")
                    }, 600)
                    setTimeout(function () {
                        $(".page5>img:nth-child(2)").show().addClass("animated fadeIn")
                    }, 1200)
                    setTimeout(function () {
                        $(".page5>img:nth-child(3)").show().addClass("animated fadeIn")
                    }, 1800)
                    setTimeout(function () {
                        $(".page5>img:nth-child(4)").show().addClass("animated fadeIn")
                    }, 2400)
                    setTimeout(function () {
                        $(".page5>img:nth-child(5)").show().addClass("animated fadeInLeftBig")
                    }, 3000)
                    setTimeout(function () {
                        $(".page5>img:nth-child(6)").show().addClass("animated fadeInRightBig")
                    }, 3000)
                    setTimeout(function () {
                        $(".page5>img:nth-child(7)").show().addClass("animated fadeIn");
                        $(".page5>img:last-child").show().addClass("animated fadeIn")
                        getSlib._lock = false;
                    }, 3600)
                } else {
                    $(".page5>img").hide();
                }
                if (getSlib._index == 5) {
                    $(".page" + (this._index + 1)).show().siblings().hide();
                    getSlib._lock = true;
                    setTimeout(function () {
                        $(".page6>img:first-child").show().addClass("animated fadeIn")
                    }, 600)
                    setTimeout(function () {
                        $(".page6>img:nth-child(2)").show().addClass("animated fadeInLeftBig")
                    }, 1200)
                    setTimeout(function () {
                        $(".page6>img:nth-child(3)").show().addClass("animated fadeInRightBig")
                    }, 1200)
                    setTimeout(function () {
                        $(".page6>img:nth-child(4)").show().addClass("animated fadeInLeftBig")
                    }, 1200)
                    setTimeout(function () {
                        $(".page6>img:nth-child(5)").show().addClass("animated fadeIn");
                        $(".page6>img:last-child").show().addClass("animated fadeIn")
                        getSlib._lock = false;
                    }, 1800)
                } else {
                    $(".page6>img").hide();
                }
                if (getSlib._index == 6) {
                    $(".page" + (this._index + 1)).show().siblings().hide();
                    getSlib._lock = true;
                    $(".page7>img:first-child").show();
                    $(".page7>img:nth-child(2)").show();
                    setTimeout(function () {
                        $(".page7>img:nth-child(3)").show().addClass("animated fadeInLeftBig");
                    }, 1000)
                    setTimeout(function () {
                        $(".page7>img:nth-child(4)").show().addClass("animated fadeInUpBig");
                    }, 2000)
                    setTimeout(function () {
                        $(".page7>img:last-child").show();
                        getSlib._lock = false;
                    }, 3000)
                } else {
                    $(".page7>img").hide();
                }
                if (getSlib._index == 7) {
                    getSlib._lock = true;
                    $(".page" + (this._index + 1)).show().siblings().hide();
                    setTimeout(function () {
                        $(".page8>img:first-child").show().addClass("animated fadeInLeftBig")
                    }, 600)
                    setTimeout(function () {
                        $(".page8>img:nth-child(2)").show().addClass("animated fadeIn")
                        $(".page8>img:nth-child(3)").show()
                    }, 1200)
                    setTimeout(function () {
                        $(".page8>img:last-child").show().addClass("animated fadeInUpBig")
                    }, 400)
                   $(".page8").on("click", function () {

                        getSlib._start(8);
                        //alert(1);
                        $(".page9").css({
                            "position": "absolute",
                            "top": "0",
                            "display": "block"
                        })
                        getSlib._lock = false;
                    })
                }else {
                    $(".page8>img").hide();
                }
                if (getSlib._index == 8) {
                    $(".page" + (this._index + 1)).show().siblings().hide();//第9页显示
                }
                if (getSlib._index == 0) {//getSlib._index==1第一页所以当getSlib._index==0时(this._index + 1)是第一页
                    $(".page" + (this._index + 1)).show().siblings().hide();
                }
            }
        })
        var arr1 = [
            {
                moveX: 50,
                moveY: 60,
                toX: 135,
                toY: 0
            },
            {
                moveX: 185,
                moveY: 60,
                toX: 0,
                toY: -195
            },
            {
                moveX: 185,
                moveY: 255,
                toX: -65,
                toY: 0
            },
            {
                moveX: 120,
                moveY: 255,
                toX: 0,
                toY: 20
            },
            {
                moveX: 185,
                moveY: 135,
                toX: -10,
                toY: 0
            }
            ]
        var arr2 = [
            {
                moveX: 50,
                moveY: 265,
                toX: 40,
                toY: 0
             },
            {
                moveX: 90,
                moveY: 265,
                toX: 0,
                toY: 195
            },
            {
                moveX: 90,
                moveY: 70,
                toX: 95,
                toY: 0
            },
            {
                moveX: 185,
                moveY: 70,
                toX: 0,
                toY: -195
            },
            {
                moveX: 185,
                moveY: 265,
                toX: -65,
                toY: 0
            },
            {
                moveX: 120,
                moveY: 265,
                toX: 0,
                toY: 20
            },
            {
                moveX: 185,
                moveY: 145,
                toX: -10,
                toY: 0
            }
           ]
        var arr3 = [
            {
                moveX: 310,
                moveY: 10,
                toX: 0,
                toY: -245
            },
            {
                moveX: 310,
                moveY: 255,
                toX: -120,
                toY: 0
            },
            {
                moveX: 310,
                moveY: 60,
                toX: -120,
                toY: 0
            },
            {
                moveX: 190,
                moveY: 60,
                toX: 0,
                toY: -195
            },
            {
                moveX: 190,
                moveY: 255,
                toX: -70,
                toY: 0
            },
            {
                moveX: 120,
                moveY: 255,
                toX: 0,
                toY: 20
            },
            {
                moveX: 190,
                moveY: 135,
                toX: -15,
                toY: 0
            },
            ]
        var arr4 = [
            {
                moveX: 190,
                moveY: 280,
                toX: 0,
                toY: 20
            },
            {
                moveX: 190,
                moveY: 260,
                toX: 120,
                toY: 0
            },
            {
                moveX: 310,
                moveY: 260,
                toX: 0,
                toY: 200
            },
            {
                moveX: 310,
                moveY: 60,
                toX: -120,
                toY: 0
            },
            {
                moveX: 190,
                moveY: 60,
                toX: 0,
                toY: -195
            },
            {
                moveX: 190,
                moveY: 255,
                toX: -70,
                toY: 0
            },
            {
                moveX: 120,
                moveY: 255,
                toX: 0,
                toY: 20
            },
            {
                moveX: 190,
                moveY: 135,
                toX: -15,
                toY: 0
            }
            ]
        var arr5 = [
            {
                moveX: 310,
                moveY: 280,
                toX: 0,
                toY: 215
            },
            {
                moveX: 310,
                moveY: 65,
                toX: -120,
                toY: 0
            },
            {
                moveX: 190,
                moveY: 65,
                toX: 0,
                toY: -190
            },
            {
                moveX: 310,
                moveY: 255,
                toX: -120,
                toY: 0
            },
            {
                moveX: 190,
                moveY: 255,
                toX: -70,
                toY: 0
            },
            {
                moveX: 120,
                moveY: 255,
                toX: 0,
                toY: 20
            },
            {
                moveX: 190,
                moveY: 135,
                toX: -15,
                toY: 0
            }
            ]
        var sum=0;
            timer=null, timer1=null, num = 0,
            cv = document.getElementById("cv"),
            ctx = cv.getContext("2d");
            
        function line(arr, num) {            
            sum=0;
            timer1 = setTimeout(function () {
                num++;
                if (num >= arr.length) {
                    clearTimeout(timer1);
                    return false;
                }
                line(arr, num);
               
            }, 1070)
            timer = setInterval(function () {
                sum++;
                if (sum >= 10) {
                    sum=10;
                    clearInterval(timer);
                }
                ctx.beginPath();
                ctx.strokeStyle = "red";
                ctx.lineWidth = 2;
                ctx.lineCap = "square";
                if (arr[num].toY == 0) {
                    ctx.moveTo(arr[num].moveX, arr[num].moveY);
                    ctx.lineTo(arr[num].moveX + arr[num].toX / 10 * sum, arr[num].moveY)
                } else {
                    ctx.moveTo(arr[num].moveX, arr[num].moveY);
                    ctx.lineTo(arr[num].moveX, arr[num].moveY - arr[num].toY / 10 * sum)
                }
                ctx.stroke();
                ctx.closePath();
            }, 100)
        }
        var off=1;
        $(".btn").on("tap", function () {
           // e.preventDefault();
            if(off){
                $(".btn").data("num", 1);
                $(this).siblings(".btn").hide();
                var num1 = $(this).data("num1");
                num1 == 1 && line(arr1, 0);
                num1 == 2 && line(arr2, 0);
                num1 == 3 && line(arr3, 0);
                num1 == 4 && line(arr4, 0);
                num1 == 5 && line(arr5, 0);
                off=0;
            }
        })
        
        $(".return").on("click", function () {
            off=1;
            clearInterval(timer)
            clearTimeout(timer1)
            if ($(".btn").data("num") == 1) {
                ctx.clearRect(0, 0, 320, 320);
                $(".btn").show(); 
               //$(".btn").data("num", 0);      
            } else if ($(".btn").data("num") == 0) {
                 document.location.reload();
            }
        })
     function clear_draw(){
        off=1;
        clearInterval(timer)
        clearTimeout(timer1)
        ctx.clearRect(0, 0, 320, 340);
        $(".btn").show();
        //$(".direct").data("num") = 0
    }