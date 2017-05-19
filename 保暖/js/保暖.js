/*=======================================暖心礼物========================================*/
$(function(){
/*=======================================暖心礼物========================================*/
	
	$(".hotgift dl").mouseenter(function(){
		$(".hotgift dd").css("display","block")
	});
	$(".hotgift dl").mouseleave(function(){
		$(".hotgift dd").css("display","none")
	});
/*=====================================点击加入收藏==============================================*/

/*====================================商品的生成============================================*/
	var newStr={};
	$.ajax({
		type:"get",
		dataType:"json",
		url:"http://10.35.161.52:8080/myWeb/getGoodsList.jsp",
		data:"stuId=25",
		error:function(data){
			//console.log(data)
			Str=eval("("+data.responseText+")");
			//console.log(Str.length)
			for(var i=1;i<Str.length;i++){
				if(i<18){
					fn(i);
				}
				
			}
				fn1();
				$(".re-gift img").click(function(){
					window.open("../商品详情页/商品详情页.html",target="_blank");
				});
		}
		
	})
	
	function fn(i){
		newStr=$('<li><div class="gift_con"><a href="javascript:;"><img src="'+Str[i].goodsImg+'"/>'+
		'</a><div class="hid-box"><p class="boxp"><a class="show1" href="javascript:;" style="display: block;">'+
		'<i></i>加入收藏</a><a class="show2" href="javascript:;" style="display:none">已收藏，请查看我的收藏</a>'+
		'</p><p  class="a-link"><a href="javascript:;">去看看</a></p></div></div><p class="some">'+
		'</p><p class="box1"><a href="javascript:;">'+Str[i].goodsColor+'</a><span><em>￥</em>'+
		Str[i].goodsPrice+'</span></p><p class="word-p">'+Str[i].goodsContent+'</p></li>');
		$(".re-gift ul").append(newStr);
		var json1=JSON.stringify(newStr[i])
		localStorage.setItem('newStr[i].goodsName',json1);
		
	}
	$(".btm p a").click(function(){
		$(".btm").find("strong").css("background-position-x","-1px");
		$(".btm p a").html("查看收藏").click(function(){
			$(".coll-cont").fadeIn();
		})
	})
	
/*=====================================图片部分==============================================*/
	var num=0;
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
		$(".gift_con .boxp a").click(function(){
			var myLi = $(this).parent().parent().parent();
			//console.log(myLi)
			if(!myLi.hasClass("li-active")){
				var Src=$(this).parents(".gift_con").find("img").attr("src");
	 			$(".collscroll ul").prepend("<li><em></em><a href='javascript:;'><img src="+Src+"/></a></li>");
	 			num++;
				$(".fast_nav").find(".collect-num").css("display","block");
				$(".collect-num").html(num);
	 			//鼠标移上生成的节点，出现X
	 			$(".collscroll li").mouseover(function(){
	 				$(".collscroll em").css("display","block");
	 			});
				$(".collscroll li").mouseout(function(){
					$(".collscroll em").css("display","none");
				});
			}
			myLi.addClass("li-active");	
			
			
		})
	}
	
	//删除节点
	//使用 delegate() 方法的事件处理程序适用于当前或未来的元素（比如由脚本创建的新元素）
	$(".collscroll").delegate("em","click",function(){
		$(this).parent().remove();
		num--;
		//$(".fast_nav").find(".collect-num").css("display","block");
		$(".collect-num").html(num);
		if(num==0){
			$(".collect-num").css("display","none")
		}
	})
/*=====================================点击我的收藏==============================================*/
	$("#show-coll").click(function(){
		$(".coll-cont").fadeIn();
	})
	$(".close").click(function(){
		$(".coll-cont").fadeOut();
	})
	

})
