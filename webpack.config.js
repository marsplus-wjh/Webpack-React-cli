const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

// //创建插件的实例对象
const htmlPlugin = new HtmlWebPackPlugin({
	template: path.join(__dirname, './src/index.html'), //源文件
	filename: 'index.html' //生成内存中的首页的名称
})

//打包配置对象，webpack基于node
//webpack 默认只能打包处理.js文件.png .vue不行 需要第三方
module.exports = {
	mode: 'development', //development or production
	//在webpack4里，预定大于配置，约定的打包入口是src->index.js
	plugins: [
		htmlPlugin
	],
	module: { //所有第三方模块的配置
		rules: [ //第三方匹配规则
			{ test: /\.js|jsx$/, use: 'babel-loader', exclude:/node_modules/ },
		]
	},
	resolve:{
		extensions: ['.js', '.jsx', '.json'], //可以省略不写
		alias: {
			'@': path.join(__dirname, './src')
		}
	}
}