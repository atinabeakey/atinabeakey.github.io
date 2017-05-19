$(function(){
	var newStr={};
	//console.log(3435);
	var m=42;
	fm(m);
	function fm(m){
		$.ajax({
			type:"get",
			dataType:"json",
			url:"http://10.35.161.52:8080/myWeb/getGoodsList.jsp",
			data:"stuId=25",
			error:function(data){
				//console.log(data)
				Str=eval("("+data.responseText+")");
				//console.log(Str.length)
				
				$(".showBox ul").html("");
				for(var i=24;i<m;i++){
						fn(i);
				}
				fn1();
				$(".re-gift img").click(function(){
					window.open("../商品详情页/商品详情页.html",target="_blank");
					
				});
			}
			
		})
	}
	function fn(i){
		newStr=$('<li><div class="gift_con"><a href="javascript:;"><img src="'+Str[i].goodsImg+'"/>'+
		'</a><div class="hid-box"><p class="boxp"><a class="show1" href="javascript:;" style="display: block;">'+
		'<i></i>加入收藏</a><a class="show2" href="javascript:;" style="display:none">已收藏，请查看我的收藏</a>'+
		'</p><p  class="a-link"><a href="javascript:;">去看看</a></p></div></div><p class="some">'+
		'</p><p class="box1"><a href="javascript:;">'+Str[i].goodsColor+'</a><span><em>￥</em>'+
		Str[i].goodsPrice+'</span></p><p class="word-p">'+Str[i].goodsContent+'</p></li>');
		$(".showBox ul").append(newStr);
	}	
	function fn1(){
			//鼠标移上去之后隐藏部分出现
		$(".re-gift li").mouseenter(function(){
			//console.log(123)
			$(this).find(".hid-box").animate({"bottom":"0"})
			
		});
		$(".re-gift li").mouseleave(function(){
			$(this).find(".hid-box").animate({"bottom":"-40"})
			
		});
		//点击加入收藏
		var oLen = $(".re-gift ul li").length;
		
		$(".hid-box .boxp ").click(function(){
			$(this).find(".show1").css("display","none");
			$(this).find(".show2").css("display","block");
		})
	}
/*==============================点击选项卡请求后台加载图片=======================================*/
	$(".fixedbox li").click(function(){
		$(this).addClass("current").siblings().removeClass("current");
		$(".re-gift").eq($(this).index()).addClass("showBox").siblings().removeClass("showBox");
		fm((m-$(this).index()*3));
	})
/*==========================================fixedbox的固定=============================================*/
	$(window).scroll(function(){
		var T=$(".fixedbox").offset().top;
		
		var scrollT=$(window).scrollTop();
		//console.log(scrollT);
		if(scrollT<T){
			$(".fixedbox ul").css({
				"z-index":"10",
				position:'relative'
			})
		}else{
			$(".fixedbox ul").css({
				"z-index":"1000",
				position:'fixed',
				top:"0",
				"box-shadow":" 0 1px 1px rgba(0,0,0,0.4)"
			})
		}
	});
	
})
