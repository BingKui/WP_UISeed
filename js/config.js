/**
 * 配置项
 */
(function(window) {
	/*
	 * 数据配置数组的配置参数
	 * 0为本地数据，1为远程数据
	 */
	var conf = 0;
	var srcPref = ["./json/", "http://"];
	var dataArray = [{
		//信息
		"info": srcPref[conf] + "info.json"
	}, {
		//登录
		"history": srcPref[conf] + "history.json?1=1"
	}];
	window.dataUrl = dataArray[conf];
})(window)
var version = '1.0';
seajs.config({
	//模块系统的基础路径
	base: './lib/',
	//别名
	alias: {
		'jquery': 'jquery/2.1.4/jquery.js',
		'handlebars': 'handlebars/3.0.3/handlebars.js'
	},
	//预加载
	preload: [
		window.$ || window.jQuery ? '' : 'jquery'
	],
	//错误信息查看
	debug: 1,
	//文件映射
	map: [
		//可配置版本号
		['.css', '.css?v=' + version],
		['.js', '.js?v=' + version]
	],
	//编码
	charset: 'utf-8'
});