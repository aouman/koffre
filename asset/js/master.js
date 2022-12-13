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
$(".add_project").on('click', function () {
  $(".custom-model-main").addClass('model-open');
});
$(".close-btn").click(function () {
  $(".custom-model-main").removeClass('model-open');
});

$(".add_team56").on('click', function () {
  $(".adds_teams").addClass('model-open');
});
$(".close-btn").click(function () {
  $(".adds_teams").removeClass('model-open');
});

$(".show_team").on('click', function () {
  $(".showTeam").addClass('model-open');
});
$(".close-btn").click(function () {
  $(".showTeam").removeClass('model-open');
});

$(".card_team_member").on('click', function () {
  $(".showMberTeam").addClass('model-open');
});
$(".close-btn").click(function () {
  $(".showMberTeam").removeClass('model-open');
});

$(".update_team").on('click', function () {
  $(".updateTeams").addClass('model-open');
  $(".showTeam").removeClass('model-open');
});
$(".close-btn").click(function () {
  $(".updateTeams").removeClass('model-open');
});

$(".card_proj-task").on('click', function () {
  $(".showsTasks").addClass('model-open');
});
$(".close-btn").click(function () {
  $(".showsTasks").removeClass('model-open');
});