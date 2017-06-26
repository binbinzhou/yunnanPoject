(function($) {
  $.pie = function(name, v) {
    // 如果没有加载 PIE 则直接终止
    if (!PIE) return false;
    // 是否 jQuery 对象或者选择器名称
    var obj = typeof name == 'object' ? name : $(name);
    // 指定运行插件的 IE 浏览器版本
    var version = 9;
    // 未指定则默认使用 ie10 以下全兼容模式
    if (typeof v != 'number' && v < 9) {
      version = v;
    }
    // 可对指定的多个 jQuery 对象进行样式兼容
    if (obj.size() > 0) {
      obj.each(function() {
        PIE.attach(this);
      });
    }
  };
})(jQuery);
 
$(function() {
  //  $.pie('.for-ie6', 6);
  var objs = $('.circle,.progress-wrap,.pro-update,.pro-notupdate,.table span,.table-bottom .page,.user-pic,.dropdwon-header p,.dispatch-update,.cards-wrap li,.my-task,.table td, .table th,.sum-item');
  $.pie(objs, 8);
});