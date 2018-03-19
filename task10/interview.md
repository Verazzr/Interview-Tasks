## css html
##### （必考） 你是如何理解 HTML 语义化的？

```
header, footer, nav等等

- 清晰的页面结构

- 支持更多的设备

- 有利于SEO

- 便于团队开发和维护
```

#### meta viewport 是做什么用的，怎么写？

```
三种viewport

- visual viewport (浏览器可视区域的大小)

- layout viewport (可以视为一个默认的大box)

- ideal viewport

设置initial-scale指令，实际上完成了2件事情：

1、设置了页面的初始缩放比例，根据相关的`ideal viewport`，
   生成对应的`visual viewport`宽度。

2、根据刚刚计算出来的`visual viewport`宽度设置`layout viewport`的宽度。

<meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
```

#### 清楚浮动
```
- 添加新的元素 、应用 clear：both

- 父级div定义 overflow: auto
```

## javascript

#### JS 有哪些数据类型？
```
undefined, null, boolean, Number, String, Object
```

#### （必考） Promise 怎么使用？
````js
const promise = new Promise(function(resolve, reject) {
    if (/*异步操作成功*/) {
        resolve (vlaue)
    } else {
        reject(error)
    }
})

promise.then(function (value) {
    // success
}, function (error) {
    // failure
})
````

#### （必考）闭包是什么？
```
    能访问其他函数变量的函数
```

#### 关于函数中的this
```
对于普通函数，this永远指向最后调用它的对象

对于箭头函数，this在函数定义时绑定，因为箭头函数没有this，内部this就是外部this

- 关于call, apply, bind

fnc.call(obj, arg1, arg2...)

fuc.apply(obj, [arg1, arg2, ...])

var newFuc = fuc.bind(obj)
```

#### async/await 语法了解吗？目的是什么？
```
    了解，以同步的形式去写异步的代码，promise语法糖
```

####  如何实现深拷贝？
````js
// - 对于无function obj场景可以使用 JSON.parse 和 JSON.stringify

var obj = {
    a: 'a',
    b: {
        c: 'c'
    }
}

var newObj = JSON.parse(JSON.stringify(obj))

// - 递归使用Object.assign进行浅复制

function clone (obj) {
    if (typeof obj != 'object') {
        return obj
    }
    var newObj = obj.constructor === Array ? [] : {}
    for(let key in obj) {
        if (typeof obj[key] === 'object') {
            newObj[key] = clone(obj[key])
        } else {
            newObj[key] = obj[key]
        }
    }
    return newObj
}
````

#### webpack打包文件过大怎么处理
````js
// - 检查是否有多余不必要的插件，是否将开发环境和生产环境的配置分离了

// - 使用vendor将第三方库单独打包成vendor.js
{
    entry: {
        bundle: ['app'],
        //添加要打包在vendeors里面的库
        vendor: ['react', 'react-dom', 'jquery']
    },
    plugins: {
        //把入口文件里面的数组打包成vendors.js
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
    }
}
````
