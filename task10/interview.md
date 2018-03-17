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
