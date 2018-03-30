function test(str) {
	const arr = str.match(/\w/g)
	const newArr = []
	const resDigitArr = []
	const resWordArr = []

	const obj = {}

	for(let val of arr) {
		if (!obj[val]){
			obj[val] = 1
			newArr.push(val)
		}
	}

	for(let val of newArr) {
		if (val.match(/\d/g)) {
			resDigitArr.push(val)
		} else {
			resWordArr.push(val)
		}
	}

	const res = [...resDigitArr, ...resWordArr]

	return res.join('')
}

test('携程C2t0r1i8p2020校招')
