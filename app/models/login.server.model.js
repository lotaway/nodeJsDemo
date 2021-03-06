/**
 * 登陆数据模型
 */

// mongoose 链接
var mongoose = require('mongoose');
// var Mongolass = require('Mongolass');    结合了mongodb和mongoose的优点并简化，推荐使用
//  声明模型
var Schema = mongoose.Schema;
//  定义模型结构
var loginSchema = new Schema({
    name: String,
    password: String
});
//  暴露接口
mongoose.model('login', loginSchema);