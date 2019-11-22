$(document).ready(function(){
	
	var today = new Date();
	var year = today.getFullYear();
	var month = today.getMonth()+1;
	var date = today.getDate();
	var day = today.getDay();
	var hr = today.getHours();
	var min = today.getMinutes();
	var sec = today.getSeconds();
	var daykr = ['일','월','화','수','목','금','토'];
	var p = $('p')
	p.eq(0).find('span').text(today);
	p.eq(1).find('span').text(year);
	p.eq(2).find('span').text(month);
	p.eq(3).find('span').text(date);
	p.eq(4).find('span').text(daykr[day]);
	p.eq(5).find('span').text(hr);
	p.eq(6).find('span').text(min);
	p.eq(7).find('span').text(sec);
	
});