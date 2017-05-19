$(function(){
	/*==============================================选项卡========================================*/
		/*=========================================小图片的添加================================*/
	var t=0;
	$(".kd-img-slide li").click(function(){
		//$(".zoompad li").eq($(this).index()).css("display","block").siblings().css("display","none");
		$(".zoompad li").eq($(this).index()).css("z-index","100").siblings().css("z-index","1");
		//console.log($(this).index());
		$(".zoomBig  li").eq($(this).index()).css("z-index","9999").siblings().css("z-index","1");
		$(this).addClass("active").siblings().removeClass("active");
		 t=$(this).index();
		 
	});
	/*==============================================放大镜========================================*/
	//大图的出现和遮罩层的出现;
	
		$(".zoompad ").mouseover(function(){
			$(".zoomBig").show();
			//console.log(t);
			//console.log($(".zoomBig li"));
			//$(".zoomBig  img").eq(t).css("z-index","9999").siblings().css("z-index","40");
			$(".fornt-pop").show();
		});
		//大图的出现和遮罩层的隐藏
		$(".zoompad").mouseout(function(){
			$(".zoomBig").hide();
			$(".fornt-pop").hide();
			//t=0;
		});
		$(".zoompad").mousemove(function(ev){
			var oWidth=$(".zoompad li img").width();
			var oHeight=$(".zoompad li img").height();
			var W=$(".fornt-pop").width();
			var H=$(".fornt-pop").height();
			var L=ev.pageX-$(".zoompad li img").offset().left;
			var T=ev.pageY-$(".zoompad li img").offset().top;
			var l=0,t=0;
			if(L<(W/2)){
				l=0;
			}else if(L>(oWidth-W/2)){
				l=oWidth-W;	
			}else{
				l=L-(W/2);
			}
			if(T<(H/2)){
				t=0;
			}else if(T>(oHeight-H/2)){
				t=oHeight-H;	
			}else{
				t=T-(H/2);
			}
			$(".fornt-pop").css({
				"left":l+"px",
				"top":t+"px"
			})
			//console.log(t);
			
			$(".zoomBig li img").css({
				"left":(-2)*l+"px",
				"top":(-2)*t+"px"
			})
			
		});
	
	/*==============================================省级联动=======================================*/
	/*$.ajax({
		type:"GET",
		url:"city.json",
		dataType:"json",
		success:function(res){
			
			//console.log(data);
			console.log(res)
		}
	})*/
	
	/*==============================================侧面轮播======================================*/
	
	var num=1;
	var len=$(".move_pic li").length;
	var t=0,dis=0;
	var timer=null;
	fn();
	function fn(){
		timer=setInterval(function(){
			num++;
			if(num>=len){
				num=2;
				$(".sideright ul").css("top","-580px");
			}
			dis=num*580;
			pic();
		},2000);
	}
	function pic(){
		$(".sideright ul").stop().animate({top:-dis+"px"},"slow");
	};
	$(".changeBtn").mouseover(function(){
		clearInterval(timer);;
	})
	$(".changeBtn").mouseout(function(){
		fn();
	})
	$(".moveleft").click(function(){
		num++;
		if(num>=len){
			num=2;
			$(".sideright ul").css("top","-580px")
		}
		dis=num*580;
		$(".sideright ul").stop().animate({
			top:-dis+"px"
		},"slow")
		
	})
	$(".moveright").click(function(){
		clearInterval(timer);
		num--;
		if(num<=0){
			num=len-2;
			$(".sideright ul").css("top",-580*(len-1)+"px")
		}
		t=num*580;
		$(".sideright ul").stop().animate({
			top:-t+"px"
		},"slow")
		
	});
	
	
	
	/*========================================顶部固定=====================================*/
	//当滚动条划过商品详情时，mini-buy显示。当滚动条滚到bottom是goto固定(改变它的top值)
	var t=$(".tab-bar").offset().top;
	$(window).scroll(function(){
 		var scrollT=$(window).scrollTop();
 		//显示和隐藏导航条
 		//console.log(t)
		if(scrollT<t){
			$(".tab-bar").css({
				position:"relative",
			});
			$(".mini-buy").fadeOut();
		}else{
			$(".tab-bar ").css({
				position:"fixed",
				top:"0"
				
			});
			$(".mini-buy").fadeIn();
		}
 	});
 	/*=============================================加入购物车================================================*/
 	var m=0;
 	//商品件数的减少
 	$(".minus").click(function(){
 		m--;
 		if(m<0){
 			m=0;
 		}
 		$(".quanity").val(m);
 	});
 	//商品件数的增加
 	$(".plus").click(function(){
 		m++;
 		if(m>10){
 			m=10;
 		}
 		$(".quanity").val(m);
 	});
 	
 	$("#col-shop").click(function(){
 		//console.log($("#J_Price").html())
 		$(".popup").show();
 		$(".zhezhao").show();
 		var myObjectId = $(".kd-img-slide li.active").attr("id");
 		//console.log($(".kd-img-slide li.active").find("img").attr("src"))
 		//console.log(myObjectId)
 		if($.cookie(myObjectId)){
			var myObject = $.parseJSON($.cookie(myObjectId));
		}else{
			var myObject={};
			myObject.dataCode =$(".goods-text").find(".lay-title").html();
			myObject.price =$("#J_Price").html() ;
			myObject.num =$(".control") .find(".quanity").val();
			myObject.imgs =$(".kd-img-slide li.active").find("img").attr("src") ;
		}
		$.cookie(myObjectId,JSON.stringify(myObject),{expires:7,path:"/"});
		/*=========================================以上是cookie方法=========================================*/
		 $.ajax({
		 	type:"get",
		 	dataType:"json",
		 	url:"http://10.35.161.52:8080/myWeb/addShoppingCart.jsp",
		 	data:"stuId=25&userName=1780537372@qq.com&goodsId=0100&goodsCount=1",
		 	success:function(data){
		 		console.log(data)
		 	}
		 	/*error:function(data){
		 		console.log(data)
		 		alert(34)
		 		var Str=eval("("+data.responseText+")");
		 		console.log(Str)
		 	}
		 })*/
 		})
	 	$(".modal-head").click(function(){
	// 		alert(1);
	 		$(".popup").hide();
	 		$(".zhezhao").hide()
	 	});
	 	//
	 	/*===============================================继续购物=======================================*/
	 	$(".kd-btn-goon").click(function(){
	 		$(".popup").hide();
	 		$(".zhezhao").hide()
	 	})
	}) 
});
