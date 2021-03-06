/*
	（必考）什么是立即执行函数？使用立即执行函数的目的是什么？

	函数声明和函数表达式不同之处在于:
	一、Javascript引擎在解析javascript代码时会‘函数声明提升’（Function declaration Hoisting）
	当前执行环境（作用域）上的函数声明，
	而函数表达式必须等到Javascirtp引擎执行到它所在行时，
	才会从上而下一行一行地解析函数表达式

	二、函数表达式后面可以加括号立即调用该函数，函数声明不可以!!!

	作用： 用匿名函数作为一个“容器”，“容器”内部可以访问外部的变量，而外部环境不能访问“容器”内部的变量，
    从而保证不会发生变量冲突
*/

// 方法一：函数声明
function foo() {}

// 方法二：函数表达式
var foo = function () {}


fnName();
function fnName(){
    ...
}//正常，因为‘提升’了函数声明，函数调用可在函数声明之前

fnName();
var fnName=function(){
    ...
}//报错，变量fnName还未保存对函数的引用，函数调用必须在函数表达式之后


// 俩种立即执行函数写法 , 匿名函数属于函数表达式，所以使用括号括起来
(function (vrb) {
	console.log(vrb)
})('a')

(function (vrb) {
	console.log(vrb)
}('a'))
