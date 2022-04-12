//灵活用工管理后台
var flag = window.location.href.indexOf('.com') != '-1' ? true : false; //true :正式服  false : 测试服

if (window.location.href.indexOf('.com')!='-1') {
    window.localStorage.host = 'http://apiflex.jszhr.com';
    window.localStorage.runType = 1;
} else {
    window.localStorage.host = '';
    window.localStorage.runType = 2;
};

//提示token失效,并且对出
function loginOut(THIS) {
    THIS.$confirm('账号在其他地方登录, 请点击确定重新登录?', '提示', {
        confirmButtonText: '确定',
        showCancelButton: false,
        closeOnClickModal: false,
        showClose: false,
        type: 'warning',
    }).then(() => {
        THIS.$message({
            type: 'success',
            message: '退出成功!',
            dangerouslyUseHTMLString: true
        });
        THIS.$router.replace('/login');
    }).catch(() => {});
};

/*请求数据:只适用于post请求
 *	参数说明: 
 *		THIS            : vue对象
 *		url    			: 请求地址
 *		data   			: 请求数据
 *		callback		: 成功的对调函数
 *		isFeedback		: code != 1时，是否需要提示错误信息
 *		isLoading		: 请求时是否需要显示加载动画  1:需要 0：不需要
 *		isFlag			: 请求时是否需要设置开关  	  1:需要 0：不需要
 *		isCheckToken	: 请求时是否需要检测token  	  1:需要 0：不需要
 */
function vue_Post(THIS, url, data, callback, isFeedback, isLoading, isFlag, isCheckToken) {
    if (isFlag == 1) {
        if (THIS.flag) { return false };
        THIS.flag = true;
    };
    var url = window.localStorage.host + url;
    var loading;
    if (isLoading == 1) {
        //添加动画
        loading = THIS.$loading({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0)'
        });
    };
    THIS.$http.post(url, data, {
        emulateJSON: true,
        headers: {
            token: window.localStorage.flexible_manage_token ? window.localStorage.flexible_manage_token : ''
        }
    }).then(function(response) {
        if (isLoading == 1) { loading.close(); };
        if (isFlag == 1) { THIS.flag = false; };
        var a = response.body.data,
            b = response.body.code;
        if (b == 200) {
            callback(a);
        } else if (b == '-999') {
            if (isCheckToken == 1) {
                layout(THIS);
            };
        } else {
            //请求报错报错
            if (isFeedback == 1) {
                THIS.$message({
                    type: 'error',
                    message: response.body.msg,
                    dangerouslyUseHTMLString: true
                });
            };
        };
    }, function() {
        if (isFlag == 1) { THIS.flag = false };
        if (isLoading == 1) { loading.close(); };
        //提示网络出问题
        if (isFeedback == 1) {
            THIS.$message({
                type: 'error',
                message: '网络出错，请稍后重试!',
                dangerouslyUseHTMLString: true
            });
        };
    });
};
