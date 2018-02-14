/*
	给出一段英文连续的英文字符串，找出重复出现次数最多的字母
*/

function getMost (obj) {
	const keys = Object.keys(obj)
	let max = 0
	let maxValue = ''
	for (let i=0; i<keys.length; i++) {
		if (obj[keys[i]] > max) {
			max = obj[keys[i]]
			maxValue = keys[i]
		}
	}
	console.log(`${maxValue}出现次数为${max}`)
}

function mostAppear (str) {
	let temp = {}
	const arr = str.split('')

	for (let i=0; i<arr.length; i++) {
		if (!temp[arr[i]]) {
			temp[arr[i]] = 1
		} else {
			temp[arr[i]]++
		}
	}

	getMost(temp)
}

mostAppear('aaaddcccppppasssssssssss')
