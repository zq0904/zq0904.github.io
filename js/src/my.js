$(function () {
  showArticleMap();
  rollColour();
});
// 显示首页的文章底图 有底图没有红色背景
function showArticleMap() {
  if (window.location.pathname === '/') {
    $('.post-type-normal').each(function (i, e) {
      var $e = $(e);
      if ($e.attr('data-image')) {
        e.style = $e.attr('data-image');
        $e.children('.post-block').css({
          'background-color': 'rgba(0,0,0,0)'
        });
        window.alert($e.attr('data-image'));
        window.alert($e.css('background'));
        // window.alert($e.css('background'));
        // console.log( $('article').eq(1).css('background'));
        // console.log($e.css('background'));
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
