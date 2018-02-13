/*
	生成指定限度的斐波那契数列
*/

function fibo (n) {  // 数组长度n
	let arr = []
	let i = 0

	while (i < n) {
		if (i <= 1) {
			arr.push(i)
		} else {
			arr.push(arr[i-1] + arr[i-2])
		}
		i++
	}

	return arr
}

console.log(fibo(9))
