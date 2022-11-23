$(function(){
    let current = location.pathname;
      $('.menu-items ul li').each(function(){
          let $this = $(this);
          // if the current path is like this link, make it active
          if($this.attr('href').indexOf(current) !== -1){
              $this.addClass('act-show');
      }
    });
  });

$(".Click-here").on('click', function () {
  $(".custom-model-main").addClass('model-open');
});
$(".close-btn, .bg-overlay").click(function () {
  $(".custom-model-main").removeClass('model-open');
});
