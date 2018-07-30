$(document).ready(function() {

$(".menubtn").click(function(){
	$(".menu").slideToggle()
})	
//rem---------------
    var whei=$(window).width()
	$("html").css({fontSize:whei/16})
	$(window).resize(function(){
		 var whei=$(window).width()
	$("html").css({fontSize:whei/16})
	//1rem=120px
		})
//------------------
$("#dLabe2").click(function(){
	$(".secinput").slideToggle()
	 $(".selist").hide()
})	
$(document).click(function(){
  $(".secinput,.selist").slideUp()
});

$(".selelag span").click(function(){
	$(".selist").slideToggle()
	$(".secinput").hide()
})	
$("#dLabe2,.secinput,.selelag").click(function(event){
    event.stopPropagation()

});

//------------------

});
