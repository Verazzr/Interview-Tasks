/*
	判断俩个浮点数之和与第三数是否相等

	Number.EPSILON 表示误差范围
*/

function isFlastEqual (left, right) {
	return Math.abs(left - right) < Number.EPSILON
}

console.log(isFlastEqual(0.1+0.2, 0.3))
