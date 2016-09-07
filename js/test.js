/**
 * 完成课时
 * @example finishLesson(1);
 * @param {Number} lesson 课程
 */
function finishLesson(lesson) {
	alert("恭喜，你已经完成HBuilder入门课程。你可以用其它开发工具试试写这几十行代码，至少比HBuilder慢5倍！更重要的是，你很难找到这么爽的编码体验。");
}

/**
 * 这是一个方法描述
 * @param {String} method = [get|post] 可选值域包括get和post，get是直接请求，post是提交数据
 * @return {Number | String}
 * @example
 * requestTest('get')
 */
function requestTest(method) {
	return 32;
}
requestTest("get")

requestTest || alert('requestTest');//如果requestTest为false，不存在，即执行alert


/**
 * @type {JSURIString}
 */
var spec_list = null;
spec_list = "/js/jquery-1.11.2.min.js";

//language = window.language || {};
//language['_'] = function(key, arrs) {
//	return 'fjfjwiwilslswl';
//};
//
//alert(language['_'](1,2));

var arr = ["George", "John", "William", "Thomas", "James", "Adrew", "Martin"];

var deleteItem1 = arr.pop();
console.log(deleteItem1); //Martin
console.log(arr); //["George", "John", "William", "Thomas", "James", "Adrew"]

var deleteItem2 = arr.shift();
console.log(deleteItem2); //George
console.log(arr); //["John", "William", "Thomas", "James", "Adrew"]

var deleteItem3 = arr.splice(0, 2);
console.log(deleteItem3); //["John", "William"]
console.log(arr); //["Thomas", "James", "Adrew"]

arr.length = 2;
console.log(arr); ////["Thomas", "James"]

var item = arr.pop(); //取得最后一项
console.log(item); //James
console.log(arr); //"Thomas"

/**
 * 阶乘
 * @param {Object} num
 */
function factorial(num) {
	if(num <= 1) {
		return 1;
	}
	return num * arguments.callee(num - 1);
}

function outer() {
	inner();
}

function inner() {
	alert(arguments.callee.caller);
}

/**
 * 获取随机数
 * @param {Number} min 最小数
 * @param {Number} max 最大数
 */
function getRandomNum(min, max) {
	var num = Math.floor(Math.random() * (max - min + 1) + min); //1到10的随机数
	console.log(num);
	return num;
}

function createFunctions() {
	var result = [];
	for(var i = 0; i < 10; i++) {
		//					result[i] = function(num){
		//						return function(){
		//							return num;
		//						}
		//					}(i);
		result[i] = function() {
			return i;
		};
	}
	console.log('result:', result);
	return result;
}

function onclickHandler() {
	var inputArr = document.getElementsByTagName('input');
	console.log(inputArr);
	var bt = document.getElementById("button");
	//				alert(bt.tagName);

}

/**
 * method扩展Function.prototype方法
 * @param {Object} name 方法名
 * @param {Object} func 函数
 */
Function.prototype.method = function(name, func) {
	this.prototype[name] = func;
	return this;
};
String.method('boolean', function() {
	return 'true' == this;
});
var b = 'true'.boolean();
console.log(b);
var n = +'010';
console.log(n);



//			function test(){
//				alert('test')
//			}
(function(a) {
	//				alert(a)
	//				console.log(isNaN(true));
	//var num = factorial(4);
	//alert(num);
	//				outer();

	for(var i = 0; i < 1000; i++) {
		var num = getRandomNum(1, 10);
		if(num > 9) {
			//alert(i)
			break;
		}
	}

	//设置属性不可更改
	var person = {};
	Object.defineProperty(person, 'name', {
		'writable': false,
		'value': 'jw'
	});
	person.name = 'jjfjfjjw';
	//				alert(person.name);
	//				createFunctions();
	//				location.href = 'http://www.baidu.com';
	//				location.href = 'http://www.google.com';
	//				location.port = 8089;
	//				history.back();

	function myFunction(a, b) {
		return a * b;
	}
	
	var n = myFunction.call(null, 10, 2); // 返回 20
	var m = myFunction.apply(null, [20, 10]);
	console.log("n=" + n);
	console.log("m=" + m);

//	var test = test || function() {
//		alert(33)
//	} || new Function(alert('Function'));
//	test();
	
	
	setTimeout(function(){
//		alert(3)
	},10000);
})('fjjfjfjfj')


function People(){
	
}

People.prototype.test = function(){
	this.a = 'a';
};

//var p1 = new People();
//p1.test();
//alert('p1.a='+p1.a)
//var p2 = new People();
//alert('p2.a='+p2.a);


