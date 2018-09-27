!function(){"use strict";
/* global touchSupport, jQuery */
/* global Swiper, jQuery */
var a,n,e,i,d,t,r,s;jQuery(function(i){
// Caching variables
var t=i("html"),e=i(".js__main-navigation"),a=i(".js__main-navigation__open-sub-menu-link"),n=e.find(".js__main-navigation__items-list").children("li"),s=i(".second-navigation-level"),o=i(".third-navigation-level"),r=i(".js__main-navigation__open-third-menu-link"),l=i(".js__dropdown-menu-with-columns .js__main-navigation__item._sub");touchSupport||l.hover(function(){i(this).toggleClass("open")});// Set class for third-navigation-level to handle position on left or right
var c=function(){o.length&&(window.matchMedia("(min-width: 992px)").matches?s.each(function(){var e=i(window).width()-i(this).offset().left-i(this).outerWidth(),t=i(this).width();e<i(this).find(o).width()?i(this).find(o).css("left",-t):i(this).find(o).css("left",t)}):o.css("left","auto"))};// Initial call for function
c();// Add click event to dropdown link on mobile devices.
a.on("click",function(e){e.preventDefault(),window.matchMedia("(min-width: 992px)").matches?(n.not(i(this).parents()).removeClass("_open-tablet-dropdown"),i(this).parents(".main-navigation__item").toggleClass("_open-tablet-dropdown")):i(this).parents(".main-navigation__item").toggleClass("_open-mobile-dropdown")}),// Add click event to second menu dropdown link on mobile devices.
r.on("click",function(e){e.preventDefault(),window.matchMedia("(min-width: 992px)").matches?(i(".main-navigation__sub-item").not(i(this).parents(".main-navigation__sub-item")).removeClass("_open-tablet-dropdown"),i(this).parents(".main-navigation__sub-item").toggleClass("_open-tablet-dropdown")):i(this).parents(".main-navigation__sub-item").toggleClass("_open-mobile-dropdown")});var d=!0;i(".js__main-navigation__toggle-btn").on("click",function(e){e.preventDefault(),d&&(d=!1,t.toggleClass("mobile-menu-opened")),i(".js__navigation__items-wrp").not(":animated").slideToggle(300,function(){d=!0})}),// detect if we cross 992px window width.
window.matchMedia("(min-width: 992px)").addListener(function(){e.find(".js__main-navigation__items-list").find("li").removeClass("_open-mobile-dropdown _open-tablet-dropdown"),t.removeClass("mobile-menu-opened"),window.matchMedia("(min-width: 992px)").matches?i(".js__navigation__items-wrp").show():i(".js__navigation__items-wrp").hide(),// Set timeout for third menu position to load the width
window.setTimeout(function(){c()},500)})}),// ====== class fo fixed main navigation bar   =======
jQuery(function(t){var i=t(".js__main-navigation");if(i.length){var a=i.offset().top;// function that calculates offsetTop-value.
// detect if we cross 992px window width.
window.matchMedia("(min-width: 992px)").addListener(function(){if(window.matchMedia("(min-width: 992px)").matches){var e=i.css("position");a=t("header").height()-("fixed"===e?0:i.outerHeight())}}),t(window).on("load scroll",function(){var e=t(window).scrollTop();a<e?t("body").addClass("main-navigation-fixed"):t("body").removeClass("main-navigation-fixed")})}}),jQuery(function(t){var e=t(".js__main-navigation__search-btn"),i=t(".js__main-navigation__search-box"),a=t(".js__main-navigation__search-box-overlay"),n=t(".js__header-top__language-menu-overlay"),s=t(".js__header-top__language-menu-btn"),o=t(".js__header-top__language-menu-box"),r=t(".js__header-top__language-menu-box-close-btn");e.on("click",function(e){e.preventDefault(),t(this).toggleClass("_search-close-btn"),i.toggleClass("_search-box-visible"),i.hasClass("_search-box-visible")&&i.find('input[type="search"]').focus(),a.toggleClass("_search-box-overlay-visible")}),a.on("click",function(){t(this).toggleClass("_search-box-overlay-visible"),e.toggleClass("_search-close-btn"),i.toggleClass("_search-box-visible")}),s.on("click",function(e){e.preventDefault(),o.addClass("_language-menu-box-visible"),n.toggleClass("_language-menu-box-overlay-visible")}),n.on("click",function(){t(this).toggleClass("_language-menu-box-overlay-visible"),o.removeClass("_language-menu-box-visible")}),r.on("click",function(){n.toggleClass("_language-menu-box-overlay-visible"),o.removeClass("_language-menu-box-visible")})}),(a=jQuery)(document).ready(function(){a(".js__img-slider").each(function(){var e=a(this).attr("data-autoplay"),i=new Swiper(a(this),{nextButton:".js__img-slider__btn-next",prevButton:".js__img-slider__btn-prev",pagination:".js__img-slider__pagination",paginationClickable:!0,preloadImages:!1,lazyLoading:!0,watchSlidesVisibility:!0,lazyLoadingInPrevNext:!0,speed:600,autoplay:e});// Makes it possible to skip between slider images if they have links, using the tab button
i.container.on("focus","a",function(e){
// Index of focused slide
var t=a(e.target).parents(".swiper-slide").index();// Reset scrollLeft set by browser on focus
i.container.scrollLeft(0),// IE fix
setTimeout(function(){i.container.scrollLeft(0)},0),// Slide to focused slide
i.slideTo(t)})})}),(
/* global jQuery */
n=jQuery)(document).ready(function(){
// initialize swiper when document ready
// http://idangero.us/swiper/api/
// Get json content from element LogoCarousel.html
var e=document.getElementsByClassName("js__aria-labels");if(e&&0<e.length){
// Use only first aria label object because they are all equal
var t=JSON.parse(e[0].innerHTML);n(".js__logo-carousel").each(function(){var i=n(this).swiper({nextButton:".js__logo-carousel__btn-next",prevButton:".js__logo-carousel__btn-prev",slidesPerView:5,preloadImages:!1,lazyLoading:!0,watchSlidesVisibility:!0,lazyLoadingInPrevNext:!0,slideVisibleClass:"is-visible",spaceBetween:20,autoplay:n(this).data("autoplay"),a11y:!0,prevSlideMessage:t.ariaLabel.prevSlideMessage,nextSlideMessage:t.ariaLabel.nextSlideMessage,firstSlideMessage:t.ariaLabel.firstSlideMessage,lastSlideMessage:t.ariaLabel.lastSlideMessage,paginationBulletMessage:t.ariaLabel.paginationBulletMessage,
// Responsive breakpoints
breakpoints:{
// when window width is <= 480px
480:{slidesPerView:1},
// when window width is <= 600px
600:{slidesPerView:2},
// when window width is <= 768px
768:{slidesPerView:3},
// when window width is <= 992px
992:{slidesPerView:4}}});// if the selected swipe is not visible when focused
// put it into view
n(i.slides).each(function(t,e){n(e).on("focusin",function(e){n(e.target).not(".is-visible")&&i.slideTo(t)})})})}}),(
/* global jQuery */
e=jQuery)(document).ready(function(){
// Parallax
// https://github.com/nk-o/jarallax
e("html").hasClass("IE")||(
// disabled in IE since scrolling looks jerky
e(".parallax-img").jarallax({type:"scroll",
// scroll, scale, opacity, scroll-opacity, scale-opacity
speed:.5,disableParallax:/iPad|iPhone|iPod|Edge/}),e(".parallax-resimg").each(function(){e(this).jarallax({type:"scroll",
// scroll, scale, opacity, scroll-opacity, scale-opacity
speed:.5,disableParallax:/iPad|iPhone|iPod|Edge/,
// disable Ios and Microsoft Edge
imgSrc:e(this).css("background-image").match(/\(([^)]+)\)/)[1].replace(/"/g,"")})}),e(".parallax-video").each(function(){e(this).jarallax({type:"scroll",
// scroll, scale, opacity, scroll-opacity, scale-opacity
speed:.5,disableParallax:/iPad|iPhone|iPod|Android/,
// disable Ios and Android
videoSrc:e(this).attr("data-video-url")})}))}),(
/* global jQuery */
i=jQuery)(document).ready(function(){// var $slider = $('.slider-container')
i(".js__hero-image").each(function(){var e=i(this),t=e.find(".hero-image__caption-p");t.length&&t.dotdotdot({watch:"window",height:55}),e.parents(".swiper-wrapper").length||e.addClass("_animated")})}),(
/* global Swiper,jQuery */
d=jQuery)(document).ready(function(){d(".js__slider-container__wrapper").each(function(){d(this).children().wrap('<div class="swiper-slide slider-container__slide js__slider-container__slide"></div>')}),d(".js__slider-container__container").each(function(){var e,t,i,a,n=d(this).attr("data-autoplay"),s=d(this).attr("data-loop"),o=parseInt(d(this).attr("data-slidesperview")),r=d(this).attr("data-effect"),l=d(this).attr("data-speed");a=4<=o?(e=1,t=2,i=3,4):2===o?(i=t=e=1,2):1===o?i=t=e=1:(e=1,i=t=2,3);var c=new Swiper(d(this),{containerModifierClass:"js__slider-container__container",wrapperClass:"js__slider-container__wrapper",slideClass:"js__slider-container__slide",nextButton:d(this).parent().find(".js__slider-container__btn-next"),prevButton:d(this).parent().find(".js__slider-container__btn-prev"),pagination:d(this).parent().find(".js__slider-container__pagination"),paginationClickable:!0,speed:parseInt(l),loop:s,autoplay:n,effect:r,watchSlidesVisibility:!0,spaceBetween:20,preloadImages:!1,lazyLoading:!0,lazyLoadingInPrevNext:!0,slidesPerView:o,breakpoints:{
// Responsive breakpoints
480:{slidesPerView:e},767:{slidesPerView:t},992:{slidesPerView:i},1024:{slidesPerView:a}},coverflow:{rotate:90,stretch:0,depth:200,modifier:1,slideShadows:!1},cube:{slideShadows:!1,shadow:!1},fade:{crossFade:!0},flip:{slideShadows:!1}});// Makes it possible to skip between slider images if they have links, using the tab button
c.container.on("focus","a",function(e){
// Index of focused slide
var t=d(e.target).parents(".slider-container__slide").index();// Reset scrollLeft set by browser on focus
c.container.scrollLeft(0),// IE fix
setTimeout(function(){c.container.scrollLeft(0)},0),// Slide to focused slide
c.slideTo(t)})})}),(
/* global jQuery */
t=jQuery)(document).ready(function(){t(".js__img-text-link").dotdotdot({height:60})}),(
/* global jQuery */
r=jQuery)(document).ready(function(){r(".carousel").each(function(){var i=r(this),o=i.find(".carousel-indicators li"),e=i.find(".carousel-control"),t=i.find(".carousel__btn");// Set focus on active quick link item
function a(){o.each(function(){r(this).hasClass("active")?r(this).focus():r(this).blur()})}// Detect carousel focus elements and pause when one is focused
// Set tabindex on quicklinks on init
o.attr("tabindex",0),// add handler to quickLinks to allow changing the slide via enter key
i.on("keydown",o,function(e){13===e.which&&r(e.target).trigger("click")}),// Enable swipe for each carousel element
i.swipe({swipe:function(e,t){"left"===t&&i.carousel("next"),"right"===t&&i.carousel("prev")},allowPageScroll:"vertical"}),// Pause carousel if it has focus
!1!==i.data("interval")&&o.add(e).add(t).each(function(){r(this).focus(function(){i.carousel("pause")}),r(this).blur(function(){i.carousel("cycle")})}),// After carousel slide update aria-selected and tab index
i.on("slid.bs.carousel",function(e){// Update aria-label on prev and next button depending on active slide
var t,i,a,n,s;o.each(function(){var e=r(this);e.hasClass("active")?e.attr("aria-selected","true"):e.attr("aria-selected","false")}),t=r(e.relatedTarget),n=r(".carousel-control.left"),s=r(".carousel-control.right"),i=t.next().length?t.next().attr("data-controllabel"):t.parent().children(".item").first().attr("data-controllabel"),a=t.prev().length?t.prev().attr("data-controllabel"):t.parent().children(".item").last().attr("data-controllabel"),n.attr("aria-label",a),s.attr("aria-label",i)}),// Extend keydown function from carousel.js
// Update quick link focus on keyboard use
r.fn.carousel.Constructor.prototype.keydown=function(e){if(!/input|textarea/i.test(e.target.tagName)){switch(e.which){case 37:this.prev(),a();break;case 39:this.next(),a();break;default:return}e.preventDefault()}}})}),(
/* global jQuery */
s=jQuery)(document).ready(function(){
// initialize swiper when document ready
// http://idangero.us/swiper/api/
s(".js__news-carousel").each(function(){s(this).swiper({nextButton:s(this).parent().find(".js__news-carousel__btn-next"),prevButton:s(this).parent().find(".js__news-carousel__btn-prev"),pagination:".js__news-carousel__pagination",paginationClickable:!0,slidesPerView:4,preloadImages:!1,spaceBetween:30,
// Responsive breakpoints
breakpoints:{
// when window width is <= 480px
500:{slidesPerView:1},
// when window width is <= 768px
767:{slidesPerView:2},
// when window width is <= 992px
991:{slidesPerView:3},
// when window width is <= 1199px
1199:{slidesPerView:4}}})})}),
/* global $ */
// news Timeline
$(".js__news-timeline__item").on("click",function(e){$(this).hasClass("collapsed")&&(e.preventDefault(),$(this).removeClass("collapsed"),$(this).closest(".js__news-timeline__item-wrp").find(".js__news-timeline__date").addClass("open"))}),// news Cards
$(".js__news-cards__dotdotdot").dotdotdot({watch:"window"}),// news Simple list
$(".js__news-simple-list__dotdotdot").dotdotdot({watch:"window"});
/* global forceEnableSuggest, Awesomplete, touchSupport, jQuery */
// container for Search suggestion data
var o,l={};// document load event
(o=jQuery)(document).ready(function(){
// Make it possible to enable suggest even on devices with touch support
// by setting var forceEnableSuggest = true;
var e="undefined"!=typeof forceEnableSuggest&&forceEnableSuggest;(!touchSupport||e)&&992<=o(window).width()&&
// ============================
// Search Suggest DATA-API
// ============================
o('[data-search="searchSuggest"]').each(function(a,e){l["searchItem"+a]=new Awesomplete(e,{list:[],maxItems:20,minChars:2,autoFirst:!0});var n=!1;o(this).on("keyup.search.suggest",function(e){var t=e.keyCode;if(13!==t&&27!==t&&38!==t&&40!==t){var i=o(this);void 0!==o(this).closest("form").data("suggest")&&(n||(n=!0,o.ajax({url:i.closest("form").data("suggest"),dataType:"json",data:{termLowercase:i.val().toLowerCase(),termOriginal:i.val(),L:i.closest("form").find('input[name="L"]').val()},success:function(e){n=!1;var t=[];o.each(e,function(e){t.push(e)}),l["searchItem"+a]._list=t,l["searchItem"+a].evaluate()}})))}}),o(this).on("awesomplete-selectcomplete",function(){o(this).closest("form").submit()})})});
/*! npm.im/object-fit-images 3.2.3 */
var c="bfred-it:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,_="object-fit"in g.style,h="object-position"in g.style,p="background-size"in g.style,f="string"==typeof g.currentSrc,m=g.getAttribute,w=g.setAttribute,v=!1;function b(e,t,i){
// Default: fill width, no height
var a="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+(t||1)+"' height='"+(i||0)+"'%3E%3C/svg%3E";// Only set placeholder if it's different
m.call(e,"src")!==a&&w.call(e,"src",a)}function y(e,t){
// naturalWidth is only available when the image headers are loaded,
// this loop will poll it every 100ms.
e.naturalWidth?t(e):setTimeout(y,100,e,t)}function j(t){var i,a,e=function(e){for(var t,i=getComputedStyle(e).fontFamily,a={};null!==(t=u.exec(i));)a[t[1]]=t[2];return a}(t),n=t[c];// default value
// Avoid running where unnecessary, unless OFI had already done its deed
if(e["object-fit"]=e["object-fit"]||"fill",!n.img){
// fill is the default behavior so no action is necessary
if("fill"===e["object-fit"])return;// Where object-fit is supported and object-position isn't (Safari < 10)
if(!n.skipTest&&// unless user wants to apply regardless of browser support
_&&// if browser already supports object-fit
!e["object-position"])return}// keep a clone in memory while resetting the original to a blank
if(!n.img){n.img=new Image(t.width,t.height),n.img.srcset=m.call(t,"data-ofi-srcset")||t.srcset,n.img.src=m.call(t,"data-ofi-src")||t.src,// preserve for any future cloneNode calls
// https://github.com/bfred-it/object-fit-images/issues/53
w.call(t,"data-ofi-src",t.src),t.srcset&&w.call(t,"data-ofi-srcset",t.srcset),b(t,t.naturalWidth||t.width,t.naturalHeight||t.height),// remove srcset because it overrides src
t.srcset&&(t.srcset="");try{i=t,a={get:function(e){return i[c].img[e||"src"]},set:function(e,t){return i[c].img[t||"src"]=e,w.call(i,"data-ofi-"+t,e),// preserve for any future cloneNode
j(i),e}},Object.defineProperty(i,"src",a),Object.defineProperty(i,"currentSrc",{get:function(){return a.get("currentSrc")}}),Object.defineProperty(i,"srcset",{get:function(){return a.get("srcset")},set:function(e){return a.set(e,"srcset")}})}catch(e){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}!function(e){if(e.srcset&&!f&&window.picturefill){var t=window.picturefill._;// parse srcset with picturefill where currentSrc isn't available
e[t.ns]&&e[t.ns].evaled||
// force synchronous srcset parsing
t.fillImg(e,{reselect:!0}),e[t.ns].curSrc||(
// force picturefill to parse srcset
e[t.ns].supported=!1,t.fillImg(e,{reselect:!0})),// retrieve parsed currentSrc, if any
e.currentSrc=e[t.ns].curSrc||e.src}}(n.img),t.style.backgroundImage='url("'+(n.img.currentSrc||n.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=e["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(e["object-fit"])?y(n.img,function(){n.img.naturalWidth>t.width||n.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=e["object-fit"].replace("none","auto").replace("fill","100% 100%"),y(n.img,function(e){b(t,e.naturalWidth,e.naturalHeight)})}function x(e,t){var i=!v&&!e;if(t=t||{},e=e||"img",h&&!t.skipTest||!p)return!1;// use imgs as a selector or just select all images
"img"===e?e=document.getElementsByTagName("img"):"string"==typeof e?e=document.querySelectorAll(e):"length"in e||(e=[e]);// apply fix to all
for(var a=0;a<e.length;a++)e[a][c]=e[a][c]||{skipTest:t.skipTest},j(e[a]);i&&(document.body.addEventListener("load",function(e){"IMG"===e.target.tagName&&x(e.target,{skipTest:t.skipTest})},!0),v=!0,e="img"),// if requested, watch media queries for object-fit change
t.watchMQ&&window.addEventListener("resize",x.bind(null,e,{skipTest:t.skipTest}))}x.supportsObjectFit=_,x.supportsObjectPosition=h,function(){function i(e,t){return e[c]&&e[c].img&&("src"===t||"srcset"===t)?e[c].img:e}h||(HTMLImageElement.prototype.getAttribute=function(e){return m.call(i(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,t){return w.call(i(this,e),e,String(t))})}();var C=x;
// ########## general.js ###########
// ########## general.js ###########
!function(e){e(document).ready(function(){
// Image Lightbox
// initialize simpleLightbox when document ready
// https://github.com/andreknieriem/simplelightbox
e("div[class*='lightbox__wrp-']").each(function(){e(this).find(".lightbox").simpleLightbox({captionType:"data",captionsData:"caption",captionPosition:"outside",heightRatio:.6})})});// Apply dotdotdot.js jquery function on elements with ".js__dotdotdot" class.
var t=e(".js__dotdotdot");t.length&&t.each(function(){e(this).dotdotdot({watch:"window"})}),// call object-fit-images plugin
C()}(jQuery)}();

//# sourceMappingURL=main.js.map