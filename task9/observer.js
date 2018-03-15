/*
	深度对象监听属性变化

	Object.defineProperty(obj, prop, descriptor)

	obj：必需。目标对象
	prop：必需。需定义或修改的属性的名字
	descriptor：必需。目标属性所拥有的特性
*/

function defineReaction (obj, key, val) {
	observer(val) // 对每个传进来的子属性值进行数据劫持
	Object.defineProperty(obj, key, {
		get () {
			console.log('get ' + val)
			return val
		},
		set (newVal) {
			console.log('newVal is ' + newVal)
			val = newVal
		}
	})
}

function observer (obj) {
	if (!obj || typeof obj != 'object') {
		return
	}  // 这里跳出递归
	for (let key in obj) {
		defineReaction(obj, key, obj[key])
	}
}

var obj = {
	age: 18,
	name: 'yang',
	friends: {
		a: 'veax',
		b: 'vera'
	}
}

observer(obj)

obj.friends.a = 'ling'
