// 如果想要使一个元素运动起来，一般情况下这个元素须要具有position属性absolute/relative

var oul = $('.wrap ul');
	var oulHtml = oul.html();
	oul.html(oulHtml+oulHtml)
	var timeId = null;

	var ali = $('.wrap ul li');
	var aliWidth = ali.eq(0).width();
	var screenWidth = document.body.clientWidth ;
	var aliSize = ali.size();
	var ulWidth = aliWidth*aliSize;
	oul.width(ulWidth);	//1600px
	
	var speed = 3;

	function slider(){

		if(speed<0){
			if(oul.css('left')==-ulWidth/2+'px'){
	 		oul.css('left',0);
		 	}
		 	oul.css('left','+=-2px');
		}

	 	
		if(speed>0){
			if(oul.css('left')=='0px'){
	 		oul.css('left',-ulWidth/2+'px');
		 	}
		 	oul.css('left','+='+speed+'px');
		}
	 	
	 }
	
	// setInterval()函数的作用是：每隔一段时间，执行该函数里的代码
	 timeId = setInterval(slider,30);

	$('.wrap').mouseover(function(e){
		// clearInterval()函数的作用是用来清除定时器
		// clearInterval(timeId);
		// console.log("ssds %d",screenWidth);
		// console.log(e.clientX );
		if(e.clientX > screenWidth*0.5){
			speed=-3;
		}else{
			speed=3;
		}
	});

	// $('.wrap').mouseout(function(){
	// 	timeId = setInterval(slider,30);
	// });

	$('.goLeft').click(function(){
		speed=-3;
	});

	$('.goRight').click(function(){
		speed=3;
	});