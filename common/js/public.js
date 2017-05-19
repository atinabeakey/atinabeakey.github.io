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
	
				/*--------------------------navhover的出现以及移动----------------------------------------*/
	
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
			width: 10,
			left:0,
			opacity: "0"
		},"fast")
	});

				/*--------------------------下拉菜单的出现以及事件(延迟菜单)----------------------------------------*/
	//移上下拉菜单滑出		
	$(".nav-spic").mouseover(function(){
		$(".slide_nav").stop(true).slideDown(200);
	});
	//离开延迟一段时间消失
	$(".nav-spic").mouseout(function(){
		$(".slide_nav").delay(200).fadeOut("fast");
	});
	
	
	/*--------------------------回到顶部的出现以及点击触发的事件----------------------------------------*/
	/*var dis=$(".banner").offset().top;
	//console.log(dis);*/
	$(window).scroll(function(){
		var scrollT=$(window).scrollTop();
		//console.log(scrollT);	
		if(scrollT>100){
			$("#fast_li").css("opacity","1");
		}else{
			$("#fast_li").css("opacity","0");
		}	
	})
	$("#fast_li").click(function(){
		$("body,html").animate({
			scrollTop:0
		},"fast")
	});
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

});
