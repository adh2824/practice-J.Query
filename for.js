$(document).ready(function(){
	
	for(var i=1; i<=10; i++){
		$('<li>안녕'+i+'</li>').appendTo('ol');
	}
	
	for(var j=1; j<10; j++){
		$('<img src="img/flower0'+j+'-off.jpg" alt=꽃'+j+'>').appendTo('.flower');
	}
	
	var offdiv = $('.off').find('div')
	var dffdivT = offdiv.offset().top;
	offdiv.text(offdivT);
	//소수점 이하 랜더링 못함.
	
	$('.wheel').mousewheel(function(event,delta){
		
		if(delta > 0){
			$(this).attr('class','wheel gold').text('마우스휠을 올렸습니다.')
		}else if(delta < 0){
			$(this).attr('class','wheel blue').text('마우스휠을 내려습니다.')
		}
		
	});
	
});