$(document).ready(function(){
	
	var tabs = $('.tabs').find('a');
	var panels = $('.panel');
	var lastTab = tabs.filter('.on');
	var lastPanel = $(lastTab.attr('href'));
	panels.hide();
	lastPanel.show();
	tabs.click(function(event){
		event.preventDefault(); //주소에 #tab2 즉,링크 아이디값 안들어감
		var thisTab = $(this);
		var thisPanel =$(thisTab.attr('href'));
		lastTab.removeClass('on');
		thisTab.addClass('on');
		lastPanel.hide();
		thisPanel.show();
		lastTab = thisTab; //왼쪽에 오른쪽을 대입
		lastPanel = thisPanel;
	});
});