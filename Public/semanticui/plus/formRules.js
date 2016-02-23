


//验证注册用户名必须为字母，或者字母+数字，或者全中文，字母是6-20个字符，中文是3-10个
$.fn.form.settings.rules.username = function(value){
     return /^([a-zA-Z][a-zA-Z0-9]{5,19})$/.test(value);
     // return /^(([a-zA-Z][a-zA-Z0-9]{2,19})|([\u4E00-\u9FA5]{3,10}))$/.test(value);
}
 