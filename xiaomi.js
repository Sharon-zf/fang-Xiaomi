$(function() {
	alert("这是个人的一个学习实验网站，网站内容不必当真！！！");
	//头部字体颜色变亮
	$("#A2 a").mouseenter(function() {
		$(this).css('color', 'rgb(255,255,255)');
	}).mouseout(function() {
		$(this).css('color', 'rgb(231,231,231)');
	});
	//头部下拉菜单
	$(".a5").mouseover(function() {
		$("#float1").show();
	});
	$(".a5").mouseout(function() {
		$("#float1").hide();
	});
	//B1部分字体变色
	$("#B12 p").mouseenter(function() {
		$(this).css('color', 'rgb(148, 95, 63)').mouseout(function() {
			$(this).css('color', 'rgb(102,102,102)');
		});
	});
	//B1部分搜索框与购物车变换
	//放大镜变色
	$("#B13 div").hover(function() {
		$(this).css('background', ' url(图标img/X.png) -4px -1480px');
	}, function() {
		$(this).css('background', ' url(图标img/X.png) -4px -1446px');
	});
	//购物车变色
	$("#shopCar").hover(function() {
		$(this).css('background', ' url(图标img/X.png) -3px -1206px');
	}, function() {
		$(this).css('background', ' url(图标img/X.png) -3px -1172px');
	});
	//搜索框
	$("#B13 input").click(function() {
		$(this).prop("value", "");
	});
	//轮播图左侧变化：
	$("#B21 li").hover(function() {
		$(this).css("background", "rgb(135, 109, 70)");
	}, function() {
		$(this).css("background", "rgb(159, 128, 82)");
	});
	$("#B21 p").hover(function() {
		$(this).css("color", "rgb(223, 175, 126)");
	}, function() {
		$(this).css("color", "rgb(255,255,255)");
	});
	//"更多"字体变色
	$("body #gengduo").hover(function() {
		$(this).css("color", "rgb(132, 95, 63)");
	}, function() {
		$(this).css("color", "rgb(153,153,153)");
	});
	//B5部分手动幻灯片
	//幻灯片按钮
	$("#B522,#B523,#B622,#B623").hover(function() {
		$(this).css("opacity", "0.6");
	}, function() {
		$(this).css("opacity", "0.3");
	});
	//主体
	$("#B523").click(function() {
		var X = $("#B521").position().left;
		if (X >= -269) {
			/* ????? */
			var N = X - 169;
			$("#B521").offset({
				left: N
			});
		};
	});

	$("#B522").click(function() {
		var X = $("#B521").position().left;
		if (X <= -269) {
			/* ????? */
			var M = X + 369;
			$("#B521").offset({
				left: M
			});
		};
	});
	$("#B623").click(function() {
		var X = $("#B621").position().left;
		if (X >= -269) {
			/* ????? */
			var N = X - 169;
			$("#B621").offset({
				left: N
			});
		};
	});

	$("#B622").click(function() {
		var X = $("#B621").position().left;
		if (X <= -269) {
			/* ????? */
			var M = X + 369;
			$("#B621").offset({
				left: M
			});
		};
	})
	//B5 B6 部分交互
	$("body #x").hover(function() {
		$(this).css({
			"margin-top": "-3px",
			"box-shadow": "rgb(202, 202, 202) 0px 0px 10px"
		});
	}, function() {
		$(this).css({
			"margin-top": "0px",
			"box-shadow": "rgb(202, 202, 202) 0px 0px 0px"
		});
	});
	//B7 部分交互
	$("body #y").hover(function() {
		$(this).css({
			"margin-top": "-1px",
			"box-shadow": "rgb(202, 202, 202) 0px 0px 17px"
		});
	}, function() {
		$(this).css({
			"margin-top": "0px",
			"box-shadow": "rgb(202, 202, 202) 0px 0px 0px"
		});
	});
	//侧边栏交互
	//侧边栏字颜色改变
	$("#D>div").hover(function() {
		$(this).css("color", "rgb(132, 95, 63)");
	}, function() {
		$(this).css("color", "rgb(51,51,51)");
	});
	//侧边栏图标变化及隐藏盒子的显示
	$("#D1").hover(function() {
		$("#D1 div").css("background", "url(图标img/X.png) 0px -1611px");
		$("#D1d").css("display", "block");
		$("#sanjiao1").css("display", "block");
	}, function() {
		$("#D1 div").css("background", "url(图标img/X.png) 0px -1645px");
		$("#D1d").css("display", "none");
		$("#sanjiao1").css("display", "none");
	});
	$("#D2").hover(function() {
		$("#D2 div").css("background", "url(图标img/X.png) -1px -1238px");
		$("#D2d").css("display", "block");
		$("#sanjiao2").css("display", "block");
	}, function() {
		$("#D2 div").css("background", "url(图标img/X.png) -1px -1272px");
		$("#D2d").css("display", "none");
		$("#sanjiao2").css("display", "none");
	});
	$("#D3").hover(function() {
		$("#D3 div").css("background", "url(图标img/X.png) 0px -762px");
		$("#D3d").css("display", "block");
		$("#sanjiao3").css("display", "block");
	}, function() {
		$("#D3 div").css("background", "url(图标img/X.png) 0px -796px");
		$("#D3d").css("display","none");
		$("#sanjiao3").css("display","none");
	});
	$("#D4").hover(function() {
		$("#D4 div").css("background", "url(图标img/X.png) 0px -1782px");
		$("#D4d").css("display", "block");
		$("#sanjiao4").css("display", "block");
	}, function() {
		$("#D4 div").css("background", "url(图标img/X.png) 0px -1000px");
		$("#D4d").css("display", "none");
		$("#sanjiao4").css("display", "none");
	});
	$("#D5").hover(function() {
		$("#D5 div").css("background", "url(图标img/X.png) -4px -1338px");
	}, function() {
		$("#D5 div").css("background", "url(图标img/X.png) -4px -1304px");
	});
	//返回顶部动画效果
	$("#D5").click(function() {
		$("body,html").stop().animate({
			scrollTop: 0
		});
	});



});
