/*
	EventEmitter 的 emit 同步还是异步？

	- 同步
*/
const EventEmitter = require('events')

let emitter = new EventEmitter()

emitter.on('myEvent', () => {
	setTimeout(() => { // 异步api
		console.log('2s later....')
	}, 2000)
	console.log('my event emit')
})

function f () {
	console.log('start')
	emitter.emit('myEvent')  // 回调函数执行完毕之后才会继续往下执行
	console.log('end')
}

f()
