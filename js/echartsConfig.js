//将数字转换成百分比，不保留小数
Number.prototype.toPercent = function() {
	return (Math.round(this * 10000) / 100).toFixed(0) + '%';
};

//运行成功
var successPie = echarts.init(document.getElementById("w-success-pie")),
	runningPie = echarts.init(document.getElementById("w-running-pie")),
	preparePie = echarts.init(document.getElementById("w-prepare-pie")),
	hangUpPie = echarts.init(document.getElementById("w-hangUp-pie")),
	notRunPie = echarts.init(document.getElementById("w-notRun-pie"));

//无数据情况渲染效果
function showPieEcharts(objId, color1, color2) {
	objId.setOption({
		series: [{
			name: '访问来源',
			hoverAnimation: false,
			clockwise: false,
			startAngle: 90,
			type: 'pie',
			center: ['50%', '45%'],
			radius: ['78%', '90%'],
			avoidLabelOverlap: false,
			labelLine: {
				normal: {
					show: false
				}
			},
			data: [{
				value: 0,
				itemStyle: {
					normal: {
						color: new echarts.graphic.RadialGradient(0.4, 0.9, 0.9, [{
							offset: 0,
							color: color1
						}, {
							offset: 1,
							color: color2
						}], false)
					}
				}
			}, {
				value: 100,
				itemStyle: {
					normal: {
						color: '#e3e5e7'
					},
					emphasis: {
						color: '#e3e5e7'
					}
				}
			}]
		}]
	});
}
showPieEcharts(successPie, '#2EBE79', '#3886FF');
showPieEcharts(runningPie, '#49E0FF', '#4B97ED');
showPieEcharts(preparePie, '#4956FF', '#4B97ED');
showPieEcharts(hangUpPie, '#4A5AFE', '#C120FF');
showPieEcharts(notRunPie, '#FF2C56', '#FF655C');
//模拟数据
var dataone = [{
	'all': 1820,
	'success': 500,
	'running': 120,
	'prepare': 200,
	'hangUp': 400,
	'notRun': 600
}];
// var dataone = [{
// 	'all': 0,
// 	'success': 0,
// 	'running': 0,
// 	'prepare': 0,
// 	'hangUp': 0,
// 	'notRun': 0
// }];
var datatwo = [{
	'all': 2600,
	'success': 600,
	'running': 200,
	'prepare': 400,
	'hangUp': 600,
	'notRun': 800
}];
var datathree = [{
	'all': 3600,
	'success': 800,
	'running': 400,
	'prepare': 800,
	'hangUp': 900,
	'notRun': 700
}];

//获取当前年月日
function showTime() {
	var year = new Date().getFullYear();
	var month = new Date().getMonth();
	var day = new Date().getDate();
	if (month < 10) {
		month = '0' + (month + 1);
	}
	if (day < 10) {
		day = '0' + day;
	}
	var date = year + '-' + month + '-' + day;
	return date;
}
$('.all-counts h4').text(showTime());

//有数据情况加载渲染数据
function showAllData(alldata) {
	if (alldata) {
		function showEveryData(objId, color1, color2, data, data1) {
			$('.all-counts h3').text(data[0].all);
			$('.js-success .cards-num').text(data[0].success);
			$('.js-running .cards-num').text(data[0].running);
			$('.js-prepare .cards-num').text(data[0].prepare);
			$('.js-hangUp .cards-num').text(data[0].hangUp);
			$('.js-notRun .cards-num').text(data[0].notRun);
			objId.setOption({
				series: [{
					name: '访问来源',
					hoverAnimation: false,
					clockwise: false,
					startAngle: 90,
					type: 'pie',
					center: ['50%', '45%'],
					radius: ['78%', '90%'],
					avoidLabelOverlap: false,
					labelLine: {
						normal: {
							show: false
						}
					},
					data: [{
						value: data1,
						itemStyle: {
							normal: {
								color: new echarts.graphic.RadialGradient(0.4, 0.9, 0.9, [{
									offset: 0,
									color: color1
								}, {
									offset: 1,
									color: color2
								}], false)
							}
						}
					}, {
						value: data[0].all === 0 ? 100 : (data[0].all - data1),
						itemStyle: {
							normal: {
								color: '#e3e5e7'
							},
							emphasis: {
								color: '#e3e5e7'
							}
						}
					}]
				}]
			}, true);
		}
		showEveryData(successPie, '#2EBE79', '#3886FF', alldata, alldata[0].success);
		showEveryData(runningPie, '#49E0FF', '#4B97ED', alldata, alldata[0].running);
		showEveryData(preparePie, '#4956FF', '#4B97ED', alldata, alldata[0].prepare);
		showEveryData(hangUpPie, '#4A5AFE', '#C120FF', alldata, alldata[0].hangUp);
		showEveryData(notRunPie, '#FF2C56', '#FF655C', alldata, alldata[0].notRun);
	}
}
showAllData(dataone);


