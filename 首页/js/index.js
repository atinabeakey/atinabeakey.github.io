$(function(){
/*--------------------------------------页面头部-----------------------------------------------------------------------*/
	//console.log($(".menu_list").children())
	$(" .menu_list").mouseenter(function(){
		//console.log($(this).index());
		$(" .menu_list>a").eq($(this).index()).find("b").addClass("transin").siblings().removeClass("transin");
		$(" .menu_list").eq($(this).index()).find("div").slideDown(300);
	});
	$(" .spical").mouseenter(function(){
		$(this).addClass("active").siblings().removeClass("active");});
	$(" .spical").mouseleave(function(){
		$( this).removeClass("active");
	});
	$(" .menu_list").mouseleave(function(){
		//console.log($(this).index());
		$(" .menu_list>a").eq($(this).index()).find("b").removeClass("transin");
		$(" .menu_list").eq($(this).index()).find("div").css("display","none");
	});
	//点击搜索框页面的跳转
	$(".sea_btn").click(function(){
		window.open("七夕情人节/七夕情人节.html",target="_blank");
	})
	
/*-------------------------------------------nav-----------------------------------------------------------------------*/
	$(".nav1 li").mouseover(function(){
		var L = $(this).position().left;
		//console.log(L);
		var W = $(this).outerWidth();
		//console.log(W);
		$(".navHover").stop().animate({
			display:"block",
			width: W-32,
			left: L+16,
			opacity: "1"
		}, "fast")
	});
	$(".nav1 li").mouseout(function(){
		$(".navHover").stop().animate({
			width: 60,
			left:0,
			opacity: "0"
		},"fast")
	});
	
/*-------------------------------------------------banner------------------------------------------------------------*/
	/*======================================二级菜单=====================================*/
	$(".left_nav a").mouseenter(function(){
			$(this).find("i").css("display","block").addClass("borderHover").siblings().removeClass("borderHover");		
	})
	$(".left_nav dl").mouseenter(function(){
		$(this).children("dd").css("display","block")
	})
	$(".left_nav dl").mouseleave(function(){
		$(this).children("dd").css("display","none")
	})
	$(".left_nav a").mouseleave(function(){
			$(this).find("i").css("display","none")
	})
	/*======================================轮播图=====================================*/
	var timer=null;
	var num=0;
	var len=$(".banner_cen ul li").size();
	//console.log(len);
	/*==========================实现图片的自己轮播====================================*/
	fn();
	function fn(){
		timer=setInterval(function(){
			num++;
			if(num>=len){
				num=0;
			}
			pic();
		},2000);
	}
	
	function pic(){
		$(".banner_cen ul li").eq(num).fadeIn(1000).siblings().fadeOut(1000);
		$(".banner_cen ol li").eq(num).addClass("ban_active").siblings().removeClass("ban_active");
	};
	/*=============================点击ol里的li触发的事件=================================*/
	$(".banner_cen ol li").click(function(){
		num=$(this).index();
		$(".banner_cen ul li").eq($(this).index()).fadeIn(1000).siblings().fadeOut(1000);
		$(".banner_cen ol li").eq($(this).index()).addClass("ban_active").siblings().removeClass("ban_active");
	})
	$(".banner_cen").mouseenter(function(){
		clearInterval(timer);
		$(".banner_cen span").css('display',"block");
	/*===========================鼠标划上span的自己移动===================================*/
		$(".banner_cen .span_bg1").animate({"left":"25px"},"fast");
		$(".banner_cen .span_bg2").animate({"left":"90%"},"fast");
	});
	/*=============================点击前一个的轮播=================================*/
	$(".banner_cen .span_bg1").click(function(){
		num--;
		if(num<0){
			num=len-1;
		}
		pic();
	});
	/*===========================点击下一个的轮播===================================*/
	$(".banner_cen .span_bg2").click(function(){
		num++;
		if(num>=len){
			num=0;
		}
		pic();
	})
	$(".banner_cen").mouseleave(function(){
		$(".banner_cen span").css('display',"none");
		$(".banner_cen .span_bg1").animate({"left":"65px"},"fast");
		$(".banner_cen .span_bg2").animate({"left":"85%"},"fast");
		fn();	
	});
	
/*-------------------------------------------------楼层效果------------------------------------------------------------*/
	$("#floor-nav li").click(function(){
		var top=$(".main-pic").eq($(this).index()).offset().top-$(".floor h1").outerHeight()*2;
		//console.log(top);
		//给floor-nav所有的li清除类
		$("#floor-nav li").removeClass("main_spic");
		//当前的li添加类
		$(this).addClass("main_spic");
		$("body,html").animate({
			scrollTop:top
		},300);
	});
	//滚动页面时触发的事件
	var distance=$(".main-top").offset().top+$(".main-top").outerHeight(true);
	var disY=$(".footer").offset().top;//当fast-nav到底部离顶部的距离
	//console.log(disY);
	$(window).scroll(function(){
		var scrollT=$(window).scrollTop();
		//console.log(scrollT)
		if(scrollT>distance   &&scrollT<disY ){
			$(".main-top ").addClass("floor-bd");
			/*$("#fast_li").slideDown(500);*/
		}else{
			$(".main-top ").removeClass("floor-bd");
			/*$("#fast_li").slideUp(500);*/
		}
		if(scrollT>100){
			$("#fast_li").css("opacity","1");
		}else{
			$("#fast_li").css("opacity","0");
		}	
		
		//滚动页面时floor-nav中的样式的改变
		$(".floor-main .main-pic").each(function(i,ele){
			//console.log($(ele).offset().top)
			var dis=$(ele).offset().top+1200;
			if(dis>scrollT){
				$("#floor-nav li").removeClass("main_spic");
				$("#floor-nav li").eq(i).addClass("main_spic");
				return false;
			}
		});
	})
	//点击回到顶端让回到最上面
	$("#fast_li").click(function(){
		$("body,html").animate({
			scrollTop:0
		},1000)
	})
	//鼠标滑上微信图标触发的事件
	$("#hideWx .fast-a").mouseenter(function(){
		$(".bot-hide").fadeIn("fast");
	})
	//鼠标移走微信图标触发的事件
	$("#hideWx .fast-a").mouseleave(function(){
		$(".bot-hide").delay(200).fadeOut("fast")
	})
	//移上二维码让二维码出现
	$(".bot-hide").mouseenter(function(){
		$(".bot-hide").stop(true).css("display","block");
	});
	//离开二维码让二维码出现
	$(".bot-hide").mouseleave(function(){
		$(".bot-hide").css("display","none")
	});
	
	
	/*=============================================注册成功后======================*/

		var user=$.cookie("username");
		//console.log(user);
		//console.log($.isEmptyObject(user))
		if(!$.isEmptyObject(user)){
			//console.log(3535)
			$(".welcome").html("Hi,欢迎"+user+"来到卡当网")
		}
	$(".part2 img").click(function(){
		//console.log(123)
		/*location="../保暖/保暖单品.html";
		$(this).target = "_blank"; */
		window.open("../保暖/保暖单品.html",target="_blank");
	});
	var user=$.cookie("userName");
		/*console.log(user)*/
		if(user){
			$(".userSpan").html("<span class='usercolor'>"+user+"</span><span class='exit'>退出<span>")
		}
		$(".exit").click(function(){
			$.cookie("userName","",{expires:-2,path:"/"});
			$(".userSpan").html('<a id="useLogin" href="登录页面/登录页面.html" target="_blank" title="登录">登录</a>'
						+'<a id="useReg" href="注册页面/注册页面.html" target="_blank" title="注册">注册</a>');
			
		})
	
})
