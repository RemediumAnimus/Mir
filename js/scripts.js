$(document).ready(function() {

    $('input, textarea').placeholder();
    FastClick.attach(document.body);
    
    function isMinWidth() {
        return $('#min-indicator').is(':visible');
    }
    
    function isMediumWidth() {
        return $('#medium-indicator').is(':visible');
    }
    
    function placeholder() {

      $('input[type="text"],input[type="search"], textarea').focus(function(){
        if ($(this).prop('readonly')==false) {
           var plac = $(this).prop('placeholder');
           $(this).prop('placeholder',' ');

           $('input[type="text"],input[type="search"], textarea').blur(function(){
               $(this).prop('placeholder',plac);
           });
        }
      });

    };

    placeholder();            
    
    $('.n-header__butter').click(function(){  	    	   	
    	$(this).toggleClass('butter-active');
    	if ($('.n-header__menu').css('visibility') == 'hidden') {	    		    	
			$('.n-header__menu').css('visibility','visible');
	    	$('.n-header__menu').find('ul').animate({'right':'0px'},'fast');
    	} else {
    		$('.n-header__menu').find('ul').animate({'right':'-231px'},'fast',function(){
    			$('.n-header__menu').css('visibility','hidden');
    		});
    	}

    });
    
   $('.ionslider').ionRangeSlider({
   	min: 0,
   	max: 90000,	
   });
   
   arrayOfDataMulti = new Array(
   	[[13.8,20.5]],
   	[[23.5,15.7]],
   	[[27.5,32.0]],
   	[[27.5,17.5]]
   );
   
   var mass = [];
   
   for (var j=0; j<arrayOfDataMulti.length; j++) {
   	mass.push(arrayOfDataMulti[j][0][1]);
   	mass.push(arrayOfDataMulti[j][0][0]);
   }	
	if ($('.n-main__graph').length) {
		var graph = $('.n-main__graph').jqBarGraph({ 
			data: arrayOfDataMulti,
		  	colors: ['#ffb804','#3778a1'],
		  	animate: true,
		    type: 'multi',
		    width: 930,
			height: 340,
			barSpace: 215,		
		});
	}		
	
	var $newdiv1 = $( "<div class='barT'/>" );
	$('.n-main__graph').find('.subBars').html('');
    $('.n-main__graph').find('.subBars').append($newdiv1);
    
    $('.graphField').css('margin-left','0');
    
    for (var i=0; i<$('.n-main__graph').find('.subBars').length; i++) {
    	$('.n-main__graph').find('.subBars').eq(i).find('.barT').html(mass[i]);
    }
    for (var i=0; i<$('.n-main__graph').find('.subBars').length; i=i+2) {
    	$('.n-main__graph').find('.subBars').eq(i).find('.barT').addClass('barT2');
    }
    for (var i=0; i<$('.n-main__graph').find('.barT').length; i=i+2) {
    	var txt = $('.n-main__graph').find('.barT').eq(i).html();
    	$('.n-main__graph').find('.barT').eq(i).html(txt + "<span> Надо<span>");
    }
    for (var i=1; i<$('.n-main__graph').find('.barT').length; i=i+2) {
    	var txt = $('.n-main__graph').find('.barT').eq(i).html();
    	$('.n-main__graph').find('.barT').eq(i).html(txt + "<span> Вы<span>");
    }
    if($( "#sort" ).length) {
	    $( "#sort" ).selectmenu({
		  appendTo: ".n-main__sort__values"
		});
	}
	
	$('.n-main__catalog-more__params__bttn').click(function(){
		$(this).toggleClass('active');
		$('.n-main__catalog-more__params__type.hide').toggle('fast');
	});
	
	var mySwiper = new Swiper('.n-main__salary__slider', {
	    slidesPerView: 7,
	    spaceBetween: 43,
	    scrollbar: '.swiper-scrollbar',
	    scrollbarHide: false,
	    grabCursor: true
	});
	
	$('.n-main__salary__eye').click(function(){
		$(this).toggleClass('eye-active');
		$('.n-main__salary__detail').toggle();
	}); 
	
	$('.n-main__salary__table__show').click(function(){
		$(this).parent().find('.todo1').toggleClass('n-main__salary__table__row--sel');
		$(this).parent().find('.todo2').toggleClass('n-main__salary__table__cell--sel');
		$(this).parent().toggleClass('n-main__salary__table--sel');
		$(this).parent().find('.tohide').toggle();
		$(this).toggleClass('toggle');
		if ($(this).find('span').html()=='Показать детализацию') {
			$(this).find('span').html('Скрыть детализацию');
		} else {
			$(this).find('span').html('Показать детализацию');
		}
	});
	
    function resizeGraph() {
    	if (isMediumWidth()) {
			$('.n-main__graph').css('width','890px');
			$('#graphField1').css('left','232.5px');
			$('#graphField2').css('left','465px');
			$('#graphField3').css('left','697.5px');			
		}
		if (isMinWidth()) {
			$('.n-main__graph').css('width','660px');
			$('#graphField1').css('left','170px');
			$('#graphField2').css('left','339px');
			$('#graphField3').css('left','508px');
		}
    }
    resizeGraph();
    $(window).resize(function(){
		resizeGraph();		
	});
});