// var n = parseInt(readline())

// lines = readline().split(" ")

//print(ans)

var lines1 = readline().split(' ')

var lines2 = readline().split(' ').map(val => parseInt(val))

var n = parseInt(lines1[0])

var k = parseInt(lines1[1])

var obj = {}

var count = 0

for (let i = 0; i < lines2.length - 1; i++) {
	for (let j = 0; j < lines2.length; j++) {
		var dif = Math.abs(lines2[i] - lines2[j])
		if (dif === k && !obj[lines2[i]] || !obj[lines2[j]]) {
			obj[lines2[i]] = lines2[j]
			// lines2[i] < lines2[j] ? obj[lines2[i]] = lines2[j] : obj[lines2[j]] = lines2[i]

			count++
		}
	}
}

print(count)
