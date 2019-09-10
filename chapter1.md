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
第二个参数可以是：大小写敏感
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
 也可以是周的参数：
 - gggg: 本地该是哪一年
 - 99: 本地两位数年
 - w: 本地的本周是这一年的第几周
 - ww: 本地本周是这一年的第几周
 - e: 本地这周的第几天
 - ddd: 本地的本周的星期几
 - dddd: 本地的本周的星期几，全写
 - GGGG: IOS的年份
 - GG: IOS的年份
 - W: IOS的周
 - WW: IOS的周
 - E: IOS周的第几天
```ruby
console.log(moment().format('gggg'), 'gggg');
console.log(moment().format('gg'), 'gg');
console.log(moment().format('w'), 'w');
console.log(moment().format('ww'), 'ww');
console.log(moment().format('e'), 'e');
console.log(moment().format('ddd'), 'ddd');
console.log(moment().format('dddd'), 'dddd');
console.log(moment().format('GGGG'), 'GGGG');
console.log(moment().format('GG'), 'GG');
console.log(moment().format('W'), 'W');
console.log(moment().format('WW'), 'WW');
console.log(moment().format('E'), 'E');

2019 gggg
19 gg
37 w
37 ww
2 e
Tue ddd
Tuesday dddd
2019 GGGG
19 GG
37 W
37 WW
2 E
```