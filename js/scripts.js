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
    
    document.body.onclick = function(e) {
        e = e || window.event;
        var target = e.target || e.srcElement;
        
        if (target.className.split(' ')[0] != 'n-header__butter__link') {
	        if ( (" " + target.parentNode.parentNode.className + " ").replace(/[\n\t]/g, " ").indexOf(" n-header__menu__list ") < 0 ) {
	            $('.n-header__menu').find('.n-header__menu__container').animate({'right':'-100%'},'fast',function(){
	    			$('.n-header__menu').css('visibility','hidden');
	    			$('.page').css('height','auto');
	    			$('.n-header__butter').removeClass('butter-active');   			
	    		});
	        }
        }
    };           
    
    $('.n-header__butter').click(function(){  
    	//alert(1);	    	   	
    	$(this).toggleClass('butter-active');
    	if ($('.n-header__menu').css('visibility') == 'hidden') {	    		    	
			$('.n-header__menu').css('visibility','visible');
	    	$('.n-header__menu').find('.n-header__menu__container').animate({'right':'0px'},'fast');
	    	$('.page').css('height',parseInt($('.n-header__menu').find('ul').outerHeight()+100));
    	} else {
    		$('.n-header__menu').find('.n-header__menu__container').animate({'right':'-100%'},'fast',function(){
    			$('.n-header__menu').css('visibility','hidden');
    			$('.page').css('height','auto');   			
    		});
    	};   	    	

    });
    
    if ($('.fieldT').length) {
    	$('.fieldT').find('textarea').elastic();
    }
    
   /*(function(){
   	
	   var timer;
	   $('.textfield').each(function(){
	   		this.contentEditable = true;
	   		$(this).find('span').append('<p>'+$(this).attr('data-placeholder')+'</p>');   		
	   		var arr = [];
	   		var elem = $(this);
	   		  		
	   		$(this).focus(function(){
	   			elem.find('p').remove();   			
	   			var height = elem.height();
	   			  			   			 			  			
	   			  			
	   			timer = setInterval(function(){				
	   				if (elem.find('span').html().length == 0 || elem.find('span').html() == "<br>") {   					
	   				}  				
	   				if (elem.height()>height) { 					
	   					$('.textfield__container').append('<div class="line"></div>');
	   					var $line = $('.textfield__container').find('.line').eq($('.textfield__container').find('.line').length-1);
	   					$line.css('top',height);  					
	   					height = elem.height();				  					   					  					
	   				};
	   				if (elem.height()<height) {
	   					height = elem.height();
	   					$('.textfield__container').find('.line').eq($('.textfield__container').find('.line').length-1).remove();	
	   				};
	   				$('.textfield__container').find('input').val(elem.find('span').html()); 				
	   			},25);
	   		});
	   		
	   		$(this).blur(function(){
	   			clearInterval(timer);
	   			if (elem.find('span').html().length == 0 || elem.find('span').html() == "<br>") {
	   				elem.find('span').html('');
	   				elem.find('span').append('<p>'+$(this).attr('data-placeholder')+'</p>');
	   			}
	   		});
	   		
	   		$(this).keydown(function(evt) {
	   			var keycode = evt.charCode || evt.keyCode || e.which;
	   			if (elem.find('span').html().length == 0 || elem.find('span').html() == "<br>") {   					   				
	   			   if (keycode  == 8) {
					return false;
					}
				} 
	   		});
	   });
   
   })();*/
   
   /*function controlselectHandler(evt) {
	    evt.preventDefault();
	}	
	document.body.addEventListener('mscontrolselect', controlselectHandler);*/
	//document.execCommand("enableObjectResizing", false, false);
    
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
		  appendTo: ".n-main__sort__values",
		  position: { my : "right top", at: "right bottom" }
		});
	}
	
	if($( "#selectVariant" ).length) {
	    $( "#selectVariant" ).selectmenu({
		  appendTo: ".n-main__subblock .n-container",
		  open: function() {
		  	$('.ui-selectmenu-open').css({'left':'0','width':'100%'});
			$('.ui-widget').css({'width':'100%'});
		  }
		});
		
		$('.ui-widget').css('width','100%');
		$('.ui-widget').css('height','100%');	
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