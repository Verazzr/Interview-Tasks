/*
	异步api

	nextTick， setTimeout, setImmediate有什么区别

	理论上 nextTick > setTimeout > setImmediate

	原因在于事件循环对观察者检查是有先后顺序的
*/

setInterval(() => {
	setImmediate(() => {
		console.log('setImmediate')
	})

	setTimeout(() => {
		console.log('setTimeout')
	}, 0)
	// 执行setTimeout(fn, 0) 相当于 setTimeout(fn, 1)
	// 所以可能会出现setImmediate 比 setTimeout 先执行

	process.nextTick(() => {
		console.log('nextTick')
	})

	console.log('console')
}, 1000)


/*
	总结：
	事件循环就是一个观察者查看队列中是否有事件，有就执行它的过程

	异步io操作过程理解：
	当node去执行一个io操作时，底层c++模块会新建一个请求对象，
	请求对象中封装着这个io事件的io操作，对应的回调函数以及状态等等，
	然后js主线程丢给线程池，线程池有空余线程时候，
	就会去取出这个请求对象的io操作然后以阻塞io，或者是非阻塞io的形式去执行，
	主线程则直接继续执行下面的代码，
	然后线程池将这个io操作执行完毕后，将结果封装到这个请求对象里面，
	事件循环的观察者检测到线程池中有执行完毕的事件，
	就会拿到这个io操作的请求对象加入到事件队列中去，
	然后通过循环机制检测队列中的事件，
	如果有就取出该事件的请求对象，取出对应回调函数，并执行，至此一个异步io操作结束
*/
