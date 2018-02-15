/*
	JavaScript正则表达式
*/
var reg = /\bis\b/g  // /g标志代表global，全文匹配, 不添加时就搜索到第一个匹配停止

var reg = new RegExp('\\bis\\b', 'g')  // js中反斜线 \ 本身就是特殊字符，需要用 \ 来进行转义

let str = 'he is a boy. This is a dog. Where is she'.replace(reg, 'IS')

// console.log(str)

let str2 = 'he is a boy. Is he? '.replace(/\bis\b/gi, '0') // i标志表示忽略大小写进行匹配

console.log(str2)


// m标志表示多行搜索

/*
	正则表达式俩种基本字符类型组成：

	- 原义文本字符

	- 元字符
*/

// 使用元字符[]来构建一个简单的类
let str3 = 'a1b2c3d4'.replace(/[abc]/g, 'X')  // []代表 one of

console.log(str3)

// 使用[^]来进行字符类取反
let str4 = 'a1b2c3d4'.replace(/[^abc]/g, 'X') // ^ 代表反向类 none of

console.log(str4)

// 范围类 eg: [a-z]
let str5 = 'a1b2d3x4z9'.replace(/[a-z]/g, 'Q')

console.log(str5)

// []组成的类内部可以连写 eg: [z-aA-Z]
let str6 = 'a1b2d3x4z9ADGTHU1996-10-30'.replace(/[a-zA-Z-]/g, '~') // 想在这种表达式中匹配 '-', 就直接在加一个 '-' 连在后面就行了

console.log(str6)


/*
	预定义类

	. [^\r\n] 除回车符和换行符之外的所有字符

	\d [0-9] (digit)数字

	\D [^0-9] 非数字

	\s (space) 空白符

	\S 非空白符

	\w [a-zA-Z_0-9] (word) 单词字符(字母，数字下划线)

	\W[^a-zA-Z_0-9] 非单词字符
*/

var regE = /ab\d./  // ad + 任意数字 + 任意字符

/*
	边界

	^  以xxx开始
	$  以xxx结束
	\b 单词边界
	\B 非单词边界
*/


/*
	量词

	？   0 或 1
	+    1 或  +∞
	*    0 或 1 或 +∞

	{n}      n次
	{n, m}   n-m次
	{n,}     至少n次
*/

//贪婪模式
let str8 = '12345678'.replace(/\d{3,6}/g, 'X')

console.log(str8)

// 非贪婪模式  // 在{}后面加 ? 即可
let str9 = '12345678'.replace(/\d{3,6}?/g, 'X')

console.log(str9)
