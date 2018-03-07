$(document).ready(function(){

	$('.ser').click(function(){
		$('.ggbg').css('display','block');
		$('.server').css('display','block');
	})
	$('.ggbg').click(function(){
		$('.ggbg').css('display','none');
		$('.server').css('display','none');
		$('.aldetail').css('display','none');
	})
 	$('.my').click(function(){
		if($(this).hasClass('up')){
			$('.my_tab').css('display','none');
			$(this).removeClass('up');
		}else{
			$('.my_tab').css('display','block');
			$(this).addClass('up');
		}
	})

	$('.item_click').click(function(){
		if($(this).hasClass('up')){
			$('.list_item').css('display','none');
			$(this).removeClass('up');
		}else{
			$('.list_item').css('display','block');
			$(this).addClass('up');
		}
	})

});




