/*my_equipment用于判断设备 my_equipment=0表示是电脑,1代表ipad,2代表Android 和 iPhone*/
var my_equipment = 0;

function fBrowserRedirect() {
	var ua = navigator.userAgent.toLowerCase();
	var Android = String(ua.match(/android/i)) == "android";
	var iPad = String(ua.match(/ipad/i)) == "ipad";
	var iPhone = String(ua.match(/iphone/i)) == "iphone";
	if(Android || iPhone) {
		//Android 和 iPhone
		//				console.log('Android 和 iPhone');
		my_equipment = 2;
	} else if(iPad) {
		//iPad
		//				console.log('iPad');
		my_equipment = 1;
	} else {
		//pc
		//				console.log('pc');
		my_equipment = 0;
	}
}
fBrowserRedirect();

window.onresize = function() {
	fBrowserRedirect();
}


$(window).resize(function() {
	//第一页的内容
	$('.index_item1_con').css('margin-top', (($(document).height() - 80) - $('.index_item1_con').height()) / 2);
	//第二页的内容
	$('.index_item2_box').css('margin-top', (($(document).height() - 80) - $('.index_item2_box').height()) / 2);
	//第三页的内容
	$('.index_item3_box').css('margin-top', (($(document).height() - 80) - $('.index_item3_box').height()) / 2);
	//第四页的内容
	$('.index_item4_box').css('margin-top', (($(document).height() - 80) - $('.index_item4_box').height()) / 2);
	//第五页的内容
	$('.index_item5_box').css('margin-top', (($(document).height() - 80) - $('.index_item5_box').height()) / 2);
	//让图片居中显示
	$('.index_item5_con_line').css('top', (300 - $('.index_item5_con_line').height()) / 2);
	//第六页的内容
	$('.index_item6_box').css('margin-top', (($(document).height() - 80) - $('.index_item6_box').height()) / 2);
	//第七页的内容
	$('.index_item7_box').css('margin-top', (($(document).height() - 80) - $('.index_item7_box').height()) / 2);
	//第八页的内容
	$('.index_item8_box').css('margin-top', (($(document).height() - 80) - $('.index_item8_box').height()) / 2);
	//第九页的内容
	$('.index_item9_box').css('margin-top', (($(document).height() - 80) - $('.index_item9_box').height()) / 2);
	//第十页的内容
	$('.index_item10_box').css('margin-top', (($(document).height() - 80) - $('.index_item10_box').height()) / 2);
	//动态设置第十一页的高度
	$('.index_item11').css('height', $('.index_item11_con').height());
});
//第一页的内容
$('.index_item1_con').css('margin-top', (($(document).height() - 80) - $('.index_item1_con').height()) / 2);
setInterval(function() {
	$('.index_item1_con').css('margin-top', (($(document).height() - 80) - $('.index_item1_con').height()) / 2);
}, 20);
//第二页的内容
$('.index_item2_box').css('margin-top', (($(document).height() - 80) - $('.index_item2_box').height()) / 2);
//第三页的内容
$('.index_item3_box').css('margin-top', (($(document).height() - 80) - $('.index_item3_box').height()) / 2);
//第四页的内容
$('.index_item4_box').css('margin-top', (($(document).height() - 80) - $('.index_item4_box').height()) / 2);
//第五页的内容
$('.index_item5_box').css('margin-top', (($(document).height() - 80) - $('.index_item5_box').height()) / 2);
//让图片居中显示
$('.index_item5_con_line').css('top', (300 - $('.index_item5_con_line').height()) / 2);
//第六页的内容
$('.index_item6_box').css('margin-top', (($(document).height() - 80) - $('.index_item6_box').height()) / 2);
//第七页的内容
$('.index_item7_box').css('margin-top', (($(document).height() - 80) - $('.index_item7_box').height()) / 2);
//第八页的内容
$('.index_item8_box').css('margin-top', (($(document).height() - 80) - $('.index_item8_box').height()) / 2);
//第九页的内容
$('.index_item9_box').css('margin-top', (($(document).height() - 80) - $('.index_item9_box').height()) / 2);
//第十页的内容
$('.index_item10_box').css('margin-top', (($(document).height() - 80) - $('.index_item10_box').height()) / 2);
//动态设置第十一页的高度
$('.index_item11').css('height', $('.index_item11_con').height());

