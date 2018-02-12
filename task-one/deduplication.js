/*
	数组去重算法
*/

// 解法1

function deduplication (arr) {
	return [...new Set(arr)]
}

// 解法2

function deduplication (arr) {
	const temp = {}
	for (let i=0; i<arr.length; i++) {
		if (!temp[arr[i]]) {
			temp[arr[i]] = 0
		}
	}
	return Object.keys(temp)
}
