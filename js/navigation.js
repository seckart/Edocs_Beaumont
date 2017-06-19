
$(function() {
 
 
  var navigation_top_offset_top = $('#top-nav').offset().top;
   
 var navigation_top = function(){
 var scroll_top = $(window).scrollTop(); 
   
     
    if (scroll_top > navigation_top_offset_top) 
		{
    $('#top-nav').css({ 'position': 'fixed', 'top':0 });
    } 
		else {
    $('#top-nav').css({ 'position': 'relative' });
    }  
  };
   
  
  navigation_top();
   
  $(window).scroll(function() {
   navigation_top();
  });
 
});