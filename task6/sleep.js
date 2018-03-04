/*
	如何优雅的实现一个sleep函数
*/

async function test () {
	console.log('hello')
	await sleep(2000)
	console.log('world')
}

function sleep (ms) {
	return new Promise(resolve => {
		setTimeout(resolve, ms)
	})
}

test()
