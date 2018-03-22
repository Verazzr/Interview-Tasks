/*
	解析url成object对象

	例如，给定URI为https://www.example.com:8080/a/b/c?q=234&p=abc#header，返回：
	{
		“scheme”: “https”,
		“host”: “www.example.com”,
		“port”: 8080,
		“path”: “/a/b/c”,
		“queries”: {
			“q”: “234”,
			“p”: “abc”
		},
		“hash”: “header”
	}
*/

let parseURL = function (url) {
    var a = document.createElement('a');
    a.href = url;
    return {
        source: url,
        protocol: a.protocol.replace(':', ''),
        host: a.hostname,
        port: a.port,
        hash: a.hash.replace('#', ''),
        path: a.pathname.replace(/^([^\/])/, '/$1'),
        query: function () {
            let arr = a.search.replace(/^\?/g, '').split('&')
            let res = {}
            for (let i of arr) {
                let index = i.indexOf('=')
                let key = i.slice(0, index)
                let val = i.slice(index+1)
                res[key] = val
            }
            return res
        }()
    }
}

const url = 'https://www.example.com:8080/a/b/c?q=234&p=abc#header'

console.log(parseURL(url))
