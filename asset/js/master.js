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


  // Show the first tab and hide the rest
$('.tab-menus li:first-child').addClass('active_tab');
$('.content').hide();
$('.content:first').show();

// Click function
$('.tab-menus li').click(function(){
  $('.tab-menus li').removeClass('active_tab');
  $(this).addClass('active_tab');
  $('.content').hide();

  let activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});
