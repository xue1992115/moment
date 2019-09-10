// const now = moment();
// const nowAlso = new Date();
// const stringTransfer = moment('2013-08-12').isValid();
// const stringFormat = moment("2019-09-10", "YYYY-MM-DD");
// console.log(moment().format('YYYY'), 'YYYY');
// console.log(moment().format('YY'), 'YY');
// console.log(moment().format('Y'), 'Y');
// console.log(moment().format('Q'), 'Q');
// console.log(moment().format('M'), 'M');
// console.log(moment().format('MM'), 'MM');
// console.log(moment().format('MMM'), 'MMM');
// console.log(moment().format('MMMM'), 'MMMM');
// console.log(moment().format('D'), 'D');
// console.log(moment().format('DD'), 'DD');
// console.log(moment().format('Do'), 'Do');
// console.log(moment().format('DDD'), 'DDD');
// console.log(moment().format('DDDD'), 'DDDD');
// console.log(moment().format('X'), 'X');
// console.log(moment().format('x'), 'x');
// console.log(moment().format('gggg'), 'gggg');
// console.log(moment().format('gg'), 'gg');
// console.log(moment().format('w'), 'w');
// console.log(moment().format('ww'), 'ww');
// console.log(moment().format('e'), 'e');
// console.log(moment().format('ddd'), 'ddd');
// console.log(moment().format('dddd'), 'dddd');
// console.log(moment().format('GGGG'), 'GGGG');
// console.log(moment().format('GG'), 'GG');
// console.log(moment().format('W'), 'W');
// console.log(moment().format('WW'), 'WW');
// console.log(moment().format('E'), 'E');
// console.log(moment().format('E'), 'E');
// console.log(moment().format('L'), 'L');
// console.log(moment().format('LL'), 'LL');
// console.log(moment().format('LLL'), 'LLL');
// console.log(moment().format('LLLL'), 'LLLL');
// console.log(moment().format('LT'), 'LT');
// console.log(moment().format('LTS'), 'LTS');
// console.log(moment().format('H'), 'H');
// console.log(moment().format('HH'), 'HH');
// console.log(moment().format('h'), 'h');
// console.log(moment().format('hh'), 'hh');
// console.log(moment().format('k'), 'k');
// console.log(moment().format('kk'), 'kk');
// console.log(moment().format('a'), 'a');
// console.log(moment().format('A'), 'A');
// console.log(moment().format('m'), 'm');
// console.log(moment().format('mm'), 'mm');
// console.log(moment().format('s'), 's');
// console.log(moment().format('ss'), 'ss');
// console.log(moment().format('S'), 'S');
// console.log(moment().format('SS'), 'SS');
// console.log(moment().format('SSS'), 'SSS');
// console.log(moment({ hour:15, minute:10 }), 'object');
// console.log(moment({ y    :2010, M     :3, d   :5, h    :15, m      :10, s      :3, ms          :123}), 'object2');
// console.log(moment.unix(1318781876), 'unix');
// console.log(moment(new Date(2011, 9, 16)), 'date');
// console.log(moment().millisecond(111789078), 'millisecond'); // get/set 毫秒的数，0-999，如果超过会冒泡到秒上
// console.log(moment().second(19), 'second'); // get/set 秒的数，0-60，如果超过会冒泡到分上
// console.log(moment().minute(19), 'minute'); // get/set 分的数，0-60，如果超过会冒泡到时上
// console.log(moment().hour(29), 'hour'); // get/set 分的数，0-24，如果超过会冒泡到天上
// console.log(moment().date(3), 'date'); // get/set 月的第几天，0-30，如果超过会冒泡到月上
// console.log(moment().day(3), 'day'); // get/set 周的第几天，0-7，如果超过会冒泡到其他周上 0：sun 6: sat
// console.log(moment().weekday(3), 'weekday'); // get/set 周的第几天，0-7，如果超过会冒泡到其他周上 0：sun 6: sat 本地设置的
// console.log(moment().isoWeekday(1), 'iosWeekday');
// console.log(moment().dayOfYear(20), 'dayOfYear'); // 设置一年的第几天
// console.log(moment().week(3), 'week'); // 设置一年的第几周
// console.log(moment().isoWeek(3), 'isoWeek'); // 设置一年的第几周
// console.log(moment().month(3), 'month'); // 设置一年的第几个月，从0开始
// console.log(moment().year(2000), 'year'); // 设置一年的第几个月，从0开始
// moment().get('year');
// moment().get('month');  // 0 to 11
// moment().get('date');
// moment().get('hour');
// moment().get('minute');
// moment().get('second');
// moment().get('millisecond');
// moment().set('month', 3), 'month');
// moment().set('date', 1);
// moment().set('hour', 13);
// moment().set('minute', 20);
// moment().set('second', 30);
// moment().set('millisecond', 123);
// moment().set({'year': 2013, 'month': 3});

