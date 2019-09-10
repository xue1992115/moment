### 如何使用
1. node中使用，通过require的方法使用
2. 浏览器中使用，通过script中的src引入文件

### 用法
1. 当前时间：moment(); moment(undefined)、moment([])、moment({})，结果是一样。基本上使用较多的是moment();
这个之前的new Date()输出是一样的。

```ruby
const now = moment();
const nowAlso = new Date();
```

