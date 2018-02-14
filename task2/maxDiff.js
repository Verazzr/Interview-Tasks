/*
	求正数组的最大差值
*/

function maxDiff (arr) {
	let maxVal = arr[0];  // 用数组第一项赋值， 最大最小值必须是数组的值，不能用0复制，防止0比数组任何数小
	let minVal = arr[0];
	for (let i = 0; i < arr.length; i++) {
		maxVal = Math.max(maxVal, arr[i])

		minVal = Math.min(minVal, arr[i])
	}
	return maxVal - minVal
}

const arr = [1, 22, 2, 3, 5]

console.log(maxDiff(arr))
