$(function () {
  showArticleMap();
  rollColour();
});
// 显示首页的文章底图 有底图没有红色背景
function showArticleMap() {
  window.alert(window.location.pathname)
  if (window.location.pathname === '/') {
    $('.post-type-normal').each(function (i, e) {
      var $e = $(e);
      if ($e.data('image')) {
        e.style = $e.data('image');
        $e.children('.post-block').css({
          'background-color': 'rgba(0,0,0,0)'
        });
      }
      $e = null;
    });
  }
}
// 博客副标题 动态颜色
function rollColour() {
  var $subtitle = $('.site-subtitle');
  var i = 0;
  window.setInterval(function () {
    i++;
    $subtitle.css({
      'background-position': i + '%'
    });
    if (i === 95) {
      i = -1;
    }
  }, 10);
}
