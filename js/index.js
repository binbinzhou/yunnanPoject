$(function() {

	console.log($('.summary-ul'));
	console.log($('.summary-ul').get());
	console.log($('.summary-ul')[0]);
	//左侧导航点击下拉菜单事件
	$('.left-menu>li').off('click').on('click', function() {
		var $iconyou = $(this).find('.iconfont').eq(1);
		if (!$iconyou.hasClass('icon-xiasanjiao')) {
			$iconyou.addClass('icon-xiasanjiao').parents('li').siblings()
				.find('.icon-change').removeClass('icon-xiasanjiao');
		}
		if (!$(this).children('a').hasClass('active')) {
			$(this).children('a').addClass('active').parent().siblings('li')
				.children('a').removeClass('active');
		}
		if ($(this).children('ul').css('display') === 'none') {
			$('.sub-menu').slideUp();
			$(this).children('ul').slideDown();
		}
	});

	//底部更新汇总卡片点击事件
	$('.summary-ul').off('click').on('click', 'li', function() {
		$(this).addClass('expand').siblings().removeClass('expand');
	});

	//在IE8下默认激活一个上方会出现白条
	// $('.summary-ul li').eq(1).addClass('expand');
	$('.left-menu>li').eq(0).trigger('click');

	//左侧子菜单点击事件
	$('.sub-menu').off('click').on('click', 'li', function() {
		var $dval = $(this).attr('data-val');
		var $target = $(this).attr('target');
		var $rigLidval ;
		var $newLi = '<li data-val="' + $dval + '" target="' + $target + '">' + $(this).text() + '<i class="iconfont icon-guanbi"></i></li>';
		$('.right-menu').append($newLi);
		$('.right-menu').children().last().addClass('current').siblings().removeClass('current');
		$('.right-menu li').each(function(index,item){
			$rigLidval = $(item).attr("data-val");
			if ($dval === $rigLidval) {
				$('.right-menu li[data-val="' + $dval + '"]').eq(1).remove();
				$(item).addClass('current').siblings().removeClass('current');
			}
		});
	});
	$('.sub-menu').children().eq(0).trigger('click');


	//tabs切换页面
	$('.right-menu').off('click').on('click', function(event) {
		event = event || window.event;
		if (event.target.nodeName === 'LI') {
			if (!$(event.target).hasClass('current')) {
				$(event.target).addClass('current').siblings().removeClass('current');
				$target = $(event.target).attr('target');
				// console.log($target);
				//获取当前点击的target属性，打开指定的页面
				// $.get($target,function(data){
				// 	$(".right-con").html(data);
				// });
			}
		} else if (event.target.nodeName === 'I') {
			var $upLi = $(event.target).parent();
			if ($('.right-menu li').length > 1) {
				if ($upLi.hasClass('current')) {
					if ($upLi.next().length !== 0) {
						$upLi.next().addClass('current');
						//如果当前点击的关闭按钮的父级li后面还有元素那么跳转到后一个页面
						// $.get($upLi.next().attr('target'),function(data){
						// 	$(".right-con").html(data);
						// });
					} else {
						$upLi.prev().addClass('current');
						//如果当前点击的关闭按钮的父级li后面没有元素那么跳转到上一个页面
						// $.get($upLi.prev().attr('target'),function(data){
						// 	$(".right-con").html(data);
						// });
					}
				}
				$upLi.remove();
			}
		}
	});


	//下拉框配置
	DiySelect({
		selector: $('#w-date-dispatch'),
		tip: '日数据',
		series: [{
			text: '日数据',
			val: '0',
		}, {
			text: '月数据',
			val: '1',
		}, {
			text: '年数据',
			val: '2',
		}],
		createLi: function(liitem) {
			var li = '<li class="item" val="' + liitem.val + '">' + liitem.text + '</li>';
			return li;
		},
		callback: function(item) {
			switch (Number(item.attr('val'))) {
				case 0:
					showAllData(dataone);
					break;
				case 1:
					showAllData(datatwo);
					break;
				case 2:
					showAllData(datathree);
					break;
			}
		}
	});
	DiySelect({
		selector: $('#w-date-report'),
		tip: '日数据',
		series: [{
			text: '日数据',
			val: '0',
		}, {
			text: '月数据',
			val: '1',
		}, {
			text: '年数据',
			val: '2',
		}],
		createLi: function(liitem) {
			var li = '<li class="item" val="' + liitem.val + '">' + liitem.text + '</li>';
			return li;
		},
		callback: function(item) {
			switch (Number(item.attr('val'))) {
				case 0:
					BottomEchartsData.showrReportPie(reportdata);
					break;
				case 1:
					BottomEchartsData.showrReportPie(reportdata2);
					break;
				case 2:

					break;
			}
		}
	});
	DiySelect({
		selector: $('#w-date-tagboard'),
		tip: '日数据',
		series: [{
			text: '日数据',
			val: '0',
		}, {
			text: '月数据',
			val: '1',
		}, {
			text: '年数据',
			val: '2',
		}],
		createLi: function(liitem) {
			var li = '<li class="item" val="' + liitem.val + '">' + liitem.text + '</li>';
			return li;
		},
		callback: function(item) {
			switch (Number(item.attr('val'))) {
				case 0:
					BottomEchartsData.showrTagboardBar(tagboarddata);
					break;
				case 1:
					BottomEchartsData.showrTagboardBar(tagboarddata2);
					break;
				case 2:

					break;
			}
		}
	});
	DiySelect({
		selector: $('#w-date-market'),
		tip: '日数据',
		series: [{
			text: '日数据',
			val: '0',
		}, {
			text: '月数据',
			val: '1',
		}, {
			text: '年数据',
			val: '2',
		}],
		createLi: function(liitem) {
			var li = '<li class="item" val="' + liitem.val + '">' + liitem.text + '</li>';
			return li;
		},
		callback: function(item) {
			switch (Number(item.attr('val'))) {
				case 0:
					BottomEchartsData.showMarketPie(marketdata);
					break;
				case 1:
					BottomEchartsData.showMarketPie(marketdata2);
					break;
				case 2:

					break;
			}
		}
	});
	DiySelect({
		selector: $('#w-date-smarteye'),
		tip: '日数据',
		series: [{
			text: '日数据',
			val: '0',
		}, {
			text: '月数据',
			val: '1',
		}, {
			text: '年数据',
			val: '2',
		}],
		createLi: function(liitem) {
			var li = '<li class="item" val="' + liitem.val + '">' + liitem.text + '</li>';
			return li;
		},
		callback: function(item) {
			switch (Number(item.attr('val'))) {
				case 0:
					BottomEchartsData.showSmarteyeBar(smartdata);
					break;
				case 1:
					BottomEchartsData.showSmarteyeBar(smartdata2);
					break;
				case 2:

					break;
			}
		}
	});
});