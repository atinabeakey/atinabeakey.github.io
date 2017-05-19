$(function(){
	
	/*==========================================main3图片的透明度改变=============================*/
	$(".main3").find("img").mouseover(function(){
		$(this).css("opacity","0.6");
	})
	$(".main3").find("img").mouseout(function(){
		$(this).css("opacity","1");
	})
	$(".main2 li").mouseover(function(){
		$(".pic1").animate({
			opacity: "1",
		},1000);
		$(".pic2").animate({
			opacity: "1",
		},3000);
		$(".pic3").animate({
			opacity: "1",
		},5000);
		$(".pic4").animate({
			opacity: "1",
		},7000);
	})
})
