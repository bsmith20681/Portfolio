$(document).ready(function(){
  $('.category_item').click(function(){
    var category = $(this).attr('id');

    if(category == 'all'){
      $('.project_item').addClass('hide');
      setTimeout(function(){
        $('.project_item').removeClass('hide');
      }, 300);
    } else {
      $('.project_item').addClass('hide');
      setTimeout(function(){
        $('.' + category).removeClass('hide');
      }, 300);
    }  
  });
});
