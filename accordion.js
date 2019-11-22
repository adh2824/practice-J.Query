$(document).ready(function(){
	
	var dl = $('.accordion');
	var allDt = dl.find('dt');
	var allDd = dl.find('dd');
	
	function closeAll(){
		allDt.addClass('close');
		allDd.addClass('close');
	}
	function open(a,b){
		a.removeClass('.close');
		b.removeClass('.close');
	}
	closeAll();
	
	allDt.click(function(){
		var dt = $(this);
		var dd = dt.next();
		closeAll()
		dt.removeClass('close');
		dd.removeClass('close');
	});
	
});