$(function() {
	//表格分页
	var data = [{
		"taskName": "aaaaaaaa",
		"belong": "调度1",
		"update": "2016-01-02",
		"state": "待办"
	}, {
		"taskName": "bbbbbb",
		"belong": "调度2",
		"update": "2016-01-03",
		"state": "在办"
	}, {
		"taskName": "cccccccc",
		"belong": "调度3",
		"update": "2016-01-04",
		"state": "已办"
	}, {
		"taskName": "dddddddd",
		"belong": "调度4",
		"update": "2016-01-05",
		"state": "已办"
	}, {
		"taskName": "eeeeeeee",
		"belong": "调度5",
		"update": "2016-01-06",
		"state": "待办"
	}, {
		"taskName": "ffffffff",
		"belong": "调度6",
		"update": "2016-01-07",
		"state": "在办"
	}, {
		"taskName": "ggggggggg",
		"belong": "调度7",
		"update": "2016-01-08",
		"state": "待办"
	}, {
		"taskName": "hhhhhh",
		"belong": "调度8",
		"update": "2016-01-10",
		"state": "待办"
	}, {
		"taskName": "iiiiiii",
		"belong": "调度9",
		"update": "2016-01-12",
		"state": "在办"
	}, {
		"taskName": "jjjjjjj",
		"belong": "调度10",
		"update": "2016-01-18",
		"state": "已办"
	}, {
		"taskName": "kkkkkk",
		"belong": "调度11",
		"update": "2016-01-17",
		"state": "已办"
	}, {
		"taskName": "lllll",
		"belong": "调度12",
		"update": "2016-01-24",
		"state": "待办"
	}, {
		"taskName": "mmmmm",
		"belong": "调度13",
		"update": "2016-01-17",
		"state": "在办"
	}, {
		"taskName": "nnnnnn",
		"belong": "调度14",
		"update": "2016-01-18",
		"state": "待办"
	}, {
		"taskName": "mmmmm",
		"belong": "调度15",
		"update": "2016-01-17",
		"state": "在办"
	}, {
		"taskName": "nnnnnn",
		"belong": "调度16",
		"update": "2016-01-18",
		"state": "待办"
	}];

	/* maxNum 最大页数  length 每次最多显示的页数 nowPage当前页面数 */
	function TurnPage(option) {
		var defaults = {
			maxNum: 1,
			length: 1,
			nowPage: 1,
			arr: ["front", "behind"]
		};
		this.oConfig = $.extend(defaults, option);
	}
	TurnPage.prototype = {
		init: function() {
			var self = this;
			// 判断参数显示长度是否超过最大页数
			if (self.oConfig.length > self.oConfig.maxNum) {
				self.oConfig.length = self.oConfig.maxNum;
			}
			// 判断参数当前页是否超过最大页数
			if (self.oConfig.nowPage > self.oConfig.maxNum) {
				self.oConfig.nowPage = self.oConfig.maxNum;
			}
			if (self.oConfig.maxNum === 0) {
				self.oConfig.maxNum = 1;
				self.oConfig.length = 1;
				self.oConfig.nowPage = 1;
			}
			self.loadPage(self.oConfig.nowPage).initShow().initTurn();
		},
		/* 展示换页部分 */
		initShow: function() {
			var self = this;
			var pagestr = '<li>' +
				'<a href="javascript:void(0);"><i class="iconfont icon-shangyiye" id=\"front\"></i></a>' +
				'</li>' +
				'<li>' +
				'<a href="javascript:void(0);"><i class="iconfont icon-xiayiye" id=\"behind\"></i></a>' +
				'</li>';
			$("." + self.oConfig.str + " .page-number").html(pagestr);

			for (var i = self.oConfig.length; i >= 1; i--) {
				if ((self.oConfig.nowPage + self.oConfig.length - 1) <= self.oConfig.maxNum) {
					$("." + self.oConfig.str + " .page-number").find("li").eq(0).after('<li><a href="javascript:void(0);">' + (self.oConfig.nowPage + i - 1) + '</a></li>');
				} else {
					var _nowPage = self.oConfig.maxNum + i - self.oConfig.length;
					$("." + self.oConfig.str + " .page-number").find("li").eq(0).after('<li class="current"><a href="javascript:void(0);">' + _nowPage + '</a></li>');
				}
			}
			//当前页的页码高亮
			$("." + self.oConfig.str + " .page-number").find("li").each(function() {
				if ($(this).find('a').html() == self.oConfig.nowPage) {
					$(this).addClass("current").siblings().removeClass('current');
					return;
				}
			});
			return self;
		},
		initTurn: function() {
			/* 跳转页面部分 */
			var self = this;
			$("." + self.oConfig.str + " .page-number").find("a").unbind("click");
			$("." + self.oConfig.str + " .page-number").find("a").click(function() {
				var num = Number($(this).html());
				if (Number(num)) {
					/* 正常跳转   */
					if (self.oConfig.nowPage != num) {
						self.oConfig.nowPage = num;
						self.init();
					}
				} else {
					var str = $(this).find("i").attr("id"),
						index = $.inArray(str, self.oConfig.arr),
						_index = 0;
					switch (index) {
						case 0:
							_index = -1;
							/* <<箭头跳转 上一页*/
							break;
						case 1:
							_index = 1;
							/* >>箭头跳转 下一页 */
							break;
					}
					var _nowPage = _index + self.oConfig.nowPage;
					if ((_nowPage >= 1) && (_nowPage <= self.oConfig.maxNum)) {
						self.oConfig.nowPage = _nowPage;
						self.init();
					}
				}
			});
			return self;
		},
		loadPage: function(p) {}
	};
	/* 回调用于显示切换页面（视情况需要重写）  */
	var loadPage1 = function(nowPage) {
		var self = this,
			_length = arrsAll.length,
			trList = "";
		//循环生成表格
		for (var i = 0; i < pageSize; i++) {
			if (arrsAll[(nowPage - 1) * pageSize + i]) {
				trList +=
					'<tr>' +
					'<td>' + arrsAll[(nowPage - 1) * pageSize + i].taskName + '</td>' +
					'<td>' + arrsAll[(nowPage - 1) * pageSize + i].belong + '</td>' +
					'<td>' + arrsAll[(nowPage - 1) * pageSize + i].update + '</td>' +
					'<td class="js-state" data-val="' + arrsAll[(nowPage - 1) * pageSize + i].state + '">' +
					'<span>待办</span>' +
					'<span>在办</span>' +
					'<span>已办</span>' +
					'</td>' +
					'</tr>';
			}
		}
		$('#w-tbody').empty();
		$('#w-tbody').append(trList);
		$("#w-tbody tr:even").css("background", "#fafbfe");
		$('.js-state').each(function(idnex, item) {
			var str = $(item).attr('data-val');
			switch (str) {
				case '待办':
					$(item).find('span').eq(0).addClass('waiting');
					break;
				case '在办':
					$(item).find('span').eq(1).addClass('running');
					break;
				case '已办':
					$(item).find('span').eq(2).addClass('done');
					break;
			}
		});
		//兼容IE8圆角
		if ($.pie) {
			var objs = $('.table span');
			$.pie(objs, 8);
		}
		return self;
	};
	var arrsAll,
		//每页的记录条数
		pageSize = 4;

	function showPage(data) {
		arrsAll = data;
		var nowPage = 1;
		//分页
		option = {
			"maxNum": Math.ceil(arrsAll.length / pageSize),
			//显示的页码数
			"length": 3,
			"nowPage": 1,
			"str": "page"
		};
		var myObj = new TurnPage(option);
		myObj.loadPage = loadPage1;
		myObj.init();
	}
	showPage(data);
});