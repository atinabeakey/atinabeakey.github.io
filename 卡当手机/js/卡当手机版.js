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
	
//	$(".slide_nav").mouseover(function(){
//		$(".slide_nav").show();
//	});
//	//离开立马消失
//	$(".slide_nav").mouseout(function(){
//		$(".slide_nav").hide();
//	});
	
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
	
	/*--------------------------鼠标划上手机触发的事件----------------------------------------*/
	var timer=null;
	
	$(".mobile").mouseover(function(){
		timer=setInterval(function(){
			$(".mobile").animate({top:-330},"fast",function(){
				console.log($(".mobile ").css("top"));
				var t=$(".mobile ").css("top");
				if(t==-330+"px"){
					$(".mobile").animate({top:-270},"fast",function(){
						if(t==-270+"px"){
							$(".mobile").animate({top:-350},"fast")
						}
					})
				}
			})
		},500)	
	})
	//鼠标移出清除定时器
	$(".mobile").mouseout(function(){
		clearInterval(timer);
		$(".mobile").animate("top",107);
	})
});