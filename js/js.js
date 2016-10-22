// JavaScript Document
$(function(){
	(function(){
		var oAdv = $('.adv');
		var aA = oAdv.find('ul li');
		var oPrev = oAdv.find('.prev');
		var oNext = oAdv.find('.next');			
		var num = 0; 
		var timer=null;
		function autoPlay(){
		 timer = setInterval(function(){ 
    		if(num < aA.length-1){ 
      			num ++; 
    		}else{ 
      			num = 0;
    			}
    		changeTo(num); 
  			},2500);
		}
		autoPlay();
		oPrev.click(function(){ 
    		num = (num> 0) ? (--num) : (aA.length - 1);
    		changeTo(num);
  		});
  		oNext.click(function(){ 
   		num = (num < aA.length - 1) ? (++num) : 0;
    	changeTo(num);
  		});
		oAdv.hover(function(iNow){
			oPrev.show();
			oNext.show();
			clearInterval(timer);
			},function(){
				oPrev.hide();
				oNext.hide();
				autoPlay();
				});				
		function changeTo(i){ 
			aA.hide().eq(i).fadeIn();
			aLi.removeClass("active").eq(i).addClass("active");
		}
		
		})();
		
	(function(){
		var num=0;
		var i=3;
		var oRec = $('#scrollList');
		var oRun= oRec.find('ul');
		var oRunWrap= oRec.find('.scrollRun');
		var oPrev = oRec.find('.prev');
		var oNext = oRec.find('.next');
		var len = oRun.find('li').length;
		oNext.click(function(){
			if( !oRun.is(":animated") ){   
				if( num == len-3){  
			    	num = -1;	
			  		}
				num++;
				oRun.animate({ left : -205*num}, "slow");				
		 		}
			})
		oPrev.click(function(){
			if( !oRun.is(":animated") ){   
				if( num == 0){  
			    	num = len-2;	
			  		}
				num--;
				oRun.animate({ left : -205*num}, "slow");  
		 		}
			})

		})();
	
})