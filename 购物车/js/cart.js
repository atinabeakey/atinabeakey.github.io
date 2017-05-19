	$(function(){
		var myGoods =$.cookie();
		//console.log(myGoods);
		if(myGoods){
			//alert(12132)
			$(".hasGoods").show();
			$(".noGoods").hide();
			$("h3").html("购买了同样礼品的用户还购买了");
			for(var i in myGoods){
				if(!(i.indexOf("goods")==-1)){
					var data=$.parseJSON(myGoods[i]);
					var price=parseFloat(data.price).toFixed(2)
					//alert(price);
					//console.log(data.num)
					var newStr=$("<tr class='goods-item' date-cook="+i+"><td class='td1'><input class='check' type='checkbox' checked='checked' /></td>"+
								"<td class='w70'><img src='"+data.imgs+"' /></td><td class='w190'>"+data.dataCode+
								"</td><td class='money'>"+price+"</td><td class='mod-quaity'><div ><a class='minus' href='javascript:;'>-</a>"+
								"<input type='text' class='quantity' value='"+data.num+"'/><a class='plus' href='javascript:;'>+</a>"+
								"</div></td><td class='mod-price'>"	+(price*data.num).toFixed(2)+"</td><td class='dele' ><a href='javascript:;'>删除</a></td></tr>");	
					$(".wrap-store").append(newStr)	;					
				}
			}
		//一进入页面显示全选状态 以及件数，价格的显示
			var totalPrice=0;
			$(".mod-price").each(function(){
				totalPrice+=parseFloat($(this).html());
				//console.log(totalPrice)
			});
			$("#total").html(totalPrice.toFixed(2));
		//点击删除后移除节点
			$(".dele").click(function(){
				$(this).closest("tr").remove();
				$.cookie($(this).closest("tr").attr("date-cook"),"",{expires:-1,path:"/"});
				var sumPrice=totalPrice-$(".dele").parent().parent().find(".mod-price").html();
				//console.log(sumPrice)
				$("#total").html(sumPrice.toFixed(2));
				//console.log(sumPrice)
				if(isNaN(sumPrice)){
					$("#total").html("0.00");
					$(".noGoods").show();
					$("h3").html("猜你喜欢");
					$(".hasGoods").hide();
				}
			});
		//点击减法的时候	
			$(".minus").click(function(){
				var num=parseInt($(this).next().val());
				var danjia= parseFloat($(this).parent().parent().prev().html());
				var toMoney=parseFloat($("#total").html())
				//console.log(toMoney)
				if(num>1){
					num--;
					$(this).next().val(num);
					$(this).parent().parent().next().html((danjia*num).toFixed(2));
					if($(this).parent().parent().prev().prev().prev().prev().find(".check").prop("checked")){
						$("#total").html((toMoney-danjia).toFixed(2))
					}
				}
			});
		//点击加法的时候
			$(".plus").click(function(){
				var num=parseInt($(this).prev().val());
				var danjia= parseFloat($(this).parent().parent().prev().html());
				var toMoney=parseFloat($("#total").html())
				//console.log(toMoney)
				if(num<20){
					num++;
					//console.log(toMoney)
					$(this).prev().val(num);
					$(this).parent().parent().next().html((danjia*num).toFixed(2));
					if($(this).parent().parent().prev().prev().prev().prev().find(".check").prop("checked")){
						$("#total").html((toMoney+danjia).toFixed(2))
					}
				}
			});
		//判断全选的情况
			$("#checkbox").click(function(){
				///console.log(124)
				var spicPrice=0;
				if($(this).prop("checked")){
					$("#checkbox").prop("checked",true);
					$(".check").prop("checked",true);
					$(".mod-price").each(function(index,domEle){
						spicPrice+=parseFloat($(this).html());
					});
					$("#total").html(spicPrice.toFixed(2));
					//console.log(124)
				}else{
					$("#checkbox").prop("checked",false);
					$(".check").prop("checked",false);
					$("#total").html('0.00');
					//console.log(124)
				}
			})
			
		//判断单选的时候
			$(".check").click(function(){
				var onOff=true;
				//console.log(t)
				$(".check").each(function(i,ele){
					//console.log(!($(".check").prop("checked")))
					
					if(!($(ele).prop("checked"))){
						onOff=false;
					}
					
					
				});
				if(onOff){
					$("#checkbox").prop("checked",true);
				}else{
					$("#checkbox").prop("checked",false);
				}
				var num=parseInt($(this).parent().parent().children(".mod-quaity").find(".quantity").val());
				//console.log(num)
				var xiaoji= parseFloat($(this).parent().parent().children(".mod-price").html());
				//console.log(xiaoji);
				var toMoney=parseFloat($("#total").html());
			//当前取消选中，总和中减去当前商品的价格小计
				if($(this).prop("checked")){
					//console.log(danjia+toMoney)
					$("#total").html((xiaoji+toMoney).toFixed(2))
					//console.log($("#total").html((danjia+toMoney).toFixed(2)));
				}else{
					$("#checkbox").prop("checked",false);
					$("#total").html((toMoney-xiaoji).toFixed(2))
				}
			});
		}
		if(!myGoods){
			//console.log(3535)
			$(".noGoods").show();
			$("h3").html("猜你喜欢");
			$(".hasGoods").hide();
		}
		//console.log($.isEmptyObject(myGoods))
		if($.isEmptyObject(myGoods)){
			//console.log(3535)
			$(".noGoods").show();
			$("h3").html("猜你喜欢");
			$(".hasGoods").hide();
		}
		$(".noGoods a").click(function(){
			location="../商品详情页/商品详情页.html"	;
		});
/*===================================================以上是json模拟=========================================================*/		
		$.ajax({
			type:"get",
			dataType:"json",
			url:"http://10.35.161.52:8080/myWeb/getShoppingCart.jsp",
			data:"stuId=25&userName=1780537372@qq.com",
			error:function(data){
				//console.log(data)
					var data=eval("("+data.responseText+")");
				if(data[0].goodsId){
					//console.log(132435)
					//console.log(data)
					$(".hasGoods").show();
					$(".noGoods").hide();
					$("h3").html("购买了同样礼品的用户还购买了");
					
					//console.log(data.length)
					//console.log(data.goodsImg)
					var newStr=$("<tr class='goods-item' date-cook="+data[0].goodsId+"><td class='td1'><input class='check' type='checkbox' checked='checked' /></td>"+
								"<td class='w70'><img src='"+data[0].goodsImg+"' /></td><td class='w190'>"+data[0].goodsContent+
								"</td><td class='money'>"+data[0].goodsPrice+"</td><td class='mod-quaity'><div ><a class='minus' href='javascript:;'>-</a>"+
								"<input type='text' class='quantity' value='"+data[0].goodsCount+"'/><a class='plus' href='javascript:;'>+</a>"+
								"</div></td><td class='mod-price'>"	+(data[0].goodsPrice*data[0].goodsCount).toFixed(2)+"</td><td class='dele' ><a href='javascript:;'>删除</a></td></tr>");	
					$(".wrap-store").append(newStr)	;
				
				}
			}	
			
		});
		$(document).delegate(".dele","click",function(){
			$.ajax({
				type:"get",
				dataType:"json",
				url:"http://10.35.161.52:8080/myWeb/deleteGoods.jsp",
				data:"stuId=25&userName=1780537372@qq.com&goodsId=0100",
				success:function(data){
					console.log(data);
					$(".wrap-store").remove("tr");
				}
			})
			$(".hasGoods").hide();
			$(".noGoods").show();
			$("h3").html("猜你喜欢");
		})
		
	});
