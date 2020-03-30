window.onload = function(){
	//调用封装函数1时
	/* var oul = document.getElementById("oul");
	var nodes = elementByClassName(oul, "box");
	for(var i = 0; i < nodes.length; i++){
		console.log(nodes[i].innerHTML);
	} */
	
	//调用封装函数2时
	/* var node = document.getElementById("div1");
	alert(getStyle(node, "width")); */
	
	// 调用封装函数3时
	/* alert($("#div1").innerHTML);
	alert($(".box").length);
	alert($(".box")[1].innerHTML)
	alert($("div").length);
	alert($("name=hello")[0].innerHTML); */
	
	//调用封装函数4时
	/* var oDiv = document.getElementById("div1");
	var oBtn = document.getElementById("btn")
	oBtn.onclick = function(){
		var node = createElementWithTxt("p", "测试")
		oDiv.appendChild(node);
		} */
		
	//调用封装函数5时
	/* var oDiv = document.getElementById("div1");
	var oldNode = document.getElementsByTagName("span")[0];
	var newNode = createElementWithTxt("strong", "strong文本");
	insertAfter(newNode, oldNode); */

}
//通过class获取元素节点，浏览器兼容问题提供函数。    //函数1
	function elementByClassName(parent, classStr){
		//找到parent节点下所有的元素节点
		var nodes = parent.getElementsByTagName("*");
		var result = []; //用来记录符合条件的所有元素节点
		for(var i = 0; i < nodes.length; i++){
			if(nodes[i].className == classStr){
				result.push(nodes[i]);
			}
		}
		return result;
	}
	
//获取元素样式，浏览器兼容问题提供函数。   //函数2
	function getStyle(parent, style){
		return parent.currentStyle ? parent.currentStyle(style) : getComputedStyle(parent)[style]; 
	}

//封装函数，获取各种节点获取的功能		//函数3
	function $(vArg){
		//对参数进行区分
		switch(vArg[0]){
			case "#":
				return document.getElementById(vArg.substring(1));
				break; 
			case ".": 
				return elementByClassName(document, vArg.substring(1))
				break; 
			default: 
				var str=vArg.substring(0, 5)
				if(str == "name="){
					return document.getElementsByName(vArg.substring(5));
				}else{
					return document.getElementsByTagName(vArg);
				}
		}
	}
	
//创建带文本的元素节点	//函数4
	function createElementWithTxt(tagName, txt){
		var node = document.createElement(tagName); 
		var txt = document.createTextNode(txt);
		node.appendChild(txt);
		return node;
	}
	
//insertAfter()方法  //函数5
	function insertAfter(newNode, oldNode){
		var parent = oldNode.parentNode;
		if(oldNode == parent.lastChild){
			oldNode.appendChild(newNode);
		}else{
			parent.insertBefore(newNode, oldNode.nextSibling);
		}
	}
	
	