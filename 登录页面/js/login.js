$(function(){
	/*$.cookie("username")*/
	
	var onOff1=false;
	var onOff2=false;
	$("#login_submit").click(function(){
		//console.log(13234)
		if($(".login_username").val()==""){
			$(".e1").html("邮箱不能为空!");
		}
		 if($(".login_pass").val()==""){
			$(".e2").html("密码不能为空，请输入密码!")
		}
	})
	
	$(".login_username").focus(function(){
		$(this).css({
			"border":"1px solid #f50",
			"box-shadow":"0 0 3px #f00"
		})
		$(".user_dd ").find("span").css({
			"z-index":"1",
			"display":"none"
		})
	});
	$(".login_username").blur(function(){
		$(this).css({
			"border":"1px solid #ccc",
			"box-shadow":"0 0 0 #ccc"
		});
		if($(".login_username").val()==""){
			$(".e1").html("邮箱不能为空!");
		}else{
			//判断邮箱是否注册
			$.ajax({
				type:"get",
				url:"http://10.35.161.52:8080/myWeb/checkUser.jsp",
				data:"stuId=25&userName="+$(".login_username").val(),
				success:function(data){
					console.log(data)
					if(data==0){
						$(".e1").html("该邮箱未注册，去注册吧!");
					}
				}
			})
			//用户登录
			$("#login_submit").click(function(){
				$.ajax({
					type:"post",
					url:"http://10.35.161.52:8080/myWeb/login.jsp",
					dataType:"json",
					data:"stuId=25&userName="+$(".login_username").val()+"&userPass="+$(".login_pass ").val()+"&userEmail="+$(".login_pass ").val(),
					success:function(data){
						console.log(typeof data)
						if(data){
							//console.log(data)
							alert("登陆成功");
							window.open("../首页/index.html",target="_blank");
							$.cookie("userName",$(".login_username").val(),{expires:2,path:"/"});
							
						}
					}
				})
			});
		}
	//当 password获取焦点的时候边框发生变化
	$(".login_pass").focus(function(){
		$(this).css({
			"border":"1px solid #f50",
			"box-shadow":"0 0 3px #f00"
		})
		$(".pass_dd ").find("span").css({
			"z-index":"1",
			"display":"none"
		})
	})
	$(".login_pass ").blur(function(){
		$(this).css({
			"border":"1px solid #ccc",
			"box-shadow":"0 0 0 #ccc"
		});
	});
	
	});
})
