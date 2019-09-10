### 如何使用
1. node中使用，通过require的方法使用
2. 浏览器中使用，通过script中的src引入文件

### 用法
#### format： 格式化
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
 - GGGG: ISO的年份
 - GG: ISO的年份
 - W: ISO的周
 - WW: ISO的周
 - E: ISO周的第几天
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
根据本地设置的时间获取时间：
```ruby
console.log(moment().format('L'), 'L');
console.log(moment().format('LL'), 'LL');
console.log(moment().format('LLL'), 'LLL');
console.log(moment().format('LLLL'), 'LLLL');
console.log(moment().format('LT'), 'LT');
console.log(moment().format('LTS'), 'LTS');

09/10/2019 L
September 10, 2019 LL
September 10, 2019 8:51 PM LLL
Tuesday, September 10, 2019 8:51 PM LLLL
8:51 PM LT
8:51:18 PM LTS
```
时分秒的设置：
```ruby
console.log(moment().format('H'), 'H'); // 小时，24小时制
console.log(moment().format('HH'), 'HH'); // 两位小时，24小时制
console.log(moment().format('h'), 'h'); // 12小时划分的时间
console.log(moment().format('hh'), 'hh'); // 12小时
console.log(moment().format('k'), 'k'); // 24小时
console.log(moment().format('kk'), 'kk'); // 24小时
console.log(moment().format('a'), 'a'); // 上午下午
console.log(moment().format('A'), 'A'); // 大写上午下午
console.log(moment().format('m'), 'm'); // 分
console.log(moment().format('mm'), 'mm'); // 分
console.log(moment().format('s'), 's'); // 秒
console.log(moment().format('ss'), 'ss'); // 秒
console.log(moment().format('S'), 'S'); // 小数点秒
console.log(moment().format('SS'), 'SS'); // 小数点秒
console.log(moment().format('SSS'), 'SSS'); // 小数点秒

20 H
20 HH
8 h
08 hh
20 k
20 kk
pm a
PM A
59 m
59 mm
21 s
21 ss
7 S
70 SS
707 SSS
```
3. object转换成为moment对象
```ruby
console.log(moment({ hour:15, minute:10 }), 'object');
console.log(moment({ y    :2010, M     :3, d   :5, h    :15, m      :10, s      :3, ms          :123}), 'object2');
```
4. unix时间戳转换为moment对象
```ruby
console.log(moment.unix(1318781876), 'unix');
Mon Oct 17 2011 00:17:56 GMT+0800 (中国标准时间)
```
5. date转换为moment
```ruby
console.log(moment(new Date(2011, 9, 16)), 'date');
Sun Oct 16 2011 00:00:00 GMT+0800 (中国标准时间)
```
#### get/set：获取/设置时间
```ruby
console.log(moment().millisecond(111789078), 'millisecond'); // get/set 毫秒的数，0-999，如果超过会冒泡到秒上
console.log(moment().second(19), 'second'); // get/set 秒的数，0-60，如果超过会冒泡到分上
console.log(moment().minute(19), 'minute'); // get/set 分的数，0-60，如果超过会冒泡到时上
console.log(moment().hour(29), 'hour'); // get/set 分的数，0-24，如果超过会冒泡到天上
console.log(moment().date(3), 'date'); // get/set 月的第几天，0-30，如果超过会冒泡到月上
console.log(moment().day(3), 'day'); // get/set 周的第几天，0-7，如果超过会冒泡到其他周上 0：sun 6: sat
console.log(moment().weekday(3), 'weekday'); // get/set 周的第几天，0-7，如果超过会冒泡到其他周上 0：sun 6: sat 本地设置的
console.log(moment().isoWeekday(1), 'iosWeekday');
console.log(moment().dayOfYear(20), 'dayOfYear'); // 设置一年的第几天
console.log(moment().week(3), 'week'); // 设置一年的第几周
console.log(moment().isoWeek(3), 'isoWeek'); // 设置一年的第几周
console.log(moment().month(3), 'month'); // 设置一年的第几个月，从0开始
console.log(moment().year(2000), 'year'); // 设置一年的第几个月，从0开始
console.log(moment().weekYear(2000), 'weekYear'); // 设置一年的第几个月，从0开始

M {_isAMomentObject: true, _isUTC: false, _pf: {…}, _locale: P, _d: Thu Sep 12 2019 04:41:33 GMT+0800 (中国标准时间), …} "millisecond"
chapter1.js:59 M {_isAMomentObject: true, _isUTC: false, _pf: {…}, _locale: P, _d: Tue Sep 10 2019 21:38:19 GMT+0800 (中国标准时间), …} "second"
chapter1.js:60 M {_isAMomentObject: true, _isUTC: false, _pf: {…}, _locale: P, _d: Tue Sep 10 2019 21:19:24 GMT+0800 (中国标准时间), …} "minute"
chapter1.js:61 M {_isAMomentObject: true, _isUTC: false, _pf: {…}, _locale: P, _d: Wed Sep 11 2019 05:38:24 GMT+0800 (中国标准时间), …} "hour"
chapter1.js:62 M {_isAMomentObject: true, _isUTC: false, _pf: {…}, _locale: P, _d: Tue Sep 03 2019 21:38:24 GMT+0800 (中国标准时间), …} "date"
chapter1.js:63 M {_isAMomentObject: true, _isUTC: false, _pf: {…}, _locale: P, _d: Wed Sep 11 2019 21:38:24 GMT+0800 (中国标准时间), …} "day"
chapter1.js:64 M {_isAMomentObject: true, _isUTC: false, _pf: {…}, _locale: P, _d: Wed Sep 11 2019 21:38:24 GMT+0800 (中国标准时间), …} "weekday"
chapter1.js:65 M {_isAMomentObject: true, _isUTC: false, _pf: {…}, _locale: P, _d: Mon Sep 09 2019 21:38:24 GMT+0800 (中国标准时间), …} "iosWeekday"
chapter1.js:66 M {_isAMomentObject: true, _isUTC: false, _pf: {…}, _locale: P, _d: Sun Jan 20 2019 21:38:24 GMT+0800 (中国标准时间), …} "dayOfYear"
chapter1.js:67 M {_isAMomentObject: true, _isUTC: false, _pf: {…}, _locale: P, _d: Tue Jan 15 2019 21:38:24 GMT+0800 (中国标准时间), …} "week"
chapter1.js:68 M {_isAMomentObject: true, _isUTC: false, _pf: {…}, _locale: P, _d: Tue Jan 15 2019 21:38:24 GMT+0800 (中国标准时间), …} "isoWeek"
chapter1.js:69 M {_isAMomentObject: true, _isUTC: false, _pf: {…}, _locale: P, _d: Wed Apr 10 2019 21:38:24 GMT+0800 (中国标准时间), …} "month"
chapter1.js:70 M {_isAMomentObject: true, _isUTC: false, _pf: {…}, _locale: P, _d: Sun Sep 10 2000 21:38:24 GMT+0800 (中国标准时间), …} "year"
```
```ruby
moment().get('year');
moment().get('month');  // 0 to 11
moment().get('date');
moment().get('hour');
moment().get('minute');
moment().get('second');
moment().get('millisecond');


moment().set('month', 3), 'month');
moment().set('date', 1);
moment().set('hour', 13);
moment().set('minute', 20);
moment().set('second', 30);
moment().set('millisecond', 123);
moment().set({'year': 2013, 'month': 3});
```
#### Maximum： 取较大的时间
```ruby
var a = moment().subtract(1, 'day');
var b = moment().add(1, 'day');
moment.max(a, b);  // b
```
#### Minimum： 取较小的时间
```ruby
var a = moment().subtract(1, 'day');
var b = moment().add(1, 'day');
moment.min(a, b);  // a
moment.min([a, b]); // a
``` 
#### Add： 给当前时间加上多少的时间
```ruby
添加的都是复数形式
console.log(moment().add(2, 'days'), 'days');
console.log(moment().add(1, 'years'), 'years');
console.log(moment().add(1, 'months'), 'months');
console.log(moment().add(1, 'weeks'), 'weeks');
console.log(moment().add(1, 'hours'), 'hours');
console.log(moment().add(1, 'minutes'), 'minutes');
console.log(moment().add(1, 'seconds'), 'seconds');
console.log(moment().add(1, 'milliseconds'), 'milliseconds');
add可以联系使用
console.log(moment().add(7, 'days').add(1, 'months'), 'connect');
```
#### Subtract： 给当前时间减去多少
```ruby
console.log(moment().subtract(2, 'days'), 'days');
console.log(moment().subtract(1, 'years'), 'years');
console.log(moment().subtract(1, 'months'), 'months');
console.log(moment().subtract(1, 'weeks'), 'weeks');
console.log(moment().subtract(1, 'hours'), 'hours');
console.log(moment().subtract(1, 'minutes'), 'minutes');
console.log(moment().subtract(1, 'seconds'), 'seconds');
console.log(moment().subtract(1, 'milliseconds'), 'milliseconds');
console.log(moment().subtract(7, 'days').add(1, 'months'), 'connect');
```
#### startOf: 设置时间是某个开始节点
```ruby
console.log(moment().startOf('year'), 'year'); // 设置为这一年的开始
console.log(moment().startOf('month'), 'month'); // 设置为这一个月的开始
console.log(moment().startOf('day'), 'day'); // 设置为这一日的开始
console.log(moment().startOf('hour'), 'hour'); // 设置为这一个小时的开始
console.log(moment().startOf('second'), 'second'); // 设置为这一个小时的开始
console.log(moment().startOf('minute'), 'minute'); // 设置为这一分钟的开始
console.log(moment().startOf('date'), 'date'); // 设置为这一天的开始，功能等同于day
console.log(moment().startOf('week'), 'week'); // 设置为这一周的开始
console.log(moment().startOf('isoWeek'), 'isoWeek'); // 设置为这一周的开始
```
#### endOf: 设置时间是某个结束的节点
 ```ruby
console.log(moment().endOf('year'), 'year'); // 设置为这一年的结束
console.log(moment().endOf('month'), 'month'); // 设置为这一个月结束
console.log(moment().endOf('day'), 'day'); // 设置为这一日结束
console.log(moment().endOf('hour'), 'hour'); // 设置为这一个小时的结束
console.log(moment().endOf('second'), 'second'); // 设置为这一个小时的结束
console.log(moment().endOf('minute'), 'minute'); // 设置为这一分钟的结束
console.log(moment().endOf('date'), 'date'); // 设置为这一天的结束，功能等同于day
console.log(moment().endOf('week'), 'week'); // 设置为这一周的结束
console.log(moment().endOf('isoWeek'), 'isoWeek'); // 设置为这一周的结束
 ```
