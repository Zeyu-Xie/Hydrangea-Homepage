// 创建一个表示今天日期的 JavaScript Date 对象
var today = new Date();

// 获取年、月、日的值
var year = today.getFullYear();
var month = today.getMonth() + 1; // 月份从0开始，所以要加1
var day = today.getDate();

// 将月份和日期格式化为两位数的字符串
if (month < 10) {
    month = '0' + month;
}
if (day < 10) {
    day = '0' + day;
}

// 构建格式化后的日期字符串
var formattedDate = year + '-' + month + '-' + day;

console.log(formattedDate);