$(function() {
	var pieChart = $('<div id="containerWy" style="height: 300px"></div>');
	if(my_equipment == 2) {
		$('.index_item6_con_item_top').append(pieChart);
	} else {
		$('.index_item6_con_item_top').append(pieChart);
		var minddleHeight = $('.index_item6_con_item_middle').height();
		if(minddleHeight > 300) {
			minddleHeight = 0;
		} else {
			minddleHeight = (300 - minddleHeight) / 2;
		}
		$('.index_item6_con_item_middle').css('margin-top', minddleHeight);
		var bottomHeight = $('.index_item6_con_item_bottom').height();
		if(bottomHeight > 300) {
			bottomHeight = 0;
		} else {
			bottomHeight = (300 - bottomHeight) / 2;
		}
		$('.index_item6_con_item_bottom').css('margin-top', bottomHeight);
	}
	//index_item4的tab切换
	$('.index_item4_con_tab').on('click', 'dd', function() {
		if($(this).hasClass('active')) {
	
		} else {
			if($(this).data('id') == 1) {
				$('.index_item4_con_num1').show('slow');
				$('.index_item4_con_num2').hide('slow');
			} else {
				$('.index_item4_con_num1').hide('slow');
				$('.index_item4_con_num2').show('slow');
			}
			$(this).addClass('active').siblings().removeClass('active');
		}
	});
	//index_item5的swiper
	var mySwiper = new Swiper('.item5_swiper', {
		freeMode: true,
		freeModeMomentum: false,
		slidesPerView: 'auto',
		grabCursor: true,
		spaceBetween: -30,
	})

	//页面的mainswiper动画
	var mySwiperMain = new Swiper('.main_swiper', {
		slidesPerView: 'auto',
		direction: 'vertical',
		keyboardControl: true,
		mousewheelControl: true,
		speed: 1200,

		// 如果需要分页器
		pagination: '.main_swiper-pagination',
		//如果设置为auto（例如制作全屏展示时的页脚部分），最后一个slide在键盘或鼠标滚动时可能会直接跳到倒数第三个slide，
		//此时可以手动设置activeIndex解决，如下
		onTransitionEnd: function(swiper) {
			if(swiper.progress == 1) {
				swiper.activeIndex = swiper.slides.length - 1
			}
		},
		onSlideChangeEnd: function(swiper) {
			//alert(swiper.activeIndex) //切换结束时，告诉我现在是第几个slide
			var swiperIndex = swiper.activeIndex;
			//				console.log(swiperIndex);
			//处理导航中没有的两个页面
			if(swiperIndex == 10) {
				swiperIndex = 9
			}
			if(swiperIndex == 7) {
				swiperIndex = 6
			}
			var $headNavA = $('.head_nav dl dd a');
			$.each($headNavA, function() {
				if($(this).data('id') == swiperIndex) {
					$(this).addClass('active').parent().siblings().find('a').removeClass('active');
				}
			});
		}
	});
	//头部导航点击切换
	$('.head_nav').on('click', 'dl dd a', function() {
		$(this).addClass('active').parent().siblings().find('a').removeClass('active');
		mySwiperMain.slideTo($(this).data('id'), 1000, false); //切换到第一个slide，速度为1秒
	});

	var arr = [];
	var item2List = ['Meteorology', 'Lottery', 'Gambling', 'License-plate Lottery', 'Game', 'Military', 'Audit', 'Prediction', 'Ecological Analysis', 'Artificial Intelligence', 'Universe Exploration'];
	//item2的随机数据
	var $indexItem2MiddleItem = $('.index_item2_middle_item');
	for(var i = 0; i < $indexItem2MiddleItem.length; i++) {
		getx(arr);
	}
	//console.log(arr);
	for(var i = 0; i < arr.length; i++) {
		$($indexItem2MiddleItem[i]).find('.index_item2_middle_item_img img').attr('src', 'img/item2_img' + arr[i] + '.png');
		var num = arr[i] - 1;
	//	console.log(num);
		$($indexItem2MiddleItem[i]).find('.index_item2_middle_item_intro').text(item2List[num]);
	}

	function getx(arr) {
		for(var i = 0; i > -1; i++) {
			var flag = true;
			var num = Math.floor(Math.random() * 11) + 1;
			for(var i in arr) {
				if(arr[i] == num) {
					flag = false;
					break;
				}
			}
			if(flag == true) {
	//			console.log(num);
				arr.push(num);
				return;
			}
		}
	}

	//item7的swiper动画
	if(my_equipment == 2) {
		//手机端显示一个
		//item7的swiper动画
		var mySwiperItem7 = new Swiper('.item7_swiper', {
			autoplay: 5000,
			//				loop: true,
			slidesPerView: 1,
			autoplayDisableOnInteraction: false,
			grabCursor: true,

			// 如果需要分页器
			pagination: '.item7_swiper-pagination',
		})
	} else {
		//其他设备的显示4个
		//item7的swiper动画
		var mySwiperItem7 = new Swiper('.item7_swiper', {
			autoplay: 5000,
			//				loop: true,
			slidesPerView: 2,
			// slidesPerGroup: 4,
			autoplayDisableOnInteraction: false,
			grabCursor: true,

			// 如果需要分页器
			pagination: '.item7_swiper-pagination',
		})
	}
	//item8的swiper动画
	if(my_equipment == 2) {
		//手机端显示一个
		//item8的swiper动画
		var mySwiperItem8 = new Swiper('.item8_swiper', {
			autoplay: 5000,
			//				loop: true,
			slidesPerView: 1,
			autoplayDisableOnInteraction: false,
			grabCursor: true,

			// 如果需要分页器
			pagination: '.item8_swiper-pagination',
		})
	} else {
		//其他设备的显示4个
		//item8的swiper动画
		var mySwiperItem8 = new Swiper('.item8_swiper', {
			autoplay: 5000,
			//				loop: true,
			slidesPerView: 2,
			// slidesPerGroup: 4,
			autoplayDisableOnInteraction: false,
			grabCursor: true,

			// 如果需要分页器
			pagination: '.item8_swiper-pagination',
		})
	}

	//手机端时候的菜单开关
	//headNavState表示是否关闭
	var headNavState = 0;
	$('.head_menu_box').on('click', function() {
		console.log(headNavState);
		if(headNavState == 0) {
			$('.head_nav').slideDown(1000, function() {
				headNavState = 1;
			});
		} else {
			$('.head_nav').slideUp(1000, function() {
				headNavState = 0;
			});
		}
	});

	//第九屏的swiper
	certifySwiper = new Swiper('#certify .swiper-container', {
		watchSlidesProgress: true,
		slidesPerView: 'auto',
		centeredSlides: true,
		loop: true,
		loopedSlides: 5,
		autoplay: 3000,
		grabCursor: true,
		autoplayDisableOnInteraction: false,
		//			prevButton: '.swiper-button-prev',
		//			nextButton: '.swiper-button-next',
		pagination: '#certify .swiper-pagination',
		//paginationClickable :true,
		onProgress: function(swiper, progress) {
			for(i = 0; i < swiper.slides.length; i++) {
				var slide = swiper.slides.eq(i);
				var slideProgress = swiper.slides[i].progress;
				modify = 1;
				if(Math.abs(slideProgress) > 1) {
					modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
				}
				translate = slideProgress * modify * 128 + 'px';
				scale = 1 - Math.abs(slideProgress) / 5;
				zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
				slide.transform('translateX(' + translate + ') scale(' + scale + ')');
				slide.css('zIndex', zIndex);
				slide.css('opacity', 1);
				if(Math.abs(slideProgress) > 3) {
					slide.css('opacity', 0);
				}
			}
		},
		onSetTransition: function(swiper, transition) {
			for(var i = 0; i < swiper.slides.length; i++) {
				var slide = swiper.slides.eq(i)
				slide.transition(transition);
			}

		},
		//处理分页器bug
		onSlideChangeStart: function(swiper) {
			if(swiper.activeIndex == 4) {
				swiper.bullets.eq(9).addClass('swiper-pagination-bullet-active');
				console.log(swiper.bullets.length);
			}
		}
	});

	//扇形图
	// var dom = document.getElementById("containerWy");
	// var myChart = echarts.init(dom);
	var myChart = echarts.init(pieChart[0]);
	//点击显示对应的人物介绍
	myChart.on('click', function(param) {
		var peopleNum = $('.index_item6_people');
		$.each(peopleNum, function() {
			var dataId = $(this).data('id');
			if(dataId == param.dataIndex) {
				$(this).addClass('active').siblings().removeClass('active')
			}
		});

	});
	var app = {};
	option = null;
	option = {
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			orient: 'horizontal',
			left: 'center',
			top: 0,
			data: ['Preliminary Preparation', 'Project', 'Team', 'Ecosystem', 'Maintenance', 'Unforeseen Issue']
		},
		series: [{
			name: 'Token Distribute',
			type: 'pie',
			radius: '65%',
			center: ['50%', '60%'],
			data: [{
					value: 10,
					name: 'Preliminary Preparation'
				},
				{
					value: 9,
					name: 'Project'
				},
				{
					value: 1,
					name: 'Team'
				},
				{
					value: 50,
					name: 'Ecosystem'
				},
				{
					value: 20,
					name: 'Maintenance'
				},
				{
					value: 10,
					name: 'Unforeseen Issue'
				}
			],
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			}
		}]
	};;
	if(option && typeof option === "object") {
		myChart.setOption(option, true);
	}

	var SEPARATION = 100,
		AMOUNTX = 50,
		AMOUNTY = 50;

	var container;
	var camera, scene, renderer;

	var particles, particle, count = 0;

	var mouseX = 0,
		mouseY = 0;

	var windowHalfX = window.innerWidth / 2;
	var windowHalfY = window.innerHeight / 2;

	init();
	animate();
	

	function init() {

		container = document.createElement('div');
		indexItem1BgBlug = document.getElementsByClassName('index_item1_bg_blug');
		container.id = 'canvasBG';
		//			indexItem1BgBlug.appendChild(container);
		$('.index_item1_bg_blug').html(container);

		camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
		camera.position.z = 1000;

		scene = new THREE.Scene();

		particles = new Array();

		var PI2 = Math.PI * 2;
		var material = new THREE.ParticleCanvasMaterial({

			color: 0xffffff,
			program: function(context) {

				context.beginPath();
				context.arc(0, 0, 1, 0, PI2, true);
				context.fill();

			}

		});

		var i = 0;

		for(var ix = 0; ix < AMOUNTX; ix++) {

			for(var iy = 0; iy < AMOUNTY; iy++) {

				particle = particles[i++] = new THREE.Particle(material);
				particle.position.x = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
				particle.position.z = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2);
				scene.add(particle);

			}

		}

		renderer = new THREE.CanvasRenderer();
		renderer.setSize(window.innerWidth, window.innerHeight);
		container.appendChild(renderer.domElement);

		//				document.addEventListener('mousemove', onDocumentMouseMove, false);
		//				document.addEventListener('touchstart', onDocumentTouchStart, false);
		//				document.addEventListener('touchmove', onDocumentTouchMove, false);

		//

		window.addEventListener('resize', onWindowResize, false);

		//////////////////////////////////////////////////////
		if (my_equipment != 2) {
			$('.index_item1_bg_blug').append('<div id="sky-particle"></div>');
			particlesJS('sky-particle', {
				particles: {
				color: '#fff',
				shape: 'circle', // "circle", "edge" or "triangle"
				opacity: 1,
				size: 4,
				size_random: true,
				nb: 100,
				line_linked: {
					enable_auto: true,
					distance: 150,
					color: '#fff',
					opacity: 1,
					width: 1,
					condensed_mode: {
					enable: false,
					rotateX: 600,
					rotateY: 600
					}
				},
				anim: {
					enable: true,
					speed: 1
				}
				},
				interactivity: {
				enable: true,
				mouse: {
					distance: 250
				},
				detect_on: 'canvas', // "canvas" or "window"
				mode: 'grab',
				line_linked: {
					opacity: .5
				},
				events: {
					onclick: {
					enable: true,
					mode: 'push', // "push" or "remove" (particles)
					nb: 4
					}
				}
				},
				/* Retina Display Support */
				retina_detect: true
			});
		}
		///////////////////////////////////////////////////////
	}

	function onWindowResize() {

		windowHalfX = window.innerWidth / 2;
		windowHalfY = window.innerHeight / 2;

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize(window.innerWidth, window.innerHeight);

	}

	//

	function onDocumentMouseMove(event) {

		mouseX = event.clientX - windowHalfX;
		mouseY = event.clientY - windowHalfY;

	}

	function onDocumentTouchStart(event) {

		if(event.touches.length === 1) {

			event.preventDefault();

			mouseX = event.touches[0].pageX - windowHalfX;
			mouseY = event.touches[0].pageY - windowHalfY;

		}

	}

	function onDocumentTouchMove(event) {

		if(event.touches.length === 1) {

			event.preventDefault();

			mouseX = event.touches[0].pageX - windowHalfX;
			mouseY = event.touches[0].pageY - windowHalfY;

		}

	}

	//

	function animate() {

		requestAnimationFrame(animate);

		render();

	}

	function render() {

		//				camera.position.x += (mouseX - camera.position.x) * .05;
		//				camera.position.y += (-mouseY - camera.position.y) * .05;
		camera.position.x = 0;
		camera.position.y = 300;
		camera.lookAt(scene.position);

		var i = 0;

		for(var ix = 0; ix < AMOUNTX; ix++) {

			for(var iy = 0; iy < AMOUNTY; iy++) {

				particle = particles[i++];
				particle.position.y = (Math.sin((ix + count) * 0.3) * 50) + (Math.sin((iy + count) * 0.5) * 50);
				particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.3) + 1) * 2 + (Math.sin((iy + count) * 0.5) + 1) * 2;

			}

		}

		renderer.render(scene, camera);

		count += 0.1;

	}
	
});