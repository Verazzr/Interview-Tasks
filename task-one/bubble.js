/*
	冒泡排序算法(数组)
*/

function bubble (arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = i + 1; j < arr.length; j++) {  // 每次把最小数的放到最左边
			if (arr[i] > arr[j]) {
				[ arr[i], arr[j] ] = [ arr[j], arr[i] ]
			}
		}
	}
	return arr
}

const arr = [12, 15, 18, 20, 144, 55]

console.log(bubble(arr))
