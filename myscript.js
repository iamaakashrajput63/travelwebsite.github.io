


$(document).ready(function(){
	$(".click-btn").click(function(){
		$(".click-btn i").toggleClass("fas fa-times")
		$("nav ul").toggleClass("active");
	});
});