// console.log(moment().add(2, 'days'), 'days');
// console.log(moment().add(1, 'years'), 'years');
// console.log(moment().add(1, 'months'), 'months');
// console.log(moment().add(1, 'weeks'), 'weeks');
// console.log(moment().add(1, 'hours'), 'hours');
// console.log(moment().add(1, 'minutes'), 'minutes');
// console.log(moment().add(1, 'seconds'), 'seconds');
// console.log(moment().add(1, 'milliseconds'), 'milliseconds');
// console.log(moment().add(7, 'days').add(1, 'months'), 'connect');



// console.log(moment().subtract(2, 'days'), 'days');
// console.log(moment().subtract(1, 'years'), 'years');
// console.log(moment().subtract(1, 'months'), 'months');
// console.log(moment().subtract(1, 'weeks'), 'weeks');
// console.log(moment().subtract(1, 'hours'), 'hours');
// console.log(moment().subtract(1, 'minutes'), 'minutes');
// console.log(moment().subtract(1, 'seconds'), 'seconds');
// console.log(moment().subtract(1, 'milliseconds'), 'milliseconds');
// console.log(moment().subtract(7, 'days').add(1, 'months'), 'connect');

// console.log(moment().startOf('year'), 'year'); // 设置为这一年的开始
// console.log(moment().startOf('month'), 'month'); // 设置为这一个月的开始
// console.log(moment().startOf('day'), 'day'); // 设置为这一日的开始
// console.log(moment().startOf('hour'), 'hour'); // 设置为这一个小时的开始
// console.log(moment().startOf('second'), 'second'); // 设置为这一个小时的开始
// console.log(moment().startOf('minute'), 'minute'); // 设置为这一分钟的开始
// console.log(moment().startOf('date'), 'date'); // 设置为这一天的开始，功能等同于day
// console.log(moment().startOf('week'), 'week'); // 设置为这一周的开始
// console.log(moment().startOf('isoWeek'), 'isoWeek'); // 设置为这一周的开始

// console.log(moment().endOf('year'), 'year'); // 设置为这一年的结束
// console.log(moment().endOf('month'), 'month'); // 设置为这一个月结束
// console.log(moment().endOf('day'), 'day'); // 设置为这一日结束
// console.log(moment().endOf('hour'), 'hour'); // 设置为这一个小时的结束
// console.log(moment().endOf('second'), 'second'); // 设置为这一个小时的结束
// console.log(moment().endOf('minute'), 'minute'); // 设置为这一分钟的结束
// console.log(moment().endOf('date'), 'date'); // 设置为这一天的结束，功能等同于day
// console.log(moment().endOf('week'), 'week'); // 设置为这一周的结束
// console.log(moment().endOf('isoWeek'), 'isoWeek'); // 设置为这一周的结束


// console.log(moment('2019-08-07').fromNow(), 'fromNow');
// var a = moment([2007, 0, 28]);
// var b = moment([2007, 0, 29]);
// console.log(a.from(b)); // "a day ago"

// var a1= moment();
// var b1 = moment('2019-09-10');
// console.log(b1, 'b1');
// console.log(a1.diff(b1)); // 86400000
// console.log(a1.diff(b1, 'days'), 'days'); // 1天

console.log(moment().valueOf(), 'valueOf');
console.log(moment(), 'moment');

console.log(moment(1318874398806).unix()); // 1318874398

console.log(moment("2012-02", "YYYY-MM").daysInMonth(), 'daysInMonth'); //获取该月的天数