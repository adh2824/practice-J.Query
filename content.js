$(document).ready(function(){
	
	var at = $('.at');
	var adc =$('.adc');
	
	$('input,textarea').val('제이쿼리에서 변경');
	$('.city').val('대전');
	$('.area').val(['양천','동작']); //배열 : 값만존재 누구의 무엇이 아님
	
	at.find('.btn1').click(function(){
		$(this).siblings('img').attr({
			'src':'img/iphone1.jpg',
			'alt':'아이폰1'
		});
	});
	at.find('.btn2').click(function(){
		$(this).siblings('img').attr({'src':'img/iphone2.jpg','alt':'아이폰2'
		});
	});
	at.find('.btn3').click(function(){
		$(this).siblings('img').attr({'src':'img/iphone3.jpg','alt':'아이폰3'
		});
	});
	at.find('.btn4').click(function(){
		$(this).siblings('img').attr({'src':'img/iphone4.jpg','alt':'아이폰4'
		});
	});
	at.find('.btn5').click(function(){
		$(this).siblings('img').attr({'src':'img/iphone5.jpg','alt':'아이폰5'
		});
	});
	
	adc.find('.btn1').click(function(){
		$(this).siblings('div').addClass('dashed');
	});
	adc.find('.btn2').click(function(){
		$(this).siblings('div').removeClass('dashed');
	});
	adc.find('.btn3').click(function(){
		$(this).siblings('div').addClass('notice');
	});
	adc.find('.btn4').click(function(){
		$(this).siblings('div').removeClass('notice');
	});
	adc.find('.btn5').click(function(){
		$(this).siblings('div').toggleClass('dashed');
	});
	adc.find('.btn6').click(function(){
		$(this).siblings('div').toggleClass('notice');
	});
});