//前台报表更新汇总饼状图与柱状图
var reportPie = echarts.init(document.getElementById("w-report-pie")),
	marketPie = echarts.init(document.getElementById("w-market-pie")),
	smarteyeBar = echarts.init(document.getElementById("w-smarteye-bar"));

//集市更新汇总环形图默认样式
var placeHolderStyle = {
	normal: {
		color: 'rgba(0,0,0,0)'
	},
	emphasis: {
		color: 'rgba(0,0,0,0)'
	}
};

//Echarts图表默认绘制
var showBottomEcharts = {
	//前台报表更新汇总
	reportPie: function() {
		var option = {
			series: [{
				name: '访问来源',
				hoverAnimation: false,
				clockwise: false,
				startAngle: 90,
				type: 'pie',
				center: ['50%', '50%'],
				radius: ['75%', '87%'],
				avoidLabelOverlap: false,
				labelLine: {
					normal: {
						show: false
					}
				},
				data: [{
					name: '80%',
					value: 45,
					itemStyle: {
						normal: {
							color: new echarts.graphic.RadialGradient(0.4, 0.9, 0.9, [{
								offset: 0,
								color: '#4A5BFE'
							}, {
								offset: 1,
								color: '#4C93EE'
							}], false)
						}
					}
				}, {
					value: 55,
					itemStyle: {
						normal: {
							color: '#e3e5e7'
						},
						emphasis: {
							color: '#e3e5e7'
						}
					},
				}]
			}]
		};
		return option;
	},
	//集市更新汇总
	marketPie: function() {
		var option = {
			series: [{
				name: '已更新数',
				type: 'pie',
				center: ['50%', '50%'],
				radius: ['77%', '87%'],
				startAngle: 90,
				clockwise: false,
				hoverAnimation: false,
				label: {
					normal: {
						show: false
					}
				},
				labelLine: {
					normal: {
						show: false
					}
				},
				data: [{
					value: 40,
					itemStyle: {
						normal: {
							color: new echarts.graphic.RadialGradient(0.4, 0.9, 0.9, [{
								offset: 0,
								color: '#4C96ED'
							}, {
								offset: 1,
								color: '#495BFD'
							}], false)
						}
					}
				}, {
					value: 60,
					name: 'invisible',
					itemStyle: placeHolderStyle
				}]
			}, {
				name: '未更新数',
				type: 'pie',
				center: ['50%', '50%'],
				startAngle: 90,
				clockwise: false,
				radius: ['64%', '71%'],
				hoverAnimation: false,
				label: {
					normal: {
						show: false
					}
				},
				labelLine: {
					normal: {
						show: false
					}
				},
				data: [{
					value: 55,
					itemStyle: {
						normal: {
							color: new echarts.graphic.RadialGradient(0.4, 0.9, 0.9, [{
								offset: 0,
								color: '#4E59FE'
							}, {
								offset: 1,
								color: '#B924FF'
							}], false)
						}
					}
				}, {
					value: 45,
					name: 'invisible',
					itemStyle: placeHolderStyle
				}]
			}]
		};
		return option;
	},
	//智慧眼更新汇总
	smarteyeBar: function() {
		var option = {
			grid: {
				x: '30px',
				y: '20px',
				x2: '30px',
				y2: '15px'
			},
			//X轴样式的设置
			xAxis: [{
				type: 'category',
				data: ['已更新数', '未更新数'],
				//坐标刻度相关设置
				axisLabel: {
					show: false
				},
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				splitLine: {
					show: false
				}
			}],
			//Y轴样式的设置
			yAxis: [{
				type: 'value',
				axisLabel: {
					show: false
				},
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				splitLine: {
					show: false
				}
			}],
			series: [{
				type: 'bar',
				barWidth: 6,
				itemStyle: {
					normal: {
						barBorderRadius: [3, 3, 0, 0]
					}
				},
				label: {
					normal: {
						show: true,
						position: "top",
						textStyle: {
							color: "#576099",
							fontSize: 10
						},
						formatter: function(arg) {
							return (Math.round(arg.data.value)) + '%';
						}
					},
					emphasis: {
						show: true,
						position: "top",
						textStyle: {
							color: "#576099",
							fontSize: 10
						},
						formatter: function(arg) {
							return (Math.round(arg.data.value)) + '%';
						}
					}
				},
				data: [{
					name: '已更新数',
					value: 0,
					itemStyle: {
						normal: {
							color: '#4A5AFE'
						}
					}
				}, {
					name: '未更新数',
					value: 0,
					itemStyle: {
						normal: {
							color: '#BB24FF'
						}
					}
				}]
			}]
		};
		return option;
	},
};
//前台报表更新汇总环形图
reportPie.setOption(showBottomEcharts.reportPie());
//集市更新汇总
marketPie.setOption(showBottomEcharts.marketPie());
//智慧眼更新汇总
smarteyeBar.setOption(showBottomEcharts.smarteyeBar());



