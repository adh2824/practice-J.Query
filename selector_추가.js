$(document).ready(function(){
	
	$('#div1').css('background','lightblue');
	$('#div1').css('border-radius',50);
	$('#div1').css('text-align','center');
	$('.women').css({
		'background':'black',
		'color':'white',
		'border-style':'dashed'
	});
	$('.men').css('background','yellowgreen');
	$('span').css('background','lightblue');
	$('div span').css('background','lightpink');
	$('ul span').css('background','gold');
	
	var p2 = $('.div1').find('p').eq(1);
	p2.css('border-color','red');
	p2.parent().css('border-color','green');
	p2.parents('.wrap').css('border-color','blue');
	p2.prev().find('a').css('border-color','orange');
	
});