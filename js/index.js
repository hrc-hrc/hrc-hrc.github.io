var my_equipment=0;function fBrowserRedirect(){var b=navigator.userAgent.toLowerCase();var d=String(b.match(/android/i))=="android";var c=String(b.match(/ipad/i))=="ipad";var a=String(b.match(/iphone/i))=="iphone";if(d||a){my_equipment=2}else{if(c){my_equipment=1}else{my_equipment=0}}}fBrowserRedirect();window.onresize=function(){fBrowserRedirect()};$(window).resize(function(){$(".index_item1_con").css("margin-top",(($(document).height()-80)-$(".index_item1_con").height())/2);$(".index_item2_box").css("margin-top",(($(document).height()-80)-$(".index_item2_box").height())/2);$(".index_item3_box").css("margin-top",(($(document).height()-80)-$(".index_item3_box").height())/2);$(".index_item4_box").css("margin-top",(($(document).height()-80)-$(".index_item4_box").height())/2);$(".index_item5_box").css("margin-top",(($(document).height()-80)-$(".index_item5_box").height())/2);$(".index_item5_con_line").css("top",(300-$(".index_item5_con_line").height())/2);$(".index_item6_box").css("margin-top",(($(document).height()-80)-$(".index_item6_box").height())/2);$(".index_item7_box").css("margin-top",(($(document).height()-80)-$(".index_item7_box").height())/2);$(".index_item8_box").css("margin-top",(($(document).height()-80)-$(".index_item8_box").height())/2);$(".index_item9_box").css("margin-top",(($(document).height()-80)-$(".index_item9_box").height())/2);$(".index_item10_box").css("margin-top",(($(document).height()-80)-$(".index_item10_box").height())/2);$(".index_item11").css("height",$(".index_item11_con").height())});$(".index_item1_con").css("margin-top",(($(document).height()-80)-$(".index_item1_con").height())/2);setInterval(function(){$(".index_item1_con").css("margin-top",(($(document).height()-80)-$(".index_item1_con").height())/2)},20);$(".index_item2_box").css("margin-top",(($(document).height()-80)-$(".index_item2_box").height())/2);$(".index_item3_box").css("margin-top",(($(document).height()-80)-$(".index_item3_box").height())/2);$(".index_item4_box").css("margin-top",(($(document).height()-80)-$(".index_item4_box").height())/2);$(".index_item5_box").css("margin-top",(($(document).height()-80)-$(".index_item5_box").height())/2);$(".index_item5_con_line").css("top",(300-$(".index_item5_con_line").height())/2);$(".index_item6_box").css("margin-top",(($(document).height()-80)-$(".index_item6_box").height())/2);$(".index_item7_box").css("margin-top",(($(document).height()-80)-$(".index_item7_box").height())/2);$(".index_item8_box").css("margin-top",(($(document).height()-80)-$(".index_item8_box").height())/2);$(".index_item9_box").css("margin-top",(($(document).height()-80)-$(".index_item9_box").height())/2);$(".index_item10_box").css("margin-top",(($(document).height()-80)-$(".index_item10_box").height())/2);$(".index_item11").css("height",$(".index_item11_con").height());$(function(){var B=$('<div id="containerWy" style="height: 300px"></div>');if(my_equipment==2){$(".index_item6_con_item_top").append(B)}else{$(".index_item6_con_item_top").append(B);var s=$(".index_item6_con_item_middle").height();if(s>300){s=0}else{s=(300-s)/2}$(".index_item6_con_item_middle").css("margin-top",s);var f=$(".index_item6_con_item_bottom").height();if(f>300){f=0}else{f=(300-f)/2}$(".index_item6_con_item_bottom").css("margin-top",f)}$(".index_item4_con_tab").on("click","dd",function(){if($(this).hasClass("active")){}else{if($(this).data("id")==1){$(".index_item4_con_num1").show("slow");$(".index_item4_con_num2").hide("slow")}else{$(".index_item4_con_num1").hide("slow");$(".index_item4_con_num2").show("slow")}$(this).addClass("active").siblings().removeClass("active")}});var d=new Swiper(".item5_swiper",{freeMode:true,freeModeMomentum:false,slidesPerView:"auto",grabCursor:true,spaceBetween:-30,});var D=new Swiper(".main_swiper",{slidesPerView:"auto",direction:"vertical",keyboardControl:true,mousewheelControl:true,speed:1200,pagination:".main_swiper-pagination",onTransitionEnd:function(i){if(i.progress==1){i.activeIndex=i.slides.length-1}},onSlideChangeEnd:function(M){var N=M.activeIndex;if(N==10){N=9}if(N==7){N=6}var i=$(".head_nav dl dd a");$.each(i,function(){if($(this).data("id")==N){$(this).addClass("active").parent().siblings().find("a").removeClass("active")}})}});$(".head_nav").on("click","dl dd a",function(){$(this).addClass("active").parent().siblings().find("a").removeClass("active");D.slideTo($(this).data("id"),1000,false)});var h=[];var I=["Meteorology","Lottery","Gambling","License-plate Lottery","Game","Military","Audit","Prediction","Ecological Analysis","Artificial Intelligence","Universe Exploration"];var g=$(".index_item2_middle_item");for(var G=0;G<g.length;G++){n(h)}for(var G=0;G<h.length;G++){$(g[G]).find(".index_item2_middle_item_img img").attr("src","img/item2_img"+h[G]+".png");var L=h[G]-1;$(g[G]).find(".index_item2_middle_item_intro").text(I[L])}function n(M){for(var P=0;P>-1;P++){var N=true;var O=Math.floor(Math.random()*11)+1;for(var P in M){if(M[P]==O){N=false;break}}if(N==true){M.push(O);return
}}}if(my_equipment==2){var J=new Swiper(".item7_swiper",{autoplay:5000,slidesPerView:1,autoplayDisableOnInteraction:false,grabCursor:true,pagination:".item7_swiper-pagination",})}else{var J=new Swiper(".item7_swiper",{autoplay:5000,slidesPerView:2,autoplayDisableOnInteraction:false,grabCursor:true,pagination:".item7_swiper-pagination",})}if(my_equipment==2){var H=new Swiper(".item8_swiper",{autoplay:5000,slidesPerView:1,autoplayDisableOnInteraction:false,grabCursor:true,pagination:".item8_swiper-pagination",})}else{var H=new Swiper(".item8_swiper",{autoplay:5000,slidesPerView:2,autoplayDisableOnInteraction:false,grabCursor:true,pagination:".item8_swiper-pagination",})}var E=0;$(".head_menu_box").on("click",function(){console.log(E);if(E==0){$(".head_nav").slideDown(1000,function(){E=1})}else{$(".head_nav").slideUp(1000,function(){E=0})}});certifySwiper=new Swiper("#certify .swiper-container",{watchSlidesProgress:true,slidesPerView:"auto",centeredSlides:true,loop:true,loopedSlides:5,autoplay:3000,grabCursor:true,autoplayDisableOnInteraction:false,pagination:"#certify .swiper-pagination",onProgress:function(N,O){for(G=0;G<N.slides.length;G++){var i=N.slides.eq(G);var M=N.slides[G].progress;modify=1;if(Math.abs(M)>1){modify=(Math.abs(M)-1)*0.3+1}translate=M*modify*128+"px";scale=1-Math.abs(M)/5;zIndex=999-Math.abs(Math.round(10*M));i.transform("translateX("+translate+") scale("+scale+")");i.css("zIndex",zIndex);i.css("opacity",1);if(Math.abs(M)>3){i.css("opacity",0)}}},onSetTransition:function(N,P){for(var O=0;O<N.slides.length;O++){var M=N.slides.eq(O);M.transition(P)}},onSlideChangeStart:function(i){if(i.activeIndex==4){i.bullets.eq(9).addClass("swiper-pagination-bullet-active");console.log(i.bullets.length)}}});var l=echarts.init(B[0]);l.on("click",function(M){var i=$(".index_item6_people");$.each(i,function(){var N=$(this).data("id");if(N==M.dataIndex){$(this).addClass("active").siblings().removeClass("active")}})});var c={};option=null;option={tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"horizontal",left:"center",top:0,data:["Preliminary Preparation","Project","Team","Ecosystem","Maintenance","Unforeseen Issue"]},series:[{name:"Token Distribute",type:"pie",radius:"65%",center:["50%","60%"],data:[{value:10,name:"Preliminary Preparation"},{value:9,name:"Project"},{value:1,name:"Team"},{value:50,name:"Ecosystem"},{value:20,name:"Maintenance"},{value:10,name:"Unforeseen Issue"}],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};if(option&&typeof option==="object"){l.setOption(option,true)}var b=100,z=50,y=50;var t;var j,o,u;var w,m,A=0;var x=0,v=0;var q=window.innerWidth/2;var p=window.innerHeight/2;F();C();function F(){t=document.createElement("div");indexItem1BgBlug=document.getElementsByClassName("index_item1_bg_blug");t.id="canvasBG";$(".index_item1_bg_blug").html(t);j=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,10000);j.position.z=1000;o=new THREE.Scene();w=new Array();var Q=Math.PI*2;var P=new THREE.ParticleCanvasMaterial({color:16777215,program:function(i){i.beginPath();i.arc(0,0,1,0,Q,true);i.fill()}});var O=0;for(var N=0;N<z;N++){for(var M=0;M<y;M++){m=w[O++]=new THREE.Particle(P);m.position.x=N*b-((z*b)/2);m.position.z=M*b-((y*b)/2);o.add(m)}}u=new THREE.CanvasRenderer();u.setSize(window.innerWidth,window.innerHeight);t.appendChild(u.domElement);window.addEventListener("resize",e,false);$(".index_item1_bg_blug").append('<div id="sky-particle"></div>');particlesJS("sky-particle",{particles:{color:"#fff",shape:"circle",opacity:1,size:4,size_random:true,nb:100,line_linked:{enable_auto:true,distance:150,color:"#fff",opacity:1,width:1,condensed_mode:{enable:false,rotateX:600,rotateY:600}},anim:{enable:true,speed:1}},interactivity:{enable:true,mouse:{distance:250},detect_on:"canvas",mode:"grab",line_linked:{opacity:0.5},events:{onclick:{enable:true,mode:"push",nb:4}}},retina_detect:true})}function e(){q=window.innerWidth/2;p=window.innerHeight/2;j.aspect=window.innerWidth/window.innerHeight;j.updateProjectionMatrix();u.setSize(window.innerWidth,window.innerHeight)}function a(i){x=i.clientX-q;v=i.clientY-p}function k(i){if(i.touches.length===1){i.preventDefault();x=i.touches[0].pageX-q;v=i.touches[0].pageY-p}}function K(i){if(i.touches.length===1){i.preventDefault();x=i.touches[0].pageX-q;v=i.touches[0].pageY-p}}function C(){requestAnimationFrame(C);r()}function r(){j.position.x=0;j.position.y=300;j.lookAt(o.position);var O=0;for(var N=0;N<z;N++){for(var M=0;M<y;M++){m=w[O++];m.position.y=(Math.sin((N+A)*0.3)*50)+(Math.sin((M+A)*0.5)*50);m.scale.x=m.scale.y=(Math.sin((N+A)*0.3)+1)*2+(Math.sin((M+A)*0.5)+1)*2}}u.render(o,j);A+=0.1}});