//Ecahrts图表加载数据
var BottomEchartsData = {
	//前台报表更新汇总
	showrReportPie: function(data) {
		reportPie.showLoading();
		if (data) {
			reportPie.hideLoading();
			var all = data[0].all,
				update = data[0].update,
				notupdate = data[0].notupdate;
			$('.js-report .cards-num').text(all);
			if (all === 0) {
				$('.js-report .percent').text('0%');
			} else {
				$('.js-report .percent').text((update / all).toPercent());
			}
			$('.js-report .js-update-counts').text(update);
			$('.js-report .js-notupdate-counts').text(notupdate);
			reportPie.setOption({
				series: [{
					name: '访问来源',
					hoverAnimation: false,
					clockwise: false,
					startAngle: 90,
					type: 'pie',
					center: ['50%', '50%'],
					radius: ['75%', '87%'],
					avoidLabelOverlap: false,
					labelLine: {
						normal: {
							show: false
						}
					},
					data: [{
						// name: '80%',
						value: update,
						itemStyle: {
							normal: {
								color: new echarts.graphic.RadialGradient(0.4, 0.9, 0.9, [{
									offset: 0,
									color: '#4A5BFE'
								}, {
									offset: 1,
									color: '#4C93EE'
								}], false)
							}
						}
					}, {
						value: update === 0 ? 100 : notupdate,
						itemStyle: {
							normal: {
								color: '#e3e5e7'
							},
							emphasis: {
								color: '#e3e5e7'
							}
						},
					}]
				}]
			});
		}
	},
	//客户标签库
	showMarketPie:function(data){
		reportPie.showLoading();
		if (data) {
			reportPie.hideLoading();
			var all = data[0].all,
				update = data[0].update,
				notupdate = data[0].notupdate;
			$('.js-market .cards-num').text(all);
			if (all === 0) {
				$('.js-market .firstline .count').text('0%');
				$('.js-market .secondline .count').text('0%');
			} else {
				$('.js-market .firstline .count').text((update / all).toPercent());
				$('.js-market .secondline .count').text((notupdate / all).toPercent());
			}
			$('.js-market .js-update-counts').text(update);
			$('.js-market .js-notupdate-counts').text(notupdate);
			marketPie.setOption({
				series: [{
					name: '已更新数',
					type: 'pie',
					center: ['50%', '50%'],
					radius: ['77%', '87%'],
					startAngle: 90,
					clockwise: false,
					hoverAnimation: false,
					label: {
						normal: {
							show: false
						}
					},
					labelLine: {
						normal: {
							show: false
						}
					},
					data: [{
						value: update,
						itemStyle: {
							normal: {
								color: new echarts.graphic.RadialGradient(0.4, 0.9, 0.9, [{
									offset: 0,
									color: '#4C96ED'
								}, {
									offset: 1,
									color: '#495BFD'
								}], false)
							}
						}
					}, {
						//空白部分展示未更新数
						value: all === 0 ? 100 : notupdate,
						name: 'invisible',
						itemStyle: placeHolderStyle
					}]
				}, {
					name: '未更新数',
					type: 'pie',
					center: ['50%', '50%'],
					startAngle: 90,
					clockwise: false,
					radius: ['64%', '71%'],
					hoverAnimation: false,
					label: {
						normal: {
							show: false
						}
					},
					labelLine: {
						normal: {
							show: false
						}
					},
					data: [{
						value: notupdate,
						itemStyle: {
							normal: {
								color: new echarts.graphic.RadialGradient(0.4, 0.9, 0.9, [{
									offset: 0,
									color: '#4E59FE'
								}, {
									offset: 1,
									color: '#B924FF'
								}], false)
							}
						}
					}, {
						//空白部分展示已更新数
						value: all === 0 ? 100 : update,
						name: 'invisible',
						itemStyle: placeHolderStyle
					}]
				}]
			});
		}
	},
	//集市更新
	showrTagboardBar:function(data){
		var all = data[0].all,
			update = data[0].update,
			notupdate = data[0].notupdate;
		var upPer = (update / all).toPercent();
		var notupPer = (notupdate / all).toPercent();
		$('.js-tagboard .cards-num').text(all);
		if (all === 0) {
			$('.pro-one .pro-count').text('0%');
			$('.pro-two .pro-count').text('0%');
			$('.pro-update').css('width', 0);
			$('.pro-notupdate').css('width', 0);
		} else {
			$('.pro-one .pro-count').text(upPer);
			$('.pro-two .pro-count').text(notupPer);
			//将已更新未更新的数据转化成百分比展示成p标签的宽度，渲染背景颜色
			$('.pro-update').css('width', upPer);
			$('.pro-notupdate').css('width', notupPer);
		}
		$('.js-tagboard .js-update-counts').text(update);
		$('.js-tagboard .js-notupdate-counts').text(notupdate);
	},
	//智慧眼更新
	showSmarteyeBar:function(data){
		smarteyeBar.showLoading();
		if (data && data.length !== 0) {
			smarteyeBar.hideLoading();
			var all = data[0].all,
				update = data[0].update,
				notupdate = data[0].notupdate;
			$('.js-smarteye .cards-num').text(all);
			if (all === 0) {

			}
			$('.js-smarteye .js-update-counts').text(update);
			$('.js-smarteye .js-notupdate-counts').text(notupdate);
			smarteyeBar.setOption({
				grid: {
					x: '30px',
					y: '20px',
					x2: '30px',
					y2: '15px'
				},
				//X轴样式的设置
				xAxis: [{
					type: 'category',
					data: ['已更新数', '未更新数'],
					//坐标刻度相关设置
					axisLabel: {
						show: false
					},
					axisLine: {
						show: false
					},
					axisTick: {
						show: false
					},
					splitLine: {
						show: false
					}
				}],
				//Y轴样式的设置
				yAxis: [{
					type: 'value',
					axisLabel: {
						show: false
					},
					axisLine: {
						show: false
					},
					axisTick: {
						show: false
					},
					splitLine: {
						show: false
					}
				}],
				series: [{
					type: 'bar',
					barWidth: 6,
					itemStyle: {
						normal: {
							barBorderRadius: [3, 3, 0, 0]
						}
					},
					label: {
						normal: {
							show: true,
							position: "top",
							textStyle: {
								color: "#576099",
								fontSize: 10
							},
							formatter: function(arg) {
								//如果总数为0，那么已更新设置为0%，否则就为arg.data.value / all的百分比
								return all === 0 ? '0%' : (arg.data.value / all).toPercent();
							}
						},
						emphasis: {
							show: true,
							position: "top",
							textStyle: {
								color: "#576099",
								fontSize: 10
							},
							formatter: function(arg) {
								return all === 0 ? '0%' : (arg.data.value / all).toPercent();
							}
						}
					},
					data: [{
						name: '已更新数',
						value: update,
						itemStyle: {
							normal: {
								color: '#4A5AFE'
							}
						}
					}, {
						name: '未更新数',
						value: notupdate,
						itemStyle: {
							normal: {
								color: '#BB24FF'
							}
						}
					}]
				}]
			});
		}
	}
};

