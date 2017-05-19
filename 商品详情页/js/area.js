window.onload=function(){
	var address=document.getElementById("address");
	var prov=document.getElementById("prov");
	var city=document.getElementById("city");
	var oarea=document.getElementById("area");
	var dt=address.getElementsByTagName("dt");
	var oem=address.getElementsByTagName("em");
	var odd=address.getElementsByTagName("dd");
	var det=address.getElementsByTagName("i");
	ajax("city.json",function(res){
		//console.log(data);
		var data=JSON.parse(res);
				console.log(data);
		//省份的选择
		oem[0].innerHTML="请选择省份";
		var n,m;
		for(var i=0;i<data.length;i++){
			var oSpan=document.createElement("span");
			oSpan.innerHTML=data[i].name;
			odd[0].appendChild(oSpan);
		}
		dt[0].onclick=function(){
			odd[0].style.display="block";
			var oSpan=odd[0].getElementsByTagName("span");
			for(var i=0;i<oSpan.length;i++){
				oSpan[i].index=i;
				oSpan[i].onclick=function(){
					for(var i=0;i<oSpan.length;i++){
						oSpan[i].className="";
					}
					this.className="selected";
					oem[0].innerHTML=this.innerHTML;
					odd[0].style.display="none";
					if (oem[0].innerHTML==this.innerHTML) {
						fn(this.index);	
						//console.log(this.index)
						m=this.index;
					}
				}
			}
		}	
	});	
	function fn(m){
		odd[1].innerHTML="";
		ajax("city.json",function(res){
			var data=JSON.parse(res);
			//console.log(data[m].name)
			var x=oem[0].innerHTML;
			oem[1].innerHTML="请选择市";
			oem[2].innerHTML="请选择县区";
			//console.log(data[m].city.length)
			for(var i=0;i<data[m].city.length;i++){
				var aSpan=document.createElement("span");
				oem[1].innerHTML=data[m].city[0].name;
				aSpan.innerHTML=data[m].city[i].name;
				aSpan.title=i;
				//console.log(aSpan.innerHTML);
				odd[1].style.display="block";
				odd[1].appendChild(aSpan);
			}
			var span=city.getElementsByTagName("span")
			for (var j=0;j<span.length;j++) {
				span[j].index=j;
				span[j].onclick=function(){
					oem[1].innerHTML=this.innerHTML;
					odd[1].style.display="none";
					n=this.index;
					fn1(m,n);
					//console.log(this.index)
				}
			}
		})
	}
	//选择区
	function fn1(m,n){
		//console.log(n)
		ajax("city.json",function(res){
			var data=JSON.parse(res);
			oem[2].innerHTML="请选择县区";
			//console.log(data)
		  //console.log(data[m].city[n].area.length)
			for(var i=0; i<data[m].city[n].area.length;i++)	{
				var cSpan=document.createElement("span");
				oem[2].innerHTML=data[m].city[n].area[0];
				cSpan.innerHTML=data[m].city[n].area[i];
				//console.log(cSpan.innerHTML);
				odd[2].style.display="block";
				odd[2].appendChild(cSpan);
			}
			var cspan=area.getElementsByTagName("span");
			for (var j=0;j<cspan.length;j++) {
				cspan[j].index=j;
				cspan[j].onclick=function(){
					oem[2].innerHTML=this.innerHTML;
					odd[2].style.display="none";
				}
			}
	
		})
	}
	
		det[0].onclick=function(){
			odd[0].style.display="none";
		}
	
	function ajax(url,succfun,failfun){
		//创建XMLHTTPRequest对象
		var XHR;
		if(window.XMLHttpRequest){
			XHR = new XMLHttpRequest();
		}else{
			XHR = new ActiveXObject("Microsoft.XMLHTTP");
		}
		
		//定义连接属性
		XHR.open("GET",url,true);
		
		//发送请求
		XHR.send();
		
		//定义回调函数
		XHR.onreadystatechange = function(){
			if(XHR.readyState==4&&XHR.status==200){
				succfun(XHR.responseText);
			}else{
				if(failfun){
					failfun(XHR.responseText);
				}
			}
		}
	}
	
}
