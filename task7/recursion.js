/*
	一个函数，俩个参数，数组的长度和一个常量，
	返回一个长度n的数组，数组每个元素都是传进去的常量（不能用循环)
*/

function recursion (n, val) {
	if (n <= 1) {
		return [val]
	}
	n--
	return [val, ...recursion(n, val)]
}

console.log(recursion(5, 6))
