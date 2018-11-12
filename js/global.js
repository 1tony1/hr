//共通代码
var baseUrl = 'http://localhost:7777/hr4';

//ajax请求超时问题
$.ajaxSetup({
	complete:function(xhr) {
		
		var sessionStatus = xhr.getResponseHeader("sessionStatus");
		
		if (sessionStatus == 'timeout') {
			alert('登录超时，请重新登录');
			location.href= baseUrl + '/logout.jsp';
		}
		
	}
});
