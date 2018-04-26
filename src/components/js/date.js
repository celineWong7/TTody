/**
 * formatDate 对Date的扩展，将 Date 转化为指定格式的String
 * @param {Date}   t newDate() 得到的日期时间
 * @param {String} a 指定格式的字符串，例如 "yyyy-M-d h:m:s"
 *
 * @return {String} 匹配指定格式的日期时间字符串
 *
 * 说明：月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
 * 例子：   
 * formatDate(new Date(), "yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423   
 * formatDate(new Date(), "yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18  
 */

export function formatDate (t, a) {
    var o = {
        "M+": t.getMonth() + 1,
        "d+": t.getDate(),
        "h+": t.getHours(),
        "m+": t.getMinutes(),
        "s+": t.getSeconds(),
        "q+": Math.floor((t.getMonth() + 3) / 3),
        "S": t.getMilliseconds()
    }
    if (/(y+)/.test(a)) a = a.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length))
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(a)) a = a.replace(RegExp.$1, (RegExp.$1.length == 1) ? (("00" + o[k]).substr(("" + o[k]).length)) : (o[k]))
    }
    return a
}


// export function formatDate(date, fmt) {
//     if (/(y+)/.test(fmt)) {
//         fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
//     }
//     let o = {
//         'M+': date.getMonth() + 1,
//         'd+': date.getDate(),
//         'h+': date.getHours(),
//         'm+': date.getMinutes(),
//         's+': date.getSeconds()
//     };
//     for (let k in o) {
//         if (new RegExp(`(${k})`).test(fmt)) {
//             let str = o[k] + '';
//             fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
//         }
//     }
//     return fmt;
// };

// function padLeftZero(str) {
//     return ('00' + str).substr(str.length);
// }