(function(uinv){
	var jw = 3;
	uinv.server = window.uinv.server || {};
	uinv.server.manager = uinv.server.manager || {};
	uinv.server.manager.operation = uinv.server.manager.operation || {};
	
	uinv.server.ajaxService = function(){
		this.config = {
			url:'test',
			type:'POST'
		};
//		var xmlhttp = new XMLHttpRequest();
//		var scope = this;
//		xmlhttp.onreadystatechange = function(){
//			if (this.readyState == 4) {    
//				if (this.status == 200) {        
//					back = $.jsonTo(this.responseText);
//					if (!fun) {
//						return back;
//					} else {
//						fun(back);
//					}   
//				}else{//处理失败
////					scope.addErrorListener.apply()
//				}
//			}
//		};
//		xmlhttp.open(type,uinv.server.manager.operation.url+url,async);
//		xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
//		xmlhttp.send(objJson);
	};
	
	uinv.server.ajaxService.prototype.addResultListener = function(fun,arguments){
		console.log(this.config)
		if(fun){
			fun();
		}
		return this;
	};
	
	
	uinv.server.ajaxService.prototype.addErrorListener = function(fun){
		if(fun){
			fun();
		}
	};
	
	var service = new uinv.server.ajaxService().addResultListener(function(){
//		alert('addResultListener')
	}).addErrorListener(function(){
//		alert('error')
	});
	
	
	uinv.hash = {};
	uinv.hash.combine = function(opObjectA, opObjectB,  isReturnNew) {
//		console.log(this);
	    if (isReturnNew){
	    	arguments.callee({}, opObjectB, false);
//	        return 2;
	    }
	    console.log("uinv.has.combine");
	 };
	 
	 uinv.hash.combine(1,2,true);
	 
	 
	 /**
	 * 自定义ajax
	 * @param {Object} config	
	 * 		example
	 * 		{
	 * 			url:uinv.server.manager.operation.url + 'getDownDataChainByTerm',
	 * 			type:'POST',//默认为POST，还可以是GET
	 * 			fun:fun,//有fun回调时，为异步（async = false），否则为同步（async = false）
	 * 			data:{"jsonIds":["aaa","bbb"],"isAs":true}//json或字符串
	 * 		}
	 */
	uinv.server.manager.ajax = function(config){
		var xmlhttp = new XMLHttpRequest();
		var fun = config.fun,async = false,type = config.type || 'POST',data = config.data;
		if(typeof data == 'object'){
			data = $.toJson(obj);
		}
		if (fun) async = true;
		xmlhttp.onreadystatechange = function(){
			if (this.readyState == 4) {    
				var back = $.jsonTo(this.responseText);
				if (this.status == 200) {        
					if (fun) {
						fun(back);
					}else{
						uinv.util.alert( back.message );
					}
				}
				if (!fun) {
					return back;
				} 
			}
		};
		xmlhttp.open(type,config.url,async);
		xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
		xmlhttp.send(data);
	};
	
	
	uinv.server.manager.operation.ajax = function(config) {
		if(config.url){
			config.url = uinv.server.manager.operation.url + config.url;
		}
		uinv.server.manager.ajax(config);
	};
	
	
})(window.uinv = {});
//uinv.server.ajax = function(url,type,async,objJson,fun){
//	var xmlhttp = new XMLHttpRequest();
//	xmlhttp.onreadystatechange = function(){
//		if (this.readyState == 4) {    
//			if (this.status == 200) {        
//				back = $.jsonTo(this.responseText);
//				if (!fun) {
//					return back;
//				} else {
//					fun(back);
//				}   
//			}
//		}
//	};
//	xmlhttp.open(type,uinv.server.manager.operation.url+url,async);
//	xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
//	xmlhttp.send(objJson);
//};


(function(){
	var jsonStr = '{"dat1@CN010UINNVOADEMOII1051@室内_生产楼_生产楼\"]","_数据源_":"SCENE","_TYPE_":"房间"}},"success":true}';
	console.log(typeof jsonStr);
	
	var json = {"sitename":{"adjkd":"K JSON"},"success":true};
	console.log(typeof json);
	
//	document.body.scrollByLines(5);

	function a(){
//		return 'a';
		console.log("aaaaaaaaaaaaaa");
	}
	
	function b(){
		return a();
	}
	
	var b = b();
	console.log("b="+b);
	
	var arr = ['a','b'];
	var as = [].slice.call(arr);
	console.log("as",as);
	
	function consoleLog(i){  
	  console.log(i);
	}
	for(var i = 0;i < 10;i++){
//	    setTimeout(console.log.bind(this,i),1000);
//	    setTimeout(consoleLog.bind(this,i),1000);
//	    setTimeout(console.log(i),1000);
	}
	
	function add(a,b,c) {
	  return a+b+c;
	}
	var addAgain = add.bind(this, 1, 2);
	var result = addAgain(3);
	console.log("result="+result);
	
	
	var obj = {
		file:'file',
		name:'name',
		url:null
	};
	for(var key in obj){
		console.log(key + "=" + obj[key]);
	}
	console.log("obj="+JSON.stringify(obj));
	
//	alert(window.location.href);
	var href = window.location.href;
	var host = window.location.host;
//	alert(href);

	isEmpty = function(opObject) {
	    for(var cur in opObject){    	
	        return false;
	    };
	    return true;
	};
	
	var b = isEmpty(null);
	//alert(b)//true
	//b = !'';//true
	//alert(b)
	
	var data3 = [];
	var name = '哈哈';
	var num1 = '1.333333333';
	var num2 = '222222222';
//	data3.push({
//	  [name]:[num1, num2]
//	});
	var obj = {};
	obj[name] = [num1,num2];
	data3.push(obj);
	console.log("data3",data3);
})();




(function(){
	var subsys1 = {}, subsys2 = {};
	var nextIdMod = function(startId) {
	    var id = startId || 0;
	    this.next = function() {
	        return id++;    
	    };
	    this.reset = function() {
	        id = 0;     
	    }
	};
	nextIdMod.call(subsys1);    
	nextIdMod.call(subsys2,1000);   
//	nextIdMod.apply(subsys2,[1000]);
	window.console && console.log(
	    subsys1.next(),
	    subsys1.next(),
	    subsys2.next(),
	    subsys1.reset(),
	    subsys2.next(),
	    subsys1.next()
	) //0, 1, 1000, undefined, 1001, 0
})();
