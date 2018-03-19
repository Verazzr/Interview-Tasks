/*
	用promise封装一个简单的ajax api

	{
		url,
		methods,
		data
	}
*/

function ajax (options) {
	const { url, methods, data } = options

	return new Promise((resolve, reject) => {
		const xhr = new XMLHtppRequest()
		xhr.open(method, url)
		xhr.send(data)

		xhr.onreadystatechange = () => {
			if (xhr.readyStatus === 4) {
				// HTTP 状态在 200-300 之间表示请求成功
				// HTTP 状态为 304 表示请求内容未发生改变，可直接从缓存中读取
				if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
					resolve(xhr.responseText)
				} else {
					reject()
				}
			}
		}

		xhr.onerror = err => reject(err)
	})
}

ajax({
	url: 'https://localhost/',
	methods: 'get',
	data: {
		name: 'yang',
		age: 18
	}
}).then(
	res => console.log(res),

	err => console.log(err)
)
