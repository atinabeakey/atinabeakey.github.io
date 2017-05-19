$(function(){
/*====================================fixnav================================================*/	
	//当滑过一定的高度导航的固定
	var t=$(".daohang").offset().top+$(".daohang").outerHeight(true);
	//console.log(t)
	$(window).scroll(function(){
		var scrollT=$(window).scrollTop();
		//console.log(scrollT)
		if(scrollT<t){
			$(".fixnav").css({
				display:"none",
				position:"static"
			})
		}else{
			$(".fixnav").css({
				display:"block",
				position:"fixed",
				top:"0"
			});
			$(".fixnav ul").mouseenter(function(){
				$(this).css("background","#fff")
				//$(this).addClass("addbg").siblings().removeClass("addbg");
				$(this).children().first().css("color","#F25E4B")
				$(this).children().css("display","block")
			})
			$(".fixnav ul").mouseleave(function(){
				$(this).css("background","#F4604B")
				$(this).children().first().css("color","#fff")
				$(this).find("li").not(".title").css("display","none")
			})
		//导航的消失	
			var btmTop=$(".active-btm").offset().top;
			//console.log(btmTop);
			if(scrollT>btmTop){
				$(".fixnav").css({
					display:"none",
					position:"static"
				})
			}
		}
	});
	//部分图片的中心放大
	$(".botpic img").mouseover(function(){
		$(this).stop().animate({
			"width":"120%",
			"height":"120%",
			"left":"-10%",
			"top":"-10%"
		},300);
	})
	$(".botpic img").mouseout(function(){
		$(this).stop().animate({
			"width":"100%",
			"height":"100%",
			"left":"0",
			"top":"0"
		},300);
	})
		$(".toppic img").mouseover(function(){
		$(this).stop().animate({
			"width":"120%",
			"height":"120%",
			"left":"-10%",
			"top":"-10%"
		},300);
	})
	$(".toppic img").mouseout(function(){
		$(this).stop().animate({
			"width":"100%",
			"height":"100%",
			"left":"0",
			"top":"0"
		},300);
	})
	

			
})