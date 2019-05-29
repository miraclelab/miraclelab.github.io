

(function ($) {
	"use strict";
    //define variable for store last scrolltop
    var lastScrollTop = '';
    $(window).on('scroll', function () {
        //back to top show/hide
       var ScrollTop = $('.back-to-top');
       if ($(window).scrollTop() > 1000) {
           ScrollTop.fadeIn(1000);
       } else {
           ScrollTop.fadeOut(1000);
       }
       /*--------------------------
        sticky menu activation
       -------------------------*/
        var st = $(this).scrollTop();
        var mainMenuTop = $('.header');
        if ($(window).scrollTop() > 300) {
            if (st > lastScrollTop) {
                // hide sticky menu on scrolldown 
                mainMenuTop.removeClass('nav-fixed');
                
            } else {
                // active sticky menu on scrollup 
                mainMenuTop.addClass('nav-fixed');
            }

        } else {
            mainMenuTop.removeClass('nav-fixed ');
        }
        lastScrollTop = st;
       
    });
           
    $(window).on('load',function(){
        /*-----------------
            preloader
        ------------------*/
        var preLoder = $(".preloader");
        preLoder.fadeOut(1000);
    });

}(jQuery));	


//左下角提示

$(".tabbuy, .joinbox .withdrawBtn").click(function(){
    toastr.options = {
        "closeButton": true,
        "progressBar": true,
        "positionClass": "toast-bottom-center"
      }
    toastr.info("Comming Soon!")
});
$(".copybtn").click(function(){
    toastr.options = {
        "closeButton": true,
        "progressBar": true,
        "positionClass": "toast-bottom-center"
      }
    toastr.success("複製成功！")
});

//複製

var clipboard = new ClipboardJS('#copybtn');
clipboard.on('success', function(e) {
    console.log(e);
});
clipboard.on('error', function(e) {
    console.log(e);
});

//數值變化

$(".tabform-btnbox .btn").click(function(){
    var ethNum= $(this).children('.num');
 var sendethNum=document.getElementById("SendethNum");
 sendethNum.value = ethNum.html();
if (!$(this).hasClass('active')) {
    $(this).addClass('active').siblings().removeClass('active');
  } else {
    $(this).removeClass('active');
  }


});

function NumChange(){
 var buyethNum=document.getElementById("BuyethNum");
 var totalpcc=document.getElementById("totalpcc");
 totalpcc.innerHTML=buyethNum.value  * 3333;
}

/* banner */
$('.banner').on('mousemove', function(e) {
	//公式
    var offsetX = e.clientX / window.innerWidth - 0.5,
        offsetY = e.clientY / window.innerHeight - 0.5;
	var _left = -40 * offsetX;    //如果想动的幅度更大，可以调整 -40 的值
	var _top = -40 * offsetY;     //如果想动的幅度更大，可以调整 -40 的值
	//应用公式
	//$('.banner .banner-earth').css('right',_left*.5).css('bottom',-50%+_top*1);  //将您的left值和top值先+此数值，*的小数越大，动的越大，否则越小
	//$('.banner .banner-star').css('left',_left*.5).css('top',0+_top*.5); //将您的left值和top值先+此数值，*的小数越大，动的越大，否则越小
	 $('.banner .container').css('left',_left*.05).css('top',_top*.5); //  
  });
  
  /* 日期倒计时 */
  $(function(){
  	$.leftTime("2019/06/22 00:00:00",function(d){
  		if(d.status){
  			var dateShow=$("#dateShow");
  			dateShow.find(".d").html(d.d);
  			dateShow.find(".h").html(d.h);
  			dateShow.find(".m").html(d.m);
  			dateShow.find(".s").html(d.s);
  		}
  	});
  });