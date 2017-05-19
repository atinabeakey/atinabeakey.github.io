$(function(){
	
	var onOff1=false;
	var onOff2=false;
	$("#regist_submit").click(function(){
		//当邮箱为空时点击注册显示提示内容
		if($(".regist_username").val()==""){
			$(".e1").html("邮箱不能为空!");
		}
		if($(".regist_pass").val()==""){//当密码为空时点击注册显示提示内容
			$(".e2").html("密码不能为空，必须填入!")
		}
	})
	
	//当 username获取焦点的时候边框发生变化
		fn();
		function fn(){
			$(".regist_username").focus(function(){
				$(this).css({
					"border":"1px solid #f50",
					"box-shadow":"0 0 3px #f00"
				})
				$(".user_dd ").find("span").css({
					"z-index":"1",
					"display":"none"
				})
			});
			$(".regist_username").blur(function(){
				$(this).css({
					"border":"1px solid #ccc",
					"box-shadow":"0 0 0 #ccc"
				});
				if($(".regist_username").val()==""){
					$(".e1").html("邮箱不能为空!");
				}else{
					var reg=/^[\w][\w-]*@[a-z0-9A-Z]{2,6}(\.[a-z]{2,3}){1,3}$/;//邮箱正则
					var emial=$(this).val();
					if(reg.test(emial)==false){
						$(".e1").html("格式不正确，请输入正确的邮箱格式!");
					}else{
						$(".e1").html(" ");
						onOff1=true;
					}
				}
				
			});
		}
		
		
	//当 password获取焦点的时候边框发生变化
	$(".regist_pass").focus(function(){
		$(this).css({
			"border":"1px solid #f50",
			"box-shadow":"0 0 3px #f00"
		})
		$(".pass_dd ").find("span").css({
			"z-index":"1",
			"display":"none"
		})
	})
	$(".regist_pass ").blur(function(){
		$(this).css({
			"border":"1px solid #ccc",
			"box-shadow":"0 0 0 #ccc"
		});
		var reg=/^[\@A-Za-z0-9\!\#\%\^\&\*\.\~]{6,20}$/
		var pass=$(this).val();
		if($(".regist_pass").val()!=""){
			if(reg.test(pass)==false){
				$(".e2").html("格式不正确，请输入正确的密码格式!");
			}else{
				$("e2").html(" ");
				onOff2=true;
			}
		}else{
			$(".e2").html("密码不能为空，必须填入!");
		}
		
	});
	var userval=$(".regist_username").val();
	var passval=$(".regist_pass ").val();
	$(".regist_username").blur(function(){
		if($(".regist_username").val()==""){
			$(".e1").html("邮箱不能为空!");
		}else{
			$.ajax({
				type:"get",
				url:"http://10.35.161.52:8080/myWeb/checkUser.jsp",
				data:"stuId=25&userName="+$(".regist_username").val(),
				success:function(data){
					console.log(data)
					if(data==1){
						$(".e1").html("该邮箱已经注册!");
					}
				}
			})
		}
		
	})

	$("#regist_submit").click(function(){
		if (onOff1&&onOff2) {
			$.ajax({
				type:"post",
				dataType:"json",
				url:"http://10.35.161.52:8080/myWeb/reg.jsp",
				data:"stuId=25&userName="+$(".regist_username").val()+"&userPass="+$(".regist_pass ").val()+"&userEmail="+$(".regist_pass ").val(),
				success:function(data){
					//console.log(data)
	    			if(data){
						alert("注册成功");
						$(".regist_username").val("");
						$(".regist_pass ").val("");
						$(".user_dd ").find("span").css({
							"z-index":"10",
							"display":"block"
						})
						$(".pass_dd ").find("span").css({
							"z-index":"10",
							"display":"block"
						})
					}
	    		}
			})
				
		}
	});
	
})
