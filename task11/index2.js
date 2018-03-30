// var n = parseInt(readline())

// lines = readline().split(" ")

//print(ans)

var n = parseInt(readline())

var res = ''
for (let i = 0; i< n; i++) {
	res += 'a'
}

var s = 'a'

var m = s

{
	m = s
	s = s + s
}

{
	s = s + m
}
