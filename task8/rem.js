function rem() {
  var w = Math.min(document.documentElement.getBoundingClientRect().width, 500);
  document.querySelector('html').style.fontSize = w * 100 / 750 + 'px';  750代表设计稿的宽度
}
rem();
window.onresize = rem()


@function rem($px) {
  @return $px / 100 + rem;
}


设置initial-scale指令，实际上完成了2件事情：

1、设置了页面的初始缩放比例，根据相关的`ideal viewport`，生成对应的`visual viewport`宽度。

2、根据刚刚计算出来的`visual viewport`宽度设置`layout viewport`的宽度。

<meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">


function Person () {
    this.name = 'yang'
    this.age = 21
    return {}
}

var obj = new Person()

 - 让fn的this指向obj，并执行fn的函数体

var result = fn.call(obj);

 - 判断fn的返回值类型，如果是值类型，返回obj。如果是引用类型，就返回这个引用类型的对象。

if (typeof(result) == "object"){
    fnObj = result;
} else {
    fnObj = obj;
}

call和apply都是改变上下文中的this并立即执行这个函数，
bind方法可以让对应的函数想什么时候调就什么时候调用，并且可以将参数在执行的时候添加
