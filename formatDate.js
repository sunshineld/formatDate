/**
 * @param  {} secs 时间戳
 * @param  {} format 转换的格式 yyyy-MM-dd hh:mm:ss
 */
var format = function(secs, format) {
  var t = new Date(secs);
  var date = {
    "M+": t.getMonth() + 1,
    "d+": t.getDate(),
    "h+": t.getHours(),
    "m+": t.getMinutes(),
    "s+": t.getSeconds(),
    "q+": Math.floor((t.getMonth() + 3) / 3),
    "S+": t.getMilliseconds()
  };
  if (/(y+)/i.test(format)) {
    format = format.replace(
      RegExp.$1,
      (t.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }

  for (var k in date) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length == 1
          ? date[k]
          : ("00" + date[k]).substr(("" + date[k]).length)
      );
    }
  }
  return format;
};

console.log("日期", format(1505729264599, "yyyy-MM-dd hh:mm:ss"));
