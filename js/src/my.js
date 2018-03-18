$(function () {
  showArticleMap();
  rollColour();
  eruda.init(); // 初始化调试工具 eruda
});

// 显示首页的文章底图 有底图没有红色背景
function showArticleMap() {
  if (window.location.pathname === '/') {
    $('.post-type-normal').each(function (i, e) {
      var $e = $(e);
      var data_image = $e.data('image');
      if (data_image) {
        // sefari 不支持 .style= 这种写法
        $e.css({
          'background': data_image,
          'background-repeat': 'no-repeat',
          'background-position': 'center',
          'background-size': 'cover'
        });
        $e.children('.post-block').css({
          'background-color': 'rgba(0,0,0,0)'
        });
      }
      $e = null;
      data_image = null;
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
