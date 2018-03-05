/*
	观察者模式
*/

class ClassName {
	constructor (x, y) {
		this.topics = {}
	}
	$emit (topic, ...args) {
		if (!this.topics[topic]) {
			return;
		}
		if (this.topics[topic].flag) {
			if(this.topics[topic].flag === 1) {
				this.topics[topic].flag--;
			}
			this.topics[topic].func(...args);
		}
	}
	$on (topic, callback) {
		if (!this.topics[topic]) {
			this.topics[topic] = {};
		}
		this.topics[topic].func = callback
		this.topics[topic].flag = 2
	}
	$once (topic, callback) {
		if (!this.topics[topic]) {
			this.topics[topic] = {};
		}
		this.topics[topic].func = callback
		this.topics[topic].flag = 1
	}
	$off (topic) {
		for (var val of Object.keys(this.topics)) {
			if (val === topic) {
				delete this.topics[topic]
			}
		}
	}
}

var xx = new ClassName()

xx.$once('sad', (data) => {
	console.log(data)
})
xx.$on('abd', (data) => {
	console.log(data)
})
xx.$emit('sad', 'test1')
xx.$emit('sad', 'test2')
