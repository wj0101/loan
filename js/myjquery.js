$(function(){

	var text=$('#menuWarp ul.asideList li');
	var tab=$('.container .loanProducts');
	setTimeout(function(){
		var location = window.location.href;
		var href= location+"";
		var href_part=href.split("?");
		var numB=(href_part[1])*1;

		if(numB<=5){
			text.eq(numB).addClass('hoverButton').siblings('li').removeClass('hoverButton');
			tab.eq(numB).show().siblings().hide()
		}

	},0);
	text.click(function(){
		$(this).addClass('hoverButton').siblings('li').removeClass('hoverButton');
		var num=$(this).index();
		tab.eq(num).show().siblings().hide();

		if(num==0){
			$(".applyLoan .topBanner_protect,.successful .topBanner_home,.successFail .topBanner_home").css({'background':'url(images/banner_1.jpg)' });
			$(".applyLoan .textTitle,.successful .textTitle,.successFail .textTitle").text('嘉保贷');
			$(".applyLoan .textMessage,.successful .textMessage,.successFail .textMessage").text('有寿险保单就能借')
		}else if(num==1){
			$(".applyLoan .topBanner_protect,.successful .topBanner_home,.successFail .topBanner_home").css({'background':'url(images/banner_2.jpg)' });
			$(".applyLoan .textTitle,.successful .textTitle,.successFail .textTitle").text('嘉英贷');
			$(".applyLoan .textMessage,.successful .textMessage,.successFail .textMessage").text('社保/公积金借款')
		}else if(num==2	){
			$(".applyLoan .topBanner_protect,.successful .topBanner_home,.successFail .topBanner_home").css({'background':'url(images/banner_3.jpg)' });
			$(".applyLoan .textTitle,.successful .textTitle,.successFail .textTitle").text('嘉房贷');
			$(".applyLoan .textMessage,.successful .textMessage,.successFail .textMessage").text('按揭房贷借款')
		}else if(num==3	){
			$(".applyLoan .topBanner_protect,.successful .topBanner_home,.successFail .topBanner_home").css({'background':'url(images/banner_4.jpg)' });
			$(".applyLoan .textTitle,.successful .textTitle,.successFail .textTitle").text('嘉车贷');
			$(".applyLoan .textMessage,.successful .textMessage,.successFail .textMessage").text('有车贷都能借')
		}else if(num==4	){
			$(".applyLoan .topBanner_protect,.successful .topBanner_home,.successFail .topBanner_home").css({'background':'url(images/banner_5.jpg)' });
			$(".applyLoan .textTitle,.successful .textTitle,.successFail .textTitle").text('宅抵贷');
			$(".applyLoan .textMessage,.successful .textMessage,.successFail .textMessage").text('有住宅就能借')
		}

	});

	$('.applyBto,.imgBtn').on('click',function(){
		tab.css('display','none');
		$('.applyLoan').css('display','block');
		$(window).scrollTop(0)
	});


	$(window).on('scroll',function(){
		if($(window).scrollTop()>530){
			$(".footerApply").css({
				'display':'block'
			});
		}else{
			$(".footerApply").css({
				'display':'none'
			});
		}
	});


	//幻灯效果开始
	var isRune=true;
	var imagesNum=$('#bannerWrap ul.imgToggle>li').length;
	var imagesHtml='<ul class="buttonDot">';
	for(var i=1;i<=imagesNum;i++){
		imagesHtml+='<li></li>'
	}
	imagesHtml+='</ul>';
	$('#bannerWrap ul.imgToggle').after(imagesHtml);

	function show(v){
		if(v==$('#bannerWrap ul.buttonDot>li').index($('#bannerWrap ul.buttonDot>li.choice'))
		){return null}

		$('#bannerWrap ul.imgToggle>li').finish().filter(':visible').fadeOut()
			.css({'z-index':0})//可以加入'display':'none'
			.end()
			.eq(v).fadeIn()
			.css({'z-index':1});//可以加入'display':'block'

		$('#bannerWrap ul.buttonDot>li').filter('.choice')
			.removeClass('choice')
			.end()
			.eq(v).addClass('choice')

	}
	show(0);
	$('#bannerWrap ul.buttonDot>li').on('click.hover',function(){
		show($('#bannerWrap ul.buttonDot>li').index(this))
	});



	$('#bannerWrap ul.imgToggle>li,#bannerWrap ul.buttonDot>li').hover(function(){
		isRune=false;
	},function(){
		isRune=true;
	});

	setInterval(function(){
		if(isRune){

			if($('#bannerWrap ul.buttonDot>li.choice').next().length==0
			){
				$('#bannerWrap ul.buttonDot>li').eq(0).trigger('click.hover')
			}else{
				$('#bannerWrap ul.buttonDot>li.choice').next().trigger('click.hover')
			}
		}
	},3000);

	var page=1;
	var r=1;
	$(".next").click(function(){
		var list=$(".imgToggle");
		var num=list.find("li").length;
		var len=Math.ceil(num/r);

		if (page==len){
			$('#bannerWrap ul.buttonDot>li').eq(0).trigger('click.hover');
			page=1
		}else {

			$('#bannerWrap ul.buttonDot>li.choice').next().trigger('click.hover');
			page++
		}
	});
	$(".prev").click(function(){
		var list=$(".imgToggle");
		var num=list.find("li").length;
		var len=Math.ceil(num/r);

		if (page==1){
			$('#bannerWrap ul.buttonDot>li').eq(len-1).trigger('click.hover');
			page=len
		}else {
			$('#bannerWrap ul.buttonDot>li.choice').prev().trigger('click.hover');
			page--
		}
	});

	//幻灯效果结束

$("#bannerWrap .prev").hover(function(){
	$(this).stop().animate({
		"background-position-x":"6px",
		"opacity":"1"
	},500)
},function(){
	$(this).stop().animate({
		"background-position-x":"20px",
		"opacity":".3"
	},500)
});

	$("#bannerWrap .next").hover(function(){
			$(this).stop().animate({
				"background-position-x":"17px",
				"opacity":"1"
			},300)
	},function(){
			$(this).stop().animate({
				"background-position-x":"1px",
				"opacity":".3"
			},300)
	});


	$(".leftProducts,.rightProducts").hover(function(){
		$(this).stop().animate({
			"margin-top":"-10px",
			"boxShadow":"0 8px 10px 0 #ccc",
			"z-index":"2"
		},300)
	},function(){
		$(this).stop().animate({
			"margin-top":"0px",
			"boxShadow":"0 1px 2px 0 #eee"
		},300)
	});









	
});

