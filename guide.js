$(document).ready(function(){
	
	$('.age').find('button').click(function(){
		var age = $(this).prev().val();
		if(age == ''){
			alert('나이를 입력하세요.');
		}else if(age >= 19){
			alert('성인입니다.');
		}else if(age < 19){
			alert('성인이 아닙니다.');
		}else{
			alert('숫자로 입력해주세요.');
		}
	});
	
	//value 속성 활용
	 $('.guidetext').each(function(){
        var guideText = this.defaultValue;
        var guide = $(this);
        if($(this).val() == guideText){
            guide.addClass('guide');
        }
        guide.focus(function(){
            if($(this).val() == guideText){
                $(this).val('').removeClass('guide');
            }
        });
        guide.blur(function(){
            if($(this).val() == ''){
                $(this).val(guideText).addClass('guide');
            }
        });
    });
	
	//label 요소 활용
	$('.lab').find('input').each(function(){
		var thisinput = $(this);
		var thislabel = thisinput.prev();
		/*
		thisinput.focus(function(){
			thislabel.hide();
		});
		thisinput.blur(function(){
			thislabel.show();
		});
		*/
		thisinput.on({
			focus:function(){
				thislabel.hide();
			},
			blur:function(){
				if($(this).val() == ''){
					thislabel.show();
				}
			}
		});
	});
	
});