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
函数如果没有传递参数则等同于是moment(undefined);

```ruby
moment(undefined).isSame(moment(), 'second')
```
2. 转换字符串为moment对象
```ruby
moment('2013-08-12').isValid()
注意字符串必须是对应的。
moment("2019-09-10", "YYYY-MM-DD");
```
第二个参数可以是：
- YYYY：年
- YY: 年
- Y: 年  
- Q: 年的四分之一
- M: 月份
- MM: 月
- MMM: 月份，英文简写
- MMMM: 月份，全拼
- D: 一个月的第几天
- DD: 一个月的第几天
- DDD: 一年的第几天
- DDDD: 一年的第几天
- Do: 一个月的第几天，按照顺序排序
- X: unix操作系统的时间戳
- x: unix操作系统的时间戳，按照毫米计算。
 ```ruby
console.log(moment().format('YYYY'), 'YYYY');
console.log(moment().format('YY'), 'YY');
console.log(moment().format('Y'), 'Y');
console.log(moment().format('Q'), 'Q');
console.log(moment().format('M'), 'M');
console.log(moment().format('MM'), 'MM');
console.log(moment().format('MMM'), 'MMM');
console.log(moment().format('MMMM'), 'MMMM');
console.log(moment().format('D'), 'D');
console.log(moment().format('DD'), 'DD');
console.log(moment().format('Do'), 'Do');
console.log(moment().format('DDD'), 'DDD');
console.log(moment().format('DDDD'), 'DDDD');
console.log(moment().format('X'), 'X');
console.log(moment().format('x'), 'x');

2019 YYYY
19 YY
2019 Y
3 Q
9 M
09 MM
Sep MMM
September MMMM
10 D
10 DD
10th Do
253 DDD
253 DDDD
1568118285 X
1568118285187 x
 ```
