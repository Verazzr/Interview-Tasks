/*
	快速排序算法
*/

function quick (arr) {
	if (arr.length <= 1) {
		return arr
	}
	let index = Math.floor(arr.length/2)
	let val = arr.splice(index, 1)[0]

	let left = []
	let right = []

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < val) {
			left.push(arr[i])
		} else {
			right.push(arr[i])
		}
	}

	return [...quick(left), val, ...quick(right)]
}

const arr = [1, 2, 22, 90, 10, 30, 100]

console.log(quick(arr))
