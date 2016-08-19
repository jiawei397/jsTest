(function(){
	/**
	 * 用nodejs 创建服务器
	 * 访问地址：http://127.0.0.1:8000
	 */
	function createServer(){
		var http = require('http');
		server = http.createServer(function(req, res) {
			res.writeHeader(200, {
				"Content-Type": "text/plain"
			});
			res.end("Hello World\n");
		});
		server.listen(8000);
		console.log("httpd start @8000");	
	}
	
	createServer();
	
	/**
	 * 发送Email
	 */
	function sendEmail(){
		var mail = require('nodemailer');
		nodemailer.SMTP = {      
		    host: 'smtp.qq.com',    
		    port: 25,    
		    use_authentication: false,       
		    user: '',  
		    pass: ''  
		};
		
		
		mail.send_mail(
			{
			    sender:'jiawei@uinnova.com', //发送邮件的地址
			    to:'jw397@126.com', //发给谁
			    subject:'测试', //主题
			    body:'发送邮件成功', //发送的内容
			    html:"<p>hello</p>", //如果要发送html
			},
			//回调函数，用户判断发送是否成功，如果失败，输出失败原因。
			function(error,success){
			   if(!error){
			        console.log(‘message success‘);
			   }else{
			     console.log(‘failed‘+error);
			   }
			}
		);
	}
	
	sendEmail();
})();