//前台报表模拟数据
var reportdata = [{
	'all': 2000,
	'update': 1500,
	'notupdate': 500,
}];
// var reportdata = [{
// 	'all': 0,
// 	'update': 0,
// 	'notupdate': 0,
// }];
var reportdata2 = [{
	'all': 1000,
	'update': 230,
	'notupdate': 770,
}];

BottomEchartsData.showrReportPie(reportdata);

//客户标签库更新汇总模拟数据
var tagboarddata = [{
	'all': 3200,
	'update': 1800,
	'notupdate': 1400,
}];
var tagboarddata2 = [{
	'all': 5000,
	'update': 4000,
	'notupdate': 1000,
}];

BottomEchartsData.showrTagboardBar(tagboarddata);

//集市更新模拟数据
var marketdata = [{
	'all': 1500,
	'update': 1200.65,
	'notupdate': 299.35,
}];
// var marketdata = [{
// 	'all': 0,
// 	'update': 0,
// 	'notupdate': 0,
// }];
var marketdata2 = [{
	'all': 8000,
	'update': 2000,
	'notupdate': 6000,
}];

BottomEchartsData.showMarketPie(marketdata);


//智慧眼更新汇总柱状图模拟数据
var smartdata = [{
	'all': 4567,
	'update': 3567,
	'notupdate': 1000,
}];
var smartdata2 = [{
	'all': 4800,
	'update': 1800,
	'notupdate': 3000,
}];

BottomEchartsData.showSmarteyeBar(smartdata);