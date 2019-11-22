$(document).ready(function(){
    // var div1=$('.div1');
    var div2=$('.div2');
    // var div3=$('.div3'); //변수는 보통 맨 위쪽에 써준다.
    // var btn=$('.btn');
	// var div4 = $('.div4');
    
    $('.div1').click(function(){
       $(this).text('클릭되었습니다.').css('cursor','default');
    });

    div2.mouseenter(function(){
        $(this).text('마우스커서가 위에 있습니다.');
    });
    div2.mouseleave(function(){
        $(this).text('마우스커서가 벗어 났습니다.')
    });
    
    $('.div3').hover(function(){
        $(this).text('마우스커서가 hover로 위에 있습니다.')
    },function(){
        $(this).text('마우스커서가 hover로 벗어 났습니다.') 
    });
   
 /*   btn.focus(function(){
        btn.text('focus');
    });
    btn.blur(function(){
        btn.text('blur');
    });*/
    $('.btn').on({
        'focus mouseenter':function(){btn.text('focus');},
        'blur mouseleave':function(){btn.text('blur');}
    });
	
	$('.div4').scroll(function(){
		$(this).css('background','gold');
	});
	
	/* var clickTest = $('.clickTest') */
	$('.clickTest').click(function(){
		$(this).text('클릭되었습니다.').css('cursor','default'); //클릭테스트 중에 클릭된 그놈의텍스트를 바꿔라
	});
	
	$('.animal').each(function(){
		var name = $(this).text();
		alert(name);
	});
	
});