#### fromNow: 距离现在的时间是多久
```ruby
console.log(moment('2019-08-07').fromNow(), 'fromNow');
```
#### Time from X: 从一个时间节点到另一个时间节点是多久
```ruby
var a = moment([2007, 0, 28]);
var b = moment([2007, 0, 29]);
console.log(a.from(b)); // "a day ago"
```
#### Difference： 两个时间点差多少，实质是a1-b1的差值。
```ruby
var a1= moment([2007, 0, 29]);
var b1 = moment([2007, 0, 28]);
console.log(a1.diff(b1)); // 86400000
console.log(a1.diff(b1, 'day')); // 1天
```
#### Unix Timestamp (milliseconds): 时间戳的设置
```ruby
console.log(moment().valueOf(), 'valueOf');
console.log(moment(), 'moment');
```
#### Unix Timestamp (seconds) 
```ruby
console.log(moment(1318874398806).unix()); // 1318874398
```
#### daysInMonths: 获取该月的天数
```ruby
console.log(moment("2012-02", "YYYY-MM").daysInMonth(), 'daysInMonth'); //获取该月的天数
```
#### query
1. moment('2010-10-20').isBefore('2010-10-21'); // true
2. moment('2010-10-20').isSame('2010-10-20'); // true
3. moment('2010-10-20').isAfter('2010-10-19'); // true
4. moment('2010-10-20').isSameOrBefore('2010-10-21');
5. moment('2010-10-20').isSameOrAfter('2010-10-19');
6. moment('2010-10-20').isBetween('2010-10-19', '2010-10-25'); // true

### 总结
1. format：格式化时间数据
2. moment(string)：将字符串转换为moment对象
3. moment(object)：将对象转换为moment对象
4. moment.unix()：将时间戳转换为moment对象
5. get/set:设置时间
- moment().millisecond(): 设置毫秒
- moment().second(): 设置秒
- moment().minute(): 设置分钟
- moment().hour(): 设置小时
- moment().day(): 设置周天
- moment().date(): 天
- moment().weekday(): 设置周天
- moment().isoWeekday(): 设置周天
- moment().dayOfYear(): 设置年天
- moment().week(): 设置周
- moment().year(): 设置年
6. Add： 添加年月日时分秒。。。
7. Subtract: 减去年月日时分秒
8. startOf: 设置到开始的时间
9. endOf： 设置到结束的时间
10. fromNow: 距离现在的时间
11. Difference：两个时间节点的差值
12. moment().valueOf(): moment的unix的值
13. monet().daysInMonths: 该月的天数
14. query: 查询只返回true或者false
- isBefore
- isSame
- isAfter
- isSameOrBefore
- isSameOrAfter
- isBetween