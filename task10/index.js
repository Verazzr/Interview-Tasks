class Observe {
	constructor() {
		this.events = {}
	}

	$emit (event, ...args) {
		if (!this.events[event]) {
			return
		}
		this.events[event].func(...args)
	}

	$on (event, callback) {
		if (!this.events[event]) {
			this.events[event] = {}
		}
		this.events[event].func = callback
	}
}

const event = new Observe()

event.$on('sayHello', (num1, num2, num3, num4) => {
	console.log(num1 + num2+ num3 + num4 + ' hello')
})

event.$emit('sayHello', 1, 2, 3, 4)
