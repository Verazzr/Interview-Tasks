/*
	数据劫持
*/
function Proxyobj (obj) {
	this.data = new Proxy(obj, {
		get (target, key) {
			console.log(`你访问了 ${key}`);
			return Reflect.get(target, key)
		},
		set (target, key, value) {
			console.log(`你设置了 ${key}，新的值为${value}`);
			Reflect.set(target, key, value)
		}
	})
}



let app = new Proxyobj({
	age: 18,
	name: 'yang',
	friends: {
		a: 'vera',
		b: 'veax'
	}
})

app.data.friends.a = 'yang'
