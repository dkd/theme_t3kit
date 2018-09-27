!function(){"use strict";function _t(e){return(_t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var a="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(e,t){return e(t={exports:{}},t.exports),t.exports}e(function(e){
/**
     * Swiper 3.4.2
     * Most modern mobile touch slider and framework with hardware accelerated transitions
     * 
     * http://www.idangero.us/swiper/
     * 
     * Copyright 2017, Vladimir Kharlampidi
     * The iDangero.us
     * http://www.idangero.us/
     * 
     * Licensed under MIT
     * 
     * Released on: March 10, 2017
     */
!function(){var H,e,t,n,a,i,r,o,s,l=function s(e,l){if(!(this instanceof s))return new s(e,l);var t={direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,
// autoplay
autoplay:!1,autoplayDisableOnInteraction:!0,autoplayStopOnLast:!1,
// To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
iOSEdgeSwipeDetection:!1,iOSEdgeSwipeThreshold:20,
// Free mode
freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,
// Autoheight
autoHeight:!1,
// Set wrapper width
setWrapperSize:!1,
// Virtual Translate
virtualTranslate:!1,
// Effects
effect:"slide",
// 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},flip:{slideShadows:!0,limitRotation:!0},cube:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94},fade:{crossFade:!1},
// Parallax
parallax:!1,
// Zoom
zoom:!1,zoomMax:3,zoomMin:1,zoomToggle:!0,
// Scrollbar
scrollbar:null,scrollbarHide:!0,scrollbarDraggable:!1,scrollbarSnapOnRelease:!1,
// Keyboard Mousewheel
keyboardControl:!1,mousewheelControl:!1,mousewheelReleaseOnEdges:!1,mousewheelInvert:!1,mousewheelForceToAxis:!1,mousewheelSensitivity:1,mousewheelEventsTarged:"container",
// Hash Navigation
hashnav:!1,hashnavWatchState:!1,
// History
history:!1,
// Commong Nav State
replaceState:!1,
// Breakpoints
breakpoints:void 0,
// Slides grid
spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,
// in px
slidesOffsetAfter:0,
// in px
// Round length
roundLengths:!1,
// Touches
touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,onlyExternal:!1,threshold:0,touchMoveStopPropagation:!0,touchReleaseOnEdges:!1,
// Unique Navigation Elements
uniqueNavElements:!0,
// Pagination
pagination:null,paginationElement:"span",paginationClickable:!1,paginationHide:!1,paginationBulletRender:null,paginationProgressRender:null,paginationFractionRender:null,paginationCustomRender:null,paginationType:"bullets",
// 'bullets' or 'progress' or 'fraction' or 'custom'
// Resistance
resistance:!0,resistanceRatio:.85,
// Next/prev buttons
nextButton:null,prevButton:null,
// Progress
watchSlidesProgress:!1,watchSlidesVisibility:!1,
// Cursor
grabCursor:!1,
// Clicks
preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,
// Lazy Loading
lazyLoading:!1,lazyLoadingInPrevNext:!1,lazyLoadingInPrevNextAmount:1,lazyLoadingOnTransitionStart:!1,
// Images
preloadImages:!0,updateOnImagesReady:!0,
// loop
loop:!1,loopAdditionalSlides:0,loopedSlides:null,
// Control
control:void 0,controlInverse:!1,controlBy:"slide",
//or 'container'
normalizeSlideIndex:!0,
// Swiping/no swiping
allowSwipeToPrev:!0,allowSwipeToNext:!0,swipeHandler:null,
//'.swipe-handler',
noSwiping:!0,noSwipingClass:"swiper-no-swiping",
// Passive Listeners
passiveListeners:!0,
// NS
containerModifierClass:"swiper-container-",
// NEW
slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",buttonDisabledClass:"swiper-button-disabled",paginationCurrentClass:"swiper-pagination-current",paginationTotalClass:"swiper-pagination-total",paginationHiddenClass:"swiper-pagination-hidden",paginationProgressbarClass:"swiper-pagination-progressbar",paginationClickableClass:"swiper-pagination-clickable",
// NEW
paginationModifierClass:"swiper-pagination-",
// NEW
lazyLoadingClass:"swiper-lazy",lazyStatusLoadingClass:"swiper-lazy-loading",lazyStatusLoadedClass:"swiper-lazy-loaded",lazyPreloaderClass:"swiper-lazy-preloader",notificationClass:"swiper-notification",preloaderClass:"preloader",zoomContainerClass:"swiper-zoom-container",
// Observer
observer:!1,observeParents:!1,
// Accessibility
a11y:!1,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",
// Callbacks
runCallbacksOnInit:!0
/*
          Callbacks:
          onInit: function (swiper)
          onDestroy: function (swiper)
          onBeforeResize: function (swiper)
          onAfterResize: function (swiper)
          onClick: function (swiper, e)
          onTap: function (swiper, e)
          onDoubleTap: function (swiper, e)
          onSliderMove: function (swiper, e)
          onSlideChangeStart: function (swiper)
          onSlideChangeEnd: function (swiper)
          onTransitionStart: function (swiper)
          onTransitionEnd: function (swiper)
          onImagesReady: function (swiper)
          onProgress: function (swiper, progress)
          onTouchStart: function (swiper, e)
          onTouchMove: function (swiper, e)
          onTouchMoveOpposite: function (swiper, e)
          onTouchEnd: function (swiper, e)
          onReachBeginning: function (swiper)
          onReachEnd: function (swiper)
          onSetTransition: function (swiper, duration)
          onSetTranslate: function (swiper, translate)
          onAutoplayStart: function (swiper)
          onAutoplayStop: function (swiper),
          onLazyImageLoad: function (swiper, slide, image)
          onLazyImageReady: function (swiper, slide, image)
          onKeyPress: function (swiper, keyCode)
          */},n=l&&l.virtualTranslate;l=l||{};var a={};for(var i in l)if("object"!==_t(l[i])||null===l[i]||(l[i].nodeType||l[i]===window||l[i]===document||"undefined"!=typeof Dom7&&l[i]instanceof Dom7||"undefined"!=typeof jQuery&&l[i]instanceof jQuery))a[i]=l[i];else for(var r in a[i]={},l[i])a[i][r]=l[i][r];for(var o in t)if(void 0===l[o])l[o]=t[o];else if("object"===_t(l[o]))for(var u in t[o])void 0===l[o][u]&&(l[o][u]=t[o][u]);// Swiper
var x=this;// Params
if(x.params=l,x.originalParams=a,// Classname
x.classNames=[],
/*=========================
          Dom Library and plugins
          ===========================*/
void 0!==H&&"undefined"!=typeof Dom7&&(H=Dom7),(void 0!==H||(H="undefined"==typeof Dom7?window.Dom7||window.Zepto||window.jQuery:Dom7))&&(// Export it to Swiper instance
x.$=H,
/*=========================
          Breakpoints
          ===========================*/
x.currentBreakpoint=void 0,x.getActiveBreakpoint=function(){
//Get breakpoint for window width
if(!x.params.breakpoints)return!1;var e,t=!1,n=[];for(e in x.params.breakpoints)x.params.breakpoints.hasOwnProperty(e)&&n.push(e);n.sort(function(e,t){return parseInt(e,10)>parseInt(t,10)});for(var a=0;a<n.length;a++)(e=n[a])>=window.innerWidth&&!t&&(t=e);return t||"max"},x.setBreakpoint=function(){
//Set breakpoint for window width and update parameters
var e=x.getActiveBreakpoint();if(e&&x.currentBreakpoint!==e){var t=e in x.params.breakpoints?x.params.breakpoints[e]:x.originalParams,n=x.params.loop&&t.slidesPerView!==x.params.slidesPerView;for(var a in t)x.params[a]=t[a];x.currentBreakpoint=e,n&&x.destroyLoop&&x.reLoop(!0)}},// Set breakpoint on load
x.params.breakpoints&&x.setBreakpoint()
/*=========================
          Preparation - Define Container, Wrapper and Pagination
          ===========================*/,x.container=H(e),0!==x.container.length)){if(1<x.container.length){var p=[];return x.container.each(function(){p.push(new s(this,l))}),p}// Save instance in container HTML Element and in data
(x.container[0].swiper=x).container.data("swiper",x),x.classNames.push(x.params.containerModifierClass+x.params.direction),x.params.freeMode&&x.classNames.push(x.params.containerModifierClass+"free-mode"),x.support.flexbox||(x.classNames.push(x.params.containerModifierClass+"no-flexbox"),x.params.slidesPerColumn=1),x.params.autoHeight&&x.classNames.push(x.params.containerModifierClass+"autoheight"),// Enable slides progress when required
(x.params.parallax||x.params.watchSlidesVisibility)&&(x.params.watchSlidesProgress=!0),// Max resistance when touchReleaseOnEdges
x.params.touchReleaseOnEdges&&(x.params.resistanceRatio=0),// Coverflow / 3D
0<=["cube","coverflow","flip"].indexOf(x.params.effect)&&(x.support.transforms3d?(x.params.watchSlidesProgress=!0,x.classNames.push(x.params.containerModifierClass+"3d")):x.params.effect="slide"),"slide"!==x.params.effect&&x.classNames.push(x.params.containerModifierClass+x.params.effect),"cube"===x.params.effect&&(x.params.resistanceRatio=0,x.params.slidesPerView=1,x.params.slidesPerColumn=1,x.params.slidesPerGroup=1,x.params.centeredSlides=!1,x.params.spaceBetween=0,x.params.virtualTranslate=!0),"fade"!==x.params.effect&&"flip"!==x.params.effect||(x.params.slidesPerView=1,x.params.slidesPerColumn=1,x.params.slidesPerGroup=1,x.params.watchSlidesProgress=!0,void(x.params.spaceBetween=0)===n&&(x.params.virtualTranslate=!0)),// Grab Cursor
x.params.grabCursor&&x.support.touch&&(x.params.grabCursor=!1),// Wrapper
x.wrapper=x.container.children("."+x.params.wrapperClass),// Pagination
x.params.pagination&&(x.paginationContainer=H(x.params.pagination),x.params.uniqueNavElements&&"string"==typeof x.params.pagination&&1<x.paginationContainer.length&&1===x.container.find(x.params.pagination).length&&(x.paginationContainer=x.container.find(x.params.pagination)),"bullets"===x.params.paginationType&&x.params.paginationClickable?x.paginationContainer.addClass(x.params.paginationModifierClass+"clickable"):x.params.paginationClickable=!1,x.paginationContainer.addClass(x.params.paginationModifierClass+x.params.paginationType)),// Next/Prev Buttons
(x.params.nextButton||x.params.prevButton)&&(x.params.nextButton&&(x.nextButton=H(x.params.nextButton),x.params.uniqueNavElements&&"string"==typeof x.params.nextButton&&1<x.nextButton.length&&1===x.container.find(x.params.nextButton).length&&(x.nextButton=x.container.find(x.params.nextButton))),x.params.prevButton&&(x.prevButton=H(x.params.prevButton),x.params.uniqueNavElements&&"string"==typeof x.params.prevButton&&1<x.prevButton.length&&1===x.container.find(x.params.prevButton).length&&(x.prevButton=x.container.find(x.params.prevButton)))),// Is Horizontal
x.isHorizontal=function(){return"horizontal"===x.params.direction},// s.isH = isH;
// RTL
x.rtl=x.isHorizontal()&&("rtl"===x.container[0].dir.toLowerCase()||"rtl"===x.container.css("direction")),x.rtl&&x.classNames.push(x.params.containerModifierClass+"rtl"),// Wrong RTL support
x.rtl&&(x.wrongRTL="-webkit-box"===x.wrapper.css("display")),// Columns
1<x.params.slidesPerColumn&&x.classNames.push(x.params.containerModifierClass+"multirow"),// Check for Android
x.device.android&&x.classNames.push(x.params.containerModifierClass+"android"),// Add classes
x.container.addClass(x.classNames.join(" ")),// Translate
x.translate=0,// Progress
x.progress=0,// Velocity
x.velocity=0,
/*=========================
          Locks, unlocks
          ===========================*/
x.lockSwipeToNext=function(){(x.params.allowSwipeToNext=!1)===x.params.allowSwipeToPrev&&x.params.grabCursor&&x.unsetGrabCursor()},x.lockSwipeToPrev=function(){(x.params.allowSwipeToPrev=!1)===x.params.allowSwipeToNext&&x.params.grabCursor&&x.unsetGrabCursor()},x.lockSwipes=function(){x.params.allowSwipeToNext=x.params.allowSwipeToPrev=!1,x.params.grabCursor&&x.unsetGrabCursor()},x.unlockSwipeToNext=function(){(x.params.allowSwipeToNext=!0)===x.params.allowSwipeToPrev&&x.params.grabCursor&&x.setGrabCursor()},x.unlockSwipeToPrev=function(){(x.params.allowSwipeToPrev=!0)===x.params.allowSwipeToNext&&x.params.grabCursor&&x.setGrabCursor()},x.unlockSwipes=function(){x.params.allowSwipeToNext=x.params.allowSwipeToPrev=!0,x.params.grabCursor&&x.setGrabCursor()},
/*=========================
          Set grab cursor
          ===========================*/
x.setGrabCursor=function(e){x.container[0].style.cursor="move",x.container[0].style.cursor=e?"-webkit-grabbing":"-webkit-grab",x.container[0].style.cursor=e?"-moz-grabbin":"-moz-grab",x.container[0].style.cursor=e?"grabbing":"grab"},x.unsetGrabCursor=function(){x.container[0].style.cursor=""},x.params.grabCursor&&x.setGrabCursor()
/*=========================
          Update on Images Ready
          ===========================*/,x.imagesToLoad=[],x.imagesLoaded=0,x.loadImage=function(e,t,n,a,i,r){var o;function s(){r&&r()}e.complete&&i?
//image already loaded...
s():t?((o=new window.Image).onload=s,o.onerror=s,a&&(o.sizes=a),n&&(o.srcset=n),t&&(o.src=t)):s()},x.preloadImages=function(){function e(){null!=x&&x&&(void 0!==x.imagesLoaded&&x.imagesLoaded++,x.imagesLoaded===x.imagesToLoad.length&&(x.params.updateOnImagesReady&&x.update(),x.emit("onImagesReady",x)))}x.imagesToLoad=x.container.find("img");for(var t=0;t<x.imagesToLoad.length;t++)x.loadImage(x.imagesToLoad[t],x.imagesToLoad[t].currentSrc||x.imagesToLoad[t].getAttribute("src"),x.imagesToLoad[t].srcset||x.imagesToLoad[t].getAttribute("srcset"),x.imagesToLoad[t].sizes||x.imagesToLoad[t].getAttribute("sizes"),!0,e)},
/*=========================
          Autoplay
          ===========================*/
x.autoplayTimeoutId=void 0,x.autoplaying=!1,x.autoplayPaused=!1,x.startAutoplay=function(){return void 0===x.autoplayTimeoutId&&(!!x.params.autoplay&&(!x.autoplaying&&(x.autoplaying=!0,x.emit("onAutoplayStart",x),void w())))},x.stopAutoplay=function(e){x.autoplayTimeoutId&&(x.autoplayTimeoutId&&clearTimeout(x.autoplayTimeoutId),x.autoplaying=!1,x.autoplayTimeoutId=void 0,x.emit("onAutoplayStop",x))},x.pauseAutoplay=function(e){x.autoplayPaused||(x.autoplayTimeoutId&&clearTimeout(x.autoplayTimeoutId),x.autoplayPaused=!0,0===e?(x.autoplayPaused=!1,w()):x.wrapper.transitionEnd(function(){x&&(x.autoplayPaused=!1,x.autoplaying?w():x.stopAutoplay())}))},
/*=========================
          Min/Max Translate
          ===========================*/
x.minTranslate=function(){return-x.snapGrid[0]},x.maxTranslate=function(){return-x.snapGrid[x.snapGrid.length-1]},
/*=========================
          Slider/slides sizes
          ===========================*/
x.updateAutoHeight=function(){var e,t=[],n=0;// Find slides currently in view
if("auto"!==x.params.slidesPerView&&1<x.params.slidesPerView)for(e=0;e<Math.ceil(x.params.slidesPerView);e++){var a=x.activeIndex+e;if(a>x.slides.length)break;t.push(x.slides.eq(a)[0])}else t.push(x.slides.eq(x.activeIndex)[0]);// Find new height from heighest slide in view
for(e=0;e<t.length;e++)if(void 0!==t[e]){var i=t[e].offsetHeight;n=n<i?i:n}// Update Height
n&&x.wrapper.css("height",n+"px")},x.updateContainerSize=function(){var e,t;e=void 0!==x.params.width?x.params.width:x.container[0].clientWidth,t=void 0!==x.params.height?x.params.height:x.container[0].clientHeight,0===e&&x.isHorizontal()||0===t&&!x.isHorizontal()||(//Subtract paddings
e=e-parseInt(x.container.css("padding-left"),10)-parseInt(x.container.css("padding-right"),10),t=t-parseInt(x.container.css("padding-top"),10)-parseInt(x.container.css("padding-bottom"),10),// Store values
x.width=e,x.height=t,x.size=x.isHorizontal()?x.width:x.height)},x.updateSlidesSize=function(){x.slides=x.wrapper.children("."+x.params.slideClass),x.snapGrid=[],x.slidesGrid=[],x.slidesSizesGrid=[];var e,t=x.params.spaceBetween,n=-x.params.slidesOffsetBefore,a=0,i=0;if(void 0!==x.size){var r,o;"string"==typeof t&&0<=t.indexOf("%")&&(t=parseFloat(t.replace("%",""))/100*x.size),x.virtualSize=-t,// reset margins
x.rtl?x.slides.css({marginLeft:"",marginTop:""}):x.slides.css({marginRight:"",marginBottom:""}),1<x.params.slidesPerColumn&&(r=Math.floor(x.slides.length/x.params.slidesPerColumn)===x.slides.length/x.params.slidesPerColumn?x.slides.length:Math.ceil(x.slides.length/x.params.slidesPerColumn)*x.params.slidesPerColumn,"auto"!==x.params.slidesPerView&&"row"===x.params.slidesPerColumnFill&&(r=Math.max(r,x.params.slidesPerView*x.params.slidesPerColumn)));var s,l=x.params.slidesPerColumn,u=r/l,p=u-(x.params.slidesPerColumn*u-x.slides.length);for(e=0;e<x.slides.length;e++){o=0;var d,c,f,h=x.slides.eq(e);if(1<x.params.slidesPerColumn)"column"===x.params.slidesPerColumnFill?(f=e-(c=Math.floor(e/l))*l,(p<c||c===p&&f===l-1)&&++f>=l&&(f=0,c++),d=c+f*r/l,h.css({"-webkit-box-ordinal-group":d,"-moz-box-ordinal-group":d,"-ms-flex-order":d,"-webkit-order":d,order:d})):c=e-(f=Math.floor(e/u))*u,h.css("margin-"+(x.isHorizontal()?"top":"left"),0!==f&&x.params.spaceBetween&&x.params.spaceBetween+"px").attr("data-swiper-column",c).attr("data-swiper-row",f);"none"!==h.css("display")&&("auto"===x.params.slidesPerView?(o=x.isHorizontal()?h.outerWidth(!0):h.outerHeight(!0),x.params.roundLengths&&(o=y(o))):(o=(x.size-(x.params.slidesPerView-1)*t)/x.params.slidesPerView,x.params.roundLengths&&(o=y(o)),x.isHorizontal()?x.slides[e].style.width=o+"px":x.slides[e].style.height=o+"px"),x.slides[e].swiperSlideSize=o,x.slidesSizesGrid.push(o),x.params.centeredSlides?(n=n+o/2+a/2+t,0===a&&0!==e&&(n=n-x.size/2-t),0===e&&(n=n-x.size/2-t),Math.abs(n)<.001&&(n=0),i%x.params.slidesPerGroup==0&&x.snapGrid.push(n),x.slidesGrid.push(n)):(i%x.params.slidesPerGroup==0&&x.snapGrid.push(n),x.slidesGrid.push(n),n=n+o+t),x.virtualSize+=o+t,a=o,i++)}if(x.virtualSize=Math.max(x.virtualSize,x.size)+x.params.slidesOffsetAfter,x.rtl&&x.wrongRTL&&("slide"===x.params.effect||"coverflow"===x.params.effect)&&x.wrapper.css({width:x.virtualSize+x.params.spaceBetween+"px"}),x.support.flexbox&&!x.params.setWrapperSize||(x.isHorizontal()?x.wrapper.css({width:x.virtualSize+x.params.spaceBetween+"px"}):x.wrapper.css({height:x.virtualSize+x.params.spaceBetween+"px"})),1<x.params.slidesPerColumn&&(x.virtualSize=(o+x.params.spaceBetween)*r,x.virtualSize=Math.ceil(x.virtualSize/x.params.slidesPerColumn)-x.params.spaceBetween,x.isHorizontal()?x.wrapper.css({width:x.virtualSize+x.params.spaceBetween+"px"}):x.wrapper.css({height:x.virtualSize+x.params.spaceBetween+"px"}),x.params.centeredSlides)){for(s=[],e=0;e<x.snapGrid.length;e++)x.snapGrid[e]<x.virtualSize+x.snapGrid[0]&&s.push(x.snapGrid[e]);x.snapGrid=s}// Remove last grid elements depending on width
if(!x.params.centeredSlides){for(s=[],e=0;e<x.snapGrid.length;e++)x.snapGrid[e]<=x.virtualSize-x.size&&s.push(x.snapGrid[e]);x.snapGrid=s,1<Math.floor(x.virtualSize-x.size)-Math.floor(x.snapGrid[x.snapGrid.length-1])&&x.snapGrid.push(x.virtualSize-x.size)}0===x.snapGrid.length&&(x.snapGrid=[0]),0!==x.params.spaceBetween&&(x.isHorizontal()?x.rtl?x.slides.css({marginLeft:t+"px"}):x.slides.css({marginRight:t+"px"}):x.slides.css({marginBottom:t+"px"})),x.params.watchSlidesProgress&&x.updateSlidesOffset()}},x.updateSlidesOffset=function(){for(var e=0;e<x.slides.length;e++)x.slides[e].swiperSlideOffset=x.isHorizontal()?x.slides[e].offsetLeft:x.slides[e].offsetTop},
/*=========================
          Dynamic Slides Per View
          ===========================*/
x.currentSlidesPerView=function(){var e,t,n=1;if(x.params.centeredSlides){var a,i=x.slides[x.activeIndex].swiperSlideSize;for(e=x.activeIndex+1;e<x.slides.length;e++)x.slides[e]&&!a&&(n++,(i+=x.slides[e].swiperSlideSize)>x.size&&(a=!0));for(t=x.activeIndex-1;0<=t;t--)x.slides[t]&&!a&&(n++,(i+=x.slides[t].swiperSlideSize)>x.size&&(a=!0))}else for(e=x.activeIndex+1;e<x.slides.length;e++)x.slidesGrid[e]-x.slidesGrid[x.activeIndex]<x.size&&n++;return n},
/*=========================
          Slider/slides progress
          ===========================*/
x.updateSlidesProgress=function(e){if(void 0===e&&(e=x.translate||0),0!==x.slides.length){void 0===x.slides[0].swiperSlideOffset&&x.updateSlidesOffset();var t=-e;x.rtl&&(t=e),// Visible Slides
x.slides.removeClass(x.params.slideVisibleClass);for(var n=0;n<x.slides.length;n++){var a=x.slides[n],i=(t+(x.params.centeredSlides?x.minTranslate():0)-a.swiperSlideOffset)/(a.swiperSlideSize+x.params.spaceBetween);if(x.params.watchSlidesVisibility){var r=-(t-a.swiperSlideOffset),o=r+x.slidesSizesGrid[n];(0<=r&&r<x.size||0<o&&o<=x.size||r<=0&&o>=x.size)&&x.slides.eq(n).addClass(x.params.slideVisibleClass)}a.progress=x.rtl?-i:i}}},x.updateProgress=function(e){void 0===e&&(e=x.translate||0);var t=x.maxTranslate()-x.minTranslate(),n=x.isBeginning,a=x.isEnd;0===t?(x.progress=0,x.isBeginning=x.isEnd=!0):(x.progress=(e-x.minTranslate())/t,x.isBeginning=x.progress<=0,x.isEnd=1<=x.progress),x.isBeginning&&!n&&x.emit("onReachBeginning",x),x.isEnd&&!a&&x.emit("onReachEnd",x),x.params.watchSlidesProgress&&x.updateSlidesProgress(e),x.emit("onProgress",x,x.progress)},x.updateActiveIndex=function(){var e,t,n,a=x.rtl?x.translate:-x.translate;for(t=0;t<x.slidesGrid.length;t++)void 0!==x.slidesGrid[t+1]?a>=x.slidesGrid[t]&&a<x.slidesGrid[t+1]-(x.slidesGrid[t+1]-x.slidesGrid[t])/2?e=t:a>=x.slidesGrid[t]&&a<x.slidesGrid[t+1]&&(e=t+1):a>=x.slidesGrid[t]&&(e=t);// Normalize slideIndex
x.params.normalizeSlideIndex&&(e<0||void 0===e)&&(e=0),(// for (i = 0; i < s.slidesGrid.length; i++) {
// if (- translate >= s.slidesGrid[i]) {
// newActiveIndex = i;
// }
// }
n=Math.floor(e/x.params.slidesPerGroup))>=x.snapGrid.length&&(n=x.snapGrid.length-1),e!==x.activeIndex&&(x.snapIndex=n,x.previousIndex=x.activeIndex,x.activeIndex=e,x.updateClasses(),x.updateRealIndex())},x.updateRealIndex=function(){x.realIndex=parseInt(x.slides.eq(x.activeIndex).attr("data-swiper-slide-index")||x.activeIndex,10)},
/*=========================
          Classes
          ===========================*/
x.updateClasses=function(){x.slides.removeClass(x.params.slideActiveClass+" "+x.params.slideNextClass+" "+x.params.slidePrevClass+" "+x.params.slideDuplicateActiveClass+" "+x.params.slideDuplicateNextClass+" "+x.params.slideDuplicatePrevClass);var e=x.slides.eq(x.activeIndex);// Active classes
e.addClass(x.params.slideActiveClass),l.loop&&(
// Duplicate to all looped slides
e.hasClass(x.params.slideDuplicateClass)?x.wrapper.children("."+x.params.slideClass+":not(."+x.params.slideDuplicateClass+')[data-swiper-slide-index="'+x.realIndex+'"]').addClass(x.params.slideDuplicateActiveClass):x.wrapper.children("."+x.params.slideClass+"."+x.params.slideDuplicateClass+'[data-swiper-slide-index="'+x.realIndex+'"]').addClass(x.params.slideDuplicateActiveClass));// Next Slide
var t=e.next("."+x.params.slideClass).addClass(x.params.slideNextClass);x.params.loop&&0===t.length&&(t=x.slides.eq(0)).addClass(x.params.slideNextClass);// Prev Slide
var n=e.prev("."+x.params.slideClass).addClass(x.params.slidePrevClass);// Pagination
if(x.params.loop&&0===n.length&&(n=x.slides.eq(-1)).addClass(x.params.slidePrevClass),l.loop&&(
// Duplicate to all looped slides
t.hasClass(x.params.slideDuplicateClass)?x.wrapper.children("."+x.params.slideClass+":not(."+x.params.slideDuplicateClass+')[data-swiper-slide-index="'+t.attr("data-swiper-slide-index")+'"]').addClass(x.params.slideDuplicateNextClass):x.wrapper.children("."+x.params.slideClass+"."+x.params.slideDuplicateClass+'[data-swiper-slide-index="'+t.attr("data-swiper-slide-index")+'"]').addClass(x.params.slideDuplicateNextClass),n.hasClass(x.params.slideDuplicateClass)?x.wrapper.children("."+x.params.slideClass+":not(."+x.params.slideDuplicateClass+')[data-swiper-slide-index="'+n.attr("data-swiper-slide-index")+'"]').addClass(x.params.slideDuplicatePrevClass):x.wrapper.children("."+x.params.slideClass+"."+x.params.slideDuplicateClass+'[data-swiper-slide-index="'+n.attr("data-swiper-slide-index")+'"]').addClass(x.params.slideDuplicatePrevClass)),x.paginationContainer&&0<x.paginationContainer.length){
// Current/Total
var a,i=x.params.loop?Math.ceil((x.slides.length-2*x.loopedSlides)/x.params.slidesPerGroup):x.snapGrid.length;if(x.params.loop?((a=Math.ceil((x.activeIndex-x.loopedSlides)/x.params.slidesPerGroup))>x.slides.length-1-2*x.loopedSlides&&(a-=x.slides.length-2*x.loopedSlides),i-1<a&&(a-=i),a<0&&"bullets"!==x.params.paginationType&&(a=i+a)):a=void 0!==x.snapIndex?x.snapIndex:x.activeIndex||0,// Types
"bullets"===x.params.paginationType&&x.bullets&&0<x.bullets.length&&(x.bullets.removeClass(x.params.bulletActiveClass),1<x.paginationContainer.length?x.bullets.each(function(){H(this).index()===a&&H(this).addClass(x.params.bulletActiveClass)}):x.bullets.eq(a).addClass(x.params.bulletActiveClass)),"fraction"===x.params.paginationType&&(x.paginationContainer.find("."+x.params.paginationCurrentClass).text(a+1),x.paginationContainer.find("."+x.params.paginationTotalClass).text(i)),"progress"===x.params.paginationType){var r=(a+1)/i,o=r,s=1;x.isHorizontal()||(s=r,o=1),x.paginationContainer.find("."+x.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX("+o+") scaleY("+s+")").transition(x.params.speed)}"custom"===x.params.paginationType&&x.params.paginationCustomRender&&(x.paginationContainer.html(x.params.paginationCustomRender(x,a+1,i)),x.emit("onPaginationRendered",x,x.paginationContainer[0]))}// Next/active buttons
x.params.loop||(x.params.prevButton&&x.prevButton&&0<x.prevButton.length&&(x.isBeginning?(x.prevButton.addClass(x.params.buttonDisabledClass),x.params.a11y&&x.a11y&&x.a11y.disable(x.prevButton)):(x.prevButton.removeClass(x.params.buttonDisabledClass),x.params.a11y&&x.a11y&&x.a11y.enable(x.prevButton))),x.params.nextButton&&x.nextButton&&0<x.nextButton.length&&(x.isEnd?(x.nextButton.addClass(x.params.buttonDisabledClass),x.params.a11y&&x.a11y&&x.a11y.disable(x.nextButton)):(x.nextButton.removeClass(x.params.buttonDisabledClass),x.params.a11y&&x.a11y&&x.a11y.enable(x.nextButton))))},
/*=========================
          Pagination
          ===========================*/
x.updatePagination=function(){if(x.params.pagination&&x.paginationContainer&&0<x.paginationContainer.length){var e="";if("bullets"===x.params.paginationType){for(var t=x.params.loop?Math.ceil((x.slides.length-2*x.loopedSlides)/x.params.slidesPerGroup):x.snapGrid.length,n=0;n<t;n++)x.params.paginationBulletRender?e+=x.params.paginationBulletRender(x,n,x.params.bulletClass):e+="<"+x.params.paginationElement+' class="'+x.params.bulletClass+'"></'+x.params.paginationElement+">";x.paginationContainer.html(e),x.bullets=x.paginationContainer.find("."+x.params.bulletClass),x.params.paginationClickable&&x.params.a11y&&x.a11y&&x.a11y.initPagination()}"fraction"===x.params.paginationType&&(e=x.params.paginationFractionRender?x.params.paginationFractionRender(x,x.params.paginationCurrentClass,x.params.paginationTotalClass):'<span class="'+x.params.paginationCurrentClass+'"></span> / <span class="'+x.params.paginationTotalClass+'"></span>',x.paginationContainer.html(e)),"progress"===x.params.paginationType&&(e=x.params.paginationProgressRender?x.params.paginationProgressRender(x,x.params.paginationProgressbarClass):'<span class="'+x.params.paginationProgressbarClass+'"></span>',x.paginationContainer.html(e)),"custom"!==x.params.paginationType&&x.emit("onPaginationRendered",x,x.paginationContainer[0])}},
/*=========================
          Common update method
          ===========================*/
x.update=function(e){var t;x&&(x.updateContainerSize(),x.updateSlidesSize(),x.updateProgress(),x.updatePagination(),x.updateClasses(),x.params.scrollbar&&x.scrollbar&&x.scrollbar.set(),e?(x.controller&&x.controller.spline&&(x.controller.spline=void 0),x.params.freeMode?(n(),x.params.autoHeight&&x.updateAutoHeight()):(("auto"===x.params.slidesPerView||1<x.params.slidesPerView)&&x.isEnd&&!x.params.centeredSlides?x.slideTo(x.slides.length-1,0,!1,!0):x.slideTo(x.activeIndex,0,!1,!0))||n()):x.params.autoHeight&&x.updateAutoHeight());function n(){x.rtl,x.translate;t=Math.min(Math.max(x.translate,x.maxTranslate()),x.minTranslate()),x.setWrapperTranslate(t),x.updateActiveIndex(),x.updateClasses()}},
/*=========================
          Resize Handler
          ===========================*/
x.onResize=function(e){x.params.onBeforeResize&&x.params.onBeforeResize(x),//Breakpoints
x.params.breakpoints&&x.setBreakpoint();// Disable locks on resize
var t=x.params.allowSwipeToPrev,n=x.params.allowSwipeToNext;x.params.allowSwipeToPrev=x.params.allowSwipeToNext=!0,x.updateContainerSize(),x.updateSlidesSize(),("auto"===x.params.slidesPerView||x.params.freeMode||e)&&x.updatePagination(),x.params.scrollbar&&x.scrollbar&&x.scrollbar.set(),x.controller&&x.controller.spline&&(x.controller.spline=void 0);var a=!1;if(x.params.freeMode){var i=Math.min(Math.max(x.translate,x.maxTranslate()),x.minTranslate());x.setWrapperTranslate(i),x.updateActiveIndex(),x.updateClasses(),x.params.autoHeight&&x.updateAutoHeight()}else x.updateClasses(),a=("auto"===x.params.slidesPerView||1<x.params.slidesPerView)&&x.isEnd&&!x.params.centeredSlides?x.slideTo(x.slides.length-1,0,!1,!0):x.slideTo(x.activeIndex,0,!1,!0);x.params.lazyLoading&&!a&&x.lazy&&x.lazy.load(),// Return locks after resize
x.params.allowSwipeToPrev=t,x.params.allowSwipeToNext=n,x.params.onAfterResize&&x.params.onAfterResize(x)},
/*=========================
          Events
          ===========================*/
//Define Touch Events
x.touchEventsDesktop={start:"mousedown",move:"mousemove",end:"mouseup"},window.navigator.pointerEnabled?x.touchEventsDesktop={start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled&&(x.touchEventsDesktop={start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}),x.touchEvents={start:x.support.touch||!x.params.simulateTouch?"touchstart":x.touchEventsDesktop.start,move:x.support.touch||!x.params.simulateTouch?"touchmove":x.touchEventsDesktop.move,end:x.support.touch||!x.params.simulateTouch?"touchend":x.touchEventsDesktop.end},// WP8 Touch Events Fix
(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&("container"===x.params.touchEventsTarget?x.container:x.wrapper).addClass("swiper-wp8-"+x.params.direction),// Attach/detach events
x.initEvents=function(e){var t=e?"off":"on",n=e?"removeEventListener":"addEventListener",a="container"===x.params.touchEventsTarget?x.container[0]:x.wrapper[0],i=x.support.touch?a:document,r=!!x.params.nested;//Touch Events
if(x.browser.ie)a[n](x.touchEvents.start,x.onTouchStart,!1),i[n](x.touchEvents.move,x.onTouchMove,r),i[n](x.touchEvents.end,x.onTouchEnd,!1);else{if(x.support.touch){var o=!("touchstart"!==x.touchEvents.start||!x.support.passiveListener||!x.params.passiveListeners)&&{passive:!0,capture:!1};a[n](x.touchEvents.start,x.onTouchStart,o),a[n](x.touchEvents.move,x.onTouchMove,r),a[n](x.touchEvents.end,x.onTouchEnd,o)}(l.simulateTouch&&!x.device.ios&&!x.device.android||l.simulateTouch&&!x.support.touch&&x.device.ios)&&(a[n]("mousedown",x.onTouchStart,!1),document[n]("mousemove",x.onTouchMove,r),document[n]("mouseup",x.onTouchEnd,!1))}window[n]("resize",x.onResize),// Next, Prev, Index
x.params.nextButton&&x.nextButton&&0<x.nextButton.length&&(x.nextButton[t]("click",x.onClickNext),x.params.a11y&&x.a11y&&x.nextButton[t]("keydown",x.a11y.onEnterKey)),x.params.prevButton&&x.prevButton&&0<x.prevButton.length&&(x.prevButton[t]("click",x.onClickPrev),x.params.a11y&&x.a11y&&x.prevButton[t]("keydown",x.a11y.onEnterKey)),x.params.pagination&&x.params.paginationClickable&&(x.paginationContainer[t]("click","."+x.params.bulletClass,x.onClickIndex),x.params.a11y&&x.a11y&&x.paginationContainer[t]("keydown","."+x.params.bulletClass,x.a11y.onEnterKey)),// Prevent Links Clicks
(x.params.preventClicks||x.params.preventClicksPropagation)&&a[n]("click",x.preventClicks,!0)},x.attachEvents=function(){x.initEvents()},x.detachEvents=function(){x.initEvents(!0)},
/*=========================
          Handle Clicks
          ===========================*/
// Prevent Clicks
x.allowClick=!0,x.preventClicks=function(e){x.allowClick||(x.params.preventClicks&&e.preventDefault(),x.params.preventClicksPropagation&&x.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))},// Clicks
x.onClickNext=function(e){e.preventDefault(),x.isEnd&&!x.params.loop||x.slideNext()},x.onClickPrev=function(e){e.preventDefault(),x.isBeginning&&!x.params.loop||x.slidePrev()},x.onClickIndex=function(e){e.preventDefault();var t=H(this).index()*x.params.slidesPerGroup;x.params.loop&&(t+=x.loopedSlides),x.slideTo(t)},x.updateClickedSlide=function(e){var t=D(e,"."+x.params.slideClass),n=!1;if(t)for(var a=0;a<x.slides.length;a++)x.slides[a]===t&&(n=!0);if(!t||!n)return x.clickedSlide=void 0,void(x.clickedIndex=void 0);if(x.clickedSlide=t,x.clickedIndex=H(t).index(),x.params.slideToClickedSlide&&void 0!==x.clickedIndex&&x.clickedIndex!==x.activeIndex){var i,r=x.clickedIndex,o="auto"===x.params.slidesPerView?x.currentSlidesPerView():x.params.slidesPerView;if(x.params.loop){if(x.animating)return;i=parseInt(H(x.clickedSlide).attr("data-swiper-slide-index"),10),x.params.centeredSlides?r<x.loopedSlides-o/2||r>x.slides.length-x.loopedSlides+o/2?(x.fixLoop(),r=x.wrapper.children("."+x.params.slideClass+'[data-swiper-slide-index="'+i+'"]:not(.'+x.params.slideDuplicateClass+")").eq(0).index(),setTimeout(function(){x.slideTo(r)},0)):x.slideTo(r):r>x.slides.length-o?(x.fixLoop(),r=x.wrapper.children("."+x.params.slideClass+'[data-swiper-slide-index="'+i+'"]:not(.'+x.params.slideDuplicateClass+")").eq(0).index(),setTimeout(function(){x.slideTo(r)},0)):x.slideTo(r)}else x.slideTo(r)}};var b,T,S,C,d,E,k,c,I,P,f,h,
// Form elements to match
m="input, select, textarea, button, video",
// Last click time
M=Date.now(),
//Velocities
A=[];// Animating Flag
for(var g in x.animating=!1,// Touches information
x.touches={startX:0,startY:0,currentX:0,currentY:0,diff:0},x.onTouchStart=function(e){if(e.originalEvent&&(e=e.originalEvent),(f="touchstart"===e.type)||!("which"in e)||3!==e.which)if(x.params.noSwiping&&D(e,"."+x.params.noSwipingClass))x.allowClick=!0;else if(!x.params.swipeHandler||D(e,x.params.swipeHandler)){var t=x.touches.currentX="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,n=x.touches.currentY="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY;// Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore
if(!(x.device.ios&&x.params.iOSEdgeSwipeDetection&&t<=x.params.iOSEdgeSwipeThreshold)){if(S=!(T=!(b=!0)),h=d=void 0,x.touches.startX=t,x.touches.startY=n,C=Date.now(),x.allowClick=!0,x.updateContainerSize(),x.swipeDirection=void 0,0<x.params.threshold&&(c=!1),"touchstart"!==e.type){var a=!0;H(e.target).is(m)&&(a=!1),document.activeElement&&H(document.activeElement).is(m)&&document.activeElement.blur(),a&&e.preventDefault()}x.emit("onTouchStart",x,e)}}},x.onTouchMove=function(e){if(e.originalEvent&&(e=e.originalEvent),!f||"mousemove"!==e.type){if(e.preventedByNestedSwiper)return x.touches.startX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,void(x.touches.startY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY);if(x.params.onlyExternal)
// isMoved = true;
return x.allowClick=!1,void(b&&(x.touches.startX=x.touches.currentX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,x.touches.startY=x.touches.currentY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,C=Date.now()));if(f&&x.params.touchReleaseOnEdges&&!x.params.loop)if(x.isHorizontal()){if(x.touches.currentX<x.touches.startX&&x.translate<=x.maxTranslate()||x.touches.currentX>x.touches.startX&&x.translate>=x.minTranslate())return}else
// Vertical
if(x.touches.currentY<x.touches.startY&&x.translate<=x.maxTranslate()||x.touches.currentY>x.touches.startY&&x.translate>=x.minTranslate())return;if(f&&document.activeElement&&e.target===document.activeElement&&H(e.target).is(m))return T=!0,void(x.allowClick=!1);if(S&&x.emit("onTouchMove",x,e),!(e.targetTouches&&1<e.targetTouches.length)){var t;if(x.touches.currentX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,x.touches.currentY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,void 0===d)d=!(x.isHorizontal()&&x.touches.currentY===x.touches.startY||!x.isHorizontal()&&x.touches.currentX===x.touches.startX)&&(t=180*Math.atan2(Math.abs(x.touches.currentY-x.touches.startY),Math.abs(x.touches.currentX-x.touches.startX))/Math.PI,x.isHorizontal()?t>x.params.touchAngle:90-t>x.params.touchAngle);if(d&&x.emit("onTouchMoveOpposite",x,e),void 0===h&&(x.touches.currentX===x.touches.startX&&x.touches.currentY===x.touches.startY||(h=!0)),b)if(d)b=!1;else if(h){x.allowClick=!1,x.emit("onSliderMove",x,e),e.preventDefault(),x.params.touchMoveStopPropagation&&!x.params.nested&&e.stopPropagation(),T||(l.loop&&x.fixLoop(),k=x.getWrapperTranslate(),x.setWrapperTransition(0),x.animating&&x.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),x.params.autoplay&&x.autoplaying&&(x.params.autoplayDisableOnInteraction?x.stopAutoplay():x.pauseAutoplay()),P=!1,//Grab Cursor
!x.params.grabCursor||!0!==x.params.allowSwipeToNext&&!0!==x.params.allowSwipeToPrev||x.setGrabCursor(!0)),T=!0;var n=x.touches.diff=x.isHorizontal()?x.touches.currentX-x.touches.startX:x.touches.currentY-x.touches.startY;n*=x.params.touchRatio,x.rtl&&(n=-n),x.swipeDirection=0<n?"prev":"next",E=n+k;var a=!0;// Threshold
if(0<n&&E>x.minTranslate()?(a=!1,x.params.resistance&&(E=x.minTranslate()-1+Math.pow(-x.minTranslate()+k+n,x.params.resistanceRatio))):n<0&&E<x.maxTranslate()&&(a=!1,x.params.resistance&&(E=x.maxTranslate()+1-Math.pow(x.maxTranslate()-k-n,x.params.resistanceRatio))),a&&(e.preventedByNestedSwiper=!0),// Directions locks
!x.params.allowSwipeToNext&&"next"===x.swipeDirection&&E<k&&(E=k),!x.params.allowSwipeToPrev&&"prev"===x.swipeDirection&&k<E&&(E=k),0<x.params.threshold){if(!(Math.abs(n)>x.params.threshold||c))return void(E=k);if(!c)return c=!0,x.touches.startX=x.touches.currentX,x.touches.startY=x.touches.currentY,E=k,void(x.touches.diff=x.isHorizontal()?x.touches.currentX-x.touches.startX:x.touches.currentY-x.touches.startY)}x.params.followFinger&&(// Update active index in free mode
(x.params.freeMode||x.params.watchSlidesProgress)&&x.updateActiveIndex(),x.params.freeMode&&(
//Velocity
0===A.length&&A.push({position:x.touches[x.isHorizontal()?"startX":"startY"],time:C}),A.push({position:x.touches[x.isHorizontal()?"currentX":"currentY"],time:(new window.Date).getTime()})),// Update progress
x.updateProgress(E),// Update translate
x.setWrapperTranslate(E))}}}},x.onTouchEnd=function(e){if(e.originalEvent&&(e=e.originalEvent),S&&x.emit("onTouchEnd",x,e),S=!1,b){//Return Grab Cursor
x.params.grabCursor&&T&&b&&(!0===x.params.allowSwipeToNext||!0===x.params.allowSwipeToPrev)&&x.setGrabCursor(!1);// Time diff
var t,n=Date.now(),a=n-C;if(// Tap, doubleTap, Click
x.allowClick&&(x.updateClickedSlide(e),x.emit("onTap",x,e),a<300&&300<n-M&&(I&&clearTimeout(I),I=setTimeout(function(){x&&(x.params.paginationHide&&0<x.paginationContainer.length&&!H(e.target).hasClass(x.params.bulletClass)&&x.paginationContainer.toggleClass(x.params.paginationHiddenClass),x.emit("onClick",x,e))},300)),a<300&&n-M<300&&(I&&clearTimeout(I),x.emit("onDoubleTap",x,e))),M=Date.now(),setTimeout(function(){x&&(x.allowClick=!0)},0),b&&T&&x.swipeDirection&&0!==x.touches.diff&&E!==k)if(b=T=!1,t=x.params.followFinger?x.rtl?x.translate:-x.translate:-E,x.params.freeMode){if(t<-x.minTranslate())return void x.slideTo(x.activeIndex);if(t>-x.maxTranslate())return void(x.slides.length<x.snapGrid.length?x.slideTo(x.snapGrid.length-1):x.slideTo(x.slides.length-1));if(x.params.freeModeMomentum){if(1<A.length){var i=A.pop(),r=A.pop(),o=i.position-r.position,s=i.time-r.time;x.velocity=o/s,x.velocity=x.velocity/2,Math.abs(x.velocity)<x.params.freeModeMinimumVelocity&&(x.velocity=0),// this implies that the user stopped moving a finger then released.
// There would be no events with distance zero, so the last event is stale.
(150<s||300<(new window.Date).getTime()-i.time)&&(x.velocity=0)}else x.velocity=0;x.velocity=x.velocity*x.params.freeModeMomentumVelocityRatio,A.length=0;var l=1e3*x.params.freeModeMomentumRatio,u=x.velocity*l,p=x.translate+u;x.rtl&&(p=-p);var d,c=!1,f=20*Math.abs(x.velocity)*x.params.freeModeMomentumBounceRatio;if(p<x.maxTranslate())x.params.freeModeMomentumBounce?(p+x.maxTranslate()<-f&&(p=x.maxTranslate()-f),d=x.maxTranslate(),P=c=!0):p=x.maxTranslate();else if(p>x.minTranslate())x.params.freeModeMomentumBounce?(p-x.minTranslate()>f&&(p=x.minTranslate()+f),d=x.minTranslate(),P=c=!0):p=x.minTranslate();else if(x.params.freeModeSticky){var h,m=0;for(m=0;m<x.snapGrid.length;m+=1)if(x.snapGrid[m]>-p){h=m;break}p=Math.abs(x.snapGrid[h]-p)<Math.abs(x.snapGrid[h-1]-p)||"next"===x.swipeDirection?x.snapGrid[h]:x.snapGrid[h-1],x.rtl||(p=-p)}//Fix duration
if(0!==x.velocity)l=x.rtl?Math.abs((-p-x.translate)/x.velocity):Math.abs((p-x.translate)/x.velocity);else if(x.params.freeModeSticky)return void x.slideReset();x.params.freeModeMomentumBounce&&c?(x.updateProgress(d),x.setWrapperTransition(l),x.setWrapperTranslate(p),x.onTransitionStart(),x.animating=!0,x.wrapper.transitionEnd(function(){x&&P&&(x.emit("onMomentumBounce",x),x.setWrapperTransition(x.params.speed),x.setWrapperTranslate(d),x.wrapper.transitionEnd(function(){x&&x.onTransitionEnd()}))})):x.velocity?(x.updateProgress(p),x.setWrapperTransition(l),x.setWrapperTranslate(p),x.onTransitionStart(),x.animating||(x.animating=!0,x.wrapper.transitionEnd(function(){x&&x.onTransitionEnd()}))):x.updateProgress(p),x.updateActiveIndex()}(!x.params.freeModeMomentum||a>=x.params.longSwipesMs)&&(x.updateProgress(),x.updateActiveIndex())}// Find current slide
else{var g,v=0,y=x.slidesSizesGrid[0];for(g=0;g<x.slidesGrid.length;g+=x.params.slidesPerGroup)void 0!==x.slidesGrid[g+x.params.slidesPerGroup]?t>=x.slidesGrid[g]&&t<x.slidesGrid[g+x.params.slidesPerGroup]&&(v=g,y=x.slidesGrid[g+x.params.slidesPerGroup]-x.slidesGrid[g]):t>=x.slidesGrid[g]&&(v=g,y=x.slidesGrid[x.slidesGrid.length-1]-x.slidesGrid[x.slidesGrid.length-2]);// Find current slide size
var w=(t-x.slidesGrid[v])/y;if(a>x.params.longSwipesMs){
// Long touches
if(!x.params.longSwipes)return void x.slideTo(x.activeIndex);"next"===x.swipeDirection&&(w>=x.params.longSwipesRatio?x.slideTo(v+x.params.slidesPerGroup):x.slideTo(v)),"prev"===x.swipeDirection&&(w>1-x.params.longSwipesRatio?x.slideTo(v+x.params.slidesPerGroup):x.slideTo(v))}else{
// Short swipes
if(!x.params.shortSwipes)return void x.slideTo(x.activeIndex);"next"===x.swipeDirection&&x.slideTo(v+x.params.slidesPerGroup),"prev"===x.swipeDirection&&x.slideTo(v)}}else b=T=!1}},
/*=========================
          Transitions
          ===========================*/
x._slideTo=function(e,t){return x.slideTo(e,t,!0,!0)},x.slideTo=function(e,t,n,a){void 0===n&&(n=!0),void 0===e&&(e=0),e<0&&(e=0),x.snapIndex=Math.floor(e/x.params.slidesPerGroup),x.snapIndex>=x.snapGrid.length&&(x.snapIndex=x.snapGrid.length-1);var i=-x.snapGrid[x.snapIndex];// Stop autoplay
// Normalize slideIndex
if(x.params.autoplay&&x.autoplaying&&(a||!x.params.autoplayDisableOnInteraction?x.pauseAutoplay(t):x.stopAutoplay()),// Update progress
x.updateProgress(i),x.params.normalizeSlideIndex)for(var r=0;r<x.slidesGrid.length;r++)-Math.floor(100*i)>=Math.floor(100*x.slidesGrid[r])&&(e=r);// Directions locks
return!(!x.params.allowSwipeToNext&&i<x.translate&&i<x.minTranslate())&&(!(!x.params.allowSwipeToPrev&&i>x.translate&&i>x.maxTranslate()&&(x.activeIndex||0)!==e)&&(// Update Index
void 0===t&&(t=x.params.speed),x.previousIndex=x.activeIndex||0,x.activeIndex=e,x.updateRealIndex(),x.rtl&&-i===x.translate||!x.rtl&&i===x.translate?(
// Update Height
x.params.autoHeight&&x.updateAutoHeight(),x.updateClasses(),"slide"!==x.params.effect&&x.setWrapperTranslate(i),!1):(x.updateClasses(),x.onTransitionStart(n),0===t||x.browser.lteIE9?(x.setWrapperTranslate(i),x.setWrapperTransition(0),x.onTransitionEnd(n)):(x.setWrapperTranslate(i),x.setWrapperTransition(t),x.animating||(x.animating=!0,x.wrapper.transitionEnd(function(){x&&x.onTransitionEnd(n)}))),!0)))},x.onTransitionStart=function(e){void 0===e&&(e=!0),x.params.autoHeight&&x.updateAutoHeight(),x.lazy&&x.lazy.onTransitionStart(),e&&(x.emit("onTransitionStart",x),x.activeIndex!==x.previousIndex&&(x.emit("onSlideChangeStart",x),x.activeIndex>x.previousIndex?x.emit("onSlideNextStart",x):x.emit("onSlidePrevStart",x)))},x.onTransitionEnd=function(e){x.animating=!1,x.setWrapperTransition(0),void 0===e&&(e=!0),x.lazy&&x.lazy.onTransitionEnd(),e&&(x.emit("onTransitionEnd",x),x.activeIndex!==x.previousIndex&&(x.emit("onSlideChangeEnd",x),x.activeIndex>x.previousIndex?x.emit("onSlideNextEnd",x):x.emit("onSlidePrevEnd",x))),x.params.history&&x.history&&x.history.setHistory(x.params.history,x.activeIndex),x.params.hashnav&&x.hashnav&&x.hashnav.setHash()},x.slideNext=function(e,t,n){if(x.params.loop){if(x.animating)return!1;x.fixLoop();x.container[0].clientLeft;return x.slideTo(x.activeIndex+x.params.slidesPerGroup,t,e,n)}return x.slideTo(x.activeIndex+x.params.slidesPerGroup,t,e,n)},x._slideNext=function(e){return x.slideNext(!0,e,!0)},x.slidePrev=function(e,t,n){if(x.params.loop){if(x.animating)return!1;x.fixLoop();x.container[0].clientLeft;return x.slideTo(x.activeIndex-1,t,e,n)}return x.slideTo(x.activeIndex-1,t,e,n)},x._slidePrev=function(e){return x.slidePrev(!0,e,!0)},x.slideReset=function(e,t,n){return x.slideTo(x.activeIndex,t,e)},x.disableTouchControl=function(){return x.params.onlyExternal=!0},x.enableTouchControl=function(){return!(x.params.onlyExternal=!1)},
/*=========================
          Translate/transition helpers
          ===========================*/
x.setWrapperTransition=function(e,t){x.wrapper.transition(e),"slide"!==x.params.effect&&x.effects[x.params.effect]&&x.effects[x.params.effect].setTransition(e),x.params.parallax&&x.parallax&&x.parallax.setTransition(e),x.params.scrollbar&&x.scrollbar&&x.scrollbar.setTransition(e),x.params.control&&x.controller&&x.controller.setTransition(e,t),x.emit("onSetTransition",x,e)},x.setWrapperTranslate=function(e,t,n){var a=0,i=0;x.isHorizontal()?a=x.rtl?-e:e:i=e,x.params.roundLengths&&(a=y(a),i=y(i)),x.params.virtualTranslate||(x.support.transforms3d?x.wrapper.transform("translate3d("+a+"px, "+i+"px, 0px)"):x.wrapper.transform("translate("+a+"px, "+i+"px)")),x.translate=x.isHorizontal()?a:i;var r=x.maxTranslate()-x.minTranslate();(0===r?0:(e-x.minTranslate())/r)!==x.progress&&x.updateProgress(e),t&&x.updateActiveIndex(),"slide"!==x.params.effect&&x.effects[x.params.effect]&&x.effects[x.params.effect].setTranslate(x.translate),x.params.parallax&&x.parallax&&x.parallax.setTranslate(x.translate),x.params.scrollbar&&x.scrollbar&&x.scrollbar.setTranslate(x.translate),x.params.control&&x.controller&&x.controller.setTranslate(x.translate,n),x.emit("onSetTranslate",x,x.translate)},x.getTranslate=function(e,t){var n,a,i,r;// automatic axis detection
return void 0===t&&(t="x"),x.params.virtualTranslate?x.rtl?-x.translate:x.translate:(i=window.getComputedStyle(e,null),window.WebKitCSSMatrix?(6<(a=i.transform||i.webkitTransform).split(",").length&&(a=a.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),// Some old versions of Webkit choke when 'none' is passed; pass
// empty string instead in this case
r=new window.WebKitCSSMatrix("none"===a?"":a)):n=(r=i.MozTransform||i.OTransform||i.MsTransform||i.msTransform||i.transform||i.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(","),"x"===t&&(
//Latest Chrome and webkits Fix
a=window.WebKitCSSMatrix?r.m41:16===n.length?parseFloat(n[12]):parseFloat(n[4])),"y"===t&&(
//Latest Chrome and webkits Fix
a=window.WebKitCSSMatrix?r.m42:16===n.length?parseFloat(n[13]):parseFloat(n[5])),x.rtl&&a&&(a=-a),a||0)},x.getWrapperTranslate=function(e){return void 0===e&&(e=x.isHorizontal()?"x":"y"),x.getTranslate(x.wrapper[0],e)},
/*=========================
          Observer
          ===========================*/
x.observers=[],x.initObservers=function(){if(x.params.observeParents)for(var e=x.container.parents(),t=0;t<e.length;t++)z(e[t]);// Observe container
z(x.container[0],{childList:!1}),// Observe wrapper
z(x.wrapper[0],{attributes:!1})},x.disconnectObservers=function(){for(var e=0;e<x.observers.length;e++)x.observers[e].disconnect();x.observers=[]},
/*=========================
          Loop
          ===========================*/
// Create looped slides
x.createLoop=function(){
// Remove duplicated slides
x.wrapper.children("."+x.params.slideClass+"."+x.params.slideDuplicateClass).remove();var a=x.wrapper.children("."+x.params.slideClass);"auto"!==x.params.slidesPerView||x.params.loopedSlides||(x.params.loopedSlides=a.length),x.loopedSlides=parseInt(x.params.loopedSlides||x.params.slidesPerView,10),x.loopedSlides=x.loopedSlides+x.params.loopAdditionalSlides,x.loopedSlides>a.length&&(x.loopedSlides=a.length);var e,i=[],r=[];for(a.each(function(e,t){var n=H(this);e<x.loopedSlides&&r.push(t),e<a.length&&e>=a.length-x.loopedSlides&&i.push(t),n.attr("data-swiper-slide-index",e)}),e=0;e<r.length;e++)x.wrapper.append(H(r[e].cloneNode(!0)).addClass(x.params.slideDuplicateClass));for(e=i.length-1;0<=e;e--)x.wrapper.prepend(H(i[e].cloneNode(!0)).addClass(x.params.slideDuplicateClass))},x.destroyLoop=function(){x.wrapper.children("."+x.params.slideClass+"."+x.params.slideDuplicateClass).remove(),x.slides.removeAttr("data-swiper-slide-index")},x.reLoop=function(e){var t=x.activeIndex-x.loopedSlides;x.destroyLoop(),x.createLoop(),x.updateSlidesSize(),e&&x.slideTo(t+x.loopedSlides,0,!1)},x.fixLoop=function(){var e;//Fix For Negative Oversliding
x.activeIndex<x.loopedSlides?(e=x.slides.length-3*x.loopedSlides+x.activeIndex,e+=x.loopedSlides,x.slideTo(e,0,!1,!0)):("auto"===x.params.slidesPerView&&x.activeIndex>=2*x.loopedSlides||x.activeIndex>x.slides.length-2*x.params.slidesPerView)&&(e=-x.slides.length+x.activeIndex+x.loopedSlides,e+=x.loopedSlides,x.slideTo(e,0,!1,!0))},
/*=========================
          Append/Prepend/Remove Slides
          ===========================*/
x.appendSlide=function(e){if(x.params.loop&&x.destroyLoop(),"object"===_t(e)&&e.length)for(var t=0;t<e.length;t++)e[t]&&x.wrapper.append(e[t]);else x.wrapper.append(e);x.params.loop&&x.createLoop(),x.params.observer&&x.support.observer||x.update(!0)},x.prependSlide=function(e){x.params.loop&&x.destroyLoop();var t=x.activeIndex+1;if("object"===_t(e)&&e.length){for(var n=0;n<e.length;n++)e[n]&&x.wrapper.prepend(e[n]);t=x.activeIndex+e.length}else x.wrapper.prepend(e);x.params.loop&&x.createLoop(),x.params.observer&&x.support.observer||x.update(!0),x.slideTo(t,0,!1)},x.removeSlide=function(e){x.params.loop&&(x.destroyLoop(),x.slides=x.wrapper.children("."+x.params.slideClass));var t,n=x.activeIndex;if("object"===_t(e)&&e.length){for(var a=0;a<e.length;a++)t=e[a],x.slides[t]&&x.slides.eq(t).remove(),t<n&&n--;n=Math.max(n,0)}else t=e,x.slides[t]&&x.slides.eq(t).remove(),t<n&&n--,n=Math.max(n,0);x.params.loop&&x.createLoop(),x.params.observer&&x.support.observer||x.update(!0),x.params.loop?x.slideTo(n+x.loopedSlides,0,!1):x.slideTo(n,0,!1)},x.removeAllSlides=function(){for(var e=[],t=0;t<x.slides.length;t++)e.push(t);x.removeSlide(e)},
/*=========================
          Effects
          ===========================*/
x.effects={fade:{setTranslate:function(){for(var e=0;e<x.slides.length;e++){var t=x.slides.eq(e),n=-t[0].swiperSlideOffset;x.params.virtualTranslate||(n-=x.translate);var a=0;x.isHorizontal()||(a=n,n=0);var i=x.params.fade.crossFade?Math.max(1-Math.abs(t[0].progress),0):1+Math.min(Math.max(t[0].progress,-1),0);t.css({opacity:i}).transform("translate3d("+n+"px, "+a+"px, 0px)")}},setTransition:function(e){if(x.slides.transition(e),x.params.virtualTranslate&&0!==e){var n=!1;x.slides.transitionEnd(function(){if(!n&&x){n=!0,x.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],t=0;t<e.length;t++)x.wrapper.trigger(e[t])}})}}},flip:{setTranslate:function(){for(var e=0;e<x.slides.length;e++){var t=x.slides.eq(e),n=t[0].progress;x.params.flip.limitRotation&&(n=Math.max(Math.min(t[0].progress,1),-1));var a=-180*n,i=0,r=-t[0].swiperSlideOffset,o=0;if(x.isHorizontal()?x.rtl&&(a=-a):(o=r,i=-a,a=r=0),t[0].style.zIndex=-Math.abs(Math.round(n))+x.slides.length,x.params.flip.slideShadows){
//Set shadows
var s=x.isHorizontal()?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),l=x.isHorizontal()?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===s.length&&(s=H('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"left":"top")+'"></div>'),t.append(s)),0===l.length&&(l=H('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"right":"bottom")+'"></div>'),t.append(l)),s.length&&(s[0].style.opacity=Math.max(-n,0)),l.length&&(l[0].style.opacity=Math.max(n,0))}t.transform("translate3d("+r+"px, "+o+"px, 0px) rotateX("+i+"deg) rotateY("+a+"deg)")}},setTransition:function(e){if(x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),x.params.virtualTranslate&&0!==e){var n=!1;x.slides.eq(x.activeIndex).transitionEnd(function(){if(!n&&x&&H(this).hasClass(x.params.slideActiveClass)){n=!0,x.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],t=0;t<e.length;t++)x.wrapper.trigger(e[t])}})}}},cube:{setTranslate:function(){var e,t=0;x.params.cube.shadow&&(x.isHorizontal()?(0===(e=x.wrapper.find(".swiper-cube-shadow")).length&&(e=H('<div class="swiper-cube-shadow"></div>'),x.wrapper.append(e)),e.css({height:x.width+"px"})):0===(e=x.container.find(".swiper-cube-shadow")).length&&(e=H('<div class="swiper-cube-shadow"></div>'),x.container.append(e)));for(var n=0;n<x.slides.length;n++){var a=x.slides.eq(n),i=90*n,r=Math.floor(i/360);x.rtl&&(i=-i,r=Math.floor(-i/360));var o=Math.max(Math.min(a[0].progress,1),-1),s=0,l=0,u=0;n%4==0?(s=4*-r*x.size,u=0):(n-1)%4==0?(s=0,u=4*-r*x.size):(n-2)%4==0?(s=x.size+4*r*x.size,u=x.size):(n-3)%4==0&&(s=-x.size,u=3*x.size+4*x.size*r),x.rtl&&(s=-s),x.isHorizontal()||(l=s,s=0);var p="rotateX("+(x.isHorizontal()?0:-i)+"deg) rotateY("+(x.isHorizontal()?i:0)+"deg) translate3d("+s+"px, "+l+"px, "+u+"px)";if(o<=1&&-1<o&&(t=90*n+90*o,x.rtl&&(t=90*-n-90*o)),a.transform(p),x.params.cube.slideShadows){
//Set shadows
var d=x.isHorizontal()?a.find(".swiper-slide-shadow-left"):a.find(".swiper-slide-shadow-top"),c=x.isHorizontal()?a.find(".swiper-slide-shadow-right"):a.find(".swiper-slide-shadow-bottom");0===d.length&&(d=H('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"left":"top")+'"></div>'),a.append(d)),0===c.length&&(c=H('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"right":"bottom")+'"></div>'),a.append(c)),d.length&&(d[0].style.opacity=Math.max(-o,0)),c.length&&(c[0].style.opacity=Math.max(o,0))}}if(x.wrapper.css({"-webkit-transform-origin":"50% 50% -"+x.size/2+"px","-moz-transform-origin":"50% 50% -"+x.size/2+"px","-ms-transform-origin":"50% 50% -"+x.size/2+"px","transform-origin":"50% 50% -"+x.size/2+"px"}),x.params.cube.shadow)if(x.isHorizontal())e.transform("translate3d(0px, "+(x.width/2+x.params.cube.shadowOffset)+"px, "+-x.width/2+"px) rotateX(90deg) rotateZ(0deg) scale("+x.params.cube.shadowScale+")");else{var f=Math.abs(t)-90*Math.floor(Math.abs(t)/90),h=1.5-(Math.sin(2*f*Math.PI/360)/2+Math.cos(2*f*Math.PI/360)/2),m=x.params.cube.shadowScale,g=x.params.cube.shadowScale/h,v=x.params.cube.shadowOffset;e.transform("scale3d("+m+", 1, "+g+") translate3d(0px, "+(x.height/2+v)+"px, "+-x.height/2/g+"px) rotateX(-90deg)")}var y=x.isSafari||x.isUiWebView?-x.size/2:0;x.wrapper.transform("translate3d(0px,0,"+y+"px) rotateX("+(x.isHorizontal()?0:t)+"deg) rotateY("+(x.isHorizontal()?-t:0)+"deg)")},setTransition:function(e){x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),x.params.cube.shadow&&!x.isHorizontal()&&x.container.find(".swiper-cube-shadow").transition(e)}},coverflow:{setTranslate:function(){//Each slide offset from center
for(var e=x.translate,t=x.isHorizontal()?-e+x.width/2:-e+x.height/2,n=x.isHorizontal()?x.params.coverflow.rotate:-x.params.coverflow.rotate,a=x.params.coverflow.depth,i=0,r=x.slides.length;i<r;i++){var o=x.slides.eq(i),s=x.slidesSizesGrid[i],l=(t-o[0].swiperSlideOffset-s/2)/s*x.params.coverflow.modifier,u=x.isHorizontal()?n*l:0,p=x.isHorizontal()?0:n*l,d=-a*Math.abs(l),c=x.isHorizontal()?0:x.params.coverflow.stretch*l,f=x.isHorizontal()?x.params.coverflow.stretch*l:0;//Fix for ultra small values
Math.abs(f)<.001&&(f=0),Math.abs(c)<.001&&(c=0),Math.abs(d)<.001&&(d=0),Math.abs(u)<.001&&(u=0),Math.abs(p)<.001&&(p=0);var h="translate3d("+f+"px,"+c+"px,"+d+"px)  rotateX("+p+"deg) rotateY("+u+"deg)";if(o.transform(h),o[0].style.zIndex=1-Math.abs(Math.round(l)),x.params.coverflow.slideShadows){
//Set shadows
var m=x.isHorizontal()?o.find(".swiper-slide-shadow-left"):o.find(".swiper-slide-shadow-top"),g=x.isHorizontal()?o.find(".swiper-slide-shadow-right"):o.find(".swiper-slide-shadow-bottom");0===m.length&&(m=H('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"left":"top")+'"></div>'),o.append(m)),0===g.length&&(g=H('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"right":"bottom")+'"></div>'),o.append(g)),m.length&&(m[0].style.opacity=0<l?l:0),g.length&&(g[0].style.opacity=0<-l?-l:0)}}//Set correct perspective for IE10
x.browser.ie&&(x.wrapper[0].style.perspectiveOrigin=t+"px 50%")},setTransition:function(e){x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}}},
/*=========================
          Images Lazy Loading
          ===========================*/
x.lazy={initialImageLoaded:!1,loadImageInSlide:function(e,l){if(void 0!==e&&(void 0===l&&(l=!0),0!==x.slides.length)){var u=x.slides.eq(e),t=u.find("."+x.params.lazyLoadingClass+":not(."+x.params.lazyStatusLoadedClass+"):not(."+x.params.lazyStatusLoadingClass+")");!u.hasClass(x.params.lazyLoadingClass)||u.hasClass(x.params.lazyStatusLoadedClass)||u.hasClass(x.params.lazyStatusLoadingClass)||(t=t.add(u[0])),0!==t.length&&t.each(function(){var a=H(this);a.addClass(x.params.lazyStatusLoadingClass);var i=a.attr("data-background"),r=a.attr("data-src"),o=a.attr("data-srcset"),s=a.attr("data-sizes");x.loadImage(a[0],r||i,o,s,!1,function(){if(null!=x&&x){if(i?(a.css("background-image",'url("'+i+'")'),a.removeAttr("data-background")):(o&&(a.attr("srcset",o),a.removeAttr("data-srcset")),s&&(a.attr("sizes",s),a.removeAttr("data-sizes")),r&&(a.attr("src",r),a.removeAttr("data-src"))),a.addClass(x.params.lazyStatusLoadedClass).removeClass(x.params.lazyStatusLoadingClass),u.find("."+x.params.lazyPreloaderClass+", ."+x.params.preloaderClass).remove(),x.params.loop&&l){var e=u.attr("data-swiper-slide-index");if(u.hasClass(x.params.slideDuplicateClass)){var t=x.wrapper.children('[data-swiper-slide-index="'+e+'"]:not(.'+x.params.slideDuplicateClass+")");x.lazy.loadImageInSlide(t.index(),!1)}else{var n=x.wrapper.children("."+x.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');x.lazy.loadImageInSlide(n.index(),!1)}}x.emit("onLazyImageReady",x,u[0],a[0])}}),x.emit("onLazyImageLoad",x,u[0],a[0])})}},load:function(){var e,t=x.params.slidesPerView;if("auto"===t&&(t=0),x.lazy.initialImageLoaded||(x.lazy.initialImageLoaded=!0),x.params.watchSlidesVisibility)x.wrapper.children("."+x.params.slideVisibleClass).each(function(){x.lazy.loadImageInSlide(H(this).index())});else if(1<t)for(e=x.activeIndex;e<x.activeIndex+t;e++)x.slides[e]&&x.lazy.loadImageInSlide(e);else x.lazy.loadImageInSlide(x.activeIndex);if(x.params.lazyLoadingInPrevNext)if(1<t||x.params.lazyLoadingInPrevNextAmount&&1<x.params.lazyLoadingInPrevNextAmount){var n=x.params.lazyLoadingInPrevNextAmount,a=t,i=Math.min(x.activeIndex+a+Math.max(n,a),x.slides.length),r=Math.max(x.activeIndex-Math.max(a,n),0);// Next Slides
for(e=x.activeIndex+t;e<i;e++)x.slides[e]&&x.lazy.loadImageInSlide(e);// Prev Slides
for(e=r;e<x.activeIndex;e++)x.slides[e]&&x.lazy.loadImageInSlide(e)}else{var o=x.wrapper.children("."+x.params.slideNextClass);0<o.length&&x.lazy.loadImageInSlide(o.index());var s=x.wrapper.children("."+x.params.slidePrevClass);0<s.length&&x.lazy.loadImageInSlide(s.index())}},onTransitionStart:function(){x.params.lazyLoading&&(x.params.lazyLoadingOnTransitionStart||!x.params.lazyLoadingOnTransitionStart&&!x.lazy.initialImageLoaded)&&x.lazy.load()},onTransitionEnd:function(){x.params.lazyLoading&&!x.params.lazyLoadingOnTransitionStart&&x.lazy.load()}},
/*=========================
          Scrollbar
          ===========================*/
x.scrollbar={isTouched:!1,setDragPosition:function(e){var t=x.scrollbar,n=(x.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY)-t.track.offset()[x.isHorizontal()?"left":"top"]-t.dragSize/2,a=-x.minTranslate()*t.moveDivider,i=-x.maxTranslate()*t.moveDivider;n<a?n=a:i<n&&(n=i),n=-n/t.moveDivider,x.updateProgress(n),x.setWrapperTranslate(n,!0)},dragStart:function(e){var t=x.scrollbar;t.isTouched=!0,e.preventDefault(),e.stopPropagation(),t.setDragPosition(e),clearTimeout(t.dragTimeout),t.track.transition(0),x.params.scrollbarHide&&t.track.css("opacity",1),x.wrapper.transition(100),t.drag.transition(100),x.emit("onScrollbarDragStart",x)},dragMove:function(e){var t=x.scrollbar;t.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,t.setDragPosition(e),x.wrapper.transition(0),t.track.transition(0),t.drag.transition(0),x.emit("onScrollbarDragMove",x))},dragEnd:function(e){var t=x.scrollbar;t.isTouched&&(t.isTouched=!1,x.params.scrollbarHide&&(clearTimeout(t.dragTimeout),t.dragTimeout=setTimeout(function(){t.track.css("opacity",0),t.track.transition(400)},1e3)),x.emit("onScrollbarDragEnd",x),x.params.scrollbarSnapOnRelease&&x.slideReset())},draggableEvents:!1!==x.params.simulateTouch||x.support.touch?x.touchEvents:x.touchEventsDesktop,enableDraggable:function(){var e=x.scrollbar,t=x.support.touch?e.track:document;H(e.track).on(e.draggableEvents.start,e.dragStart),H(t).on(e.draggableEvents.move,e.dragMove),H(t).on(e.draggableEvents.end,e.dragEnd)},disableDraggable:function(){var e=x.scrollbar,t=x.support.touch?e.track:document;H(e.track).off(e.draggableEvents.start,e.dragStart),H(t).off(e.draggableEvents.move,e.dragMove),H(t).off(e.draggableEvents.end,e.dragEnd)},set:function(){if(x.params.scrollbar){var e=x.scrollbar;e.track=H(x.params.scrollbar),x.params.uniqueNavElements&&"string"==typeof x.params.scrollbar&&1<e.track.length&&1===x.container.find(x.params.scrollbar).length&&(e.track=x.container.find(x.params.scrollbar)),e.drag=e.track.find(".swiper-scrollbar-drag"),0===e.drag.length&&(e.drag=H('<div class="swiper-scrollbar-drag"></div>'),e.track.append(e.drag)),e.drag[0].style.width="",e.drag[0].style.height="",e.trackSize=x.isHorizontal()?e.track[0].offsetWidth:e.track[0].offsetHeight,e.divider=x.size/x.virtualSize,e.moveDivider=e.divider*(e.trackSize/x.size),e.dragSize=e.trackSize*e.divider,x.isHorizontal()?e.drag[0].style.width=e.dragSize+"px":e.drag[0].style.height=e.dragSize+"px",1<=e.divider?e.track[0].style.display="none":e.track[0].style.display="",x.params.scrollbarHide&&(e.track[0].style.opacity=0)}},setTranslate:function(){if(x.params.scrollbar){var e,t=x.scrollbar,n=(x.translate,t.dragSize);e=(t.trackSize-t.dragSize)*x.progress,x.rtl&&x.isHorizontal()?0<(e=-e)?(n=t.dragSize-e,e=0):-e+t.dragSize>t.trackSize&&(n=t.trackSize+e):e<0?(n=t.dragSize+e,e=0):e+t.dragSize>t.trackSize&&(n=t.trackSize-e),x.isHorizontal()?(x.support.transforms3d?t.drag.transform("translate3d("+e+"px, 0, 0)"):t.drag.transform("translateX("+e+"px)"),t.drag[0].style.width=n+"px"):(x.support.transforms3d?t.drag.transform("translate3d(0px, "+e+"px, 0)"):t.drag.transform("translateY("+e+"px)"),t.drag[0].style.height=n+"px"),x.params.scrollbarHide&&(clearTimeout(t.timeout),t.track[0].style.opacity=1,t.timeout=setTimeout(function(){t.track[0].style.opacity=0,t.track.transition(400)},1e3))}},setTransition:function(e){x.params.scrollbar&&x.scrollbar.drag.transition(e)}},
/*=========================
          Controller
          ===========================*/
x.controller={LinearSpline:function(e,t){var n,a,i,r,o,s=function(e,t){for(a=-1,n=e.length;1<n-a;)e[i=n+a>>1]<=t?a=i:n=i;return n};this.x=e,this.y=t,this.lastIndex=e.length-1;this.x.length;this.interpolate=function(e){return e?(// Get the indexes of x1 and x3 (the array indexes before and after given x2):
o=s(this.x,e),r=o-1,(e-this.x[r])*(this.y[o]-this.y[r])/(this.x[o]-this.x[r])+this.y[r]):0}},
//xxx: for now i will just save one spline function to to
getInterpolateFunction:function(e){x.controller.spline||(x.controller.spline=x.params.loop?new x.controller.LinearSpline(x.slidesGrid,e.slidesGrid):new x.controller.LinearSpline(x.snapGrid,e.snapGrid))},setTranslate:function(t,e){var n,a,i=x.params.control;function r(e){
// this will create an Interpolate function based on the snapGrids
// x is the Grid of the scrolled scroller and y will be the controlled scroller
// it makes sense to create this only once and recall it for the interpolation
// the function does a lot of value caching for performance
t=e.rtl&&"horizontal"===e.params.direction?-x.translate:x.translate,"slide"===x.params.controlBy&&(x.controller.getInterpolateFunction(e),// i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
// but it did not work out
a=-x.controller.spline.interpolate(-t)),a&&"container"!==x.params.controlBy||(n=(e.maxTranslate()-e.minTranslate())/(x.maxTranslate()-x.minTranslate()),a=(t-x.minTranslate())*n+e.minTranslate()),x.params.controlInverse&&(a=e.maxTranslate()-a),e.updateProgress(a),e.setWrapperTranslate(a,!1,x),e.updateActiveIndex()}if(Array.isArray(i))for(var o=0;o<i.length;o++)i[o]!==e&&i[o]instanceof s&&r(i[o]);else i instanceof s&&e!==i&&r(i)},setTransition:function(t,e){var n,a=x.params.control;function i(e){e.setWrapperTransition(t,x),0!==t&&(e.onTransitionStart(),e.wrapper.transitionEnd(function(){a&&(e.params.loop&&"slide"===x.params.controlBy&&e.fixLoop(),e.onTransitionEnd())}))}if(Array.isArray(a))for(n=0;n<a.length;n++)a[n]!==e&&a[n]instanceof s&&i(a[n]);else a instanceof s&&e!==a&&i(a)}},
/*=========================
          Hash Navigation
          ===========================*/
x.hashnav={onHashCange:function(e,t){var n=document.location.hash.replace("#","");n!==x.slides.eq(x.activeIndex).attr("data-hash")&&x.slideTo(x.wrapper.children("."+x.params.slideClass+'[data-hash="'+n+'"]').index())},attachEvents:function(e){var t=e?"off":"on";H(window)[t]("hashchange",x.hashnav.onHashCange)},setHash:function(){if(x.hashnav.initialized&&x.params.hashnav)if(x.params.replaceState&&window.history&&window.history.replaceState)window.history.replaceState(null,null,"#"+x.slides.eq(x.activeIndex).attr("data-hash")||"");else{var e=x.slides.eq(x.activeIndex),t=e.attr("data-hash")||e.attr("data-history");document.location.hash=t||""}},init:function(){if(x.params.hashnav&&!x.params.history){x.hashnav.initialized=!0;var e=document.location.hash.replace("#","");if(e)for(var t=0,n=x.slides.length;t<n;t++){var a=x.slides.eq(t);if((a.attr("data-hash")||a.attr("data-history"))===e&&!a.hasClass(x.params.slideDuplicateClass)){var i=a.index();x.slideTo(i,0,x.params.runCallbacksOnInit,!0)}}x.params.hashnavWatchState&&x.hashnav.attachEvents()}},destroy:function(){x.params.hashnavWatchState&&x.hashnav.attachEvents(!0)}},
/*=========================
          History Api with fallback to Hashnav
          ===========================*/
x.history={init:function(){if(x.params.history){if(!window.history||!window.history.pushState)return x.params.history=!1,void(x.params.hashnav=!0);x.history.initialized=!0,this.paths=this.getPathValues(),(this.paths.key||this.paths.value)&&(this.scrollToSlide(0,this.paths.value,x.params.runCallbacksOnInit),x.params.replaceState||window.addEventListener("popstate",this.setHistoryPopState))}},setHistoryPopState:function(){x.history.paths=x.history.getPathValues(),x.history.scrollToSlide(x.params.speed,x.history.paths.value,!1)},getPathValues:function(){var e=window.location.pathname.slice(1).split("/"),t=e.length;return{key:e[t-2],value:e[t-1]}},setHistory:function(e,t){if(x.history.initialized&&x.params.history){var n=x.slides.eq(t),a=this.slugify(n.attr("data-history"));window.location.pathname.includes(e)||(a=e+"/"+a),x.params.replaceState?window.history.replaceState(null,null,a):window.history.pushState(null,null,a)}},slugify:function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,t,n){if(t)for(var a=0,i=x.slides.length;a<i;a++){var r=x.slides.eq(a);if(this.slugify(r.attr("data-history"))===t&&!r.hasClass(x.params.slideDuplicateClass)){var o=r.index();x.slideTo(o,e,n)}}else x.slideTo(0,e,n)}},x.disableKeyboardControl=function(){x.params.keyboardControl=!1,H(document).off("keydown",L)},x.enableKeyboardControl=function(){x.params.keyboardControl=!0,H(document).on("keydown",L)},
/*=========================
          Mousewheel Control
          ===========================*/
x.mousewheel={event:!1,lastScrollTime:(new window.Date).getTime()},x.params.mousewheelControl&&(
/**
           * The best combination if you prefer spinX + spinY normalization.  It favors
           * the older DOMMouseScroll for Firefox, as FF does not include wheelDelta with
           * 'wheel' event, making spin speed determination impossible.
           */
x.mousewheel.event=-1<navigator.userAgent.indexOf("firefox")?"DOMMouseScroll":function(){var e="onwheel",t=e in document;if(!t){var n=document.createElement("div");n.setAttribute(e,"return;"),t="function"==typeof n[e]}return!t&&document.implementation&&document.implementation.hasFeature&&// always returns true in newer browsers as per the standard.
// @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
!0!==document.implementation.hasFeature("","")&&(
// This is the only way to test support for the `wheel` event in IE9+.
t=document.implementation.hasFeature("Events.wheel","3.0")),t}
/**
         * Mouse wheel (and 2-finger trackpad) support on the web sucks.  It is
         * complicated, thus this doc is long and (hopefully) detailed enough to answer
         * your questions.
         *
         * If you need to react to the mouse wheel in a predictable way, this code is
         * like your bestest friend. * hugs *
         *
         * As of today, there are 4 DOM event types you can listen to:
         *
         *   'wheel'                -- Chrome(31+), FF(17+), IE(9+)
         *   'mousewheel'           -- Chrome, IE(6+), Opera, Safari
         *   'MozMousePixelScroll'  -- FF(3.5 only!) (2010-2013) -- don't bother!
         *   'DOMMouseScroll'       -- FF(0.9.7+) since 2003
         *
         * So what to do?  The is the best:
         *
         *   normalizeWheel.getEventType();
         *
         * In your event callback, use this code to get sane interpretation of the
         * deltas.  This code will return an object with properties:
         *
         *   spinX   -- normalized spin speed (use for zoom) - x plane
         *   spinY   -- " - y plane
         *   pixelX  -- normalized distance (to pixels) - x plane
         *   pixelY  -- " - y plane
         *
         * Wheel values are provided by the browser assuming you are using the wheel to
         * scroll a web page by a number of lines or pixels (or pages).  Values can vary
         * significantly on different platforms and browsers, forgetting that you can
         * scroll at different speeds.  Some devices (like trackpads) emit more events
         * at smaller increments with fine granularity, and some emit massive jumps with
         * linear speed or acceleration.
         *
         * This code does its best to normalize the deltas for you:
         *
         *   - spin is trying to normalize how far the wheel was spun (or trackpad
         *     dragged).  This is super useful for zoom support where you want to
         *     throw away the chunky scroll steps on the PC and make those equal to
         *     the slow and smooth tiny steps on the Mac. Key data: This code tries to
         *     resolve a single slow step on a wheel to 1.
         *
         *   - pixel is normalizing the desired scroll delta in pixel units.  You'll
         *     get the crazy differences between browsers, but at least it'll be in
         *     pixels!
         *
         *   - positive value indicates scrolling DOWN/RIGHT, negative UP/LEFT.  This
         *     should translate to positive value zooming IN, negative zooming OUT.
         *     This matches the newer 'wheel' event.
         *
         * Why are there spinX, spinY (or pixels)?
         *
         *   - spinX is a 2-finger side drag on the trackpad, and a shift + wheel turn
         *     with a mouse.  It results in side-scrolling in the browser by default.
         *
         *   - spinY is what you expect -- it's the classic axis of a mouse wheel.
         *
         *   - I dropped spinZ/pixelZ.  It is supported by the DOM 3 'wheel' event and
         *     probably is by browsers in conjunction with fancy 3D controllers .. but
         *     you know.
         *
         * Implementation info:
         *
         * Examples of 'wheel' event if you scroll slowly (down) by one step with an
         * average mouse:
         *
         *   OS X + Chrome  (mouse)     -    4   pixel delta  (wheelDelta -120)
         *   OS X + Safari  (mouse)     -  N/A   pixel delta  (wheelDelta  -12)
         *   OS X + Firefox (mouse)     -    0.1 line  delta  (wheelDelta  N/A)
         *   Win8 + Chrome  (mouse)     -  100   pixel delta  (wheelDelta -120)
         *   Win8 + Firefox (mouse)     -    3   line  delta  (wheelDelta -120)
         *
         * On the trackpad:
         *
         *   OS X + Chrome  (trackpad)  -    2   pixel delta  (wheelDelta   -6)
         *   OS X + Firefox (trackpad)  -    1   pixel delta  (wheelDelta  N/A)
         *
         * On other/older browsers.. it's more complicated as there can be multiple and
         * also missing delta values.
         *
         * The 'wheel' event is more standard:
         *
         * http://www.w3.org/TR/DOM-Level-3-Events/#events-wheelevents
         *
         * The basics is that it includes a unit, deltaMode (pixels, lines, pages), and
         * deltaX, deltaY and deltaZ.  Some browsers provide other values to maintain
         * backward compatibility with older events.  Those other values help us
         * better normalize spin speed.  Example of what the browsers provide:
         *
         *                          | event.wheelDelta | event.detail
         *        ------------------+------------------+--------------
         *          Safari v5/OS X  |       -120       |       0
         *          Safari v5/Win7  |       -120       |       0
         *         Chrome v17/OS X  |       -120       |       0
         *         Chrome v17/Win7  |       -120       |       0
         *                IE9/Win7  |       -120       |   undefined
         *         Firefox v4/OS X  |     undefined    |       1
         *         Firefox v4/Win7  |     undefined    |       3
         *
         */()?"wheel":"mousewheel"),x.disableMousewheelControl=function(){if(!x.mousewheel.event)return!1;var e=x.container;return"container"!==x.params.mousewheelEventsTarged&&(e=H(x.params.mousewheelEventsTarged)),e.off(x.mousewheel.event,N),!(x.params.mousewheelControl=!1)},x.enableMousewheelControl=function(){if(!x.mousewheel.event)return!1;var e=x.container;return"container"!==x.params.mousewheelEventsTarged&&(e=H(x.params.mousewheelEventsTarged)),e.on(x.mousewheel.event,N),x.params.mousewheelControl=!0},x.parallax={setTranslate:function(){x.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){O(this,x.progress)}),x.slides.each(function(){var e=H(this);e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){O(this,Math.min(Math.max(e[0].progress,-1),1))})})},setTransition:function(n){void 0===n&&(n=x.params.speed),x.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var e=H(this),t=parseInt(e.attr("data-swiper-parallax-duration"),10)||n;0===n&&(t=0),e.transition(t)})}},
/*=========================
          Zoom
          ===========================*/
x.zoom={
// "Global" Props
scale:1,currentScale:1,isScaling:!1,gesture:{slide:void 0,slideWidth:void 0,slideHeight:void 0,image:void 0,imageWrap:void 0,zoomMax:x.params.zoomMax},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0},
// Calc Scale From Multi-touches
getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var t=e.targetTouches[0].pageX,n=e.targetTouches[0].pageY,a=e.targetTouches[1].pageX,i=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(a-t,2)+Math.pow(i-n,2))},
// Events
onGestureStart:function(e){var t=x.zoom;if(!x.support.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;t.gesture.scaleStart=t.getDistanceBetweenTouches(e)}t.gesture.slide&&t.gesture.slide.length||(t.gesture.slide=H(this),0===t.gesture.slide.length&&(t.gesture.slide=x.slides.eq(x.activeIndex)),t.gesture.image=t.gesture.slide.find("img, svg, canvas"),t.gesture.imageWrap=t.gesture.image.parent("."+x.params.zoomContainerClass),t.gesture.zoomMax=t.gesture.imageWrap.attr("data-swiper-zoom")||x.params.zoomMax,0!==t.gesture.imageWrap.length)?(t.gesture.image.transition(0),t.isScaling=!0):t.gesture.image=void 0},onGestureChange:function(e){var t=x.zoom;if(!x.support.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;t.gesture.scaleMove=t.getDistanceBetweenTouches(e)}t.gesture.image&&0!==t.gesture.image.length&&(x.support.gestures?t.scale=e.scale*t.currentScale:t.scale=t.gesture.scaleMove/t.gesture.scaleStart*t.currentScale,t.scale>t.gesture.zoomMax&&(t.scale=t.gesture.zoomMax-1+Math.pow(t.scale-t.gesture.zoomMax+1,.5)),t.scale<x.params.zoomMin&&(t.scale=x.params.zoomMin+1-Math.pow(x.params.zoomMin-t.scale+1,.5)),t.gesture.image.transform("translate3d(0,0,0) scale("+t.scale+")"))},onGestureEnd:function(e){var t=x.zoom;!x.support.gestures&&("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2)||t.gesture.image&&0!==t.gesture.image.length&&(t.scale=Math.max(Math.min(t.scale,t.gesture.zoomMax),x.params.zoomMin),t.gesture.image.transition(x.params.speed).transform("translate3d(0,0,0) scale("+t.scale+")"),t.currentScale=t.scale,t.isScaling=!1,1===t.scale&&(t.gesture.slide=void 0))},onTouchStart:function(e,t){var n=e.zoom;n.gesture.image&&0!==n.gesture.image.length&&(n.image.isTouched||("android"===e.device.os&&t.preventDefault(),n.image.isTouched=!0,n.image.touchesStart.x="touchstart"===t.type?t.targetTouches[0].pageX:t.pageX,n.image.touchesStart.y="touchstart"===t.type?t.targetTouches[0].pageY:t.pageY))},onTouchMove:function(e){var t=x.zoom;if(t.gesture.image&&0!==t.gesture.image.length&&(x.allowClick=!1,t.image.isTouched&&t.gesture.slide)){t.image.isMoved||(t.image.width=t.gesture.image[0].offsetWidth,t.image.height=t.gesture.image[0].offsetHeight,t.image.startX=x.getTranslate(t.gesture.imageWrap[0],"x")||0,t.image.startY=x.getTranslate(t.gesture.imageWrap[0],"y")||0,t.gesture.slideWidth=t.gesture.slide[0].offsetWidth,t.gesture.slideHeight=t.gesture.slide[0].offsetHeight,t.gesture.imageWrap.transition(0),x.rtl&&(t.image.startX=-t.image.startX),x.rtl&&(t.image.startY=-t.image.startY));// Define if we need image drag
var n=t.image.width*t.scale,a=t.image.height*t.scale;if(!(n<t.gesture.slideWidth&&a<t.gesture.slideHeight)){if(t.image.minX=Math.min(t.gesture.slideWidth/2-n/2,0),t.image.maxX=-t.image.minX,t.image.minY=Math.min(t.gesture.slideHeight/2-a/2,0),t.image.maxY=-t.image.minY,t.image.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,t.image.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!t.image.isMoved&&!t.isScaling){if(x.isHorizontal()&&Math.floor(t.image.minX)===Math.floor(t.image.startX)&&t.image.touchesCurrent.x<t.image.touchesStart.x||Math.floor(t.image.maxX)===Math.floor(t.image.startX)&&t.image.touchesCurrent.x>t.image.touchesStart.x)return void(t.image.isTouched=!1);if(!x.isHorizontal()&&Math.floor(t.image.minY)===Math.floor(t.image.startY)&&t.image.touchesCurrent.y<t.image.touchesStart.y||Math.floor(t.image.maxY)===Math.floor(t.image.startY)&&t.image.touchesCurrent.y>t.image.touchesStart.y)return void(t.image.isTouched=!1)}e.preventDefault(),e.stopPropagation(),t.image.isMoved=!0,t.image.currentX=t.image.touchesCurrent.x-t.image.touchesStart.x+t.image.startX,t.image.currentY=t.image.touchesCurrent.y-t.image.touchesStart.y+t.image.startY,t.image.currentX<t.image.minX&&(t.image.currentX=t.image.minX+1-Math.pow(t.image.minX-t.image.currentX+1,.8)),t.image.currentX>t.image.maxX&&(t.image.currentX=t.image.maxX-1+Math.pow(t.image.currentX-t.image.maxX+1,.8)),t.image.currentY<t.image.minY&&(t.image.currentY=t.image.minY+1-Math.pow(t.image.minY-t.image.currentY+1,.8)),t.image.currentY>t.image.maxY&&(t.image.currentY=t.image.maxY-1+Math.pow(t.image.currentY-t.image.maxY+1,.8)),//Velocity
t.velocity.prevPositionX||(t.velocity.prevPositionX=t.image.touchesCurrent.x),t.velocity.prevPositionY||(t.velocity.prevPositionY=t.image.touchesCurrent.y),t.velocity.prevTime||(t.velocity.prevTime=Date.now()),t.velocity.x=(t.image.touchesCurrent.x-t.velocity.prevPositionX)/(Date.now()-t.velocity.prevTime)/2,t.velocity.y=(t.image.touchesCurrent.y-t.velocity.prevPositionY)/(Date.now()-t.velocity.prevTime)/2,Math.abs(t.image.touchesCurrent.x-t.velocity.prevPositionX)<2&&(t.velocity.x=0),Math.abs(t.image.touchesCurrent.y-t.velocity.prevPositionY)<2&&(t.velocity.y=0),t.velocity.prevPositionX=t.image.touchesCurrent.x,t.velocity.prevPositionY=t.image.touchesCurrent.y,t.velocity.prevTime=Date.now(),t.gesture.imageWrap.transform("translate3d("+t.image.currentX+"px, "+t.image.currentY+"px,0)")}}},onTouchEnd:function(e,t){var n=e.zoom;if(n.gesture.image&&0!==n.gesture.image.length){if(!n.image.isTouched||!n.image.isMoved)return n.image.isTouched=!1,void(n.image.isMoved=!1);n.image.isTouched=!1,n.image.isMoved=!1;var a=300,i=300,r=n.velocity.x*a,o=n.image.currentX+r,s=n.velocity.y*i,l=n.image.currentY+s;//Fix duration
0!==n.velocity.x&&(a=Math.abs((o-n.image.currentX)/n.velocity.x)),0!==n.velocity.y&&(i=Math.abs((l-n.image.currentY)/n.velocity.y));var u=Math.max(a,i);n.image.currentX=o,n.image.currentY=l;// Define if we need image drag
var p=n.image.width*n.scale,d=n.image.height*n.scale;n.image.minX=Math.min(n.gesture.slideWidth/2-p/2,0),n.image.maxX=-n.image.minX,n.image.minY=Math.min(n.gesture.slideHeight/2-d/2,0),n.image.maxY=-n.image.minY,n.image.currentX=Math.max(Math.min(n.image.currentX,n.image.maxX),n.image.minX),n.image.currentY=Math.max(Math.min(n.image.currentY,n.image.maxY),n.image.minY),n.gesture.imageWrap.transition(u).transform("translate3d("+n.image.currentX+"px, "+n.image.currentY+"px,0)")}},onTransitionEnd:function(e){var t=e.zoom;t.gesture.slide&&e.previousIndex!==e.activeIndex&&(t.gesture.image.transform("translate3d(0,0,0) scale(1)"),t.gesture.imageWrap.transform("translate3d(0,0,0)"),t.gesture.slide=t.gesture.image=t.gesture.imageWrap=void 0,t.scale=t.currentScale=1)},
// Toggle Zoom
toggleZoom:function(e,t){var n,a,i,r,o,s,l,u,p,d,c,f,h,m,g,v,y=e.zoom;(y.gesture.slide||(y.gesture.slide=e.clickedSlide?H(e.clickedSlide):e.slides.eq(e.activeIndex),y.gesture.image=y.gesture.slide.find("img, svg, canvas"),y.gesture.imageWrap=y.gesture.image.parent("."+e.params.zoomContainerClass)),y.gesture.image&&0!==y.gesture.image.length)&&(a=void 0===y.image.touchesStart.x&&t?(n="touchend"===t.type?t.changedTouches[0].pageX:t.pageX,"touchend"===t.type?t.changedTouches[0].pageY:t.pageY):(n=y.image.touchesStart.x,y.image.touchesStart.y),y.scale&&1!==y.scale?(
// Zoom Out
y.scale=y.currentScale=1,y.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"),y.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"),y.gesture.slide=void 0):(
// Zoom In
y.scale=y.currentScale=y.gesture.imageWrap.attr("data-swiper-zoom")||e.params.zoomMax,t?(g=y.gesture.slide[0].offsetWidth,v=y.gesture.slide[0].offsetHeight,i=y.gesture.slide.offset().left+g/2-n,r=y.gesture.slide.offset().top+v/2-a,l=y.gesture.image[0].offsetWidth,u=y.gesture.image[0].offsetHeight,p=l*y.scale,d=u*y.scale,h=-(c=Math.min(g/2-p/2,0)),m=-(f=Math.min(v/2-d/2,0)),(o=i*y.scale)<c&&(o=c),h<o&&(o=h),(s=r*y.scale)<f&&(s=f),m<s&&(s=m)):s=o=0,y.gesture.imageWrap.transition(300).transform("translate3d("+o+"px, "+s+"px,0)"),y.gesture.image.transition(300).transform("translate3d(0,0,0) scale("+y.scale+")")))},
// Attach/Detach Events
attachEvents:function(e){var n=e?"off":"on";if(x.params.zoom){x.slides;var t=!("touchstart"!==x.touchEvents.start||!x.support.passiveListener||!x.params.passiveListeners)&&{passive:!0,capture:!1};// Scale image
x.support.gestures?(x.slides[n]("gesturestart",x.zoom.onGestureStart,t),x.slides[n]("gesturechange",x.zoom.onGestureChange,t),x.slides[n]("gestureend",x.zoom.onGestureEnd,t)):"touchstart"===x.touchEvents.start&&(x.slides[n](x.touchEvents.start,x.zoom.onGestureStart,t),x.slides[n](x.touchEvents.move,x.zoom.onGestureChange,t),x.slides[n](x.touchEvents.end,x.zoom.onGestureEnd,t)),// Move image
x[n]("touchStart",x.zoom.onTouchStart),x.slides.each(function(e,t){0<H(t).find("."+x.params.zoomContainerClass).length&&H(t)[n](x.touchEvents.move,x.zoom.onTouchMove)}),x[n]("touchEnd",x.zoom.onTouchEnd),// Scale Out
x[n]("transitionEnd",x.zoom.onTransitionEnd),x.params.zoomToggle&&x.on("doubleTap",x.zoom.toggleZoom)}},init:function(){x.zoom.attachEvents()},destroy:function(){x.zoom.attachEvents(!0)}},
/*=========================
          Plugins API. Collect all and init all plugins
          ===========================*/
x._plugins=[],x.plugins){var v=x.plugins[g](x,x.params[g]);v&&x._plugins.push(v)}// Method to call all plugins event/method
// Return swiper instance
return x.callPlugins=function(e){for(var t=0;t<x._plugins.length;t++)e in x._plugins[t]&&x._plugins[t][e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},x.emitterEventListeners={},x.emit=function(e){var t;// Trigger events
if(
// Trigger callbacks
x.params[e]&&x.params[e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]),x.emitterEventListeners[e])for(t=0;t<x.emitterEventListeners[e].length;t++)x.emitterEventListeners[e][t](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);// Trigger plugins
x.callPlugins&&x.callPlugins(e,arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},x.on=function(e,t){return e=j(e),x.emitterEventListeners[e]||(x.emitterEventListeners[e]=[]),x.emitterEventListeners[e].push(t),x},x.off=function(e,t){var n;if(e=j(e),void 0===t)
// Remove all handlers for such event
return x.emitterEventListeners[e]=[],x;if(x.emitterEventListeners[e]&&0!==x.emitterEventListeners[e].length){for(n=0;n<x.emitterEventListeners[e].length;n++)x.emitterEventListeners[e][n]===t&&x.emitterEventListeners[e].splice(n,1);return x}},x.once=function(t,n){t=j(t);return x.on(t,function e(){n(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]),x.off(t,e)}),x},// Accessibility tools
x.a11y={makeFocusable:function(e){return e.attr("tabIndex","0"),e},addRole:function(e,t){return e.attr("role",t),e},addLabel:function(e,t){return e.attr("aria-label",t),e},disable:function(e){return e.attr("aria-disabled",!0),e},enable:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){13===e.keyCode&&(H(e.target).is(x.params.nextButton)?(x.onClickNext(e),x.isEnd?x.a11y.notify(x.params.lastSlideMessage):x.a11y.notify(x.params.nextSlideMessage)):H(e.target).is(x.params.prevButton)&&(x.onClickPrev(e),x.isBeginning?x.a11y.notify(x.params.firstSlideMessage):x.a11y.notify(x.params.prevSlideMessage)),H(e.target).is("."+x.params.bulletClass)&&H(e.target)[0].click())},liveRegion:H('<span class="'+x.params.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>'),notify:function(e){var t=x.a11y.liveRegion;0!==t.length&&(t.html(""),t.html(e))},init:function(){
// Setup accessibility
x.params.nextButton&&x.nextButton&&0<x.nextButton.length&&(x.a11y.makeFocusable(x.nextButton),x.a11y.addRole(x.nextButton,"button"),x.a11y.addLabel(x.nextButton,x.params.nextSlideMessage)),x.params.prevButton&&x.prevButton&&0<x.prevButton.length&&(x.a11y.makeFocusable(x.prevButton),x.a11y.addRole(x.prevButton,"button"),x.a11y.addLabel(x.prevButton,x.params.prevSlideMessage)),H(x.container).append(x.a11y.liveRegion)},initPagination:function(){x.params.pagination&&x.params.paginationClickable&&x.bullets&&x.bullets.length&&x.bullets.each(function(){var e=H(this);x.a11y.makeFocusable(e),x.a11y.addRole(e,"button"),x.a11y.addLabel(e,x.params.paginationBulletMessage.replace(/{{index}}/,e.index()+1))})},destroy:function(){x.a11y.liveRegion&&0<x.a11y.liveRegion.length&&x.a11y.liveRegion.remove()}},
/*=========================
          Init/Destroy
          ===========================*/
x.init=function(){x.params.loop&&x.createLoop(),x.updateContainerSize(),x.updateSlidesSize(),x.updatePagination(),x.params.scrollbar&&x.scrollbar&&(x.scrollbar.set(),x.params.scrollbarDraggable&&x.scrollbar.enableDraggable()),"slide"!==x.params.effect&&x.effects[x.params.effect]&&(x.params.loop||x.updateProgress(),x.effects[x.params.effect].setTranslate()),x.params.loop?x.slideTo(x.params.initialSlide+x.loopedSlides,0,x.params.runCallbacksOnInit):(x.slideTo(x.params.initialSlide,0,x.params.runCallbacksOnInit),0===x.params.initialSlide&&(x.parallax&&x.params.parallax&&x.parallax.setTranslate(),x.lazy&&x.params.lazyLoading&&(x.lazy.load(),x.lazy.initialImageLoaded=!0))),x.attachEvents(),x.params.observer&&x.support.observer&&x.initObservers(),x.params.preloadImages&&!x.params.lazyLoading&&x.preloadImages(),x.params.zoom&&x.zoom&&x.zoom.init(),x.params.autoplay&&x.startAutoplay(),x.params.keyboardControl&&x.enableKeyboardControl&&x.enableKeyboardControl(),x.params.mousewheelControl&&x.enableMousewheelControl&&x.enableMousewheelControl(),// Deprecated hashnavReplaceState changed to replaceState for use in hashnav and history
x.params.hashnavReplaceState&&(x.params.replaceState=x.params.hashnavReplaceState),x.params.history&&x.history&&x.history.init(),x.params.hashnav&&x.hashnav&&x.hashnav.init(),x.params.a11y&&x.a11y&&x.a11y.init(),x.emit("onInit",x)},// Cleanup dynamic styles
x.cleanupStyles=function(){
// Container
x.container.removeClass(x.classNames.join(" ")).removeAttr("style"),// Wrapper
x.wrapper.removeAttr("style"),// Slides
x.slides&&x.slides.length&&x.slides.removeClass([x.params.slideVisibleClass,x.params.slideActiveClass,x.params.slideNextClass,x.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),// Pagination/Bullets
x.paginationContainer&&x.paginationContainer.length&&x.paginationContainer.removeClass(x.params.paginationHiddenClass),x.bullets&&x.bullets.length&&x.bullets.removeClass(x.params.bulletActiveClass),// Buttons
x.params.prevButton&&H(x.params.prevButton).removeClass(x.params.buttonDisabledClass),x.params.nextButton&&H(x.params.nextButton).removeClass(x.params.buttonDisabledClass),// Scrollbar
x.params.scrollbar&&x.scrollbar&&(x.scrollbar.track&&x.scrollbar.track.length&&x.scrollbar.track.removeAttr("style"),x.scrollbar.drag&&x.scrollbar.drag.length&&x.scrollbar.drag.removeAttr("style"))},// Destroy
x.destroy=function(e,t){
// Detach evebts
x.detachEvents(),// Stop autoplay
x.stopAutoplay(),// Disable draggable
x.params.scrollbar&&x.scrollbar&&x.params.scrollbarDraggable&&x.scrollbar.disableDraggable(),// Destroy loop
x.params.loop&&x.destroyLoop(),// Cleanup styles
t&&x.cleanupStyles(),// Disconnect observer
x.disconnectObservers(),// Destroy zoom
x.params.zoom&&x.zoom&&x.zoom.destroy(),// Disable keyboard/mousewheel
x.params.keyboardControl&&x.disableKeyboardControl&&x.disableKeyboardControl(),x.params.mousewheelControl&&x.disableMousewheelControl&&x.disableMousewheelControl(),// Disable a11y
x.params.a11y&&x.a11y&&x.a11y.destroy(),// Delete history popstate
x.params.history&&!x.params.replaceState&&window.removeEventListener("popstate",x.history.setHistoryPopState),x.params.hashnav&&x.hashnav&&x.hashnav.destroy(),// Destroy callback
x.emit("onDestroy"),// Delete instance
!1!==e&&(x=null)},x.init(),x}
/*=========================
          Round helper
          ===========================*/
function y(e){return Math.floor(e)}function w(){var e=x.params.autoplay,t=x.slides.eq(x.activeIndex);t.attr("data-swiper-autoplay")&&(e=t.attr("data-swiper-autoplay")||x.params.autoplay),x.autoplayTimeoutId=setTimeout(function(){x.params.loop?(x.fixLoop(),x._slideNext(),x.emit("onAutoplay",x)):x.isEnd?l.autoplayStopOnLast?x.stopAutoplay():(x._slideTo(0),x.emit("onAutoplay",x)):(x._slideNext(),x.emit("onAutoplay",x))},e)}
/*=========================
          Handle Touches
          ===========================*/
function D(e,n){var t=H(e.target);if(!t.is(n))if("string"==typeof n)t=t.parents(n);else if(n.nodeType){var a;return t.parents().each(function(e,t){t===n&&(a=n)}),a?n:void 0}if(0!==t.length)return t[0]}function z(e,t){t=t||{};// create an observer instance
var n=new(window.MutationObserver||window.WebkitMutationObserver)(function(e){e.forEach(function(e){x.onResize(!0),x.emit("onObserverUpdate",x,e)})});n.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),x.observers.push(n)}
/*=========================
          Keyboard Control
          ===========================*/
function L(e){e.originalEvent&&(e=e.originalEvent);//jquery fix
var t=e.keyCode||e.charCode;// Directions locks
if(!x.params.allowSwipeToNext&&(x.isHorizontal()&&39===t||!x.isHorizontal()&&40===t))return!1;if(!x.params.allowSwipeToPrev&&(x.isHorizontal()&&37===t||!x.isHorizontal()&&38===t))return!1;if(!(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||document.activeElement&&document.activeElement.nodeName&&("input"===document.activeElement.nodeName.toLowerCase()||"textarea"===document.activeElement.nodeName.toLowerCase()))){if(37===t||39===t||38===t||40===t){var n=!1;//Check that swiper should be inside of visible area of window
if(0<x.container.parents("."+x.params.slideClass).length&&0===x.container.parents("."+x.params.slideActiveClass).length)return;var a=window.pageXOffset,i=window.pageYOffset,r=window.innerWidth,o=window.innerHeight,s=x.container.offset();x.rtl&&(s.left=s.left-x.container[0].scrollLeft);for(var l=[[s.left,s.top],[s.left+x.width,s.top],[s.left,s.top+x.height],[s.left+x.width,s.top+x.height]],u=0;u<l.length;u++){var p=l[u];p[0]>=a&&p[0]<=a+r&&p[1]>=i&&p[1]<=i+o&&(n=!0)}if(!n)return}x.isHorizontal()?(37!==t&&39!==t||(e.preventDefault?e.preventDefault():e.returnValue=!1),(39===t&&!x.rtl||37===t&&x.rtl)&&x.slideNext(),(37===t&&!x.rtl||39===t&&x.rtl)&&x.slidePrev()):(38!==t&&40!==t||(e.preventDefault?e.preventDefault():e.returnValue=!1),40===t&&x.slideNext(),38===t&&x.slidePrev()),x.emit("onKeyPress",x,t)}}function N(e){e.originalEvent&&(e=e.originalEvent);//jquery fix
var
/*object*/
t,n,a,
// spinX, spinY
i,r,o=0,s=x.rtl?-1:1,l=(r=i=a=n=0,// pixelX, pixelY
// Legacy
"detail"in(t=e)&&(a=t.detail),"wheelDelta"in t&&(a=-t.wheelDelta/120),"wheelDeltaY"in t&&(a=-t.wheelDeltaY/120),"wheelDeltaX"in t&&(n=-t.wheelDeltaX/120),// side scrolling on FF with DOMMouseScroll
"axis"in t&&t.axis===t.HORIZONTAL_AXIS&&(n=a,a=0),i=10*n,r=10*a,"deltaY"in t&&(r=t.deltaY),"deltaX"in t&&(i=t.deltaX),(i||r)&&t.deltaMode&&(1===t.deltaMode?(
// delta in LINE units
i*=40,r*=40):(
// delta in PAGE units
i*=800,r*=800)),// Fall-back if spin cannot be determined
i&&!n&&(n=i<1?-1:1),r&&!a&&(a=r<1?-1:1),{spinX:n,spinY:a,pixelX:i,pixelY:r});if(x.params.mousewheelForceToAxis)if(x.isHorizontal()){if(!(Math.abs(l.pixelX)>Math.abs(l.pixelY)))return;o=l.pixelX*s}else{if(!(Math.abs(l.pixelY)>Math.abs(l.pixelX)))return;o=l.pixelY}else o=Math.abs(l.pixelX)>Math.abs(l.pixelY)?-l.pixelX*s:-l.pixelY;if(0!==o){if(x.params.mousewheelInvert&&(o=-o),x.params.freeMode){
//Freemode or scrollContainer:
var u=x.getWrapperTranslate()+o*x.params.mousewheelSensitivity,p=x.isBeginning,d=x.isEnd;// Return page scroll on edge positions
if(u>=x.minTranslate()&&(u=x.minTranslate()),u<=x.maxTranslate()&&(u=x.maxTranslate()),x.setWrapperTransition(0),x.setWrapperTranslate(u),x.updateProgress(),x.updateActiveIndex(),(!p&&x.isBeginning||!d&&x.isEnd)&&x.updateClasses(),x.params.freeModeSticky?(clearTimeout(x.mousewheel.timeout),x.mousewheel.timeout=setTimeout(function(){x.slideReset()},300)):x.params.lazyLoading&&x.lazy&&x.lazy.load(),// Emit event
x.emit("onScroll",x,e),// Stop autoplay
x.params.autoplay&&x.params.autoplayDisableOnInteraction&&x.stopAutoplay(),0===u||u===x.maxTranslate())return}else{if(60<(new window.Date).getTime()-x.mousewheel.lastScrollTime)if(o<0)if(x.isEnd&&!x.params.loop||x.animating){if(x.params.mousewheelReleaseOnEdges)return!0}else x.slideNext(),x.emit("onScroll",x,e);else if(x.isBeginning&&!x.params.loop||x.animating){if(x.params.mousewheelReleaseOnEdges)return!0}else x.slidePrev(),x.emit("onScroll",x,e);x.mousewheel.lastScrollTime=(new window.Date).getTime()}return e.preventDefault?e.preventDefault():e.returnValue=!1,!1}}
/*=========================
          Parallax
          ===========================*/
function O(e,t){var n,a,i;e=H(e);var r=x.rtl?-1:1;n=e.attr("data-swiper-parallax")||"0",a=e.attr("data-swiper-parallax-x"),i=e.attr("data-swiper-parallax-y"),a||i?(a=a||"0",i=i||"0"):x.isHorizontal()?(a=n,i="0"):(i=n,a="0"),a=0<=a.indexOf("%")?parseInt(a,10)*t*r+"%":a*t*r+"px",i=0<=i.indexOf("%")?parseInt(i,10)*t+"%":i*t+"px",e.transform("translate3d("+a+", "+i+",0px)")}
/*=========================
          Events/Callbacks/Plugins Emitter
          ===========================*/
function j(e){return 0!==e.indexOf("on")&&(e=e[0]!==e[0].toUpperCase()?"on"+e[0].toUpperCase()+e.substring(1):"on"+e),e}};
/*===========================
      Swiper
      ===========================*/
/*==================================================
          Prototype
      ====================================================*/
l.prototype={isSafari:(s=window.navigator.userAgent.toLowerCase(),0<=s.indexOf("safari")&&s.indexOf("chrome")<0&&s.indexOf("android")<0),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},
/*==================================================
        Browser
        ====================================================*/
browser:{ie:window.navigator.pointerEnabled||window.navigator.msPointerEnabled,ieTouch:window.navigator.msPointerEnabled&&1<window.navigator.msMaxTouchPoints||window.navigator.pointerEnabled&&1<window.navigator.maxTouchPoints,lteIE9:(o=document.createElement("div"),// add content to tmp DIV which is wrapped into the IE HTML conditional statement
o.innerHTML="\x3c!--[if lte IE 9]><i></i><![endif]--\x3e",1===o.getElementsByTagName("i").length)},
/*==================================================
        Devices
        ====================================================*/
device:(t=window.navigator.userAgent,n=t.match(/(Android);?[\s\/]+([\d.]+)?/),a=t.match(/(iPad).*OS\s([\d_]+)/),i=t.match(/(iPod)(.*OS\s([\d_]+))?/),r=!a&&t.match(/(iPhone\sOS|iOS)\s([\d_]+)/),{ios:a||r||i,android:n}),
/*==================================================
        Feature Detection
        ====================================================*/
support:{touch:window.Modernizr&&!0===Modernizr.touch||!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch),transforms3d:window.Modernizr&&!0===Modernizr.csstransforms3d||(e=document.createElement("div").style,"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e),flexbox:function(){for(var e=document.createElement("div").style,t="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),n=0;n<t.length;n++)if(t[n]in e)return!0}(),observer:"MutationObserver"in window||"WebkitMutationObserver"in window,passiveListener:function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("testPassiveListener",null,t)}catch(e){}return e}(),gestures:"ongesturestart"in window},
/*==================================================
        Plugins
        ====================================================*/
plugins:{}};for(
/*===========================
       Get Dom libraries
       ===========================*/
var u,p=["jQuery","Zepto","Dom7"],d=0;d<p.length;d++)window[p[d]]&&c(window[p[d]]);// Required DOM Plugins
/*===========================
      Add .swiper plugin from Dom libraries
      ===========================*/
function c(e){e.fn.swiper=function(t){var n;return e(this).each(function(){var e=new l(this,t);n||(n=e)}),n}}(u="undefined"==typeof Dom7?window.Dom7||window.Zepto||window.jQuery:Dom7)&&("transitionEnd"in u.fn||(u.fn.transitionEnd=function(t){var n,a=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],i=this;function r(e){
/*jshint validthis:true */
if(e.target===this)for(t.call(this,e),n=0;n<a.length;n++)i.off(a[n],r)}if(t)for(n=0;n<a.length;n++)i.on(a[n],r);return this}),"transform"in u.fn||(u.fn.transform=function(e){for(var t=0;t<this.length;t++){var n=this[t].style;n.webkitTransform=n.MsTransform=n.msTransform=n.MozTransform=n.OTransform=n.transform=e}return this}),"transition"in u.fn||(u.fn.transition=function(e){"string"!=typeof e&&(e+="ms");for(var t=0;t<this.length;t++){var n=this[t].style;n.webkitTransitionDuration=n.MsTransitionDuration=n.msTransitionDuration=n.MozTransitionDuration=n.OTransitionDuration=n.transitionDuration=e}return this}),"outerWidth"in u.fn||(u.fn.outerWidth=function(e){return 0<this.length?e?this[0].offsetWidth+parseFloat(this.css("margin-right"))+parseFloat(this.css("margin-left")):this[0].offsetWidth:null})),window.Swiper=l}(),e.exports=window.Swiper});
/*
   *	jQuery dotdotdot 1.8.3
   *
   *	Copyright (c) Fred Heusschen
   *	www.frebsite.nl
   *
   *	Plugin website:
   *	dotdotdot.frebsite.nl
   *
   *	Licensed under the MIT license.
   *	http://en.wikipedia.org/wiki/MIT_License
   */
/*
   *	jQuery dotdotdot 1.8.3
   *
   *	Copyright (c) Fred Heusschen
   *	www.frebsite.nl
   *
   *	Plugin website:
   *	dotdotdot.frebsite.nl
   *
   *	Licensed under the MIT license.
   *	http://en.wikipedia.org/wiki/MIT_License
   */
!function(y,e){if(!y.fn.dotdotdot){y.fn.dotdotdot=function(e){if(0===this.length)return y.fn.dotdotdot.debug('No element found for "'+this.selector+'".'),this;if(1<this.length)return this.each(function(){y(this).dotdotdot(e)});var i=this,r=i.contents();i.data("dotdotdot")&&i.trigger("destroy.dot"),i.data("dotdotdot-style",i.attr("style")||""),i.css("word-wrap","break-word"),"nowrap"===i.css("white-space")&&i.css("white-space","normal"),i.bind_events=function(){return i.bind("update.dot",function(e,t){switch(i.removeClass("is-truncated"),e.preventDefault(),e.stopPropagation(),_t(o.height)){case"number":o.maxHeight=o.height;break;case"function":o.maxHeight=o.height.call(i[0]);break;default:o.maxHeight=function(e){for(var t=e.innerHeight(),n=["paddingTop","paddingBottom"],a=0,i=n.length;a<i;a++){var r=parseInt(e.css(n[a]),10);isNaN(r)&&(r=0),t-=r}return t}//	override jQuery.html
(i)}o.maxHeight+=o.tolerance,void 0!==t&&(("string"==typeof t||"nodeType"in t&&1===t.nodeType)&&(t=y("<div />").append(t).contents()),t instanceof y&&(r=t)),(u=i.wrapInner('<div class="dotdotdot" />').children()).contents().detach().end().append(r.clone(!0)).find("br").replaceWith("  <br />  ").end().css({height:"auto",width:"auto",border:"none",padding:0,margin:0});var n=!1,a=!1;return s.afterElement&&((n=s.afterElement.clone(!0)).show(),s.afterElement.detach()),w(u,o)&&(a="children"==o.wrap?function(e,t,n){var a=e.children(),i=!1;e.empty();for(var r=0,o=a.length;r<o;r++){var s=a.eq(r);if(e.append(s),n&&e.append(n),w(e,t)){s.remove(),i=!0;break}n&&n.detach()}return i}(u,o,n):function t(n,a,i,r,o){var s=!1;//	Don't put the ellipsis directly inside these elements
n.contents().detach().each(function(){var e=y(this);if(void 0===this)return!0;if(e.is("script, .dotdotdot-keep"))n.append(e);else{if(s)return!0;n.append(e),!o||e.is(r.after)||e.find(r.after).length||n[n.is("a, table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style")?"after":"append"](o),w(i,r)&&(s=3==this.nodeType?d(e,a,i,r,o):t(e,a,i,r,o)),s||o&&o.detach()}});a.addClass("is-truncated");return s}(u,i,u,o,n)),u.replaceWith(u.contents()),u=null,y.isFunction(o.callback)&&o.callback.call(i[0],a,r),s.isTruncated=a}).bind("isTruncated.dot",function(e,t){return e.preventDefault(),e.stopPropagation(),"function"==typeof t&&t.call(i[0],s.isTruncated),s.isTruncated}).bind("originalContent.dot",function(e,t){return e.preventDefault(),e.stopPropagation(),"function"==typeof t&&t.call(i[0],r),r}).bind("destroy.dot",function(e){e.preventDefault(),e.stopPropagation(),i.unwatch().unbind_events().contents().detach().end().append(r).attr("style",i.data("dotdotdot-style")||"").removeClass("is-truncated").data("dotdotdot",!1)}),i},//	/bind_events
i.unbind_events=function(){return i.unbind(".dot"),i},//	/unbind_events
i.watch=function(){if(i.unwatch(),"window"==o.watch){var e=y(window),t=e.width(),n=e.height();e.bind("resize.dot"+s.dotId,function(){t==e.width()&&n==e.height()&&o.windowResizeFix||(t=e.width(),n=e.height(),l&&clearInterval(l),l=setTimeout(function(){i.trigger("update.dot")},100))})}else a=c(i),l=setInterval(function(){if(i.is(":visible")){var e=c(i);a.width==e.width&&a.height==e.height||(i.trigger("update.dot"),a=e)}},500);return i},i.unwatch=function(){return y(window).unbind("resize.dot"+s.dotId),l&&clearInterval(l),i};var t,n,o=y.extend(!0,{},y.fn.dotdotdot.defaults,e),s={},a={},l=null,u=null;return o.lastCharacter.remove instanceof Array||(o.lastCharacter.remove=y.fn.dotdotdot.defaultArrays.lastCharacter.remove),o.lastCharacter.noEllipsis instanceof Array||(o.lastCharacter.noEllipsis=y.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis),s.afterElement=(t=o.after,n=i,!!t&&("string"!=typeof t?!!t.jquery&&t:!!(t=y(t,n)).length&&t)),s.isTruncated=!1,s.dotId=p++,i.data("dotdotdot",!0).bind_events().trigger("update.dot"),o.watch&&i.watch(),i},//	public
y.fn.dotdotdot.defaults={ellipsis:"... ",wrap:"word",fallbackToLetter:!0,lastCharacter:{},tolerance:0,callback:null,after:null,height:null,watch:!1,windowResizeFix:!0,maxLength:null},y.fn.dotdotdot.defaultArrays={lastCharacter:{remove:[" ","　",",",";",".","!","?"],noEllipsis:[]}},y.fn.dotdotdot.debug=function(e){};//	private
var p=1,t=y.fn.html;y.fn.html=function(e){return null!=e&&!y.isFunction(e)&&this.data("dotdotdot")?this.trigger("update",[e]):t.apply(this,arguments)};//	override jQuery.text
var n=y.fn.text;y.fn.text=function(e){return null!=e&&!y.isFunction(e)&&this.data("dotdotdot")?(e=y("<div />").text(e).html(),this.trigger("update",[e])):n.apply(this,arguments)}}function d(e,t,n,a,i){var r=e[0];if(!r)return!1;var o=T(r),s=-1!==o.indexOf(" ")?" ":"　",l="letter"==a.wrap?"":s,u=o.split(l),p=-1,d=-1,c=0,f=u.length-1;//	Only one word
if(a.fallbackToLetter&&0===c&&0===f&&(l="",f=(u=o.split(l)).length-1),a.maxLength)b(r,o=x(o.trim().substr(0,a.maxLength),a));else{for(;c<=f&&(0!==c||0!==f);){var h=Math.floor((c+f)/2);if(h==d)break;d=h,b(r,u.slice(0,d+1).join(l)+a.ellipsis),n.children().each(function(){y(this).toggle().toggle()}),w(n,a)?(f=d,//	Fallback to letter
a.fallbackToLetter&&0===c&&0===f&&(l="",d=p=-1,f=(u=u[c=0].split(l)).length-1)):c=p=d}if(-1==p||1===u.length&&0===u[0].length){var m=e.parent();e.detach();var g=i&&i.closest(m).length?i.length:0;if(m.contents().length>g?r=S(m.contents().eq(-1-g),t):(r=S(m,t,!0),g||m.detach()),r&&(b(r,o=x(T(r),a)),g&&i)){var v=i.parent();y(r).parent().append(i),y.trim(v.html())||v.remove()}}else b(r,o=x(u.slice(0,p+1).join(l),a))}return!0}function w(e,t){return e.innerHeight()>t.maxHeight||t.maxLength&&e.text().trim().length>t.maxLength}function x(e,t){for(;-1<y.inArray(e.slice(-1),t.lastCharacter.remove);)e=e.slice(0,-1);return y.inArray(e.slice(-1),t.lastCharacter.noEllipsis)<0&&(e+=t.ellipsis),e}function c(e){return{width:e.innerWidth(),height:e.innerHeight()}}function b(e,t){e.innerText?e.innerText=t:e.nodeValue?e.nodeValue=t:e.textContent&&(e.textContent=t)}function T(e){return e.innerText?e.innerText:e.nodeValue?e.nodeValue:e.textContent?e.textContent:""}function r(e){for(;(e=e.previousSibling)&&1!==e.nodeType&&3!==e.nodeType;);return e}function S(e,t,n){var a,i=e&&e[0];if(i){if(!n){if(3===i.nodeType)return i;if(y.trim(e.text()))return S(e.contents().last(),t)}for(a=r(i);!a;){if((e=e.parent()).is(t)||!e.length)return!1;a=r(e[0])}if(a)return S(y(a),t)}return!1}}(jQuery),
/*

  ## Automatic parsing for CSS classes
  Contributed by [Ramil Valitov](https://github.com/rvalitov)

  ### The idea
  You can add one or several CSS classes to HTML elements to automatically invoke "jQuery.dotdotdot functionality" and some extra features. It allows to use jQuery.dotdotdot only by adding appropriate CSS classes without JS programming.

  ### Available classes and their description
  * dot-ellipsis - automatically invoke jQuery.dotdotdot to this element. This class must be included if you plan to use other classes below.
  * dot-resize-update - automatically update if window resize event occurs. It's equivalent to option `watch:'window'`.
  * dot-timer-update - automatically update at regular intervals using setInterval. It's equivalent to option `watch:true`.
  * dot-load-update - automatically update after the window has beem completely rendered. Can be useful if your content is generated dynamically using using JS and, hence, jQuery.dotdotdot can't correctly detect the height of the element before it's rendered completely.
  * dot-height-XXX - available height of content area in pixels, where XXX is a number, e.g. can be `dot-height-35` if you want to set maximum height for 35 pixels. It's equivalent to option `height:'XXX'`.

  ### Usage examples
  *Adding jQuery.dotdotdot to element*

  	<div class="dot-ellipsis">
  	<p>Lorem Ipsum is simply dummy text.</p>
  	</div>

  *Adding jQuery.dotdotdot to element with update on window resize*

  	<div class="dot-ellipsis dot-resize-update">
  	<p>Lorem Ipsum is simply dummy text.</p>
  	</div>

  *Adding jQuery.dotdotdot to element with predefined height of 50px*

  	<div class="dot-ellipsis dot-height-50">
  	<p>Lorem Ipsum is simply dummy text.</p>
  	</div>

  */
jQuery(document).ready(function(r){
//We only invoke jQuery.dotdotdot on elements that have dot-ellipsis class
r(".dot-ellipsis").each(function(){
//Checking if update on window resize required
var e=r(this).hasClass("dot-resize-update"),t=r(this).hasClass("dot-timer-update"),a=0,n=r(this).attr("class").split(/\s+/);//Checking if update on timer required
r.each(n,function(e,t){var n=t.match(/^dot-height-(\d+)$/);null!==n&&(a=Number(n[1]))});//Invoking jQuery.dotdotdot
var i={};t&&(i.watch=!0),e&&(i.watch="window"),0<a&&(i.height=a),r(this).dotdotdot(i)})}),//Updating elements (if any) on window.load event
jQuery(window).on("load",function(){jQuery(".dot-ellipsis.dot-load-update").trigger("update.dot")});var R,B,$;
/*
  	By André Rinas, www.andrerinas.de
  	Available for use under the MIT License
  	1.12.1
  */e(function(i){
/**
     * Simple, lightweight, usable local autocomplete library for modern browsers
     * Because there weren’t enough autocomplete scripts in the world? Because I’m completely insane and have NIH syndrome? Probably both. :P
     * @author Lea Verou http://leaverou.github.io/awesomplete
     * MIT license
     */
!function(){var n=function e(t,n){var a=this;// Setup
this.isOpened=!1,this.input=o(t),this.input.setAttribute("autocomplete","off"),this.input.setAttribute("aria-autocomplete","list"),function(e,t,n){for(var a in t){var i=t[a],r=e.input.getAttribute("data-"+a.toLowerCase());"number"==typeof i?e[a]=parseInt(r):!1===i?
// Boolean options must be false by default anyway
e[a]=null!==r:i instanceof Function?e[a]=null:e[a]=r,e[a]||0===e[a]||(e[a]=a in n?n[a]:i)}}// Helpers
(this,{minChars:2,maxItems:10,autoFirst:!1,data:e.DATA,filter:e.FILTER_CONTAINS,sort:!1!==(n=n||{}).sort&&e.SORT_BYLENGTH,item:e.ITEM,replace:e.REPLACE},n),this.index=-1,// Create necessary elements
this.container=o.create("div",{className:"awesomplete",around:t}),this.ul=o.create("ul",{hidden:"hidden",inside:this.container}),this.status=o.create("span",{className:"visually-hidden",role:"status","aria-live":"assertive","aria-relevant":"additions",inside:this.container}),// Bind events
this._events={input:{input:this.evaluate.bind(this),blur:this.close.bind(this,{reason:"blur"}),keydown:function(e){var t=e.keyCode;// If the dropdown `ul` is in view, then act on keydown for the following keys:
// Enter / Esc / Up / Down
a.opened&&(13===t&&a.selected?(
// Enter
e.preventDefault(),a.select()):27===t?
// Esc
a.close({reason:"esc"}):38!==t&&40!==t||(
// Down/Up arrow
e.preventDefault(),a[38===t?"previous":"next"]()))}},form:{submit:this.close.bind(this,{reason:"submit"})},ul:{mousedown:function(e){var t=e.target;if(t!==this){for(;t&&!/li/i.test(t.nodeName);)t=t.parentNode;t&&0===e.button&&(
// Only select on left click
e.preventDefault(),a.select(t,e.target))}}}},o.bind(this.input,this._events.input),o.bind(this.input.form,this._events.form),o.bind(this.ul,this._events.ul),this.input.hasAttribute("list")?(this.list="#"+this.input.getAttribute("list"),this.input.removeAttribute("list")):this.list=this.input.getAttribute("data-list")||n.list||[],e.all.push(this)};// Private functions
function a(e){var t=Array.isArray(e)?{label:e[0],value:e[1]}:"object"===_t(e)&&"label"in e&&"value"in e?e:{label:e,value:e};this.label=t.label||t.value,this.value=t.value}n.prototype={set list(e){if(Array.isArray(e))this._list=e;else if("string"==typeof e&&-1<e.indexOf(","))this._list=e.split(/\s*,\s*/);else if((
// Element or CSS selector
e=o(e))&&e.children){var i=[];r.apply(e.children).forEach(function(e){if(!e.disabled){var t=e.textContent.trim(),n=e.value||t,a=e.label||t;""!==n&&i.push({label:a,value:n})}}),this._list=i}document.activeElement===this.input&&this.evaluate()},get selected(){return-1<this.index},get opened(){return this.isOpened},close:function(e){this.opened&&(this.ul.setAttribute("hidden",""),this.isOpened=!1,this.index=-1,o.fire(this.input,"awesomplete-close",e||{}))},open:function(){this.ul.removeAttribute("hidden"),this.isOpened=!0,this.autoFirst&&-1===this.index&&this.goto(0),o.fire(this.input,"awesomplete-open")},destroy:function(){
//remove events from the input and its form
o.unbind(this.input,this._events.input),o.unbind(this.input.form,this._events.form);//move the input out of the awesomplete container and remove the container and its children
var e=this.container.parentNode;e.insertBefore(this.input,this.container),e.removeChild(this.container),//remove autocomplete and aria-autocomplete attributes
this.input.removeAttribute("autocomplete"),this.input.removeAttribute("aria-autocomplete");//remove this awesomeplete instance from the global array of instances
var t=n.all.indexOf(this);-1!==t&&n.all.splice(t,1)},next:function(){var e=this.ul.children.length;this.goto(this.index<e-1?this.index+1:e?0:-1)},previous:function(){var e=this.ul.children.length,t=this.index-1;this.goto(this.selected&&-1!==t?t:e-1)},
// Should not be used, highlights specific item without any checks!
goto:function(e){var t=this.ul.children;this.selected&&t[this.index].setAttribute("aria-selected","false"),-1<(this.index=e)&&0<t.length&&(t[e].setAttribute("aria-selected","true"),this.status.textContent=t[e].textContent,// scroll to highlighted element in case parent's height is fixed
this.ul.scrollTop=t[e].offsetTop-this.ul.clientHeight+t[e].clientHeight,o.fire(this.input,"awesomplete-highlight",{text:this.suggestions[this.index]}))},select:function(e,t){if(e?this.index=o.siblingIndex(e):e=this.ul.children[this.index],e){var n=this.suggestions[this.index];o.fire(this.input,"awesomplete-select",{text:n,origin:t||e})&&(this.replace(n),this.close({reason:"select"}),o.fire(this.input,"awesomplete-selectcomplete",{text:n}))}},evaluate:function(){var t=this,n=this.input.value;n.length>=this.minChars&&0<this._list.length?(this.index=-1,// Populate list with options that match
this.ul.innerHTML="",this.suggestions=this._list.map(function(e){return new a(t.data(e,n))}).filter(function(e){return t.filter(e,n)}),!1!==this.sort&&(this.suggestions=this.suggestions.sort(this.sort)),this.suggestions=this.suggestions.slice(0,this.maxItems),this.suggestions.forEach(function(e){t.ul.appendChild(t.item(e,n))}),0===this.ul.children.length?this.close({reason:"nomatches"}):this.open()):this.close({reason:"nomatches"})}},// Static methods/properties
n.all=[],n.FILTER_CONTAINS=function(e,t){return RegExp(o.regExpEscape(t.trim()),"i").test(e)},n.FILTER_STARTSWITH=function(e,t){return RegExp("^"+o.regExpEscape(t.trim()),"i").test(e)},n.SORT_BYLENGTH=function(e,t){return e.length!==t.length?e.length-t.length:e<t?-1:1},n.ITEM=function(e,t){var n=""===t.trim()?e:e.replace(RegExp(o.regExpEscape(t.trim()),"gi"),"<mark>$&</mark>");return o.create("li",{innerHTML:n,"aria-selected":"false"})},n.REPLACE=function(e){this.input.value=e.value},n.DATA=function(e
/*, input*/){return e},Object.defineProperty(a.prototype=Object.create(String.prototype),"length",{get:function(){return this.label.length}}),a.prototype.toString=a.prototype.valueOf=function(){return""+this.label};var r=Array.prototype.slice;function o(e,t){return"string"==typeof e?(t||document).querySelector(e):e||null}function e(e,t){return r.call((t||document).querySelectorAll(e))}// Initialization
function t(){e("input.awesomplete").forEach(function(e){new n(e)})}// Are we in a browser? Check for Document constructor
o.create=function(e,t){var n=document.createElement(e);for(var a in t){var i=t[a];if("inside"===a)o(i).appendChild(n);else if("around"===a){var r=o(i);r.parentNode.insertBefore(n,r),n.appendChild(r)}else a in n?n[a]=i:n.setAttribute(a,i)}return n},o.bind=function(t,e){if(t)for(var n in e){var a=e[n];n.split(/\s+/).forEach(function(e){t.addEventListener(e,a)})}},o.unbind=function(t,e){if(t)for(var n in e){var a=e[n];n.split(/\s+/).forEach(function(e){t.removeEventListener(e,a)})}},o.fire=function(e,t,n){var a=document.createEvent("HTMLEvents");for(var i in a.initEvent(t,!0,!0),n)a[i]=n[i];return e.dispatchEvent(a)},o.regExpEscape=function(e){return e.replace(/[-\\^$*+?.()|[\]{}]/g,"\\$&")},o.siblingIndex=function(e){
/* eslint-disable no-cond-assign */
for(var t=0;e=e.previousElementSibling;t++);return t},"undefined"!=typeof Document&&(
// DOM already loaded?
"loading"!==document.readyState?t():
// Wait for it
document.addEventListener("DOMContentLoaded",t)),n.$=o,n.$$=e,// Make sure to export Awesomplete on self when in a browser
"undefined"!=typeof self&&(self.Awesomplete=n),// Expose Awesomplete as a CJS module
i.exports&&(i.exports=n)}()});
/*
  	By André Rinas, www.andrerinas.de
  	Available for use under the MIT License
  	1.12.1
  */
R=jQuery,B=window,$=document,R.fn.simpleLightbox=function(p){p=R.extend({sourceAttr:"href",overlay:!0,spinner:!0,nav:!0,navText:["&lsaquo;","&rsaquo;"],captions:!0,captionDelay:0,captionSelector:"img",captionType:"attr",captionsData:"title",captionPosition:"bottom",captionClass:"",close:!0,closeText:"×",swipeClose:!0,showCounter:!0,fileExt:"png|jpg|jpeg|gif",animationSlide:!0,animationSpeed:250,preloading:!0,enableKeyboard:!0,loop:!0,rel:!1,docClose:!0,swipeTolerance:50,className:"simple-lightbox",widthRatio:.8,heightRatio:.9,disableRightClick:!1,disableScroll:!0,alertError:!0,alertErrorMessage:"Image not found, next image will be loaded",additionalHtml:!1,history:!0},p),B.navigator.pointerEnabled||B.navigator.msPointerEnabled;var d,e,s=0,l=0,c=R(),a=function(){var e=$.body||$.documentElement;return""===(e=e.style).WebkitTransition?"-webkit-":""===e.MozTransition?"-moz-":""===e.OTransition?"-o-":""===e.transition&&""},f=!1,h=[],m=p.rel&&!1!==p.rel?(e=p.rel,R(this.selector).filter(function(){return R(this).attr("rel")===e})):this,g=(a=a(),0),v=!1!==a,n="pushState"in history,y=!1,i=B.location,u=function(){return i.hash.substring(1)},w=u(),x=function(){u();var e="pid="+(E+1),t=i.href.split("#")[0]+"#"+e;n?history[y?"replaceState":"pushState"]("",$.title,t):y?i.replace(t):i.hash=e,y=!0},b="simplelb",t=R("<div>").addClass("sl-overlay"),r=R("<button>").addClass("sl-close").html(p.closeText),T=R("<div>").addClass("sl-spinner").html("<div></div>"),S=R("<div>").addClass("sl-navigation").html('<button class="sl-prev">'+p.navText[0]+'</button><button class="sl-next">'+p.navText[1]+"</button>"),o=R("<div>").addClass("sl-counter").html('<span class="sl-current"></span>/<span class="sl-total"></span>'),C=!1,E=0,k=R("<div>").addClass("sl-caption "+p.captionClass+" pos-"+p.captionPosition),I=R("<div>").addClass("sl-image"),P=R("<div>").addClass("sl-wrapper").addClass(p.className),M=function(e){e.trigger(R.Event("show.simplelightbox")),p.disableScroll&&(g=H("hide")),P.appendTo("body"),I.appendTo(P),p.overlay&&t.appendTo(R("body")),C=!0,E=m.index(e),c=R("<img/>").hide().attr("src",e.attr(p.sourceAttr)),-1==h.indexOf(e.attr(p.sourceAttr))&&h.push(e.attr(p.sourceAttr)),I.html("").attr("style",""),c.appendTo(I),L(),t.fadeIn("fast"),R(".sl-close").fadeIn("fast"),T.show(),S.fadeIn("fast"),R(".sl-wrapper .sl-counter .sl-current").text(E+1),o.fadeIn("fast"),A(),p.preloading&&N(),setTimeout(function(){e.trigger(R.Event("shown.simplelightbox"))},p.animationSpeed)},A=function(o){if(c.length){var s=new Image,l=R(B).width()*p.widthRatio,u=R(B).height()*p.heightRatio;s.src=c.attr("src"),R(s).on("error",function(e){
//no image was found
m.eq(E).trigger(R.Event("error.simplelightbox")),f=!(C=!1),T.hide(),p.alertError&&alert(p.alertErrorMessage),O(1==o||-1==o?o:1)}),s.onload=function(){void 0!==o&&m.eq(E).trigger(R.Event("changed.simplelightbox")).trigger(R.Event((1===o?"nextDone":"prevDone")+".simplelightbox")),// history
p.history&&(y?d=setTimeout(x,800):x()),-1==h.indexOf(c.attr("src"))&&h.push(c.attr("src"));var e=s.width,t=s.height;if(l<e||u<t){var n=l/u<e/t?e/l:t/u;e/=n,t/=n}R(".sl-image").css({top:(R(B).height()-t)/2+"px",left:(R(B).width()-e-g)/2+"px"}),T.hide(),c.css({width:e+"px",height:t+"px"}).fadeIn("fast"),f=!0;var a,i="self"==p.captionSelector?m.eq(E):m.eq(E).find(p.captionSelector);if(a="data"==p.captionType?i.data(p.captionsData):"text"==p.captionType?i.html():i.prop(p.captionsData),p.loop||(0===E&&R(".sl-prev").hide(),E>=m.length-1&&R(".sl-next").hide(),0<E&&R(".sl-prev").show(),E<m.length-1&&R(".sl-next").show()),1==m.length&&R(".sl-prev, .sl-next").hide(),1==o||-1==o){var r={opacity:1};p.animationSlide&&(v?(z(0,100*o+"px"),setTimeout(function(){z(p.animationSpeed/1e3,"0px")},50)):r.left=parseInt(R(".sl-image").css("left"))+100*o+"px"),R(".sl-image").animate(r,p.animationSpeed,function(){C=!1,D(a)})}else C=!1,D(a);p.additionalHtml&&0===R(".sl-additional-html").length&&R("<div>").html(p.additionalHtml).addClass("sl-additional-html").appendTo(R(".sl-image"))}}},D=function(e){""!==e&&void 0!==e&&p.captions&&k.html(e).hide().appendTo(R(".sl-image")).delay(p.captionDelay).fadeIn("fast")},z=function(e,t){var n={};n[a+"transform"]="translateX("+t+")",n[a+"transition"]=a+"transform "+e+"s linear",R(".sl-image").css(n)},L=function(){
// resize/responsive
R(B).on("resize."+b,A),// close lightbox on close btn
R($).on("click."+b+" touchstart."+b,".sl-close",function(e){e.preventDefault(),f&&j()}),p.history&&setTimeout(function(){R(B).on("hashchange."+b,function(){f&&u()===w&&j()})},40),// nav-buttons
S.on("click."+b,"button",function(e){e.preventDefault(),s=0,O(R(this).hasClass("sl-next")?1:-1)});// touchcontrols
var t=0,n=0,a=0,i=0,r=!1,o=0;I.on("touchstart."+b+" mousedown."+b,function(e){return!!r||(v&&(o=parseInt(I.css("left"))),r=!0,l=s=0,t=e.originalEvent.pageX||e.originalEvent.touches[0].pageX,a=e.originalEvent.pageY||e.originalEvent.touches[0].pageY,!1)}).on("touchmove."+b+" mousemove."+b+" pointermove MSPointerMove",function(e){if(!r)return!0;e.preventDefault(),n=e.originalEvent.pageX||e.originalEvent.touches[0].pageX,i=e.originalEvent.pageY||e.originalEvent.touches[0].pageY,s=t-n,l=a-i,p.animationSlide&&(v?z(0,-s+"px"):I.css("left",o-s+"px"))}).on("touchend."+b+" mouseup."+b+" touchcancel."+b+" mouseleave."+b+" pointerup pointercancel MSPointerUp MSPointerCancel",function(e){if(r){var t=!(r=!1);p.loop||(0===E&&s<0&&(t=!1),E>=m.length-1&&0<s&&(t=!1)),Math.abs(s)>p.swipeTolerance&&t?O(0<s?1:-1):p.animationSlide&&(v?z(p.animationSpeed/1e3,"0px"):I.animate({left:o+"px"},p.animationSpeed/2)),p.swipeClose&&50<Math.abs(l)&&Math.abs(s)<p.swipeTolerance&&j()}})},N=function(){var e=E+1<0?m.length-1:E+1>=m.length-1?0:E+1,t=E-1<0?m.length-1:E-1>=m.length-1?0:E-1;R("<img />").attr("src",m.eq(e).attr(p.sourceAttr)).on("load",function(){-1==h.indexOf(R(this).attr("src"))&&h.push(R(this).attr("src")),m.eq(E).trigger(R.Event("nextImageLoaded.simplelightbox"))}),R("<img />").attr("src",m.eq(t).attr(p.sourceAttr)).on("load",function(){-1==h.indexOf(R(this).attr("src"))&&h.push(R(this).attr("src")),m.eq(E).trigger(R.Event("prevImageLoaded.simplelightbox"))})},O=function(t){m.eq(E).trigger(R.Event("change.simplelightbox")).trigger(R.Event((1===t?"next":"prev")+".simplelightbox"));var e=E+t;if(!(C||(e<0||e>=m.length)&&!1===p.loop)){E=e<0?m.length-1:e>m.length-1?0:e,R(".sl-wrapper .sl-counter .sl-current").text(E+1);var n={opacity:0};p.animationSlide&&(v?z(p.animationSpeed/1e3,-100*t-s+"px"):n.left=parseInt(R(".sl-image").css("left"))+-100*t+"px"),R(".sl-image").animate(n,p.animationSpeed,function(){setTimeout(function(){
// fadeout old image
var e=m.eq(E);c.attr("src",e.attr(p.sourceAttr)),-1==h.indexOf(e.attr(p.sourceAttr))&&T.show(),R(".sl-caption").remove(),A(t),p.preloading&&N()},100)})}},j=function(){if(!C){var e=m.eq(E),t=!1;e.trigger(R.Event("close.simplelightbox")),p.history&&(n?history.pushState("",$.title,i.pathname+i.search):i.hash="",clearTimeout(d)),R(".sl-image img, .sl-overlay, .sl-close, .sl-navigation, .sl-image .sl-caption, .sl-counter").fadeOut("fast",function(){p.disableScroll&&H("show"),R(".sl-wrapper, .sl-overlay").remove(),S.off("click","button"),R($).off("click."+b,".sl-close"),R(B).off("resize."+b),R(B).off("hashchange."+b),t||e.trigger(R.Event("closed.simplelightbox")),t=!0}),c=R(),C=f=!1}},H=function(e){var t=0;if("hide"==e){var n=B.innerWidth;if(!n){var a=$.documentElement.getBoundingClientRect();n=a.right-Math.abs(a.left)}if($.body.clientWidth<n){var i=$.createElement("div"),r=parseInt(R("body").css("padding-right"),10);i.className="sl-scrollbar-measure",R("body").append(i),t=i.offsetWidth-i.clientWidth,R($.body)[0].removeChild(i),R("body").data("padding",r),0<t&&R("body").addClass("hidden-scroll").css({"padding-right":r+t})}}else R("body").removeClass("hidden-scroll").css({"padding-right":R("body").data("padding")});return t};// global variables
return p.close&&r.appendTo(P),p.showCounter&&1<m.length&&(o.appendTo(P),o.find(".sl-total").text(m.length)),p.nav&&S.appendTo(P),p.spinner&&T.appendTo(P),// open lightbox
m.on("click."+b,function(e){if(function(e){if(!p.fileExt)return!0;var t=R(e).attr(p.sourceAttr).match(/\.([0-9a-z]+)(?=[?#])|(\.)(?:[\w]+)$/gim);return t&&"a"==R(e).prop("tagName").toLowerCase()&&new RegExp(".("+p.fileExt+")$","i").test(t)}(this)){if(e.preventDefault(),C)return!1;M(R(this))}}),// close on click on doc
R($).on("click."+b+" touchstart."+b,function(e){f&&p.docClose&&0===R(e.target).closest(".sl-image").length&&0===R(e.target).closest(".sl-navigation").length&&j()}),// disable rightclick
p.disableRightClick&&R($).on("contextmenu",".sl-image img",function(e){return!1}),// keyboard-control
p.enableKeyboard&&R($).on("keyup."+b,function(e){// keyboard control only if lightbox is open
if(s=0,f){e.preventDefault();var t=e.keyCode;27==t&&j(),37!=t&&39!=e.keyCode||O(39==e.keyCode?1:-1)}}),// Public methods
this.open=function(e){e=e||R(this[0]),M(e)},this.next=function(){O(1)},this.prev=function(){O(-1)},this.close=function(){j()},this.destroy=function(){R($).off("click."+b).off("keyup."+b),j(),R(".sl-overlay, .sl-wrapper").remove(),this.off("click")},this.refresh=function(){this.destroy(),R(this).simpleLightbox(p)},this},
/*!
   * Name    : Just Another Parallax [Jarallax]
   * Version : 1.10.3
   * Author  : nK <https://nkdev.info>
   * GitHub  : https://github.com/nk-o/jarallax
   */
/******/
function(n){
// webpackBootstrap
/******/
// The module cache
/******/
var a={};
/******/
/******/
// The require function
/******/function i(e){
/******/
/******/
// Check if module is in cache
/******/
if(a[e])
/******/
return a[e].exports;
/******/
/******/
// Create a new module (and put it into the cache)
/******/var t=a[e]={
/******/
i:e,
/******/
l:!1,
/******/
exports:{}
/******/};
/******/
/******/
// Execute the module function
/******/
/******/
/******/
// Return the exports of the module
/******/
return n[e].call(t.exports,t,t.exports,i),
/******/
/******/
// Flag the module as loaded
/******/
t.l=!0,t.exports;
/******/}
/******/
/******/
/******/
// expose the modules object (__webpack_modules__)
/******/
/******/
/******/
// Load entry module and return exports
/******/
i.m=n,
/******/
/******/
// expose the module cache
/******/
i.c=a,
/******/
/******/
// define getter function for harmony exports
/******/
i.d=function(e,t,n){
/******/
i.o(e,t)||
/******/
Object.defineProperty(e,t,{
/******/
configurable:!1,
/******/
enumerable:!0,
/******/
get:n
/******/})
/******/},
/******/
/******/
// getDefaultExport function for compatibility with non-harmony modules
/******/
i.n=function(e){
/******/
var t=e&&e.__esModule?
/******/
function(){return e.default}:
/******/
function(){return e};
/******/
/******/
return i.d(t,"a",t),t;
/******/},
/******/
/******/
// Object.prototype.hasOwnProperty.call
/******/
i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},
/******/
/******/
// __webpack_public_path__
/******/
i.p="",i(i.s=11);
/******/}(
/************************************************************************/
/******/
[
/* 0 */
/***/
function(n,e,t){
/* WEBPACK VAR INJECTION */
(function(e){var t;t="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},n.exports=t}).call(e,t(2));
/***/},
/* 1 */
/***/
function(e,t,n){e.exports=function(e){"complete"===document.readyState||"interactive"===document.readyState?
// Already ready or interactive, execute callback
e.call():document.attachEvent?
// Old browsers
document.attachEvent("onreadystatechange",function(){"interactive"===document.readyState&&e.call()}):document.addEventListener&&
// Modern browsers
document.addEventListener("DOMContentLoaded",e)};
/***/},
/* 2 */
/***/
function(e,t,n){var a,i="function"==typeof Symbol&&"symbol"===_t(Symbol.iterator)?function(e){return _t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_t(e)};// This works in non-strict mode
a=function(){return this}();try{
// This works if eval is allowed (see CSP)
a=a||Function("return this")()||(0,eval)("this")}catch(e){
// This works if the window reference is available
"object"===("undefined"==typeof window?"undefined":i(window))&&(a=window)}// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}
e.exports=a},,,,,,,,
/* 3 */
/* 4 */
/* 5 */
/* 6 */
/* 7 */
/* 8 */
/* 9 */
/* 10 */
/* 11 */
/***/,function(e,t,n){e.exports=n(12);
/***/},
/* 12 */
/***/
function(e,t,n){var a="function"==typeof Symbol&&"symbol"===_t(Symbol.iterator)?function(e){return _t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_t(e)},i=s(n(1)),r=n(0),o=s(n(13));function s(e){return e&&e.__esModule?e:{default:e}}// no conflict
var l=r.window.jarallax;// jQuery support
if(r.window.jarallax=o.default,r.window.jarallax.noConflict=function(){return r.window.jarallax=l,this},void 0!==r.jQuery){var u=function(){var e=arguments||[];Array.prototype.unshift.call(e,this);var t=o.default.apply(r.window,e);return"object"!==(void 0===t?"undefined":a(t))?t:this};u.constructor=o.default.constructor;// no conflict
var p=r.jQuery.fn.jarallax;r.jQuery.fn.jarallax=u,r.jQuery.fn.jarallax.noConflict=function(){return r.jQuery.fn.jarallax=p,this}}// data-jarallax initialization
// data-jarallax initialization
(0,i.default)(function(){(0,o.default)(document.querySelectorAll("[data-jarallax]"))})},
/* 13 */
/***/
function(e,T,S){
/* WEBPACK VAR INJECTION */
(function(e){Object.defineProperty(T,"__esModule",{value:!0});var d=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,i=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){i=!0,r=e}finally{try{!a&&s.return&&s.return()}finally{if(i)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},t=function(){function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}}(),c="function"==typeof Symbol&&"symbol"===_t(Symbol.iterator)?function(e){return _t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_t(e)},n=r(S(1)),a=r(S(14)),i=S(0);function r(e){return e&&e.__esModule?e:{default:e}}var o=function(){for(var e="transform WebkitTransform MozTransform".split(" "),t=document.createElement("div"),n=0;n<e.length;n++)if(t&&void 0!==t.style[e[n]])return e[n];return!1}(),v=void 0,y=void 0,s=void 0,l=!1,u=!1;// Window data
function p(e){v=i.window.innerWidth||document.documentElement.clientWidth,y=i.window.innerHeight||document.documentElement.clientHeight,"object"!==(void 0===e?"undefined":c(e))||"load"!==e.type&&"dom-loaded"!==e.type||(l=!0)}p(),i.window.addEventListener("resize",p),i.window.addEventListener("orientationchange",p),i.window.addEventListener("load",p),(0,n.default)(function(){p({type:"dom-loaded"})});// list with all jarallax instances
// need to render all in one scroll/resize event
var f=[],h=!1;// Animate if changed window size or scrolled page
function m(){if(f.length){s=void 0!==i.window.pageYOffset?i.window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;var t=l||!h||h.width!==v||h.height!==y,n=u||t||!h||h.y!==s;u=l=!1,(t||n)&&(f.forEach(function(e){t&&e.onResize(),n&&e.onScroll()}),h={width:v,height:y,y:s}),(0,a.default)(m)}}// ResizeObserver
var g=!!e.ResizeObserver&&new e.ResizeObserver(function(e){e&&e.length&&(0,a.default)(function(){e.forEach(function(e){e.target&&e.target.jarallax&&(l||e.target.jarallax.onResize(),u=!0)})})}),w=0,x=function(){function p(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p);var n=this;n.instanceID=w++,n.$item=e,n.defaults={type:"scroll",
// type of parallax: scroll, scale, opacity, scale-opacity, scroll-opacity
speed:.5,
// supported value from -1 to 2
imgSrc:null,imgElement:".jarallax-img",imgSize:"cover",imgPosition:"50% 50%",imgRepeat:"no-repeat",
// supported only for background, not for <img> tag
keepImg:!1,
// keep <img> tag in it's default place
elementInViewport:null,zIndex:-100,disableParallax:!1,disableVideo:!1,automaticResize:!0,
// use ResizeObserver to recalculate position and size of parallax image
// video
videoSrc:null,videoStartTime:0,videoEndTime:0,videoVolume:0,videoPlayOnlyVisible:!0,
// events
onScroll:null,
// function(calculations) {}
onInit:null,
// function() {}
onDestroy:null,
// function() {}
onCoverImage:null};// DEPRECATED: old data-options
var a=n.$item.getAttribute("data-jarallax"),i=JSON.parse(a||"{}");a&&
// eslint-disable-next-line no-console
console.warn("Detected usage of deprecated data-jarallax JSON options, you should use pure data-attribute options. See info here - https://github.com/nk-o/jarallax/issues/53");// prepare data-options
var r=n.$item.dataset||{},o={};if(Object.keys(r).forEach(function(e){var t=e.substr(0,1).toLowerCase()+e.substr(1);t&&void 0!==n.defaults[t]&&(o[t]=r[e])}),n.options=n.extend({},n.defaults,i,o,t),n.pureOptions=n.extend({},n.options),// prepare 'true' and 'false' strings to boolean
Object.keys(n.options).forEach(function(e){"true"===n.options[e]?n.options[e]=!0:"false"===n.options[e]&&(n.options[e]=!1)}),// fix speed option [-1.0, 2.0]
n.options.speed=Math.min(2,Math.max(-1,parseFloat(n.options.speed))),// deprecated noAndroid and noIos options
(n.options.noAndroid||n.options.noIos)&&(
// eslint-disable-next-line no-console
console.warn("Detected usage of deprecated noAndroid or noIos options, you should use disableParallax option. See info here - https://github.com/nk-o/jarallax/#disable-on-mobile-devices"),// prepare fallback if disableParallax option is not used
n.options.disableParallax||(n.options.noIos&&n.options.noAndroid?n.options.disableParallax=/iPad|iPhone|iPod|Android/:n.options.noIos?n.options.disableParallax=/iPad|iPhone|iPod/:n.options.noAndroid&&(n.options.disableParallax=/Android/))),// prepare disableParallax callback
"string"==typeof n.options.disableParallax&&(n.options.disableParallax=new RegExp(n.options.disableParallax)),n.options.disableParallax instanceof RegExp){var s=n.options.disableParallax;n.options.disableParallax=function(){return s.test(navigator.userAgent)}}if("function"!=typeof n.options.disableParallax&&(n.options.disableParallax=function(){return!1}),// prepare disableVideo callback
"string"==typeof n.options.disableVideo&&(n.options.disableVideo=new RegExp(n.options.disableVideo)),n.options.disableVideo instanceof RegExp){var l=n.options.disableVideo;n.options.disableVideo=function(){return l.test(navigator.userAgent)}}"function"!=typeof n.options.disableVideo&&(n.options.disableVideo=function(){return!1});// custom element to check if parallax in viewport
var u=n.options.elementInViewport;// get first item from array
u&&"object"===(void 0===u?"undefined":c(u))&&void 0!==u.length&&(u=d(u,1)[0]);// check if dom element
u instanceof Element||(u=null),n.options.elementInViewport=u,n.image={src:n.options.imgSrc||null,$container:null,useImgTag:!1,
// position fixed is needed for the most of browsers because absolute position have glitches
// on MacOS with smooth scroll there is a huge lags with absolute position - https://github.com/nk-o/jarallax/issues/75
// on mobile devices better scrolled with absolute position
position:/iPad|iPhone|iPod|Android/.test(navigator.userAgent)?"absolute":"fixed"},n.initImg()&&n.canInitParallax()&&n.init()}// add styles to element
return t(p,[{key:"css",value:function(t,n){return"string"==typeof n?i.window.getComputedStyle(t).getPropertyValue(n):(// add transform property with vendor prefix
n.transform&&o&&(n[o]=n.transform),Object.keys(n).forEach(function(e){t.style[e]=n[e]}),t)}// Extend like jQuery.extend
},{key:"extend",value:function(n){var a=arguments;return n=n||{},Object.keys(arguments).forEach(function(t){a[t]&&Object.keys(a[t]).forEach(function(e){n[e]=a[t][e]})}),n}// get window size and scroll position. Useful for extensions
},{key:"getWindowData",value:function(){return{width:v,height:y,y:s}}// Jarallax functions
},{key:"initImg",value:function(){var e=this,t=e.options.imgElement;// find image element
// true if there is img tag
return t&&"string"==typeof t&&(t=e.$item.querySelector(t)),// check if dom element
t instanceof Element||(t=null),t&&(e.options.keepImg?e.image.$item=t.cloneNode(!0):(e.image.$item=t,e.image.$itemParent=t.parentNode),e.image.useImgTag=!0),!!e.image.$item||(// get image src
null===e.image.src&&(e.image.src=e.css(e.$item,"background-image").replace(/^url\(['"]?/g,"").replace(/['"]?\)$/g,"")),!(!e.image.src||"none"===e.image.src))}},{key:"canInitParallax",value:function(){return o&&!this.options.disableParallax()}},{key:"init",value:function(){var e=this,t={position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",pointerEvents:"none"},n={};if(!e.options.keepImg){
// save default user styles
var a=e.$item.getAttribute("style");if(a&&e.$item.setAttribute("data-jarallax-original-styles",a),e.image.useImgTag){var i=e.image.$item.getAttribute("style");i&&e.image.$item.setAttribute("data-jarallax-original-styles",i)}}// set relative position and z-index to the parent
// check if one of parents have transform style (without this check, scroll transform will be inverted if used parallax with position fixed)
// discussion - https://github.com/nk-o/jarallax/issues/9
if("static"===e.css(e.$item,"position")&&e.css(e.$item,{position:"relative"}),"auto"===e.css(e.$item,"z-index")&&e.css(e.$item,{zIndex:0}),// container for parallax image
e.image.$container=document.createElement("div"),e.css(e.image.$container,t),e.css(e.image.$container,{"z-index":e.options.zIndex}),e.image.$container.setAttribute("id","jarallax-container-"+e.instanceID),e.$item.appendChild(e.image.$container),// use img tag
e.image.useImgTag?n=e.extend({"object-fit":e.options.imgSize,"object-position":e.options.imgPosition,
// support for plugin https://github.com/bfred-it/object-fit-images
"font-family":"object-fit: "+e.options.imgSize+"; object-position: "+e.options.imgPosition+";","max-width":"none"},t,n):(e.image.$item=document.createElement("div"),e.image.src&&(n=e.extend({"background-position":e.options.imgPosition,"background-size":e.options.imgSize,"background-repeat":e.options.imgRepeat,"background-image":'url("'+e.image.src+'")'},t,n))),"opacity"!==e.options.type&&"scale"!==e.options.type&&"scale-opacity"!==e.options.type&&1!==e.options.speed||(e.image.position="absolute"),"fixed"===e.image.position)for(var r=0,o=e.$item;null!==o&&o!==document&&0===r;){var s=e.css(o,"-webkit-transform")||e.css(o,"-moz-transform")||e.css(o,"transform");s&&"none"!==s&&(r=1,e.image.position="absolute"),o=o.parentNode}// add position to parallax block
n.position=e.image.position,// insert parallax image
e.css(e.image.$item,n),e.image.$container.appendChild(e.image.$item),// set initial position and size
e.coverImage(),e.clipContainer(),e.onScroll(!0),// ResizeObserver
e.options.automaticResize&&g&&g.observe(e.$item),// call onInit event
e.options.onInit&&e.options.onInit.call(e),// remove default user background
"none"!==e.css(e.$item,"background-image")&&e.css(e.$item,{"background-image":"none"}),e.addToParallaxList()}// add to parallax instances list
},{key:"addToParallaxList",value:function(){f.push(this),1===f.length&&m()}// remove from parallax instances list
},{key:"removeFromParallaxList",value:function(){var n=this;f.forEach(function(e,t){e.instanceID===n.instanceID&&f.splice(t,1)})}},{key:"destroy",value:function(){var e=this;e.removeFromParallaxList();// return styles on container as before jarallax init
var t=e.$item.getAttribute("data-jarallax-original-styles");if(e.$item.removeAttribute("data-jarallax-original-styles"),// null occurs if there is no style tag before jarallax init
t?e.$item.setAttribute("style",t):e.$item.removeAttribute("style"),e.image.useImgTag){
// return styles on img tag as before jarallax init
var n=e.image.$item.getAttribute("data-jarallax-original-styles");e.image.$item.removeAttribute("data-jarallax-original-styles"),// null occurs if there is no style tag before jarallax init
n?e.image.$item.setAttribute("style",t):e.image.$item.removeAttribute("style"),// move img tag to its default position
e.image.$itemParent&&e.image.$itemParent.appendChild(e.image.$item)}// remove additional dom elements
e.$clipStyles&&e.$clipStyles.parentNode.removeChild(e.$clipStyles),e.image.$container&&e.image.$container.parentNode.removeChild(e.image.$container),// call onDestroy event
e.options.onDestroy&&e.options.onDestroy.call(e),// delete jarallax from item
delete e.$item.jarallax}// it will remove some image overlapping
// overlapping occur due to an image position fixed inside absolute position element
},{key:"clipContainer",value:function(){
// needed only when background in fixed position
if("fixed"===this.image.position){var e=this,t=e.image.$container.getBoundingClientRect(),n=t.width,a=t.height;if(!e.$clipStyles)e.$clipStyles=document.createElement("style"),e.$clipStyles.setAttribute("type","text/css"),e.$clipStyles.setAttribute("id","jarallax-clip-"+e.instanceID),(document.head||document.getElementsByTagName("head")[0]).appendChild(e.$clipStyles);var i="#jarallax-container-"+e.instanceID+" {\n           clip: rect(0 "+n+"px "+a+"px 0);\n           clip: rect(0, "+n+"px, "+a+"px, 0);\n        }";// add clip styles inline (this method need for support IE8 and less browsers)
e.$clipStyles.styleSheet?e.$clipStyles.styleSheet.cssText=i:e.$clipStyles.innerHTML=i}}},{key:"coverImage",value:function(){var e=this,t=e.image.$container.getBoundingClientRect(),n=t.height,a=e.options.speed,i="scroll"===e.options.type||"scroll-opacity"===e.options.type,r=0,o=n,s=0;// return some useful data. Used in the video cover function
// scroll parallax
return i&&(
// scroll distance and height for image
r=a<0?a*Math.max(n,y):a*(n+y),// size for scroll parallax
1<a?o=Math.abs(r-y):a<0?o=r/a+Math.abs(r):o+=Math.abs(y-n)*(1-a),r/=2),// store scroll distance
e.parallaxScrollDistance=r,// vertical center
s=i?(y-o)/2:(n-o)/2,// apply result to item
e.css(e.image.$item,{height:o+"px",marginTop:s+"px",left:"fixed"===e.image.position?t.left+"px":"0",width:t.width+"px"}),// call onCoverImage event
e.options.onCoverImage&&e.options.onCoverImage.call(e),{image:{height:o,marginTop:s},container:t}}},{key:"isVisible",value:function(){return this.isElementInViewport||!1}},{key:"onScroll",value:function(e){var t=this,n=t.$item.getBoundingClientRect(),a=n.top,i=n.height,r={},o=n;// stop calculations if item is not in viewport
if(t.options.elementInViewport&&(o=t.options.elementInViewport.getBoundingClientRect()),t.isElementInViewport=0<=o.bottom&&0<=o.right&&o.top<=y&&o.left<=v,e||t.isElementInViewport){// calculate parallax helping variables
var s=Math.max(0,a),l=Math.max(0,i+a),u=Math.max(0,-a),p=Math.max(0,a+i-y),d=Math.max(0,i-(a+i-y)),c=Math.max(0,-a+y-i),f=1-2*(y-a)/(y+i),h=1;// scale
if(i<y?h=1-(u||p)/i:l<=y?h=l/y:d<=y&&(h=d/y),// opacity
"opacity"!==t.options.type&&"scale-opacity"!==t.options.type&&"scroll-opacity"!==t.options.type||(r.transform="translate3d(0,0,0)",r.opacity=h),"scale"===t.options.type||"scale-opacity"===t.options.type){var m=1;t.options.speed<0?m-=t.options.speed*h:m+=t.options.speed*(1-h),r.transform="scale("+m+") translate3d(0,0,0)"}// scroll
if("scroll"===t.options.type||"scroll-opacity"===t.options.type){var g=t.parallaxScrollDistance*f;// fix if parallax block in absolute position
"absolute"===t.image.position&&(g-=a),r.transform="translate3d(0,"+g+"px,0)"}t.css(t.image.$item,r),// call onScroll event
t.options.onScroll&&t.options.onScroll.call(t,{section:n,beforeTop:s,beforeTopEnd:l,afterTop:u,beforeBottom:p,beforeBottomEnd:d,afterBottom:c,visiblePercent:h,fromViewportCenter:f})}}},{key:"onResize",value:function(){this.coverImage(),this.clipContainer()}}]),p}(),b=function(e){
// check for dom element
// thanks: http://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object
("object"===("undefined"==typeof HTMLElement?"undefined":c(HTMLElement))?e instanceof HTMLElement:e&&"object"===(void 0===e?"undefined":c(e))&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName)&&(e=[e]);for(var t=arguments[1],n=Array.prototype.slice.call(arguments,2),a=e.length,i=0,r=void 0;i<a;i++)if("object"===(void 0===t?"undefined":c(t))||void 0===t?e[i].jarallax||(e[i].jarallax=new x(e[i],t)):e[i].jarallax&&(
// eslint-disable-next-line prefer-spread
r=e[i].jarallax[t].apply(e[i].jarallax,n)),void 0!==r)return r;return e};b.constructor=x,T.default=b}).call(T,S(2));
/***/},
/* 14 */
/***/
function(e,t,n){var a=n(0),i=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||function(e){var t=+new Date,n=Math.max(0,16-(t-r)),a=setTimeout(e,n);return r=t,a
/**
     * `cancelAnimationFrame()`
     */},r=+new Date;
/**
     * `requestAnimationFrame()`
     */var o=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.mozCancelAnimationFrame||clearTimeout;Function.prototype.bind&&(i=i.bind(a),o=o.bind(a)),(e.exports=i).cancel=o}]),
/*!
   * Name    : Video Background Extension for Jarallax
   * Version : 1.0.1
   * Author  : nK <https://nkdev.info>
   * GitHub  : https://github.com/nk-o/jarallax
   */
/******/
function(n){
// webpackBootstrap
/******/
// The module cache
/******/
var a={};
/******/
/******/
// The require function
/******/function i(e){
/******/
/******/
// Check if module is in cache
/******/
if(a[e])
/******/
return a[e].exports;
/******/
/******/
// Create a new module (and put it into the cache)
/******/var t=a[e]={
/******/
i:e,
/******/
l:!1,
/******/
exports:{}
/******/};
/******/
/******/
// Execute the module function
/******/
/******/
/******/
// Return the exports of the module
/******/
return n[e].call(t.exports,t,t.exports,i),
/******/
/******/
// Flag the module as loaded
/******/
t.l=!0,t.exports;
/******/}
/******/
/******/
/******/
// expose the modules object (__webpack_modules__)
/******/
/******/
/******/
// Load entry module and return exports
/******/
i.m=n,
/******/
/******/
// expose the module cache
/******/
i.c=a,
/******/
/******/
// define getter function for harmony exports
/******/
i.d=function(e,t,n){
/******/
i.o(e,t)||
/******/
Object.defineProperty(e,t,{
/******/
configurable:!1,
/******/
enumerable:!0,
/******/
get:n
/******/})
/******/},
/******/
/******/
// getDefaultExport function for compatibility with non-harmony modules
/******/
i.n=function(e){
/******/
var t=e&&e.__esModule?
/******/
function(){return e.default}:
/******/
function(){return e};
/******/
/******/
return i.d(t,"a",t),t;
/******/},
/******/
/******/
// Object.prototype.hasOwnProperty.call
/******/
i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},
/******/
/******/
// __webpack_public_path__
/******/
i.p="",i(i.s=7);
/******/}(
/************************************************************************/
/******/
[
/* 0 */
/***/
function(n,e,t){
/* WEBPACK VAR INJECTION */
(function(e){var t;t="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},n.exports=t}).call(e,t(2));
/***/},
/* 1 */
/***/
function(e,t,n){e.exports=function(e){"complete"===document.readyState||"interactive"===document.readyState?
// Already ready or interactive, execute callback
e.call():document.attachEvent?
// Old browsers
document.attachEvent("onreadystatechange",function(){"interactive"===document.readyState&&e.call()}):document.addEventListener&&
// Modern browsers
document.addEventListener("DOMContentLoaded",e)};
/***/},
/* 2 */
/***/
function(e,t,n){var a,i="function"==typeof Symbol&&"symbol"===_t(Symbol.iterator)?function(e){return _t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_t(e)};// This works in non-strict mode
a=function(){return this}();try{
// This works if eval is allowed (see CSP)
a=a||Function("return this")()||(0,eval)("this")}catch(e){
// This works if the window reference is available
"object"===("undefined"==typeof window?"undefined":i(window))&&(a=window)}// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}
e.exports=a},
/* 3 */
/***/
function(e,t,n){e.exports=n(9);
/***/},,,
/* 4 */
/* 5 */
/* 6 */
/* 7 */
/***/,function(e,t,n){e.exports=n(8);
/***/},
/* 8 */
/***/
function(e,t,n){var a=s(n(3)),i=s(n(0)),r=s(n(1)),o=s(n(10));function s(e){return e&&e.__esModule?e:{default:e}}// add video worker globally to fallback jarallax < 1.10 versions
i.default.VideoWorker=i.default.VideoWorker||a.default,(0,o.default)(),// data-jarallax-video initialization
(0,r.default)(function(){"undefined"!=typeof jarallax&&jarallax(document.querySelectorAll("[data-jarallax-video]"))})},
/* 9 */
/***/
function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"===_t(Symbol.iterator)?function(e){return _t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_t(e)},r=function(){function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}}();// Deferred
// thanks http://stackoverflow.com/questions/18096715/implement-deferred-object-without-using-jquery
function a(){this._done=[],this._fail=[]}a.prototype={execute:function(e,t){var n=e.length;for(t=Array.prototype.slice.call(t);n--;)e[n].apply(null,t)},resolve:function(){this.execute(this._done,arguments)},reject:function(){this.execute(this._fail,arguments)},done:function(e){this._done.push(e)},fail:function(e){this._fail.push(e)}};var o=0,s=0,l=0,u=0,p=0,d=new a,c=new a,f=function(){function a(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);var n=this;n.url=e,n.options_default={autoplay:!1,loop:!1,mute:!1,volume:100,showContols:!0,
// start / end video time in seconds
startTime:0,endTime:0},n.options=n.extend({},n.options_default,t),// check URL
n.videoID=n.parseURL(e),// init
n.videoID&&(n.ID=o++,n.loadAPI(),n.init())}// Extend like jQuery.extend
return r(a,[{key:"extend",value:function(n){var a=arguments;return n=n||{},Object.keys(arguments).forEach(function(t){a[t]&&Object.keys(a[t]).forEach(function(e){n[e]=a[t][e]})}),n}},{key:"parseURL",value:function(e){var t,n,a,i,r,o=!(!(t=e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/))||11!==t[1].length)&&t[1],s=!(!(n=e.match(/https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/))||!n[3])&&n[3],l=(a=e.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/),i={},r=0,a.forEach(function(e){
// eslint-disable-next-line no-useless-escape
var t=e.match(/^(mp4|webm|ogv|ogg)\:(.*)/);t&&t[1]&&t[2]&&(
// eslint-disable-next-line prefer-destructuring
i["ogv"===t[1]?"ogg":t[1]]=t[2],r=1)}),!!r&&i);return o?(this.type="youtube",o):s?(this.type="vimeo",s):!!l&&(this.type="local",l)}},{key:"isValid",value:function(){return!!this.videoID}// events
},{key:"on",value:function(e,t){this.userEventsList=this.userEventsList||[],// add new callback in events list
(this.userEventsList[e]||(this.userEventsList[e]=[])).push(t)}},{key:"off",value:function(n,a){var i=this;this.userEventsList&&this.userEventsList[n]&&(a?this.userEventsList[n].forEach(function(e,t){e===a&&(i.userEventsList[n][t]=!1)}):delete this.userEventsList[n])}},{key:"fire",value:function(e){var t=this,n=[].slice.call(arguments,1);this.userEventsList&&void 0!==this.userEventsList[e]&&this.userEventsList[e].forEach(function(e){
// call with all arguments
e&&e.apply(t,n)})}},{key:"play",value:function(e){var t=this;t.player&&("youtube"===t.type&&t.player.playVideo&&(void 0!==e&&t.player.seekTo(e||0),YT.PlayerState.PLAYING!==t.player.getPlayerState()&&t.player.playVideo()),"vimeo"===t.type&&(void 0!==e&&t.player.setCurrentTime(e),t.player.getPaused().then(function(e){e&&t.player.play()})),"local"===t.type&&(void 0!==e&&(t.player.currentTime=e),t.player.paused&&t.player.play()))}},{key:"pause",value:function(){var t=this;t.player&&("youtube"===t.type&&t.player.pauseVideo&&YT.PlayerState.PLAYING===t.player.getPlayerState()&&t.player.pauseVideo(),"vimeo"===t.type&&t.player.getPaused().then(function(e){e||t.player.pause()}),"local"===t.type&&(t.player.paused||t.player.pause()))}},{key:"mute",value:function(){var e=this;e.player&&("youtube"===e.type&&e.player.mute&&e.player.mute(),"vimeo"===e.type&&e.player.setVolume&&e.player.setVolume(0),"local"===e.type&&(e.$video.muted=!0))}},{key:"unmute",value:function(){var e=this;e.player&&("youtube"===e.type&&e.player.mute&&e.player.unMute(),"vimeo"===e.type&&e.player.setVolume&&e.player.setVolume(e.options.volume),"local"===e.type&&(e.$video.muted=!1))}},{key:"setVolume",value:function(){var e=0<arguments.length&&void 0!==arguments[0]&&arguments[0],t=this;t.player&&e&&("youtube"===t.type&&t.player.setVolume&&t.player.setVolume(e),"vimeo"===t.type&&t.player.setVolume&&t.player.setVolume(e),"local"===t.type&&(t.$video.volume=e/100))}},{key:"getVolume",value:function(t){var e=this;e.player?("youtube"===e.type&&e.player.getVolume&&t(e.player.getVolume()),"vimeo"===e.type&&e.player.getVolume&&e.player.getVolume().then(function(e){t(e)}),"local"===e.type&&t(100*e.$video.volume)):t(!1)}},{key:"getMuted",value:function(t){var e=this;e.player?("youtube"===e.type&&e.player.isMuted&&t(e.player.isMuted()),"vimeo"===e.type&&e.player.getVolume&&e.player.getVolume().then(function(e){t(!!e)}),"local"===e.type&&t(e.$video.muted)):t(null)}},{key:"getImageURL",value:function(t){var n=this;if(n.videoImage)t(n.videoImage);else{if("youtube"===n.type){var e=["maxresdefault","sddefault","hqdefault","0"],a=0,i=new Image;i.onload=function(){
// if no thumbnail, youtube add their own image with width = 120px
120!==(this.naturalWidth||this.width)||a===e.length-1?(
// ok
n.videoImage="https://img.youtube.com/vi/"+n.videoID+"/"+e[a]+".jpg",t(n.videoImage)):(
// try another size
a++,this.src="https://img.youtube.com/vi/"+n.videoID+"/"+e[a]+".jpg")},i.src="https://img.youtube.com/vi/"+n.videoID+"/"+e[a]+".jpg"}if("vimeo"===n.type){var r=new XMLHttpRequest;r.open("GET","https://vimeo.com/api/v2/video/"+n.videoID+".json",!0),r.onreadystatechange=function(){if(4===this.readyState&&200<=this.status&&this.status<400){
// Success!
var e=JSON.parse(this.responseText);n.videoImage=e[0].thumbnail_large,t(n.videoImage)}},r.send(),r=null}}}// fallback to the old version.
},{key:"getIframe",value:function(e){this.getVideo(e)}},{key:"getVideo",value:function(s){var l=this;// return generated video block
l.$video?s(l.$video):// generate new video block
l.onAPIready(function(){var e=void 0;// Youtube
if(l.$video||((e=document.createElement("div")).style.display="none"),"youtube"===l.type){l.playerOptions={},l.playerOptions.videoId=l.videoID,l.playerOptions.playerVars={autohide:1,rel:0,autoplay:0,
// autoplay enable on mobile devices
playsinline:1},// hide controls
l.options.showContols||(l.playerOptions.playerVars.iv_load_policy=3,l.playerOptions.playerVars.modestbranding=1,l.playerOptions.playerVars.controls=0,l.playerOptions.playerVars.showinfo=0,l.playerOptions.playerVars.disablekb=1);// events
var t=void 0,n=void 0;l.playerOptions.events={onReady:function(t){
// mute
l.options.mute?t.target.mute():l.options.volume&&t.target.setVolume(l.options.volume),// autoplay
l.options.autoplay&&l.play(l.options.startTime),l.fire("ready",t),// volumechange
setInterval(function(){l.getVolume(function(e){l.options.volume!==e&&(l.options.volume=e,l.fire("volumechange",t))})},150)},onStateChange:function(e){
// loop
l.options.loop&&e.data===YT.PlayerState.ENDED&&l.play(l.options.startTime),t||e.data!==YT.PlayerState.PLAYING||(t=1,l.fire("started",e)),e.data===YT.PlayerState.PLAYING&&l.fire("play",e),e.data===YT.PlayerState.PAUSED&&l.fire("pause",e),e.data===YT.PlayerState.ENDED&&l.fire("ended",e),// progress check
e.data===YT.PlayerState.PLAYING?n=setInterval(function(){l.fire("timeupdate",e),// check for end of video and play again or stop
l.options.endTime&&l.player.getCurrentTime()>=l.options.endTime&&(l.options.loop?l.play(l.options.startTime):l.pause())},150):clearInterval(n)}};var a=!l.$video;if(a){var i=document.createElement("div");i.setAttribute("id",l.playerID),e.appendChild(i),document.body.appendChild(e)}l.player=l.player||new window.YT.Player(l.playerID,l.playerOptions),a&&(l.$video=document.getElementById(l.playerID),// get video width and height
l.videoWidth=parseInt(l.$video.getAttribute("width"),10)||1280,l.videoHeight=parseInt(l.$video.getAttribute("height"),10)||720)}// Vimeo
if("vimeo"===l.type){l.playerOptions="",l.playerOptions+="player_id="+l.playerID,l.playerOptions+="&autopause=0",l.playerOptions+="&transparent=0",// hide controls
l.options.showContols||(l.playerOptions+="&badge=0&byline=0&portrait=0&title=0"),// autoplay
l.playerOptions+="&autoplay="+(l.options.autoplay?"1":"0"),// loop
l.playerOptions+="&loop="+(l.options.loop?1:0),l.$video||(l.$video=document.createElement("iframe"),l.$video.setAttribute("id",l.playerID),l.$video.setAttribute("src","https://player.vimeo.com/video/"+l.videoID+"?"+l.playerOptions),l.$video.setAttribute("frameborder","0"),e.appendChild(l.$video),document.body.appendChild(e)),l.player=l.player||new Vimeo.Player(l.$video),// get video width and height
l.player.getVideoWidth().then(function(e){l.videoWidth=e||1280}),l.player.getVideoHeight().then(function(e){l.videoHeight=e||720}),// set current time for autoplay
l.options.startTime&&l.options.autoplay&&l.player.setCurrentTime(l.options.startTime),// mute
l.options.mute?l.player.setVolume(0):l.options.volume&&l.player.setVolume(l.options.volume);var r=void 0;l.player.on("timeupdate",function(e){r||(l.fire("started",e),r=1),l.fire("timeupdate",e),// check for end of video and play again or stop
l.options.endTime&&l.options.endTime&&e.seconds>=l.options.endTime&&(l.options.loop?l.play(l.options.startTime):l.pause())}),l.player.on("play",function(e){l.fire("play",e),// check for the start time and start with it
l.options.startTime&&0===e.seconds&&l.play(l.options.startTime)}),l.player.on("pause",function(e){l.fire("pause",e)}),l.player.on("ended",function(e){l.fire("ended",e)}),l.player.on("loaded",function(e){l.fire("ready",e)}),l.player.on("volumechange",function(e){l.fire("volumechange",e)})}// Local
if("local"===l.type){l.$video||(l.$video=document.createElement("video"),// mute
l.options.mute?l.$video.muted=!0:l.$video.volume&&(l.$video.volume=l.options.volume/100),// loop
l.options.loop&&(l.$video.loop=!0),// autoplay enable on mobile devices
l.$video.setAttribute("playsinline",""),l.$video.setAttribute("webkit-playsinline",""),l.$video.setAttribute("id",l.playerID),e.appendChild(l.$video),document.body.appendChild(e),Object.keys(l.videoID).forEach(function(e){var t,n,a,i;t=l.$video,n=l.videoID[e],a="video/"+e,(i=document.createElement("source")).src=n,i.type=a,t.appendChild(i)})),l.player=l.player||l.$video;var o=void 0;l.player.addEventListener("playing",function(e){o||l.fire("started",e),o=1}),l.player.addEventListener("timeupdate",function(e){l.fire("timeupdate",e),// check for end of video and play again or stop
l.options.endTime&&l.options.endTime&&this.currentTime>=l.options.endTime&&(l.options.loop?l.play(l.options.startTime):l.pause())}),l.player.addEventListener("play",function(e){l.fire("play",e)}),l.player.addEventListener("pause",function(e){l.fire("pause",e)}),l.player.addEventListener("ended",function(e){l.fire("ended",e)}),l.player.addEventListener("loadedmetadata",function(){
// get video width and height
l.videoWidth=this.videoWidth||1280,l.videoHeight=this.videoHeight||720,l.fire("ready"),// autoplay
l.options.autoplay&&l.play(l.options.startTime)}),l.player.addEventListener("volumechange",function(e){l.getVolume(function(e){l.options.volume=e}),l.fire("volumechange",e)})}s(l.$video)})}},{key:"init",value:function(){this.playerID="VideoWorker-"+this.ID}},{key:"loadAPI",value:function(){if(!s||!l){var e="";// load Youtube API
if("youtube"!==this.type||s||(s=1,e="https://www.youtube.com/iframe_api"),// load Vimeo API
"vimeo"!==this.type||l||(l=1,e="https://player.vimeo.com/api/player.js"),e){// add script in head section
var t=document.createElement("script"),n=document.getElementsByTagName("head")[0];t.src=e,n.appendChild(t),t=n=null}}}},{key:"onAPIready",value:function(e){// Vimeo
if(// Youtube
"youtube"===this.type&&(
// Listen for global YT player callback
"undefined"!=typeof YT&&0!==YT.loaded||u?"object"===("undefined"==typeof YT?"undefined":i(YT))&&1===YT.loaded?e():d.done(function(){e()}):(
// Prevents Ready event from being called twice
u=1,// Creates deferred so, other players know when to wait.
window.onYouTubeIframeAPIReady=function(){window.onYouTubeIframeAPIReady=null,d.resolve("done"),e()})),"vimeo"===this.type)if("undefined"!=typeof Vimeo||p)"undefined"!=typeof Vimeo?e():c.done(function(){e()});else{p=1;var t=setInterval(function(){"undefined"!=typeof Vimeo&&(clearInterval(t),c.resolve("done"),e())},20)}// Local
"local"===this.type&&e()}}]),a}();t.default=f},
/* 10 */
/***/
function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:l.default.jarallax;if(void 0===e)return;var t=e.constructor,a=t.prototype.init;// append video after init Jarallax
t.prototype.init=function(){var n=this;a.apply(n),n.video&&!n.options.disableVideo()&&n.video.getVideo(function(e){var t=e.parentNode;n.css(e,{position:n.image.position,top:"0px",left:"0px",right:"0px",bottom:"0px",width:"100%",height:"100%",maxWidth:"none",maxHeight:"none",margin:0,zIndex:-1}),n.$video=e,n.image.$container.appendChild(e),// remove parent video element (created by VideoWorker)
t.parentNode.removeChild(t)})};// cover video
var s=t.prototype.coverImage;t.prototype.coverImage=function(){var e=this,t=s.apply(e),n=!!e.image.$item&&e.image.$item.nodeName;if(t&&e.video&&n&&("IFRAME"===n||"VIDEO"===n)){var a=t.image.height,i=a*e.image.width/e.image.height,r=(t.container.width-i)/2,o=t.image.marginTop;t.container.width>i&&(i=t.container.width,a=i*e.image.height/e.image.width,r=0,o+=(t.image.height-a)/2),// add video height over than need to hide controls
"IFRAME"===n&&(a+=400,o-=200),e.css(e.$video,{width:i+"px",marginLeft:r+"px",height:a+"px",marginTop:o+"px"})}return t};// init video
var n=t.prototype.initImg;t.prototype.initImg=function(){var e=this,t=n.apply(e);return e.options.videoSrc||(e.options.videoSrc=e.$item.getAttribute("data-jarallax-video")||null),e.options.videoSrc?(e.defaultInitImgResult=t,!0):t};var i=t.prototype.canInitParallax;t.prototype.canInitParallax=function(){var n=this,e=i.apply(n);if(!n.options.videoSrc)return e;var t=new o.default(n.options.videoSrc,{autoplay:!0,loop:!0,showContols:!1,startTime:n.options.videoStartTime||0,endTime:n.options.videoEndTime||0,mute:n.options.videoVolume?0:1,volume:n.options.videoVolume||0});if(t.isValid())
// if parallax will not be inited, we can add thumbnail on background.
if(e){// set image if not exists
if(t.on("ready",function(){if(n.options.videoPlayOnlyVisible){var e=n.onScroll;n.onScroll=function(){e.apply(n),n.isVisible()?t.play():t.pause()}}else t.play()}),t.on("started",function(){n.image.$default_item=n.image.$item,n.image.$item=n.$video,// set video width and height
n.image.width=n.video.videoWidth||1280,n.image.height=n.video.videoHeight||720,n.options.imgWidth=n.image.width,n.options.imgHeight=n.image.height,n.coverImage(),n.clipContainer(),n.onScroll(),// hide image
n.image.$default_item&&(n.image.$default_item.style.display="none")}),n.video=t,!n.defaultInitImgResult)return"local"!==t.type?(t.getImageURL(function(e){n.image.src=e,n.init()}),!1):(// set empty image on local video if not defined
n.image.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",!0)}else n.defaultInitImgResult||t.getImageURL(function(e){
// save default user styles
var t=n.$item.getAttribute("style");t&&n.$item.setAttribute("data-jarallax-original-styles",t),// set new background
n.css(n.$item,{"background-image":'url("'+e+'")',"background-position":"center","background-size":"cover"})});// init video
return e};// Destroy video parallax
var r=t.prototype.destroy;t.prototype.destroy=function(){var e=this;e.image.$default_item&&(e.image.$item=e.image.$default_item,delete e.image.$default_item),r.apply(e)}}
/***/;var o=a(n(3)),l=a(n(0));function a(e){return e&&e.__esModule?e:{default:e}}}]);var t=e(function(e){
/*!
     * jQuery JavaScript Library v3.3.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2018-01-20T17:24Z
     */
var t,n;t="undefined"!=typeof window?window:a,n=function(S,e){var t=[],C=S.document,a=Object.getPrototypeOf,s=t.slice,m=t.concat,l=t.push,i=t.indexOf,n={},r=n.toString,g=n.hasOwnProperty,o=g.toString,u=o.call(Object),v={},y=function(e){
// Support: Chrome <=57, Firefox <=52
// In some browsers, typeof returns "function" for HTML <object> elements
// (i.e., `typeof document.createElement( "object" ) === "function"`).
// We don't want to classify *any* DOM node as a function.
return"function"==typeof e&&"number"!=typeof e.nodeType},w=function(e){return null!=e&&e===e.window},p={type:!0,src:!0,noModule:!0};function x(e,t,n){var a,i=(t=t||C).createElement("script");if(i.text=e,n)for(a in p)n[a]&&(i[a]=n[a]);t.head.appendChild(i).parentNode.removeChild(i)}function b(e){return null==e?e+"":"object"===_t(e)||"function"==typeof e?n[r.call(e)]||"object":_t(e);// Support: Android <=2.3 only (functionish RegExp)
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module
var
// Define a local copy of jQuery
E=function e(t,n){
// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new e.fn.init(t,n)},
// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
d=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function c(e){
// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var t=!!e&&"length"in e&&e.length,n=b(e);return!y(e)&&!w(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}E.fn=E.prototype={
// The current version of jQuery being used
jquery:"3.3.1",constructor:E,
// The default length of a jQuery object is 0
length:0,toArray:function(){return s.call(this)},
// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(e){
// Return all the elements in a clean array
return null==e?s.call(this):e<0?this[e+this.length]:this[e];// Return just the one element from the set
},
// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(e){
// Build a new jQuery matched element set
var t=E.merge(this.constructor(),e);// Add the old object onto the stack (as a reference)
// Return the newly-formed element set
return t.prevObject=this,t},
// Execute a callback for every element in the matched set.
each:function(e){return E.each(this,e)},map:function(n){return this.pushStack(E.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},
// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:l,sort:t.sort,splice:t.splice},E.extend=E.fn.extend=function(){var e,t,n,a,i,r,o=arguments[0]||{},s=1,l=arguments.length,u=!1;// Handle a deep copy situation
for("boolean"==typeof o&&(u=o,// Skip the boolean and the target
o=arguments[s]||{},s++),// Handle case when target is a string or something (possible in deep copy)
"object"===_t(o)||y(o)||(o={}),// Extend jQuery itself if only one argument is passed
s===l&&(o=this,s--);s<l;s++)
// Only deal with non-null/undefined values
if(null!=(e=arguments[s]))
// Extend the base object
for(t in e)n=o[t],// Prevent never-ending loop
o!==(a=e[t])&&(// Recurse if we're merging plain objects or arrays
u&&a&&(E.isPlainObject(a)||(i=Array.isArray(a)))?(r=i?(i=!1,n&&Array.isArray(n)?n:[]):n&&E.isPlainObject(n)?n:{},// Never move original objects, clone them
o[t]=E.extend(u,r,a)):void 0!==a&&(o[t]=a));// Return the modified object
return o},E.extend({
// Unique for each copy of jQuery on the page
expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),
// Assume jQuery is ready without the ready module
isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
return!(!e||"[object Object]"!==r.call(e))&&(// Objects with no prototype (e.g., `Object.create( null )`) are plain
!(t=a(e))||"function"==typeof(// Objects with prototype are plain iff they were constructed by a global Object function
n=g.call(t,"constructor")&&t.constructor)&&o.call(n)===u)},isEmptyObject:function(e){
/* eslint-disable no-unused-vars */
// See https://github.com/eslint/eslint/issues/6125
var t;for(t in e)return!1;return!0},
// Evaluates a script in a global context
globalEval:function(e){x(e)},each:function(e,t){var n,a=0;if(c(e))for(n=e.length;a<n&&!1!==t.call(e[a],a,e[a]);a++);else for(a in e)if(!1===t.call(e[a],a,e[a]))break;return e},
// Support: Android <=4.0 only
trim:function(e){return null==e?"":(e+"").replace(d,"")},
// results is for internal usage only
makeArray:function(e,t){var n=t||[];return null!=e&&(c(Object(e))?E.merge(n,"string"==typeof e?[e]:e):l.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
merge:function(e,t){for(var n=+t.length,a=0,i=e.length;a<n;a++)e[i++]=t[a];return e.length=i,e},grep:function(e,t,n){// Go through the array, only saving the items
// that pass the validator function
for(var a=[],i=0,r=e.length,o=!n;i<r;i++)!t(e[i],i)!==o&&a.push(e[i]);return a},
// arg is for internal usage only
map:function(e,t,n){var a,i,r=0,o=[];// Go through the array, translating each of the items to their new values
if(c(e))for(a=e.length;r<a;r++)null!=(i=t(e[r],r,n))&&o.push(i);// Go through every key on the object,
else for(r in e)null!=(i=t(e[r],r,n))&&o.push(i);// Flatten any nested arrays
return m.apply([],o)},
// A global GUID counter for objects
guid:1,
// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:v}),"function"==typeof Symbol&&(E.fn[Symbol.iterator]=t[Symbol.iterator]),// Populate the class2type map
E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var f=
/*!
       * Sizzle CSS Selector Engine v2.3.3
       * https://sizzlejs.com/
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license
       * http://jquery.org/license
       *
       * Date: 2016-08-08
       */
function(n){var e,f,x,r,i,h,d,m,b,l,u,
// Local document vars
T,S,o,C,g,s,p,v,
// Instance-specific data
E="sizzle"+1*new Date,y=n.document,k=0,a=0,c=oe(),w=oe(),I=oe(),P=function(e,t){return e===t&&(u=!0),0},
// Instance methods
M={}.hasOwnProperty,t=[],A=t.pop,D=t.push,z=t.push,L=t.slice,
// Use a stripped-down indexOf as it's faster than native
// https://jsperf.com/thor-indexof-vs-for/5
N=function(e,t){for(var n=0,a=e.length;n<a;n++)if(e[n]===t)return n;return-1},O="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
// Regular expressions
// http://www.w3.org/TR/css3-selectors/#whitespace
j="[\\x20\\t\\r\\n\\f]",
// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
H="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
R="\\["+j+"*("+H+")(?:"+j+// Operator (capture 2)
"*([*^$|!~]?=)"+j+// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+H+"))|)"+j+"*\\]",B=":("+H+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+R+")*)|.*)\\)|)",
// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
$=new RegExp(j+"+","g"),q=new RegExp("^"+j+"+|((?:^|[^\\\\])(?:\\\\.)*)"+j+"+$","g"),W=new RegExp("^"+j+"*,"+j+"*"),Y=new RegExp("^"+j+"*([>+~]|"+j+")"+j+"*"),V=new RegExp("="+j+"*([^\\]'\"]*?)"+j+"*\\]","g"),X=new RegExp(B),G=new RegExp("^"+H+"$"),_={ID:new RegExp("^#("+H+")"),CLASS:new RegExp("^\\.("+H+")"),TAG:new RegExp("^("+H+"|[*])"),ATTR:new RegExp("^"+R),PSEUDO:new RegExp("^"+B),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+j+"*(even|odd|(([+-]|)(\\d*)n|)"+j+"*(?:([+-]|)"+j+"*(\\d+)|))"+j+"*\\)|)","i"),bool:new RegExp("^(?:"+O+")$","i"),
// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:new RegExp("^"+j+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+j+"*((?:-\\d)?\\d*)"+j+"*\\)|)(?=[^-]|$)","i")},F=/^(?:input|select|textarea|button)$/i,U=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,
// Easily-parseable/retrievable ID or TAG or CLASS selectors
K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,J=/[+~]/,
// CSS escapes
// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
Z=new RegExp("\\\\([\\da-f]{1,6}"+j+"?|("+j+")|.)","ig"),ee=function(e,t,n){var a="0x"+t-65536;// NaN means non-codepoint
// Support: Firefox<24
// Workaround erroneous numeric interpretation of +"0x"
return a!=a||n?t:a<0?// BMP codepoint
String.fromCharCode(a+65536):// Supplemental Plane codepoint (surrogate pair)
String.fromCharCode(a>>10|55296,1023&a|56320)},
// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?
// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e;// Other potentially-special ASCII characters get backslash-escaped
},
// Used for iframes
// See setDocument()
// Removing the function wrapper causes a "Permission Denied"
// error in IE
ae=function(){T()},ie=ye(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});// Optimize for push.apply( _, NodeList )
try{z.apply(t=L.call(y.childNodes),y.childNodes),// Support: Android<4.0
// Detect silently failing push.apply
t[y.childNodes.length].nodeType}catch(e){z={apply:t.length?// Leverage slice if possible
function(e,t){D.apply(e,L.call(t))}:// Support: IE<9
// Otherwise append directly
function(e,t){// Can't trust NodeList.length
for(var n=e.length,a=0;e[n++]=t[a++];);e.length=n-1}}}function re(e,t,n,a){var i,r,o,s,l,u,p,d=t&&t.ownerDocument,
// nodeType defaults to 9, since context defaults to document
c=t?t.nodeType:9;// Return early from calls with invalid selector or context
if(n=n||[],"string"!=typeof e||!e||1!==c&&9!==c&&11!==c)return n;// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!a&&((t?t.ownerDocument||t:y)!==S&&T(t),t=t||S,C)){
// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(11!==c&&(l=K.exec(e)))
// ID selector
if(i=l[1]){
// Document context
if(9===c){if(!(o=t.getElementById(i)))return n;// Element context
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(o.id===i)return n.push(o),n}else
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(d&&(o=d.getElementById(i))&&v(t,o)&&o.id===i)return n.push(o),n;// Type selector
}else{if(l[2])return z.apply(n,t.getElementsByTagName(e)),n;// Class selector
if((i=l[3])&&f.getElementsByClassName&&t.getElementsByClassName)return z.apply(n,t.getElementsByClassName(i)),n}// Take advantage of querySelectorAll
if(f.qsa&&!I[e+" "]&&(!g||!g.test(e))){if(1!==c)d=t,p=e;else if("object"!==t.nodeName.toLowerCase()){for(
// Capture the context ID, setting it first if necessary
(s=t.getAttribute("id"))?s=s.replace(te,ne):t.setAttribute("id",s=E),r=(// Prefix every selector in the list
u=h(e)).length;r--;)u[r]="#"+s+" "+ve(u[r]);p=u.join(","),// Expand context for sibling selectors
d=J.test(e)&&me(t.parentNode)||t}if(p)try{return z.apply(n,d.querySelectorAll(p)),n}catch(e){}finally{s===E&&t.removeAttribute("id")}}}// All others
return m(e.replace(q,"$1"),t,n,a)}
/**
         * Create key-value caches of limited size
         * @returns {function(string, object)} Returns the Object data after storing it on itself with
         *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
         *	deleting the oldest entry
         */function oe(){var a=[];return function e(t,n){
// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
return a.push(t+" ")>x.cacheLength&&
// Only keep the most recent entries
delete e[a.shift()],e[t+" "]=n}}
/**
         * Mark a function for special use by Sizzle
         * @param {Function} fn The function to mark
         */function se(e){return e[E]=!0,e}
/**
         * Support testing using an element
         * @param {Function} fn Passed the created element and returns a boolean result
         */function le(e){var t=S.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{
// Remove from its parent by default
t.parentNode&&t.parentNode.removeChild(t),// release memory in IE
t=null}}
/**
         * Adds the same handler for all of the specified attrs
         * @param {String} attrs Pipe-separated list of attributes
         * @param {Function} handler The method that will be applied
         */function ue(e,t){for(var n=e.split("|"),a=n.length;a--;)x.attrHandle[n[a]]=t}
/**
         * Checks document order of two siblings
         * @param {Element} a
         * @param {Element} b
         * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
         */function pe(e,t){var n=t&&e,a=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;// Use IE sourceIndex if available on both nodes
if(a)return a;// Check if b follows a
if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}
/**
         * Returns a function to use in pseudos for input types
         * @param {String} type
         */function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}
/**
         * Returns a function to use in pseudos for buttons
         * @param {String} type
         */function ce(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}
/**
         * Returns a function to use in pseudos for :enabled/:disabled
         * @param {Boolean} disabled true for :disabled; false for :enabled
         */function fe(t){
// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
return function(e){
// Only certain elements can match :enabled or :disabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
return"form"in e?
// Check for inherited disabledness on relevant non-disabled elements:
// * listed form-associated elements in a disabled fieldset
//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
// * option elements in a disabled optgroup
//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
// All such elements have a "form" property.
e.parentNode&&!1===e.disabled?
// Option elements defer to a parent optgroup if present
"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||// Where there is no isDisabled, check manually
/* jshint -W018 */
e.isDisabled!==!t&&ie(e)===t:e.disabled===t:"label"in e&&e.disabled===t;// Remaining elements are neither :enabled nor :disabled
}}
/**
         * Returns a function to use in pseudos for positionals
         * @param {Function} fn
         */function he(o){return se(function(r){return r=+r,se(function(e,t){// Match elements found at the specified indexes
for(var n,a=o([],e.length,r),i=a.length;i--;)e[n=a[i]]&&(e[n]=!(t[n]=e[n]))})})}
/**
         * Checks a node for validity as a Sizzle context
         * @param {Element|Object=} context
         * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
         */function me(e){return e&&void 0!==e.getElementsByTagName&&e}// Expose support vars for convenience
// Add button/input type pseudos
for(e in f=re.support={},
/**
         * Detects XML nodes
         * @param {Element|Object} elem An element or a document
         * @returns {Boolean} True iff elem is a non-HTML XML node
         */
i=re.isXML=function(e){
// documentElement is verified for cases where it doesn't yet exist
// (such as loading iframes in IE - #4833)
var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},
/**
         * Sets document-related variables once based on the current document
         * @param {Element|Object} [doc] An element or document object to use to set the document
         * @returns {Object} Returns the current document
         */
T=re.setDocument=function(e){var t,n,a=e?e.ownerDocument||e:y;// Return early if doc is invalid or already selected
return a!==S&&9===a.nodeType&&a.documentElement&&(// Update global variables
o=(S=a).documentElement,C=!i(S),// Support: IE 9-11, Edge
// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
y!==S&&(n=S.defaultView)&&n.top!==n&&(
// Support: IE 11, Edge
n.addEventListener?n.addEventListener("unload",ae,!1):n.attachEvent&&n.attachEvent("onunload",ae)),
/* Attributes
          ---------------------------------------------------------------------- */
// Support: IE<8
// Verify that getAttribute really returns attributes and not properties
// (excepting IE8 booleans)
f.attributes=le(function(e){return e.className="i",!e.getAttribute("className")}),
/* getElement(s)By*
          ---------------------------------------------------------------------- */
// Check if getElementsByTagName("*") returns only elements
f.getElementsByTagName=le(function(e){return e.appendChild(S.createComment("")),!e.getElementsByTagName("*").length}),// Support: IE<9
f.getElementsByClassName=Q.test(S.getElementsByClassName),// Support: IE<10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programmatically-set names,
// so use a roundabout getElementsByName test
f.getById=le(function(e){return o.appendChild(e).id=E,!S.getElementsByName||!S.getElementsByName(E).length}),// ID filter and find
f.getById?(x.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},x.find.ID=function(e,t){if(void 0!==t.getElementById&&C){var n=t.getElementById(e);return n?[n]:[]}}):(x.filter.ID=function(e){var n=e.replace(Z,ee);return function(e){var t=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},// Support: IE 6 - 7 only
// getElementById is not reliable as a find shortcut
x.find.ID=function(e,t){if(void 0!==t.getElementById&&C){var n,a,i,r=t.getElementById(e);if(r){if((
// Verify the id attribute
n=r.getAttributeNode("id"))&&n.value===e)return[r];// Fall back on getElementsByName
for(i=t.getElementsByName(e),a=0;r=i[a++];)if((n=r.getAttributeNode("id"))&&n.value===e)return[r]}return[]}}),// Tag
x.find.TAG=f.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):f.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,a=[],i=0,
// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
r=t.getElementsByTagName(e);// Filter out possible comments
if("*"!==e)return r;for(;n=r[i++];)1===n.nodeType&&a.push(n);return a},// Class
x.find.CLASS=f.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&C)return t.getElementsByClassName(e)},
/* QSA/matchesSelector
          ---------------------------------------------------------------------- */
// QSA and matchesSelector support
// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
s=[],// qSa(:focus) reports false when true (Chrome 21)
// We allow this because of a bug in IE8/9 that throws an error
// whenever `document.activeElement` is accessed on an iframe
// So, we allow :focus to pass through QSA all the time to avoid the IE error
// See https://bugs.jquery.com/ticket/13378
g=[],(f.qsa=Q.test(S.querySelectorAll))&&(
// Build QSA regex
// Regex strategy adopted from Diego Perini
le(function(e){
// Select is set to empty string on purpose
// This is to test IE's treatment of not explicitly
// setting a boolean content attribute,
// since its presence should be enough
// https://bugs.jquery.com/ticket/12359
o.appendChild(e).innerHTML="<a id='"+E+"'></a><select id='"+E+"-\r\\' msallowcapture=''><option selected=''></option></select>",// Support: IE8, Opera 11-12.16
// Nothing should be selected when empty strings follow ^= or $= or *=
// The test attribute must be unknown in Opera but "safe" for WinRT
// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
e.querySelectorAll("[msallowcapture^='']").length&&g.push("[*^$]="+j+"*(?:''|\"\")"),// Support: IE8
// Boolean attributes and "value" are not treated correctly
e.querySelectorAll("[selected]").length||g.push("\\["+j+"*(?:value|"+O+")"),// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
e.querySelectorAll("[id~="+E+"-]").length||g.push("~="),// Webkit/Opera - :checked should return selected option elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
// IE8 throws error here and will not see later tests
e.querySelectorAll(":checked").length||g.push(":checked"),// Support: Safari 8+, iOS 8+
// https://bugs.webkit.org/show_bug.cgi?id=136851
// In-page `selector#id sibling-combinator selector` fails
e.querySelectorAll("a#"+E+"+*").length||g.push(".#.+[+~]")}),le(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
var t=S.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),// Support: IE8
// Enforce case-sensitivity of name attribute
e.querySelectorAll("[name=d]").length&&g.push("name"+j+"*[*^$|!~]?="),// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
// IE8 throws error here and will not see later tests
2!==e.querySelectorAll(":enabled").length&&g.push(":enabled",":disabled"),// Support: IE9-11+
// IE's :disabled selector does not pick up the children of disabled fieldsets
o.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&g.push(":enabled",":disabled"),// Opera 10-11 does not throw on post-comma invalid pseudos
e.querySelectorAll("*,:x"),g.push(",.*:")})),(f.matchesSelector=Q.test(p=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&le(function(e){
// Check to see if it's possible to do matchesSelector
// on a disconnected node (IE 9)
f.disconnectedMatch=p.call(e,"*"),// This should fail with an exception
// Gecko does not error, returns false instead
p.call(e,"[s!='']:x"),s.push("!=",B)}),g=g.length&&new RegExp(g.join("|")),s=s.length&&new RegExp(s.join("|")),
/* Contains
          ---------------------------------------------------------------------- */
t=Q.test(o.compareDocumentPosition),// Element contains another
// Purposefully self-exclusive
// As in, an element does not contain itself
v=t||Q.test(o.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,a=t&&t.parentNode;return e===a||!(!a||1!==a.nodeType||!(n.contains?n.contains(a):e.compareDocumentPosition&&16&e.compareDocumentPosition(a)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},
/* Sorting
          ---------------------------------------------------------------------- */
// Document order sorting
P=t?function(e,t){
// Flag for duplicate removal
if(e===t)return u=!0,0;// Sort on method existence if only one input has compareDocumentPosition
var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(// Disconnected nodes
1&(// Calculate position if both inputs belong to the same document
n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):// Otherwise we know they are disconnected
1)||!f.sortDetached&&t.compareDocumentPosition(e)===n?
// Choose the first element that is related to our preferred document
e===S||e.ownerDocument===y&&v(y,e)?-1:t===S||t.ownerDocument===y&&v(y,t)?1:l?N(l,e)-N(l,t):0:4&n?-1:1)}:function(e,t){
// Exit early if the nodes are identical
if(e===t)return u=!0,0;var n,a=0,i=e.parentNode,r=t.parentNode,o=[e],s=[t];// Parentless nodes are either documents or disconnected
if(!i||!r)return e===S?-1:t===S?1:i?-1:r?1:l?N(l,e)-N(l,t):0;// If the nodes are siblings, we can do a quick check
// Otherwise we need full lists of their ancestors for comparison
if(i===r)return pe(e,t);for(n=e;n=n.parentNode;)o.unshift(n);for(n=t;n=n.parentNode;)s.unshift(n);// Walk down the tree looking for a discrepancy
for(;o[a]===s[a];)a++;return a?// Do a sibling check if the nodes have a common ancestor
pe(o[a],s[a]):// Otherwise nodes in our document sort first
o[a]===y?-1:s[a]===y?1:0}),S},re.matches=function(e,t){return re(e,null,null,t)},re.matchesSelector=function(e,t){if(
// Set document vars if needed
(e.ownerDocument||e)!==S&&T(e),// Make sure that attribute selectors are quoted
t=t.replace(V,"='$1']"),f.matchesSelector&&C&&!I[t+" "]&&(!s||!s.test(t))&&(!g||!g.test(t)))try{var n=p.call(e,t);// IE 9's matchesSelector returns false on disconnected nodes
if(n||f.disconnectedMatch||// As well, disconnected nodes are said to be in a document
// fragment in IE 9
e.document&&11!==e.document.nodeType)return n}catch(e){}return 0<re(t,S,null,[e]).length},re.contains=function(e,t){
// Set document vars if needed
return(e.ownerDocument||e)!==S&&T(e),v(e,t)},re.attr=function(e,t){
// Set document vars if needed
(e.ownerDocument||e)!==S&&T(e);var n=x.attrHandle[t.toLowerCase()],
// Don't get fooled by Object.prototype properties (jQuery #13807)
a=n&&M.call(x.attrHandle,t.toLowerCase())?n(e,t,!C):void 0;return void 0!==a?a:f.attributes||!C?e.getAttribute(t):(a=e.getAttributeNode(t))&&a.specified?a.value:null},re.escape=function(e){return(e+"").replace(te,ne)},re.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},
/**
         * Document sorting and removing duplicates
         * @param {ArrayLike} results
         */
re.uniqueSort=function(e){var t,n=[],a=0,i=0;// Unless we *know* we can detect duplicates, assume their presence
if(u=!f.detectDuplicates,l=!f.sortStable&&e.slice(0),e.sort(P),u){for(;t=e[i++];)t===e[i]&&(a=n.push(i));for(;a--;)e.splice(n[a],1)}// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
return l=null,e},
/**
         * Utility function for retrieving the text value of an array of DOM nodes
         * @param {Array|Element} elem
         */
r=re.getText=function(e){var t,n="",a=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){
// Use textContent for elements
// innerText usage removed for consistency of new lines (jQuery #11153)
if("string"==typeof e.textContent)return e.textContent;
// Traverse its children
for(e=e.firstChild;e;e=e.nextSibling)n+=r(e)}else if(3===i||4===i)return e.nodeValue;// Do not include comment or processing instruction nodes
}else
// If no nodeType, this is expected to be an array
for(;t=e[a++];)
// Do not traverse comment nodes
n+=r(t);return n},(x=re.selectors={
// Can be adjusted by the user
cacheLength:50,createPseudo:se,match:_,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),// Move the given value to match[3] whether quoted or unquoted
e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){
/* matches from matchExpr["CHILD"]
              	1 type (only|nth|...)
              	2 what (child|of-type)
              	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
              	4 xn-component of xn+y argument ([+-]?\d*n|)
              	5 sign of xn-component
              	6 x of xn-component
              	7 sign of y-component
              	8 y of y-component
              */
return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(
// nth-* requires argument
e[3]||re.error(e[0]),// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&re.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return _.CHILD.test(e[0])?null:(// Accept quoted arguments as-is
e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(// Get excess from tokenize (recursively)
t=h(n,!0))&&(// advance to the next closing parenthesis
t=n.indexOf(")",n.length-t)-n.length)&&(
// excess is a negative index
e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=c[e+" "];return t||(t=new RegExp("(^|"+j+")"+e+"("+j+"|$)"))&&c(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,a,i){return function(e){var t=re.attr(e,n);return null==t?"!="===a:!a||(t+="","="===a?t===i:"!="===a?t!==i:"^="===a?i&&0===t.indexOf(i):"*="===a?i&&-1<t.indexOf(i):"$="===a?i&&t.slice(-i.length)===i:"~="===a?-1<(" "+t.replace($," ")+" ").indexOf(i):"|="===a&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,m,g){var v="nth"!==h.slice(0,3),y="last"!==h.slice(-4),w="of-type"===e;return 1===m&&0===g?// Shortcut for :nth-*(n)
function(e){return!!e.parentNode}:function(e,t,n){var a,i,r,o,s,l,u=v!==y?"nextSibling":"previousSibling",p=e.parentNode,d=w&&e.nodeName.toLowerCase(),c=!n&&!w,f=!1;if(p){
// :(first|last|only)-(child|of-type)
if(v){for(;u;){for(o=e;o=o[u];)if(w?o.nodeName.toLowerCase()===d:1===o.nodeType)return!1;// Reverse direction for :only-* (if we haven't yet done so)
l=u="only"===h&&!l&&"nextSibling"}return!0}// non-xml :nth-child(...) stores cache data on `parent`
if(l=[y?p.firstChild:p.lastChild],y&&c){for(
// Seek `elem` from a previously-cached index
// ...in a gzip-friendly way
f=(s=(a=(// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
i=(r=(o=p)[E]||(o[E]={}))[o.uniqueID]||(r[o.uniqueID]={}))[h]||[])[0]===k&&a[1])&&a[2],o=s&&p.childNodes[s];o=++s&&o&&o[u]||(// Fallback to seeking `elem` from the start
f=s=0)||l.pop();)
// When found, cache indexes on `parent` and break
if(1===o.nodeType&&++f&&o===e){i[h]=[k,s,f];break}}else// xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(
// Use previously-cached element index if available
c&&(f=s=(a=(// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
i=(r=(
// ...in a gzip-friendly way
o=e)[E]||(o[E]={}))[o.uniqueID]||(r[o.uniqueID]={}))[h]||[])[0]===k&&a[1]),!1===f)
// Use the same loop as above to seek `elem` from the start
for(;(o=++s&&o&&o[u]||(f=s=0)||l.pop())&&((w?o.nodeName.toLowerCase()!==d:1!==o.nodeType)||!++f||(
// Cache the index of each encountered element
c&&((// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
i=(r=o[E]||(o[E]={}))[o.uniqueID]||(r[o.uniqueID]={}))[h]=[k,f]),o!==e)););// Incorporate the offset, then check against cycle size
return(f-=g)===m||f%m==0&&0<=f/m}}},PSEUDO:function(e,r){
// pseudo-class names are case-insensitive
// http://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var t,o=x.pseudos[e]||x.setFilters[e.toLowerCase()]||re.error("unsupported pseudo: "+e);// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
return o[E]?o(r):// But maintain support for old signatures
1<o.length?(t=[e,e,"",r],x.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,t){for(var n,a=o(e,r),i=a.length;i--;)e[n=N(e,a[i])]=!(t[n]=a[i])}):function(e){return o(e,0,t)}):o}},pseudos:{
// Potentially complex pseudos
not:se(function(e){
// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var a=[],i=[],s=d(e.replace(q,"$1"));return s[E]?se(function(e,t,n,a){// Match elements unmatched by `matcher`
for(var i,r=s(e,null,a,[]),o=e.length;o--;)(i=r[o])&&(e[o]=!(t[o]=i))}):function(e,t,n){return a[0]=e,s(a,null,n,i),// Don't keep the element (issue #299)
a[0]=null,!i.pop()}}),has:se(function(t){return function(e){return 0<re(t,e).length}}),contains:se(function(t){return t=t.replace(Z,ee),function(e){return-1<(e.textContent||e.innerText||r(e)).indexOf(t)}}),
// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// http://www.w3.org/TR/selectors/#lang-pseudo
lang:se(function(n){
// lang value must be a valid identifier
return G.test(n||"")||re.error("unsupported lang: "+n),n=n.replace(Z,ee).toLowerCase(),function(e){var t;do{if(t=C?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),
// Miscellaneous
target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===o},focus:function(e){return e===S.activeElement&&(!S.hasFocus||S.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},
// Boolean properties
enabled:fe(!1),disabled:fe(!0),checked:function(e){
// In CSS3, :checked should return both checked and selected elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){
// Accessing this property makes selected-by-default
// options in Safari work properly
return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},
// Contents
empty:function(e){
// http://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!x.pseudos.empty(e)},
// Element/input types
header:function(e){return U.test(e.nodeName)},input:function(e){return F.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(// Support: IE<8
// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},
// Position-in-collection
first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var a=n<0?n+t:n;0<=--a;)e.push(a);return e}),gt:he(function(e,t,n){for(var a=n<0?n+t:n;++a<t;)e.push(a);return e})}}).pseudos.nth=x.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})x.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})x.pseudos[e]=ce(e);// Easy API for creating new setFilters
function ge(){}function ve(e){for(var t=0,n=e.length,a="";t<n;t++)a+=e[t].value;return a}function ye(s,e,t){var l=e.dir,u=e.next,p=u||l,d=t&&"parentNode"===p,c=a++;return e.first?// Check against closest ancestor/preceding element
function(e,t,n){for(;e=e[l];)if(1===e.nodeType||d)return s(e,t,n);return!1}:// Check against all ancestor/preceding elements
function(e,t,n){var a,i,r,o=[k,c];// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(n){for(;e=e[l];)if((1===e.nodeType||d)&&s(e,t,n))return!0}else for(;e=e[l];)if(1===e.nodeType||d)if(// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
i=(r=e[E]||(e[E]={}))[e.uniqueID]||(r[e.uniqueID]={}),u&&u===e.nodeName.toLowerCase())e=e[l]||e;else{if((a=i[p])&&a[0]===k&&a[1]===c)
// Assign to newCache so results back-propagate to previous elements
return o[2]=a[2];// A match means we're done; a fail means we have to keep checking
if((
// Reuse newcache so results back-propagate to previous elements
i[p]=o)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){for(var a=i.length;a--;)if(!i[a](e,t,n))return!1;return!0}:i[0]}function xe(e,t,n,a,i){for(var r,o=[],s=0,l=e.length,u=null!=t;s<l;s++)(r=e[s])&&(n&&!n(r,a,i)||(o.push(r),u&&t.push(s)));return o}function be(f,h,m,g,v,e){return g&&!g[E]&&(g=be(g)),v&&!v[E]&&(v=be(v,e)),se(function(e,t,n,a){var i,r,o,s=[],l=[],u=t.length,
// Get initial elements from seed or context
p=e||function(e,t,n){for(var a=0,i=t.length;a<i;a++)re(e,t[a],n);return n}(h||"*",n.nodeType?[n]:n,[]),
// Prefilter to get matcher input, preserving a map for seed-results synchronization
d=!f||!e&&h?p:xe(p,s,f,n,a),c=m?// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
v||(e?f:u||g)?// ...intermediate processing is necessary
[]:// ...otherwise use results directly
t:d;// Find primary matches
// Apply postFilter
if(m&&m(d,c,n,a),g)for(i=xe(c,l),g(i,[],n,a),// Un-match failing elements by moving them back to matcherIn
r=i.length;r--;)(o=i[r])&&(c[l[r]]=!(d[l[r]]=o));if(e){if(v||f){if(v){for(
// Get the final matcherOut by condensing this intermediate into postFinder contexts
i=[],r=c.length;r--;)(o=c[r])&&
// Restore matcherIn since elem is not yet a final match
i.push(d[r]=o);v(null,c=[],i,a)}// Move matched elements from seed to results to keep them synchronized
for(r=c.length;r--;)(o=c[r])&&-1<(i=v?N(e,o):s[r])&&(e[i]=!(t[i]=o))}// Add elements to results, through postFinder if defined
}else c=xe(c===t?c.splice(u,c.length):c),v?v(null,t,c,a):z.apply(t,c)})}function Te(e){for(var i,t,n,a=e.length,r=x.relative[e[0].type],o=r||x.relative[" "],s=r?1:0,
// The foundational matcher ensures that elements are reachable from top-level context(s)
l=ye(function(e){return e===i},o,!0),u=ye(function(e){return-1<N(i,e)},o,!0),p=[function(e,t,n){var a=!r&&(n||t!==b)||((i=t).nodeType?l(e,t,n):u(e,t,n));// Avoid hanging onto element (issue #299)
return i=null,a}];s<a;s++)if(t=x.relative[e[s].type])p=[ye(we(p),t)];else{// Return special upon seeing a positional matcher
if((t=x.filter[e[s].type].apply(null,e[s].matches))[E]){for(
// Find the next relative operator (if any) for proper handling
n=++s;n<a&&!x.relative[e[n].type];n++);return be(1<s&&we(p),1<s&&ve(// If the preceding token was a descendant combinator, insert an implicit any-element `*`
e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(q,"$1"),t,s<n&&Te(e.slice(s,n)),n<a&&Te(e=e.slice(n)),n<a&&ve(e))}p.push(t)}return we(p)}return ge.prototype=x.filters=x.pseudos,x.setFilters=new ge,h=re.tokenize=function(e,t){var n,a,i,r,o,s,l,u=w[e+" "];if(u)return t?0:u.slice(0);for(o=e,s=[],l=x.preFilter;o;){// Filters
for(r in
// Comma and first run
n&&!(a=W.exec(o))||(a&&(
// Don't consume trailing commas as valid
o=o.slice(a[0].length)||o),s.push(i=[])),n=!1,// Combinators
(a=Y.exec(o))&&(n=a.shift(),i.push({value:n,
// Cast descendant combinators to space
type:a[0].replace(q," ")}),o=o.slice(n.length)),x.filter)!(a=_[r].exec(o))||l[r]&&!(a=l[r](a))||(n=a.shift(),i.push({value:n,type:r,matches:a}),o=o.slice(n.length));if(!n)break}// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
return t?o.length:o?re.error(e):// Cache the tokens
w(e,s).slice(0)},d=re.compile=function(e,t
/* Internal Use Only */){var n,g,v,y,w,a,i=[],r=[],o=I[e+" "];if(!o){for(
// Generate a function of recursive functions that can be used to check each element
t||(t=h(e)),n=t.length;n--;)(o=Te(t[n]))[E]?i.push(o):r.push(o);// Cache the compiled function
// Save selector and tokenization
(o=I(e,(g=r,y=0<(v=i).length,w=0<g.length,a=function(e,t,n,a,i){var r,o,s,l=0,u="0",p=e&&[],d=[],c=b,
// We must always have either seed elements or outermost context
f=e||w&&x.find.TAG("*",i),
// Use integer dirruns iff this is the outermost matcher
h=k+=null==c?1:Math.random()||.1,m=f.length;// Add elements passing elementMatchers directly to results
// Support: IE<9, Safari
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
for(i&&(b=t===S||t||i);u!==m&&null!=(r=f[u]);u++){if(w&&r){for(o=0,t||r.ownerDocument===S||(T(r),n=!C);s=g[o++];)if(s(r,t||S,n)){a.push(r);break}i&&(k=h)}// Track unmatched elements for set filters
y&&(
// They will have gone through all possible matchers
(r=!s&&r)&&l--,// Lengthen the array for every element, matched or not
e&&p.push(r))}// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(l+=u,y&&u!==l){for(o=0;s=v[o++];)s(p,d,t,n);if(e){
// Reintegrate element matches to eliminate the need for sorting
if(0<l)for(;u--;)p[u]||d[u]||(d[u]=A.call(a));// Discard index placeholder values to get only actual matches
d=xe(d)}// Add matches to results
z.apply(a,d),// Seedless set matches succeeding multiple successful matchers stipulate sorting
i&&!e&&0<d.length&&1<l+v.length&&re.uniqueSort(a)}// Override manipulation of globals by nested matchers
return i&&(k=h,b=c),p},y?se(a):a))).selector=e}return o},
/**
         * A low-level selection function that works with Sizzle's compiled
         *  selector functions
         * @param {String|Function} selector A selector or a pre-compiled
         *  selector function built with Sizzle.compile
         * @param {Element} context
         * @param {Array} [results]
         * @param {Array} [seed] A set of elements to match against
         */
m=re.select=function(e,t,n,a){var i,r,o,s,l,u="function"==typeof e&&e,p=!a&&h(e=u.selector||e);// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(n=n||[],1===p.length){if(2<(
// Reduce context if the leading compound selector is an ID
r=p[0]=p[0].slice(0)).length&&"ID"===(o=r[0]).type&&9===t.nodeType&&C&&x.relative[r[1].type]){if(!(t=(x.find.ID(o.matches[0].replace(Z,ee),t)||[])[0]))return n;// Precompiled matchers will still verify ancestry, so step up a level
u&&(t=t.parentNode),e=e.slice(r.shift().value.length)}// Fetch a seed set for right-to-left matching
for(i=_.needsContext.test(e)?0:r.length;i--&&(o=r[i],!x.relative[s=o.type]);)if((l=x.find[s])&&(a=l(o.matches[0].replace(Z,ee),J.test(r[0].type)&&me(t.parentNode)||t))){if(
// If seed is empty or no tokens remain, we can return early
r.splice(i,1),!(e=a.length&&ve(r)))return z.apply(n,a),n;break}}// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
return(u||d(e,p))(a,t,!C,n,!t||J.test(e)&&me(t.parentNode)||t),n},// One-time assignments
// Sort stability
f.sortStable=E.split("").sort(P).join("")===E,// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
f.detectDuplicates=!!u,// Initialize against the default document
T(),// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
f.sortDetached=le(function(e){
// Should return 1, but returns 4 (following)
return 1&e.compareDocumentPosition(S.createElement("fieldset"))}),// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
le(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ue("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),// Support: IE<9
// Use defaultValue in place of getAttribute("value")
f.attributes&&le(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ue("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
le(function(e){return null==e.getAttribute("disabled")})||ue(O,function(e,t,n){var a;if(!n)return!0===e[t]?t.toLowerCase():(a=e.getAttributeNode(t))&&a.specified?a.value:null}),re}(S);E.find=f,E.expr=f.selectors,// Deprecated
E.expr[":"]=E.expr.pseudos,E.uniqueSort=E.unique=f.uniqueSort,E.text=f.getText,E.isXMLDoc=f.isXML,E.contains=f.contains,E.escapeSelector=f.escape;var h=function(e,t,n){for(var a=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&E(e).is(n))break;a.push(e)}return a},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=E.expr.match.needsContext;function I(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var P=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;// Implement the identical functionality for filter and not
function M(e,n,a){return y(n)?E.grep(e,function(e,t){return!!n.call(e,t,e)!==a}):// Single element
n.nodeType?E.grep(e,function(e){return e===n!==a}):// Arraylike of elements (jQuery, arguments, Array)
"string"!=typeof n?E.grep(e,function(e){return-1<i.call(n,e)!==a}):E.filter(n,e,a)}E.filter=function(e,t,n){var a=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===a.nodeType?E.find.matchesSelector(a,e)?[a]:[]:E.find.matches(e,E.grep(t,function(e){return 1===e.nodeType}))},E.fn.extend({find:function(e){var t,n,a=this.length,i=this;if("string"!=typeof e)return this.pushStack(E(e).filter(function(){for(t=0;t<a;t++)if(E.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<a;t++)E.find(e,i[t],n);return 1<a?E.uniqueSort(n):n},filter:function(e){return this.pushStack(M(this,e||[],!1))},not:function(e){return this.pushStack(M(this,e||[],!0))},is:function(e){return!!M(this,// If this is a positional/relative selector, check membership in the returned set
// so $("p:first").is("p:last") won't return true for a doc with two "p".
"string"==typeof e&&k.test(e)?E(e):e||[],!1).length}});// Initialize a jQuery object
// A central reference to the root jQuery(document)
var A,
// A simple way to check for HTML strings
// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
// Strict HTML recognition (#11290: must start with <)
// Shortcut simple #id case for speed
D=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;// Give the init function the jQuery prototype for later instantiation
(E.fn.init=function(e,t,n){var a,i;// HANDLE: $(""), $(null), $(undefined), $(false)
if(!e)return this;// Method init() accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
// Handle HTML strings
if(n=n||A,"string"!=typeof e)return e.nodeType?(this[0]=e,this.length=1,this):y(e)?void 0!==n.ready?n.ready(e):// Execute immediately if ready is not present
e(E):E.makeArray(e,this);// Match html or make sure no context is specified for #id
if(!(
// Assume that strings that start and end with <> are HTML and skip the regex check
a="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:D.exec(e))||!a[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);// HANDLE: $(DOMElement)
// HANDLE: $(html) -> $(array)
if(a[1]){// HANDLE: $(html, props)
if(t=t instanceof E?t[0]:t,// Option to run scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
E.merge(this,E.parseHTML(a[1],t&&t.nodeType?t.ownerDocument||t:C,!0)),P.test(a[1])&&E.isPlainObject(t))for(a in t)
// Properties of context are called as methods if possible
y(this[a])?this[a](t[a]):this.attr(a,t[a]);return this;// HANDLE: $(#id)
}// HANDLE: $(expr, $(...))
return(i=C.getElementById(a[2]))&&(
// Inject the element directly into the jQuery object
this[0]=i,this.length=1),this}).prototype=E.fn,// Initialize central reference
A=E(C);var z=/^(?:parents|prev(?:Until|All))/,
// Methods guaranteed to produce a unique set when starting from a unique set
L={children:!0,contents:!0,next:!0,prev:!0};function N(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}E.fn.extend({has:function(e){var t=E(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(E.contains(this,t[e]))return!0})},closest:function(e,t){var n,a=0,i=this.length,r=[],o="string"!=typeof e&&E(e);// Positional selectors never match, since there's no _selection_ context
if(!k.test(e))for(;a<i;a++)for(n=this[a];n&&n!==t;n=n.parentNode)
// Always skip document fragments
if(n.nodeType<11&&(o?-1<o.index(n):// Don't pass non-elements to Sizzle
1===n.nodeType&&E.find.matchesSelector(n,e))){r.push(n);break}return this.pushStack(1<r.length?E.uniqueSort(r):r)},
// Determine the position of an element within the set
index:function(e){
// No argument, return index in parent
return e?// Index in selector
"string"==typeof e?i.call(E(e),this[0]):i.call(this,// If it receives a jQuery object, the first element is used
e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(E.uniqueSort(E.merge(this.get(),E(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),E.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return N(e,"nextSibling")},prev:function(e){return N(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return I(e,"iframe")?e.contentDocument:(// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
// Treat the template element as a regular one in browsers that
// don't support it.
I(e,"template")&&(e=e.content||e),E.merge([],e.childNodes))}},function(a,i){E.fn[a]=function(e,t){var n=E.map(this,i,e);return"Until"!==a.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=E.filter(t,n)),1<this.length&&(
// Remove duplicates
L[a]||E.uniqueSort(n),// Reverse order for parents* and prev-derivatives
z.test(a)&&n.reverse()),this.pushStack(n)}});var O=/[^\x20\t\r\n\f]+/g;// Convert String-formatted options into Object-formatted ones
function j(e){return e}function H(e){throw e}function R(e,t,n,a){var i;try{
// Check for promise aspect first to privilege synchronous behavior
e&&y(i=e.promise)?i.call(e).done(t).fail(n):e&&y(i=e.then)?i.call(e,t,n):
// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
// * false: [ value ].slice( 0 ) => resolve( value )
// * true: [ value ].slice( 1 ) => resolve()
t.apply(void 0,[e].slice(a));// For Promises/A+, convert exceptions into rejections
// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
// Deferred#then to conditionally suppress rejection.
}catch(e){
// Support: Android 4.0 only
// Strict mode functions invoked without .call/.apply get global-object context
n.apply(void 0,[e])}}
/*
       * Create a callback list using the following parameters:
       *
       *	options: an optional list of space-separated options that will change how
       *			the callback list behaves or a more traditional option object
       *
       * By default a callback list will act like an event callback list and can be
       * "fired" multiple times.
       *
       * Possible options:
       *
       *	once:			will ensure the callback list can only be fired once (like a Deferred)
       *
       *	memory:			will keep track of previous values and will call any callback added
       *					after the list has been fired right away with the latest "memorized"
       *					values (like a Deferred)
       *
       *	unique:			will ensure a callback can only be added once (no duplicate in the list)
       *
       *	stopOnFalse:	interrupt callings when a callback returns false
       *
       */
E.Callbacks=function(a){var e,n;
// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
a="string"==typeof a?(e=a,n={},E.each(e.match(O)||[],function(e,t){n[t]=!0}),n):E.extend({},a);var// Flag to know if list is currently firing
i,
// Last fire value for non-forgettable lists
t,
// Flag to know if list was already fired
r,
// Flag to prevent firing
o,
// Actual callback list
s=[],
// Queue of execution data for repeatable lists
l=[],
// Index of currently firing callback (modified by add/remove as needed)
u=-1,
// Fire callbacks
p=function(){for(
// Enforce single-firing
o=o||a.once,// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
r=i=!0;l.length;u=-1)for(t=l.shift();++u<s.length;)
// Run callback and check for early termination
!1===s[u].apply(t[0],t[1])&&a.stopOnFalse&&(
// Jump to end and forget the data so .add doesn't re-fire
u=s.length,t=!1);// Forget the data if we're done with it
a.memory||(t=!1),i=!1,// Clean up if we're done firing for good
o&&(
// Keep an empty list if we have data for future add calls
s=t?[]:"")},
// Actual Callbacks object
d={
// Add a callback or a collection of callbacks to the list
add:function(){return s&&(
// If we have memory from a past run, we should fire after adding
t&&!i&&(u=s.length-1,l.push(t)),function n(e){E.each(e,function(e,t){y(t)?a.unique&&d.has(t)||s.push(t):t&&t.length&&"string"!==b(t)&&
// Inspect recursively
n(t)})}(arguments),t&&!i&&p()),this},
// Remove a callback from the list
remove:function(){return E.each(arguments,function(e,t){for(var n;-1<(n=E.inArray(t,s,n));)s.splice(n,1),// Handle firing indexes
n<=u&&u--}),this},
// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(e){return e?-1<E.inArray(e,s):0<s.length},
// Remove all callbacks from the list
empty:function(){return s&&(s=[]),this},
// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function(){return o=l=[],s=t="",this},disabled:function(){return!s},
// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function(){return o=l=[],t||i||(s=t=""),this},locked:function(){return!!o},
// Call all callbacks with the given context and arguments
fireWith:function(e,t){return o||(t=[e,(t=t||[]).slice?t.slice():t],l.push(t),i||p()),this},
// Call all the callbacks with the given arguments
fire:function(){return d.fireWith(this,arguments),this},
// To know if the callbacks have already been called at least once
fired:function(){return!!r}};return d},E.extend({Deferred:function(e){var r=[// action, add listener, callbacks,
// ... .then handlers, argument index, [final state]
["notify","progress",E.Callbacks("memory"),E.Callbacks("memory"),2],["resolve","done",E.Callbacks("once memory"),E.Callbacks("once memory"),0,"resolved"],["reject","fail",E.Callbacks("once memory"),E.Callbacks("once memory"),1,"rejected"]],i="pending",o={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},catch:function(e){return o.then(null,e)},
// Keep pipe for back-compat
pipe:function(){var i=arguments;return E.Deferred(function(a){E.each(r,function(e,t){
// Map tuples (progress, done, fail) to arguments (done, fail, progress)
var n=y(i[t[4]])&&i[t[4]];// deferred.progress(function() { bind to newDefer or newDefer.notify })
// deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&y(e.promise)?e.promise().progress(a.notify).done(a.resolve).fail(a.reject):a[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,a){var l=0;function u(i,r,o,s){return function(){var n=this,a=arguments,e=function(){var e,t;// Support: Promises/A+ section 2.3.3.3.3
// https://promisesaplus.com/#point-59
// Ignore double-resolution attempts
if(!(i<l)){// Support: Promises/A+ section 2.3.1
// https://promisesaplus.com/#point-48
if((e=o.apply(n,a))===r.promise())throw new TypeError("Thenable self-resolution");// Support: Promises/A+ sections 2.3.3.1, 3.5
// https://promisesaplus.com/#point-54
// https://promisesaplus.com/#point-75
// Retrieve `then` only once
t=e&&(// Support: Promises/A+ section 2.3.4
// https://promisesaplus.com/#point-64
// Only check objects and functions for thenability
"object"===_t(e)||"function"==typeof e)&&e.then,// Handle a returned thenable
y(t)?
// Special processors (notify) just wait for resolution
s?t.call(e,u(l,r,j,s),u(l,r,H,s)):(
// ...and disregard older resolution values
l++,t.call(e,u(l,r,j,s),u(l,r,H,s),u(l,r,j,r.notifyWith))):(
// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
o!==j&&(n=void 0,a=[e]),// Process the value(s)
// Default process is resolve
(s||r.resolveWith)(n,a))}},
// Only normal processors (resolve) catch and reject exceptions
t=s?e:function(){try{e()}catch(e){E.Deferred.exceptionHook&&E.Deferred.exceptionHook(e,t.stackTrace),// Support: Promises/A+ section 2.3.3.3.4.1
// https://promisesaplus.com/#point-61
// Ignore post-resolution exceptions
l<=i+1&&(
// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
o!==H&&(n=void 0,a=[e]),r.rejectWith(n,a))}};// Support: Promises/A+ section 2.3.3.3.1
// https://promisesaplus.com/#point-57
// Re-resolve promises immediately to dodge false rejection from
// subsequent errors
i?t():(
// Call an optional hook to record the stack, in case of exception
// since it's otherwise lost when execution goes async
E.Deferred.getStackHook&&(t.stackTrace=E.Deferred.getStackHook()),S.setTimeout(t))}}return E.Deferred(function(e){
// progress_handlers.add( ... )
r[0][3].add(u(0,e,y(a)?a:j,e.notifyWith)),// fulfilled_handlers.add( ... )
r[1][3].add(u(0,e,y(t)?t:j)),// rejected_handlers.add( ... )
r[2][3].add(u(0,e,y(n)?n:H))}).promise()},
// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(e){return null!=e?E.extend(e,o):o}},s={};// Add list-specific methods
// All done!
return E.each(r,function(e,t){var n=t[2],a=t[5];// promise.progress = list.add
// promise.done = list.add
// promise.fail = list.add
o[t[1]]=n.add,// Handle state
a&&n.add(function(){
// state = "resolved" (i.e., fulfilled)
// state = "rejected"
i=a},// rejected_callbacks.disable
// fulfilled_callbacks.disable
r[3-e][2].disable,// rejected_handlers.disable
// fulfilled_handlers.disable
r[3-e][3].disable,// progress_callbacks.lock
r[0][2].lock,// progress_handlers.lock
r[0][3].lock),// progress_handlers.fire
// fulfilled_handlers.fire
// rejected_handlers.fire
n.add(t[3].fire),// deferred.notify = function() { deferred.notifyWith(...) }
// deferred.resolve = function() { deferred.resolveWith(...) }
// deferred.reject = function() { deferred.rejectWith(...) }
s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},// deferred.notifyWith = list.fireWith
// deferred.resolveWith = list.fireWith
// deferred.rejectWith = list.fireWith
s[t[0]+"With"]=n.fireWith}),// Make the deferred a promise
o.promise(s),// Call given func if any
e&&e.call(s,s),s},
// Deferred helper
when:function(e){var// count of uncompleted subordinates
n=arguments.length,
// count of unprocessed arguments
t=n,
// subordinate fulfillment data
a=Array(t),i=s.call(arguments),
// the master Deferred
r=E.Deferred(),
// subordinate callback factory
o=function(t){return function(e){a[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||r.resolveWith(a,i)}};// Single- and empty arguments are adopted like Promise.resolve
if(n<=1&&(R(e,r.done(o(t)).resolve,r.reject,!n),"pending"===r.state()||y(i[t]&&i[t].then)))return r.then();// Multiple arguments are aggregated like Promise.all array elements
for(;t--;)R(i[t],o(t),r.reject);return r.promise()}});// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;E.Deferred.exceptionHook=function(e,t){
// Support: IE 8 - 9 only
// Console exists when dev tools are open, which can happen at any time
S.console&&S.console.warn&&e&&B.test(e.name)&&S.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},E.readyException=function(e){S.setTimeout(function(){throw e})};// The deferred used on DOM ready
var $=E.Deferred();// The ready event handler and self cleanup method
function q(){C.removeEventListener("DOMContentLoaded",q),S.removeEventListener("load",q),E.ready()}// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
E.fn.ready=function(e){return $.then(e).catch(function(e){E.readyException(e)}),this},E.extend({
// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,
// A counter to track how many items to wait for before
// the ready event fires. See #6781
readyWait:1,
// Handle when the DOM is ready
ready:function(e){
// Abort if there are pending holds or we're already ready
(!0===e?--E.readyWait:E.isReady)||(// Remember that the DOM is ready
E.isReady=!0)!==e&&0<--E.readyWait||// If there are functions bound, to execute
$.resolveWith(C,[E])}}),E.ready.then=$.then,"complete"===C.readyState||"loading"!==C.readyState&&!C.documentElement.doScroll?
// Handle it asynchronously to allow scripts the opportunity to delay ready
S.setTimeout(E.ready):(
// Use the handy event callback
C.addEventListener("DOMContentLoaded",q),// A fallback to window.onload, that will always work
S.addEventListener("load",q));// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var W=function e(t,n,a,i,r,o,s){var l=0,u=t.length,p=null==a;// Sets many values
if("object"===b(a))for(l in r=!0,a)e(t,n,l,a[l],!0,o,s);// Sets one value
else if(void 0!==i&&(r=!0,y(i)||(s=!0),p&&(
// Bulk operations run against the entire set
n=s?(n.call(t,i),null):(p=n,function(e,t,n){return p.call(E(e),n)})),n))for(;l<u;l++)n(t[l],a,s?i:i.call(t[l],l,n(t[l],a)));return r?t:// Gets
p?n.call(t):u?n(t[0],a):o},Y=/^-ms-/,V=/-([a-z])/g;// Matches dashed string for camelizing
// Used by camelCase as callback to replace()
function X(e,t){return t.toUpperCase()}// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function G(e){return e.replace(Y,"ms-").replace(V,X)}var _=function(e){
// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function F(){this.expando=E.expando+F.uid++}F.uid=1,F.prototype={cache:function(e){
// Check if the owner object already has a cache
var t=e[this.expando];// If not, create one
return t||(t={},// We can accept data for non-element nodes in modern browsers,
// but we should not, see #8335.
// Always return an empty object.
_(e)&&(
// If it is a node unlikely to be stringify-ed or looped over
// use plain assignment
e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var a,i=this.cache(e);// Handle: [ owner, key, value ] args
// Always use camelCase key (gh-2257)
if("string"==typeof t)i[G(t)]=n;// Handle: [ owner, { properties } ] args
else
// Copy the properties one-by-one to the cache object
for(a in t)i[G(a)]=t[a];return i},get:function(e,t){return void 0===t?this.cache(e):// Always use camelCase key (gh-2257)
e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){
// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(// When the key is not a string, or both a key and value
// are specified, set or extend (existing objects) with either:
//
//   1. An object of properties
//   2. A key and value
//
this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,a=e[this.expando];if(void 0!==a){if(void 0!==t){n=(
// Support array or space separated string of keys
// If key is an array of keys...
// We always set camelCase keys, so remove that.
t=Array.isArray(t)?t.map(G):(t=G(t))in a?[t]:t.match(O)||[]).length;for(;n--;)delete a[t[n]]}// Remove the expando if there's no more data
(void 0===t||E.isEmptyObject(a))&&(
// Support: Chrome <=35 - 45
// Webkit & Blink performance suffers when deleting properties
// from DOM nodes, so set to undefined instead
// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!E.isEmptyObject(t)}};var U=new F,Q=new F,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,J=/[A-Z]/g;function Z(e,t,n){var a,i;// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(void 0===n&&1===e.nodeType)if(a="data-"+t.replace(J,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(a))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:// Only convert to a number if it doesn't change the string
i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}// Make sure we set the data so it isn't changed later
Q.set(e,t,n)}else n=void 0;return n}E.extend({hasData:function(e){return Q.hasData(e)||U.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},
// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function(e,t,n){return U.access(e,t,n)},_removeData:function(e,t){U.remove(e,t)}}),E.fn.extend({data:function(n,e){var t,a,i,r=this[0],o=r&&r.attributes;// Gets all values
if(void 0!==n)// Sets multiple values
return"object"===_t(n)?this.each(function(){Q.set(this,n)}):W(this,function(e){var t;// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(r&&void 0===e)return void 0!==(
// Attempt to get data from the cache
// The key will always be camelCased in Data
t=Q.get(r,n))?t:void 0!==(// Attempt to "discover" the data in
// HTML5 custom data-* attrs
t=Z(r,n))?t:// We tried really hard, but the data doesn't exist.
void 0;// Set the data...
this.each(function(){
// We always store the camelCased key
Q.set(this,n,e)})},null,e,1<arguments.length,null,!0);if(this.length&&(i=Q.get(r),1===r.nodeType&&!U.get(r,"hasDataAttrs"))){for(t=o.length;t--;)
// Support: IE 11 only
// The attrs elements can be null (#14894)
o[t]&&0===(a=o[t].name).indexOf("data-")&&(a=G(a.slice(5)),Z(r,a,i[a]));U.set(r,"hasDataAttrs",!0)}return i},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),E.extend({queue:function(e,t,n){var a;if(e)return t=(t||"fx")+"queue",a=U.get(e,t),// Speed up dequeue by getting out quickly if this is just a lookup
n&&(!a||Array.isArray(n)?a=U.access(e,t,E.makeArray(n)):a.push(n)),a||[]},dequeue:function(e,t){t=t||"fx";var n=E.queue(e,t),a=n.length,i=n.shift(),r=E._queueHooks(e,t);// If the fx queue is dequeued, always remove the progress sentinel
"inprogress"===i&&(i=n.shift(),a--),i&&(
// Add a progress sentinel to prevent the fx queue from being
// automatically dequeued
"fx"===t&&n.unshift("inprogress"),// Clear up the last queue stop function
delete r.stop,i.call(e,function(){E.dequeue(e,t)},r)),!a&&r&&r.empty.fire()},
// Not public - generate a queueHooks object, or return the current one
_queueHooks:function(e,t){var n=t+"queueHooks";return U.get(e,n)||U.access(e,n,{empty:E.Callbacks("once memory").add(function(){U.remove(e,[t+"queue",n])})})}}),E.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?E.queue(this[0],t):void 0===n?this:this.each(function(){var e=E.queue(this,t,n);// Ensure a hooks for this queue
E._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&E.dequeue(this,t)})},dequeue:function(e){return this.each(function(){E.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},
// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(e,t){var n,a=1,i=E.Deferred(),r=this,o=this.length,s=function(){--a||i.resolveWith(r,[r])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";o--;)(n=U.get(r[o],e+"queueHooks"))&&n.empty&&(a++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],ae=function(e,t){// Inline style trumps all
return"none"===(
// isHiddenWithinTree might be called from jQuery#filter function;
// in that case, element will be second argument
e=t||e).style.display||""===e.style.display&&// Otherwise, check computed style
// Support: Firefox <=43 - 45
// Disconnected elements can have computed display: none, so first confirm that elem is
// in the document.
E.contains(e.ownerDocument,e)&&"none"===E.css(e,"display")},ie=function(e,t,n,a){var i,r,o={};// Remember the old values, and insert the new ones
for(r in t)o[r]=e.style[r],e.style[r]=t[r];// Revert the old values
for(r in i=n.apply(e,a||[]),t)e.style[r]=o[r];return i};function re(e,t,n,a){var i,r,o=20,s=a?function(){return a.cur()}:function(){return E.css(e,t,"")},l=s(),u=n&&n[3]||(E.cssNumber[t]?"":"px"),
// Starting value computation is required for potential unit mismatches
p=(E.cssNumber[t]||"px"!==u&&+l)&&te.exec(E.css(e,t));if(p&&p[3]!==u){for(
// Support: Firefox <=54
// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
l/=2,// Trust units reported by jQuery.css
u=u||p[3],// Iteratively approximate from a nonzero starting point
p=+l||1;o--;)
// Evaluate and update our best guess (doubling guesses that zero out).
// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
E.style(e,t,p+u),(1-r)*(1-(r=s()/l||.5))<=0&&(o=0),p/=r;p*=2,E.style(e,t,p+u),// Make sure we update the tween properties later on
n=n||[]}return n&&(p=+p||+l||0,// Apply relative offset (+=/-=) if specified
i=n[1]?p+(n[1]+1)*n[2]:+n[2],a&&(a.unit=u,a.start=p,a.end=i)),i}var oe={};function se(e,t){// Determine new display value for elements that need to change
for(var n,a,i,r,o,s,l,u=[],p=0,d=e.length;p<d;p++)(a=e[p]).style&&(n=a.style.display,t?(
// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
// check is required in this first loop unless we have a nonempty display value (either
// inline or about-to-be-restored)
"none"===n&&(u[p]=U.get(a,"display")||null,u[p]||(a.style.display="")),""===a.style.display&&ae(a)&&(u[p]=(l=o=r=void 0,o=(i=a).ownerDocument,s=i.nodeName,(l=oe[s])||(r=o.body.appendChild(o.createElement(s)),l=E.css(r,"display"),r.parentNode.removeChild(r),"none"===l&&(l="block"),oe[s]=l)))):"none"!==n&&(u[p]="none",// Remember what we're overwriting
U.set(a,"display",n)));// Set the display of the elements in a second loop to avoid constant reflow
for(p=0;p<d;p++)null!=u[p]&&(e[p].style.display=u[p]);return e}E.fn.extend({show:function(){return se(this,!0)},hide:function(){return se(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?E(this).show():E(this).hide()})}});var le=/^(?:checkbox|radio)$/i,ue=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,pe=/^$|^module$|\/(?:java|ecma)script/i,de={
// Support: IE <=9 only
option:[1,"<select multiple='multiple'>","</select>"],
// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ce(e,t){
// Support: IE <=9 - 11 only
// Use typeof to avoid zero-argument method invocation on host objects (#15151)
var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&I(e,t)?E.merge([e],n):n}// Mark scripts as having already been evaluated
function fe(e,t){for(var n=0,a=e.length;n<a;n++)U.set(e[n],"globalEval",!t||U.get(t[n],"globalEval"))}// Support: IE <=9 only
de.optgroup=de.option,de.tbody=de.tfoot=de.colgroup=de.caption=de.thead,de.th=de.td;var he,me,ge=/<|&#?\w+;/;function ve(e,t,n,a,i){for(var r,o,s,l,u,p,d=t.createDocumentFragment(),c=[],f=0,h=e.length;f<h;f++)if((r=e[f])||0===r)
// Add nodes directly
if("object"===b(r))
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
E.merge(c,r.nodeType?[r]:r);// Convert non-html into a text node
else if(ge.test(r)){for(o=o||d.appendChild(t.createElement("div")),// Deserialize a standard representation
s=(ue.exec(r)||["",""])[1].toLowerCase(),l=de[s]||de._default,o.innerHTML=l[1]+E.htmlPrefilter(r)+l[2],// Descend through wrappers to the right content
p=l[0];p--;)o=o.lastChild;// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
E.merge(c,o.childNodes),// Ensure the created nodes are orphaned (#12392)
(// Remember the top-level container
o=d.firstChild).textContent=""}else c.push(t.createTextNode(r));// Convert html into DOM nodes
// Remove wrapper from fragment
for(d.textContent="",f=0;r=c[f++];)
// Skip elements already in the context collection (trac-4087)
if(a&&-1<E.inArray(r,a))i&&i.push(r);else// Capture executables
if(u=E.contains(r.ownerDocument,r),// Append to fragment
o=ce(d.appendChild(r),"script"),// Preserve script evaluation history
u&&fe(o),n)for(p=0;r=o[p++];)pe.test(r.type||"")&&n.push(r);return d}he=C.createDocumentFragment().appendChild(C.createElement("div")),// Support: Android 4.0 - 4.3 only
// Check state lost if the name is set (#11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (#14901)
(me=C.createElement("input")).setAttribute("type","radio"),me.setAttribute("checked","checked"),me.setAttribute("name","t"),he.appendChild(me),// Support: Android <=4.1 only
// Older WebKit doesn't clone checked state correctly in fragments
v.checkClone=he.cloneNode(!0).cloneNode(!0).lastChild.checked,// Support: IE <=11 only
// Make sure textarea (and checkbox) defaultValue is properly cloned
he.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!he.cloneNode(!0).lastChild.defaultValue;var ye=C.documentElement,we=/^key/,xe=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,be=/^([^.]*)(?:\.(.+)|)/;function Te(){return!0}function Se(){return!1}// Support: IE <=9 only
// See #13393 for more info
function Ce(){try{return C.activeElement}catch(e){}}function Ee(e,t,n,a,i,r){var o,s;// Types can be a map of types/handlers
if("object"===_t(t)){for(s in
// ( types-Object, selector, data )
"string"!=typeof n&&(
// ( types-Object, data )
a=a||n,n=void 0),t)Ee(e,s,n,a,t[s],r);return e}if(null==a&&null==i?(
// ( types, fn )
i=n,a=n=void 0):null==i&&("string"==typeof n?(
// ( types, selector, fn )
i=a,a=void 0):(
// ( types, data, fn )
i=a,a=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===r&&(o=i,// Use same guid so caller can remove using origFn
(i=function(e){
// Can use an empty set, since event contains the info
return E().off(e),o.apply(this,arguments)}).guid=o.guid||(o.guid=E.guid++)),e.each(function(){E.event.add(this,t,i,a,n)})}
/*
       * Helper functions for managing events -- not part of the public interface.
       * Props to Dean Edwards' addEvent library for many of the ideas.
       */E.event={global:{},add:function(t,e,n,a,i){var r,o,s,l,u,p,d,c,f,h,m,g=U.get(t);// Don't attach events to noData or text/comment nodes (but allow plain objects)
if(g)for(// Caller can pass in an object of custom data in lieu of the handler
n.handler&&(n=(r=n).handler,i=r.selector),// Ensure that invalid selectors throw exceptions at attach time
// Evaluate against documentElement in case elem is a non-element node (e.g., document)
i&&E.find.matchesSelector(ye,i),// Make sure that the handler has a unique ID, used to find/remove it later
n.guid||(n.guid=E.guid++),// Init the element's event structure and main handler, if this is the first
(l=g.events)||(l=g.events={}),(o=g.handle)||(o=g.handle=function(e){
// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return void 0!==E&&E.event.triggered!==e.type?E.event.dispatch.apply(t,arguments):void 0}),u=(// Handle multiple events separated by a space
e=(e||"").match(O)||[""]).length;u--;)f=m=(s=be.exec(e[u])||[])[1],h=(s[2]||"").split(".").sort(),// There *must* be a type, no attaching namespace-only handlers
f&&(// If event changes its type, use the special event handlers for the changed type
d=E.event.special[f]||{},// If selector defined, determine special event api type, otherwise given type
f=(i?d.delegateType:d.bindType)||f,// Update special based on newly reset type
d=E.event.special[f]||{},// handleObj is passed to all event handlers
p=E.extend({type:f,origType:m,data:a,handler:n,guid:n.guid,selector:i,needsContext:i&&E.expr.match.needsContext.test(i),namespace:h.join(".")},r),// Init the event handler queue if we're the first
(c=l[f])||((c=l[f]=[]).delegateCount=0,// Only use addEventListener if the special events handler returns false
d.setup&&!1!==d.setup.call(t,a,h,o)||t.addEventListener&&t.addEventListener(f,o)),d.add&&(d.add.call(t,p),p.handler.guid||(p.handler.guid=n.guid)),// Add to the element's handler list, delegates in front
i?c.splice(c.delegateCount++,0,p):c.push(p),// Keep track of which events have ever been used, for event optimization
E.event.global[f]=!0)},
// Detach an event or set of events from an element
remove:function(e,t,n,a,i){var r,o,s,l,u,p,d,c,f,h,m,g=U.hasData(e)&&U.get(e);if(g&&(l=g.events)){for(u=(// Once for each type.namespace in types; type may be omitted
t=(t||"").match(O)||[""]).length;u--;)// Unbind all events (on this namespace, if provided) for the element
if(f=m=(s=be.exec(t[u])||[])[1],h=(s[2]||"").split(".").sort(),f){for(d=E.event.special[f]||{},c=l[f=(a?d.delegateType:d.bindType)||f]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),// Remove matching events
o=r=c.length;r--;)p=c[r],!i&&m!==p.origType||n&&n.guid!==p.guid||s&&!s.test(p.namespace)||a&&a!==p.selector&&("**"!==a||!p.selector)||(c.splice(r,1),p.selector&&c.delegateCount--,d.remove&&d.remove.call(e,p));// Remove generic event handler if we removed something and no more handlers exist
// (avoids potential for endless recursion during removal of special event handlers)
o&&!c.length&&(d.teardown&&!1!==d.teardown.call(e,h,g.handle)||E.removeEvent(e,f,g.handle),delete l[f])}else for(f in l)E.event.remove(e,f+t[u],n,a,!0);// Remove data and the expando if it's no longer used
E.isEmptyObject(l)&&U.remove(e,"handle events")}},dispatch:function(e){
// Make a writable jQuery.Event from the native event object
var t,n,a,i,r,o,s=E.event.fix(e),l=new Array(arguments.length),u=(U.get(this,"events")||{})[s.type]||[],p=E.event.special[s.type]||{};for(// Use the fix-ed jQuery.Event rather than the (read-only) native event
l[0]=s,t=1;t<arguments.length;t++)l[t]=arguments[t];// Call the preDispatch hook for the mapped type, and let it bail if desired
if(s.delegateTarget=this,!p.preDispatch||!1!==p.preDispatch.call(this,s)){for(// Determine handlers
o=E.event.handlers.call(this,s,u),// Run delegates first; they may want to stop propagation beneath us
t=0;(i=o[t++])&&!s.isPropagationStopped();)for(s.currentTarget=i.elem,n=0;(r=i.handlers[n++])&&!s.isImmediatePropagationStopped();)
// Triggered event must either 1) have no namespace, or 2) have namespace(s)
// a subset or equal to those in the bound event (both can have no namespace).
s.rnamespace&&!s.rnamespace.test(r.namespace)||(s.handleObj=r,s.data=r.data,void 0!==(a=((E.event.special[r.origType]||{}).handle||r.handler).apply(i.elem,l))&&!1===(s.result=a)&&(s.preventDefault(),s.stopPropagation()));// Call the postDispatch hook for the mapped type
return p.postDispatch&&p.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,a,i,r,o,s=[],l=t.delegateCount,u=e.target;// Find delegate handlers
if(l&&// Support: IE <=9
// Black-hole SVG <use> instance trees (trac-13180)
u.nodeType&&// Support: Firefox <=42
// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
// Support: IE 11 only
// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
!("click"===e.type&&1<=e.button))for(;u!==this;u=u.parentNode||this)
// Don't check non-elements (#13208)
// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
if(1===u.nodeType&&("click"!==e.type||!0!==u.disabled)){for(r=[],o={},n=0;n<l;n++)void 0===o[// Don't conflict with Object.prototype properties (#13203)
i=(a=t[n]).selector+" "]&&(o[i]=a.needsContext?-1<E(i,this).index(u):E.find(i,this,null,[u]).length),o[i]&&r.push(a);r.length&&s.push({elem:u,handlers:r})}// Add the remaining (directly-bound) handlers
return u=this,l<t.length&&s.push({elem:u,handlers:t.slice(l)}),s},addProp:function(t,e){Object.defineProperty(E.Event.prototype,t,{enumerable:!0,configurable:!0,get:y(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[E.expando]?e:new E.Event(e)},special:{load:{
// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},focus:{
// Fire native event if possible so blur/focus sequence is correct
trigger:function(){if(this!==Ce()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Ce()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{
// For checkbox, fire native event so checked state will be right
trigger:function(){if("checkbox"===this.type&&this.click&&I(this,"input"))return this.click(),!1},
// For cross-browser consistency, don't fire native .click() on links
_default:function(e){return I(e.target,"a")}},beforeunload:{postDispatch:function(e){
// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},E.removeEvent=function(e,t,n){
// This "if" is needed for plain objects
e.removeEventListener&&e.removeEventListener(t,n)},E.Event=function(e,t){
// Allow instantiation without the 'new' keyword
if(!(this instanceof E.Event))return new E.Event(e,t);// Event object
e&&e.type?(this.originalEvent=e,this.type=e.type,// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&// Support: Android <=2.3 only
!1===e.returnValue?Te:Se,// Create target properties
// Support: Safari <=6 - 7 only
// Target should not be a text node (#504, #13143)
this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,// Put explicitly provided properties onto the event object
t&&E.extend(this,t),// Create a timestamp if incoming event doesn't have one
this.timeStamp=e&&e.timeStamp||Date.now(),// Mark it as fixed
this[E.expando]=!0},// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
E.Event.prototype={constructor:E.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Te,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Te,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Te,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},// Includes all common event props including KeyEvent and MouseEvent specific props
E.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;// Add which for key events
return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:// Add which for click: 1 === left; 2 === middle; 3 === right
!e.which&&void 0!==t&&xe.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},E.event.addProp),// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
E.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){E.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,a=e.handleObj;// For mouseenter/leave call the handler if related is outside the target.
// NB: No relatedTarget if the mouse left/entered the browser window
return n&&(n===this||E.contains(this,n))||(e.type=a.origType,t=a.handler.apply(this,arguments),e.type=i),t}}}),E.fn.extend({on:function(e,t,n,a){return Ee(this,e,t,n,a)},one:function(e,t,n,a){return Ee(this,e,t,n,a,1)},off:function(e,t,n){var a,i;if(e&&e.preventDefault&&e.handleObj)
// ( event )  dispatched jQuery.Event
return a=e.handleObj,E(e.delegateTarget).off(a.namespace?a.origType+"."+a.namespace:a.origType,a.selector,a.handler),this;if("object"!==_t(e))return!1!==t&&"function"!=typeof t||(
// ( types [, fn] )
n=t,t=void 0),!1===n&&(n=Se),this.each(function(){E.event.remove(this,e,n,t)});
// ( types-object [, selector] )
for(i in e)this.off(i,t,e[i]);return this}});var
/* eslint-disable max-len */
// See https://github.com/eslint/eslint/issues/3229
ke=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
/* eslint-enable */
// Support: IE <=10 - 11, Edge 12 - 13 only
// In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
Ie=/<script|<style|<link/i,
// checked="checked" or checked
Pe=/checked\s*(?:[^=]|=\s*.checked.)/i,Me=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;// Prefer a tbody over its parent table for containing new rows
function Ae(e,t){return I(e,"table")&&I(11!==t.nodeType?t:t.firstChild,"tr")&&E(e).children("tbody")[0]||e}// Replace/restore the type attribute of script elements for safe DOM manipulation
function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ze(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,a,i,r,o,s,l,u;if(1===t.nodeType){// 1. Copy private data: events, handlers, etc.
if(U.hasData(e)&&(r=U.access(e),o=U.set(t,r),u=r.events))for(i in delete o.handle,o.events={},u)for(n=0,a=u[i].length;n<a;n++)E.event.add(t,i,u[i][n]);// 2. Copy user data
Q.hasData(e)&&(s=Q.access(e),l=E.extend({},s),Q.set(t,l))}}// Fix IE bugs, see support tests
function Ne(n,a,i,r){
// Flatten any nested arrays
a=m.apply([],a);var e,t,o,s,l,u,p=0,d=n.length,c=d-1,f=a[0],h=y(f);// We can't cloneNode fragments that contain checked, in WebKit
if(h||1<d&&"string"==typeof f&&!v.checkClone&&Pe.test(f))return n.each(function(e){var t=n.eq(e);h&&(a[0]=f.call(this,e,t.html())),Ne(t,a,i,r)});if(d&&(t=(e=ve(a,n[0].ownerDocument,!1,n,r)).firstChild,1===e.childNodes.length&&(e=t),t||r)){// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (#8070).
for(s=(o=E.map(ce(e,"script"),De)).length;p<d;p++)l=e,p!==c&&(l=E.clone(l,!0,!0),// Keep references to cloned scripts for later restoration
s&&
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
E.merge(o,ce(l,"script"))),i.call(n[p],l,p);if(s)// Evaluate executable scripts on first document insertion
for(u=o[o.length-1].ownerDocument,// Reenable scripts
E.map(o,ze),p=0;p<s;p++)l=o[p],pe.test(l.type||"")&&!U.access(l,"globalEval")&&E.contains(u,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?
// Optional AJAX dependency, but won't run scripts if not present
E._evalUrl&&E._evalUrl(l.src):x(l.textContent.replace(Me,""),u,l))}return n}function Oe(e,t,n){for(var a,i=t?E.filter(t,e):e,r=0;null!=(a=i[r]);r++)n||1!==a.nodeType||E.cleanData(ce(a)),a.parentNode&&(n&&E.contains(a.ownerDocument,a)&&fe(ce(a,"script")),a.parentNode.removeChild(a));return e}E.extend({htmlPrefilter:function(e){return e.replace(ke,"<$1></$2>")},clone:function(e,t,n){var a,i,r,o,s,l,u,p=e.cloneNode(!0),d=E.contains(e.ownerDocument,e);// Fix IE cloning issues
if(!(v.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||E.isXMLDoc(e)))for(
// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
o=ce(p),a=0,i=(r=ce(e)).length;a<i;a++)s=r[a],l=o[a],void 0,// Fails to persist the checked state of a cloned checkbox or radio button.
"input"===(u=l.nodeName.toLowerCase())&&le.test(s.type)?l.checked=s.checked:"input"!==u&&"textarea"!==u||(l.defaultValue=s.defaultValue);// Copy the events from the original to the clone
if(t)if(n)for(r=r||ce(e),o=o||ce(p),a=0,i=r.length;a<i;a++)Le(r[a],o[a]);else Le(e,p);// Preserve script evaluation history
// Return the cloned set
return 0<(o=ce(p,"script")).length&&fe(o,!d&&ce(e,"script")),p},cleanData:function(e){for(var t,n,a,i=E.event.special,r=0;void 0!==(n=e[r]);r++)if(_(n)){if(t=n[U.expando]){if(t.events)for(a in t.events)i[a]?E.event.remove(n,a):E.removeEvent(n,a,t.handle);// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
n[U.expando]=void 0}n[Q.expando]&&(
// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
n[Q.expando]=void 0)}}}),E.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return W(this,function(e){return void 0===e?E.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ne(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Ae(this,e).appendChild(e)})},prepend:function(){return Ne(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Ae(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ne(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ne(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(
// Prevent memory leaks
E.cleanData(ce(e,!1)),// Remove any remaining nodes
e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return E.clone(this,e,t)})},html:function(e){return W(this,function(e){var t=this[0]||{},n=0,a=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;// See if we can take a shortcut and just use innerHTML
if("string"==typeof e&&!Ie.test(e)&&!de[(ue.exec(e)||["",""])[1].toLowerCase()]){e=E.htmlPrefilter(e);try{for(;n<a;n++)// Remove element nodes and prevent memory leaks
1===(t=this[n]||{}).nodeType&&(E.cleanData(ce(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];// Make the changes, replacing each non-ignored context element with the new content
return Ne(this,arguments,function(e){var t=this.parentNode;E.inArray(this,n)<0&&(E.cleanData(ce(this)),t&&t.replaceChild(e,this));// Force callback invocation
},n)}}),E.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,o){E.fn[e]=function(e){for(var t,n=[],a=E(e),i=a.length-1,r=0;r<=i;r++)t=r===i?this:this.clone(!0),E(a[r])[o](t),// Support: Android <=4.0 only, PhantomJS 1 only
// .get() because push.apply(_, arraylike) throws on ancient WebKit
l.apply(n,t.get());return this.pushStack(n)}});var je=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),He=function(e){
// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var t=e.ownerDocument.defaultView;return t&&t.opener||(t=S),t.getComputedStyle(e)},Re=new RegExp(ne.join("|"),"i");function Be(e,t,n){var a,i,r,o,
// Support: Firefox 51+
// Retrieving style before computed somehow
// fixes an issue with getting wrong values
// on detached elements
s=e.style;// getPropertyValue is needed for:
//   .css('filter') (IE 9 only, #12537)
//   .css('--customProperty) (#3144)
return(n=n||He(e))&&(""!==(o=n.getPropertyValue(t)||n[t])||E.contains(e.ownerDocument,e)||(o=E.style(e,t)),// A tribute to the "awesome hack by Dean Edwards"
// Android Browser returns percentage for some values,
// but width seems to be reliably pixels.
// This is against the CSSOM draft spec:
// https://drafts.csswg.org/cssom/#resolved-values
!v.pixelBoxStyles()&&je.test(o)&&Re.test(t)&&(
// Remember the original values
a=s.width,i=s.minWidth,r=s.maxWidth,// Put in the new values to get a computed value out
s.minWidth=s.maxWidth=s.width=o,o=n.width,// Revert the changed values
s.width=a,s.minWidth=i,s.maxWidth=r)),void 0!==o?// Support: IE <=9 - 11 only
// IE returns zIndex value as an integer.
o+"":o}function $e(e,t){
// Define the hook, we'll check on the first run if it's really needed.
return{get:function(){if(!e())// Hook needed; redefine it so that the support test is not executed again.
return(this.get=t).apply(this,arguments);
// Hook not needed (or it's not possible to use it due
// to missing dependency), remove it.
delete this.get}}}!function(){
// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function e(){
// This is a singleton, we need to execute it only once
if(l){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ye.appendChild(s).appendChild(l);var e=S.getComputedStyle(l);n="1%"!==e.top,// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
o=12===t(e.marginLeft),// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
// Some styles come back with percentage values, even though they shouldn't
l.style.right="60%",r=36===t(e.right),// Support: IE 9 - 11 only
// Detect misreporting of content dimensions for box-sizing:border-box elements
a=36===t(e.width),// Support: IE 9 only
// Detect overflow:scroll screwiness (gh-3699)
l.style.position="absolute",i=36===l.offsetWidth||"absolute",ye.removeChild(s),// Nullify the div so it wouldn't be stored in the memory and
// it will also be a sign that checks already performed
l=null}}function t(e){return Math.round(parseFloat(e))}var n,a,i,r,o,s=C.createElement("div"),l=C.createElement("div");// Finish early in limited (non-browser) environments
l.style&&(// Support: IE <=9 - 11 only
// Style of cloned element affects source element cloned (#8908)
l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===l.style.backgroundClip,E.extend(v,{boxSizingReliable:function(){return e(),a},pixelBoxStyles:function(){return e(),r},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),o},scrollboxSize:function(){return e(),i}}))}();var// Swappable if display is none or starts with table
// except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
qe=/^(none|table(?!-c[ea]).+)/,We=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Xe=["Webkit","Moz","ms"],Ge=C.createElement("div").style;// Return a css property mapped to a potentially vendor prefixed property
// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function _e(e){var t=E.cssProps[e];return t||(t=E.cssProps[e]=function(e){
// Shortcut for names that are not vendor prefixed
if(e in Ge)return e;// Check for vendor prefixed names
for(var t=e[0].toUpperCase()+e.slice(1),n=Xe.length;n--;)if((e=Xe[n]+t)in Ge)return e}(e)||e),t}function Fe(e,t,n){
// Any relative (+/-) values have already been
// normalized at this point
var a=te.exec(t);return a?// Guard against undefined "subtract", e.g., when used as in cssHooks
Math.max(0,a[2]-(n||0))+(a[3]||"px"):t}function Ue(e,t,n,a,i,r){var o="width"===t?1:0,s=0,l=0;// Adjustment may not be necessary
if(n===(a?"border":"content"))return 0;for(;o<4;o+=2)
// Both box models exclude margin
"margin"===n&&(l+=E.css(e,n+ne[o],!0,i)),// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
a?(
// For "content", subtract padding
"content"===n&&(l-=E.css(e,"padding"+ne[o],!0,i)),// For "content" or "padding", subtract border
"margin"!==n&&(l-=E.css(e,"border"+ne[o]+"Width",!0,i))):(
// Add padding
l+=E.css(e,"padding"+ne[o],!0,i),// For "border" or "margin", add border
"padding"!==n?l+=E.css(e,"border"+ne[o]+"Width",!0,i):s+=E.css(e,"border"+ne[o]+"Width",!0,i));// Account for positive content-box scroll gutter when requested by providing computedVal
return!a&&0<=r&&(
// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
// Assuming integer scroll gutter, subtract the rest and round down
l+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-r-l-s-.5))),l}function Qe(e,t,n){
// Start with computed style
var a=He(e),i=Be(e,t,a),r="border-box"===E.css(e,"boxSizing",!1,a),o=r;// Support: Firefox <=54
// Return a confounding non-pixel value or feign ignorance, as appropriate.
if(je.test(i)){if(!n)return i;i="auto"}// Check for style in case a browser which returns unreliable values
// for getComputedStyle silently falls back to the reliable elem.style
// Adjust for the element's box model
return o=o&&(v.boxSizingReliable()||i===e.style[t]),// Fall back to offsetWidth/offsetHeight when value is "auto"
// This happens for inline elements with no explicit setting (gh-3571)
// Support: Android <=4.1 - 4.3 only
// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
("auto"===i||!parseFloat(i)&&"inline"===E.css(e,"display",!1,a))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],// offsetWidth/offsetHeight provide border-box values
o=!0),(// Normalize "" and auto
i=parseFloat(i)||0)+Ue(e,t,n||(r?"border":"content"),o,a,// Provide the current computed size to request scroll gutter calculation (gh-3589)
i)+"px"}function Ke(e,t,n,a,i){return new Ke.prototype.init(e,t,n,a,i)}E.extend({
// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(e,t){if(t){
// We should always get a number back from opacity
var n=Be(e,"opacity");return""===n?"1":n}}}},
// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},
// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{},
// Get and set the style property on a DOM Node
style:function(e,t,n,a){
// Don't set styles on text and comment nodes
if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){// Make sure that we're working with the right name
var i,r,o,s=G(t),l=We.test(t),u=e.style;// Make sure that we're working with the right name. We don't
// want to query the value if it is a CSS custom property
// since they are user-defined.
// Check if we're setting a value
if(l||(t=_e(s)),// Gets hook for the prefixed version, then unprefixed version
o=E.cssHooks[t]||E.cssHooks[s],void 0===n)
// If a hook was provided get the non-computed value from there
return o&&"get"in o&&void 0!==(i=o.get(e,!1,a))?i:u[t];// Otherwise just get the value from the style object
// Convert "+=" or "-=" to relative numbers (#7345)
"string"===(r=_t(n))&&(i=te.exec(n))&&i[1]&&(n=re(e,t,i),// Fixes bug #9237
r="number"),// Make sure that null and NaN values aren't set (#7116)
null!=n&&n==n&&(// If a number was passed in, add the unit (except for certain CSS properties)
"number"===r&&(n+=i&&i[3]||(E.cssNumber[s]?"":"px")),// background-* props affect original clone's values
v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),// If a hook was provided, use that value, otherwise just set the specified value
o&&"set"in o&&void 0===(n=o.set(e,n,a))||(l?u.setProperty(t,n):u[t]=n))}},css:function(e,t,n,a){var i,r,o,s=G(t);// Make sure that we're working with the right name. We don't
// want to modify the value if it is a CSS custom property
// since they are user-defined.
// Make numeric if forced or a qualifier was provided and val looks numeric
return We.test(t)||(t=_e(s)),// If a hook was provided get the computed value from there
(// Try prefixed name followed by the unprefixed name
o=E.cssHooks[t]||E.cssHooks[s])&&"get"in o&&(i=o.get(e,!0,n)),// Otherwise, if a way to get the computed value exists, use that
void 0===i&&(i=Be(e,t,a)),// Convert "normal" to computed value
"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(r=parseFloat(i),!0===n||isFinite(r)?r||0:i):i}}),E.each(["height","width"],function(e,s){E.cssHooks[s]={get:function(e,t,n){if(t)
// Certain elements can have dimension info if we invisibly show them
// but it must have a current display style that would benefit
return!qe.test(E.css(e,"display"))||// Support: Safari 8+
// Table columns in Safari have non-zero offsetWidth & zero
// getBoundingClientRect().width unless display is changed.
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
e.getClientRects().length&&e.getBoundingClientRect().width?Qe(e,s,n):ie(e,Ye,function(){return Qe(e,s,n)})},set:function(e,t,n){var a,i=He(e),r="border-box"===E.css(e,"boxSizing",!1,i),o=n&&Ue(e,s,n,r,i);// Account for unreliable border-box dimensions by comparing offset* to computed and
// faking a content-box to get border and padding (gh-3699)
return r&&v.scrollboxSize()===i.position&&(o-=Math.ceil(e["offset"+s[0].toUpperCase()+s.slice(1)]-parseFloat(i[s])-Ue(e,s,"border",!1,i)-.5)),// Convert to pixels if value adjustment is needed
o&&(a=te.exec(t))&&"px"!==(a[3]||"px")&&(e.style[s]=t,t=E.css(e,s)),Fe(0,t,o)}}}),E.cssHooks.marginLeft=$e(v.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-ie(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),// These hooks are used by animate to expand properties
E.each({margin:"",padding:"",border:"Width"},function(i,r){E.cssHooks[i+r]={expand:function(e){for(var t=0,n={},
// Assumes a single number if not a string
a="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+r]=a[t]||a[t-2]||a[0];return n}},"margin"!==i&&(E.cssHooks[i+r].set=Fe)}),E.fn.extend({css:function(e,t){return W(this,function(e,t,n){var a,i,r={},o=0;if(Array.isArray(t)){for(a=He(e),i=t.length;o<i;o++)r[t[o]]=E.css(e,t[o],!1,a);return r}return void 0!==n?E.style(e,t,n):E.css(e,t)},e,t,1<arguments.length)}}),((E.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,a,i,r){this.elem=e,this.prop=n,this.easing=i||E.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=a,this.unit=r||(E.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=E.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
(Ke.propHooks={_default:{get:function(e){var t;// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
t=E.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){
// Use step hook for back compat.
// Use cssHook if its there.
// Use .style if available and use plain properties where available.
E.fx.step[e.prop]?E.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[E.cssProps[e.prop]]&&!E.cssHooks[e.prop]?e.elem[e.prop]=e.now:E.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},E.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},E.fx=Ke.prototype.init,// Back compat <1.8 extension point
E.fx.step={};var Je,Ze,et,tt,nt=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function it(){Ze&&(!1===C.hidden&&S.requestAnimationFrame?S.requestAnimationFrame(it):S.setTimeout(it,E.fx.interval),E.fx.tick())}// Animations created synchronously will run synchronously
function rt(){return S.setTimeout(function(){Je=void 0}),Je=Date.now()}// Generate parameters to create a standard animation
function ot(e,t){var n,a=0,i={height:e};// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
for(t=t?1:0;a<4;a+=2-t)i["margin"+(n=ne[a])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function st(e,t,n){for(var a,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),r=0,o=i.length;r<o;r++)if(a=i[r].call(n,t,e))
// We're done with this property
return a}function lt(r,e,t){var n,o,a=0,i=lt.prefilters.length,s=E.Deferred().always(function(){
// Don't match elem in the :animated selector
delete l.elem}),l=function(){if(o)return!1;for(var e=Je||rt(),t=Math.max(0,u.startTime+u.duration-e),n=1-(t/u.duration||0),a=0,i=u.tweens.length;a<i;a++)u.tweens[a].run(n);// If there's more to do, yield
return s.notifyWith(r,[u,n,t]),n<1&&i?t:(// If this was an empty animation, synthesize a final progress notification
i||s.notifyWith(r,[u,1,0]),// Resolve the animation and report its conclusion
s.resolveWith(r,[u]),!1)},u=s.promise({elem:r,props:E.extend({},e),opts:E.extend(!0,{specialEasing:{},easing:E.easing._default},t),originalProperties:e,originalOptions:t,startTime:Je||rt(),duration:t.duration,tweens:[],createTween:function(e,t){var n=E.Tween(r,u.opts,e,t,u.opts.specialEasing[e]||u.opts.easing);return u.tweens.push(n),n},stop:function(e){var t=0,
// If we are going to the end, we want to run all the tweens
// otherwise we skip this part
n=e?u.tweens.length:0;if(o)return this;for(o=!0;t<n;t++)u.tweens[t].run(1);// Resolve when we played the last frame; otherwise, reject
return e?(s.notifyWith(r,[u,1,0]),s.resolveWith(r,[u,e])):s.rejectWith(r,[u,e]),this}}),p=u.props;for(!function(e,t){var n,a,i,r,o;// camelCase, specialEasing and expand cssHook pass
for(n in e)if(i=t[a=G(n)],r=e[n],Array.isArray(r)&&(i=r[1],r=e[n]=r[0]),n!==a&&(e[a]=r,delete e[n]),(o=E.cssHooks[a])&&"expand"in o)// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(n in r=o.expand(r),delete e[a],r)n in e||(e[n]=r[n],t[n]=i);else t[a]=i}(p,u.opts.specialEasing);a<i;a++)if(n=lt.prefilters[a].call(u,r,p,u.opts))return y(n.stop)&&(E._queueHooks(u.elem,u.opts.queue).stop=n.stop.bind(n)),n;return E.map(p,st,u),y(u.opts.start)&&u.opts.start.call(r,u),// Attach callbacks from options
u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always),E.fx.timer(E.extend(l,{elem:r,anim:u,queue:u.opts.queue})),u}E.Animation=E.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return re(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){for(var n,a=0,i=(e=y(e)?(t=e,["*"]):e.match(O)).length;a<i;a++)n=e[a],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var a,i,r,o,s,l,u,p,d="width"in t||"height"in t,c=this,f={},h=e.style,m=e.nodeType&&ae(e),g=U.get(e,"fxshow");// Queue-skipping animations hijack the fx hooks
// Detect show/hide animations
for(a in n.queue||(null==(o=E._queueHooks(e,"fx")).unqueued&&(o.unqueued=0,s=o.empty.fire,o.empty.fire=function(){o.unqueued||s()}),o.unqueued++,c.always(function(){
// Ensure the complete handler is called before this completes
c.always(function(){o.unqueued--,E.queue(e,"fx").length||o.empty.fire()})})),t)if(i=t[a],nt.test(i)){if(delete t[a],r=r||"toggle"===i,i===(m?"hide":"show")){
// Pretend to be hidden if this is a "show" and
// there is still data from a stopped show/hide
if("show"!==i||!g||void 0===g[a])continue;m=!0}f[a]=g&&g[a]||E.style(e,a)}// Bail out if this is a no-op like .hide().hide()
if((l=!E.isEmptyObject(t))||!E.isEmptyObject(f))for(a in// Restrict "overflow" and "display" styles during box animations
d&&1===e.nodeType&&(
// Support: IE <=9 - 11, Edge 12 - 15
// Record all 3 overflow attributes because IE does not infer the shorthand
// from identically-valued overflowX and overflowY and Edge just mirrors
// the overflowX value there.
n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(// Identify a display type, preferring old show/hide data over the CSS cascade
u=g&&g.display)&&(u=U.get(e,"display")),"none"===(p=E.css(e,"display"))&&(u?p=u:(
// Get nonempty value(s) by temporarily forcing visibility
se([e],!0),u=e.style.display||u,p=E.css(e,"display"),se([e]))),// Animate inline elements as inline-block
("inline"===p||"inline-block"===p&&null!=u)&&"none"===E.css(e,"float")&&(
// Restore the original display value at the end of pure show/hide animations
l||(c.done(function(){h.display=u}),null==u&&(p=h.display,u="none"===p?"":p)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",c.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),// Implement show/hide animations
l=!1,f)
// General show/hide setup for this element animation
l||(g?"hidden"in g&&(m=g.hidden):g=U.access(e,"fxshow",{display:u}),// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
r&&(g.hidden=!m),// Show elements before animating them
m&&se([e],!0)
/* eslint-disable no-loop-func */,c.done(function(){for(a in
/* eslint-enable no-loop-func */
// The final step of a "hide" animation is actually hiding the element
m||se([e]),U.remove(e,"fxshow"),f)E.style(e,a,f[a])})),// Per-property setup
l=st(m?g[a]:0,a,c),a in g||(g[a]=l.start,m&&(l.end=l.start,l.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),E.speed=function(e,t,n){var a=e&&"object"===_t(e)?E.extend({},e):{complete:n||!n&&t||y(e)&&e,duration:e,easing:n&&t||t&&!y(t)&&t};// Go to the end state if fx are off
return E.fx.off?a.duration=0:"number"!=typeof a.duration&&(a.duration in E.fx.speeds?a.duration=E.fx.speeds[a.duration]:a.duration=E.fx.speeds._default),// Normalize opt.queue - true/undefined/null -> "fx"
null!=a.queue&&!0!==a.queue||(a.queue="fx"),// Queueing
a.old=a.complete,a.complete=function(){y(a.old)&&a.old.call(this),a.queue&&E.dequeue(this,a.queue)},a},E.fn.extend({fadeTo:function(e,t,n,a){
// Show any hidden elements after setting opacity to 0
return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,a)},animate:function(t,e,n,a){var i=E.isEmptyObject(t),r=E.speed(e,n,a),o=function(){
// Operate on a copy of prop so per-property easing won't be lost
var e=lt(this,E.extend({},t),r);// Empty animations, or finishing resolves immediately
(i||U.get(this,"finish"))&&e.stop(!0)};return o.finish=o,i||!1===r.queue?this.each(o):this.queue(r.queue,o)},stop:function(i,e,r){var o=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof i&&(r=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=E.timers,a=U.get(this);if(t)a[t]&&a[t].stop&&o(a[t]);else for(t in a)a[t]&&a[t].stop&&at.test(t)&&o(a[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(r),e=!1,n.splice(t,1));// Start the next in the queue if the last step wasn't forced.
// Timers currently will call their complete callbacks, which
// will dequeue but only if they were gotoEnd.
!e&&r||E.dequeue(this,i)})},finish:function(o){return!1!==o&&(o=o||"fx"),this.each(function(){var e,t=U.get(this),n=t[o+"queue"],a=t[o+"queueHooks"],i=E.timers,r=n?n.length:0;// Enable finishing flag on private data
// Look for any active animations, and finish them
for(t.finish=!0,// Empty the queue first
E.queue(this,o,[]),a&&a.stop&&a.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===o&&(i[e].anim.stop(!0),i.splice(e,1));// Look for any animations in the old queue and finish them
for(e=0;e<r;e++)n[e]&&n[e].finish&&n[e].finish.call(this);// Turn off finishing flag
delete t.finish})}}),E.each(["toggle","show","hide"],function(e,a){var i=E.fn[a];E.fn[a]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ot(a,!0),e,t,n)}}),// Generate shortcuts for custom animations
E.each({slideDown:ot("show"),slideUp:ot("hide"),slideToggle:ot("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,a){E.fn[e]=function(e,t,n){return this.animate(a,e,t,n)}}),E.timers=[],E.fx.tick=function(){var e,t=0,n=E.timers;for(Je=Date.now();t<n.length;t++)// Run the timer and safely remove it when done (allowing for external removal)
(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||E.fx.stop(),Je=void 0},E.fx.timer=function(e){E.timers.push(e),E.fx.start()},E.fx.interval=13,E.fx.start=function(){Ze||(Ze=!0,it())},E.fx.stop=function(){Ze=null},E.fx.speeds={slow:600,fast:200,
// Default speed
_default:400},// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
E.fn.delay=function(a,e){return a=E.fx&&E.fx.speeds[a]||a,e=e||"fx",this.queue(e,function(e,t){var n=S.setTimeout(e,a);t.stop=function(){S.clearTimeout(n)}})},et=C.createElement("input"),tt=C.createElement("select").appendChild(C.createElement("option")),et.type="checkbox",// Support: Android <=4.3 only
// Default value for a checkbox should be "on"
v.checkOn=""!==et.value,// Support: IE <=11 only
// Must access selectedIndex to make default options select
v.optSelected=tt.selected,(// Support: IE <=11 only
// An input loses its value after becoming a radio
et=C.createElement("input")).value="t",et.type="radio",v.radioValue="t"===et.value;var ut,pt=E.expr.attrHandle;E.fn.extend({attr:function(e,t){return W(this,E.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){E.removeAttr(this,e)})}}),E.extend({attr:function(e,t,n){var a,i,r=e.nodeType;// Don't get/set attributes on text, comment and attribute nodes
if(3!==r&&8!==r&&2!==r)// Fallback to prop when attributes are not supported
return void 0===e.getAttribute?E.prop(e,t,n):(// Attribute hooks are determined by the lowercase version
// Grab necessary hook if one is defined
1===r&&E.isXMLDoc(e)||(i=E.attrHooks[t.toLowerCase()]||(E.expr.match.bool.test(t)?ut:void 0)),void 0!==n?null===n?void E.removeAttr(e,t):i&&"set"in i&&void 0!==(a=i.set(e,n,t))?a:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(a=i.get(e,t))?a:null==(a=E.find.attr(e,t))?void 0:a)},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&I(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,a=0,
// Attribute names can contain non-HTML whitespace characters
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
i=t&&t.match(O);if(i&&1===e.nodeType)for(;n=i[a++];)e.removeAttribute(n)}}),// Hooks for boolean attributes
ut={set:function(e,t,n){return!1===t?
// Remove boolean attributes when set to false
E.removeAttr(e,n):e.setAttribute(n,n),n}},E.each(E.expr.match.bool.source.match(/\w+/g),function(e,t){var o=pt[t]||E.find.attr;pt[t]=function(e,t,n){var a,i,r=t.toLowerCase();return n||(
// Avoid an infinite loop by temporarily removing this function from the getter
i=pt[r],pt[r]=a,a=null!=o(e,t,n)?r:null,pt[r]=i),a}});var dt=/^(?:input|select|textarea|button)$/i,ct=/^(?:a|area)$/i;// Strip and collapse whitespace according to HTML spec
// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
function ft(e){return(e.match(O)||[]).join(" ")}function ht(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(O)||[]}E.fn.extend({prop:function(e,t){return W(this,E.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[E.propFix[e]||e]})}}),E.extend({prop:function(e,t,n){var a,i,r=e.nodeType;// Don't get/set properties on text, comment and attribute nodes
if(3!==r&&8!==r&&2!==r)return 1===r&&E.isXMLDoc(e)||(
// Fix name and attach hooks
t=E.propFix[t]||t,i=E.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(a=i.set(e,n,t))?a:e[t]=n:i&&"get"in i&&null!==(a=i.get(e,t))?a:e[t]},propHooks:{tabIndex:{get:function(e){
// Support: IE <=9 - 11 only
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
// Use proper attribute retrieval(#12072)
var t=E.find.attr(e,"tabindex");return t?parseInt(t,10):dt.test(e.nodeName)||ct.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
v.optSelected||(E.propHooks.selected={get:function(e){
/* eslint no-unused-expressions: "off" */
var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){
/* eslint no-unused-expressions: "off" */
var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),E.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){E.propFix[this.toLowerCase()]=this}),E.fn.extend({addClass:function(t){var e,n,a,i,r,o,s,l=0;if(y(t))return this.each(function(e){E(this).addClass(t.call(this,e,ht(this)))});if((e=mt(t)).length)for(;n=this[l++];)if(i=ht(n),a=1===n.nodeType&&" "+ft(i)+" "){for(o=0;r=e[o++];)a.indexOf(" "+r+" ")<0&&(a+=r+" ");// Only assign if different to avoid unneeded rendering.
i!==(s=ft(a))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,a,i,r,o,s,l=0;if(y(t))return this.each(function(e){E(this).removeClass(t.call(this,e,ht(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)for(;n=this[l++];)if(i=ht(n),// This expression is here for better compressibility (see addClass)
a=1===n.nodeType&&" "+ft(i)+" "){for(o=0;r=e[o++];)
// Remove *all* instances
for(;-1<a.indexOf(" "+r+" ");)a=a.replace(" "+r+" "," ");// Only assign if different to avoid unneeded rendering.
i!==(s=ft(a))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var r=_t(i),o="string"===r||Array.isArray(i);return"boolean"==typeof t&&o?t?this.addClass(i):this.removeClass(i):y(i)?this.each(function(e){E(this).toggleClass(i.call(this,e,ht(this),t),t)}):this.each(function(){var e,t,n,a;if(o)for(
// Toggle individual class names
t=0,n=E(this),a=mt(i);e=a[t++];)
// Check each className given, space separated list
n.hasClass(e)?n.removeClass(e):n.addClass(e);// Toggle whole class name
else void 0!==i&&"boolean"!==r||((e=ht(this))&&
// Store className if set
U.set(this,"__className__",e),// If the element has a class name or if we're passed `false`,
// then remove the whole classname (if there was one, the above saved it).
// Otherwise bring back whatever was previously saved (if anything),
// falling back to the empty string if nothing was stored.
this.setAttribute&&this.setAttribute("class",e||!1===i?"":U.get(this,"__className__")||""))})},hasClass:function(e){var t,n,a=0;for(t=" "+e+" ";n=this[a++];)if(1===n.nodeType&&-1<(" "+ft(ht(n))+" ").indexOf(t))return!0;return!1}});var gt=/\r/g;E.fn.extend({val:function(n){var a,e,i,t=this[0];return arguments.length?(i=y(n),this.each(function(e){var t;1===this.nodeType&&(// Treat null/undefined as ""; convert numbers to string
null==(t=i?n.call(this,e,E(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=E.map(t,function(e){return null==e?"":e+""})),// If set returns undefined, fall back to normal setting
(a=E.valHooks[this.type]||E.valHooks[this.nodeName.toLowerCase()])&&"set"in a&&void 0!==a.set(this,t,"value")||(this.value=t))})):t?(a=E.valHooks[t.type]||E.valHooks[t.nodeName.toLowerCase()])&&"get"in a&&void 0!==(e=a.get(t,"value"))?e:// Handle most common string cases
"string"==typeof(e=t.value)?e.replace(gt,""):null==e?"":e:void 0}}),E.extend({valHooks:{option:{get:function(e){var t=E.find.attr(e,"value");return null!=t?t:// Support: IE <=10 - 11 only
// option.text throws exceptions (#14686, #14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
ft(E.text(e))}},select:{get:function(e){var t,n,a,i=e.options,r=e.selectedIndex,o="select-one"===e.type,s=o?null:[],l=o?r+1:i.length;// Loop through all the selected options
for(a=r<0?l:o?r:0;a<l;a++)// Support: IE <=9 only
// IE8-9 doesn't update selected after form reset (#2551)
if(((n=i[a]).selected||a===r)&&// Don't return options that are disabled or in a disabled optgroup
!n.disabled&&(!n.parentNode.disabled||!I(n.parentNode,"optgroup"))){// We don't need an array for one selects
if(
// Get the specific value for the option
t=E(n).val(),o)return t;// Multi-Selects return an array
s.push(t)}return s},set:function(e,t){for(var n,a,i=e.options,r=E.makeArray(t),o=i.length;o--;)
/* eslint-disable no-cond-assign */
((a=i[o]).selected=-1<E.inArray(E.valHooks.option.get(a),r))&&(n=!0)
/* eslint-enable no-cond-assign */;// Force browsers to behave consistently when non-matching value is set
return n||(e.selectedIndex=-1),r}}}}),// Radios and checkboxes getter/setter
E.each(["radio","checkbox"],function(){E.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<E.inArray(E(e).val(),t)}},v.checkOn||(E.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),// Return jQuery for attributes-only inclusion
v.focusin="onfocusin"in S;var vt=/^(?:focusinfocus|focusoutblur)$/,yt=function(e){e.stopPropagation()};E.extend(E.event,{trigger:function(e,t,n,a){var i,r,o,s,l,u,p,d,c=[n||C],f=g.call(e,"type")?e.type:e,h=g.call(e,"namespace")?e.namespace.split("."):[];// Don't do events on text and comment nodes
if(r=d=o=n=n||C,3!==n.nodeType&&8!==n.nodeType&&!vt.test(f+E.event.triggered)&&(-1<f.indexOf(".")&&(
// Namespaced trigger; create a regexp to match event type in handle()
f=(h=f.split(".")).shift(),h.sort()),l=f.indexOf(":")<0&&"on"+f,// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
(// Caller can pass in a jQuery.Event object, Object, or just an event type string
e=e[E.expando]?e:new E.Event(f,"object"===_t(e)&&e)).isTrigger=a?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,// Clean up the event in case it is being reused
e.result=void 0,e.target||(e.target=n),// Clone any incoming data and prepend the event, creating the handler arg list
t=null==t?[e]:E.makeArray(t,[e]),// Allow special events to draw outside the lines
p=E.event.special[f]||{},a||!p.trigger||!1!==p.trigger.apply(n,t))){// Determine event propagation path in advance, per W3C events spec (#9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
if(!a&&!p.noBubble&&!w(n)){for(s=p.delegateType||f,vt.test(s+f)||(r=r.parentNode);r;r=r.parentNode)c.push(r),o=r;// Only add window if we got to document (e.g., not plain obj or detached DOM)
o===(n.ownerDocument||C)&&c.push(o.defaultView||o.parentWindow||S)}// Fire handlers on the event path
for(i=0;(r=c[i++])&&!e.isPropagationStopped();)d=r,e.type=1<i?s:p.bindType||f,(// jQuery handler
u=(U.get(r,"events")||{})[e.type]&&U.get(r,"handle"))&&u.apply(r,t),(// Native handler
u=l&&r[l])&&u.apply&&_(r)&&(e.result=u.apply(r,t),!1===e.result&&e.preventDefault());return e.type=f,// If nobody prevented the default action, do it now
a||e.isDefaultPrevented()||p._default&&!1!==p._default.apply(c.pop(),t)||!_(n)||
// Call a native DOM method on the target with the same name as the event.
// Don't do default actions on window, that's where global variables be (#6170)
l&&y(n[f])&&!w(n)&&(
// Don't re-trigger an onFOO event when we call its FOO() method
(o=n[l])&&(n[l]=null),// Prevent re-triggering of the same event, since we already bubbled it above
E.event.triggered=f,e.isPropagationStopped()&&d.addEventListener(f,yt),n[f](),e.isPropagationStopped()&&d.removeEventListener(f,yt),E.event.triggered=void 0,o&&(n[l]=o)),e.result}// focus/blur morphs to focusin/out; ensure we're not firing them right now
},
// Piggyback on a donor event to simulate a different one
// Used only for `focus(in | out)` events
simulate:function(e,t,n){var a=E.extend(new E.Event,n,{type:e,isSimulated:!0});E.event.trigger(a,null,t)}}),E.fn.extend({trigger:function(e,t){return this.each(function(){E.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return E.event.trigger(e,t,n,!0)}}),// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
v.focusin||E.each({focus:"focusin",blur:"focusout"},function(n,a){
// Attach a single capturing handler on the document while someone wants focusin/focusout
var i=function(e){E.event.simulate(a,e.target,E.event.fix(e))};E.event.special[a]={setup:function(){var e=this.ownerDocument||this,t=U.access(e,a);t||e.addEventListener(n,i,!0),U.access(e,a,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=U.access(e,a)-1;t?U.access(e,a,t):(e.removeEventListener(n,i,!0),U.remove(e,a))}}});var wt=S.location,xt=Date.now(),bt=/\?/;// Cross-browser xml parsing
E.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;// Support: IE 9 - 11 only
// IE throws on parseFromString with invalid input.
try{t=(new S.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||E.error("Invalid XML: "+e),t};var Tt=/\[\]$/,St=/\r?\n/g,Ct=/^(?:submit|button|image|reset|file)$/i,Et=/^(?:input|select|textarea|keygen)/i;function kt(n,e,a,i){var t;if(Array.isArray(e))
// Serialize array item.
E.each(e,function(e,t){a||Tt.test(n)?
// Treat each array item as a scalar.
i(n,t):
// Item is non-scalar (array or object), encode its numeric index.
kt(n+"["+("object"===_t(t)&&null!=t?e:"")+"]",t,a,i)});else if(a||"object"!==b(e))
// Serialize scalar item.
i(n,e);else
// Serialize object item.
for(t in e)kt(n+"["+t+"]",e[t],a,i)}// Serialize an array of form elements or a set of
// key/values into a query string
E.param=function(e,t){var n,a=[],i=function(e,t){
// If value is a function, invoke it and use its return value
var n=y(t)?t():t;a[a.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};// If an array was passed in, assume that it is an array of form elements.
if(Array.isArray(e)||e.jquery&&!E.isPlainObject(e))
// Serialize the form elements
E.each(e,function(){i(this.name,this.value)});else
// If traditional, encode the "old" way (the way 1.3.2 or older
// did it), otherwise encode params recursively.
for(n in e)kt(n,e[n],t,i);// Return the resulting serialization
return a.join("&")},E.fn.extend({serialize:function(){return E.param(this.serializeArray())},serializeArray:function(){return this.map(function(){
// Can add propHook for "elements" to filter or add form elements
var e=E.prop(this,"elements");return e?E.makeArray(e):this}).filter(function(){var e=this.type;// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!E(this).is(":disabled")&&Et.test(this.nodeName)&&!Ct.test(e)&&(this.checked||!le.test(e))}).map(function(e,t){var n=E(this).val();return null==n?null:Array.isArray(n)?E.map(n,function(e){return{name:t.name,value:e.replace(St,"\r\n")}}):{name:t.name,value:n.replace(St,"\r\n")}}).get()}});var It=/%20/g,Pt=/#.*$/,Mt=/([?&])_=[^&]*/,At=/^(.*?):[ \t]*([^\r\n]*)$/gm,Dt=/^(?:GET|HEAD)$/,zt=/^\/\//,
/* Prefilters
       * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
       * 2) These are called:
       *    - BEFORE asking for a transport
       *    - AFTER param serialization (s.data is a string if s.processData is true)
       * 3) key is the dataType
       * 4) the catchall symbol "*" can be used
       * 5) execution will start with transport dataType and THEN continue down to "*" if needed
       */
Lt={},
/* Transports bindings
       * 1) key is the dataType
       * 2) the catchall symbol "*" can be used
       * 3) selection will start with transport dataType and THEN go to "*" if needed
       */
Nt={},
// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
Ot="*/".concat("*"),
// Anchor tag for parsing the document origin
jt=C.createElement("a");// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function Ht(r){
// dataTypeExpression is optional and defaults to "*"
return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,a=0,i=e.toLowerCase().match(O)||[];if(y(t))
// For each dataType in the dataTypeExpression
for(;n=i[a++];)
// Prepend if requested
"+"===n[0]?(n=n.slice(1)||"*",(r[n]=r[n]||[]).unshift(t)):(r[n]=r[n]||[]).push(t)}}// Base inspection function for prefilters and transports
function Rt(t,i,r,o){var s={},l=t===Nt;function u(e){var a;return s[e]=!0,E.each(t[e]||[],function(e,t){var n=t(i,r,o);return"string"!=typeof n||l||s[n]?l?!(a=n):void 0:(i.dataTypes.unshift(n),u(n),!1)}),a}return u(i.dataTypes[0])||!s["*"]&&u("*")}// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function Bt(e,t){var n,a,i=E.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:a||(a={}))[n]=t[n]);return a&&E.extend(!0,e,a),e}
/* Handles responses to an ajax request:
       * - finds the right dataType (mediates between content-type and expected dataType)
       * - returns the corresponding response
       */jt.href=wt.href,E.extend({
// Counter for holding the number of active queries
active:0,
// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:wt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(wt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",
/*
          timeout: 0,
          data: null,
          dataType: null,
          username: null,
          password: null,
          cache: null,
          throws: false,
          traditional: false,
          headers: {},
          */
accepts:{"*":Ot,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},
// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{
// Convert anything to text
"* text":String,
// Text to html (true = no transformation)
"text html":!0,
// Evaluate text as a json expression
"text json":JSON.parse,
// Parse text as xml
"text xml":E.parseXML},
// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:!0,context:!0}},
// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(e,t){return t?// Building a settings object
Bt(Bt(e,E.ajaxSettings),t):// Extending ajaxSettings
Bt(E.ajaxSettings,e)},ajaxPrefilter:Ht(Lt),ajaxTransport:Ht(Nt),
// Main method
ajax:function(e,t){
// If url is an object, simulate pre-1.5 signature
"object"===_t(e)&&(t=e,e=void 0),// Force options to be an object
t=t||{};var p,
// URL without anti-cache param
d,
// Response headers
c,n,
// timeout handle
f,
// Url cleanup var
a,
// Request state (becomes false upon send and true upon completion)
h,
// To know if global events are to be dispatched
m,
// Loop variable
i,
// uncached part of the url
r,
// Create the final options object
g=E.ajaxSetup({},t),
// Callbacks context
v=g.context||g,
// Context for global events is callbackContext if it is a DOM node or jQuery collection
y=g.context&&(v.nodeType||v.jquery)?E(v):E.event,
// Deferreds
w=E.Deferred(),x=E.Callbacks("once memory"),
// Status-dependent callbacks
b=g.statusCode||{},
// Headers (they are sent all at once)
o={},s={},
// Default abort message
l="canceled",
// Fake xhr
T={readyState:0,
// Builds headers hashtable if needed
getResponseHeader:function(e){var t;if(h){if(!n)for(n={};t=At.exec(c);)n[t[1].toLowerCase()]=t[2];t=n[e.toLowerCase()]}return null==t?null:t},
// Raw string
getAllResponseHeaders:function(){return h?c:null},
// Caches the header
setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,o[e]=t),this},
// Overrides response content-type header
overrideMimeType:function(e){return null==h&&(g.mimeType=e),this},
// Status-dependent callbacks
statusCode:function(e){var t;if(e)if(h)
// Execute the appropriate callbacks
T.always(e[T.status]);else
// Lazy-add the new callbacks in a way that preserves old ones
for(t in e)b[t]=[b[t],e[t]];return this},
// Cancel the request
abort:function(e){var t=e||l;return p&&p.abort(t),u(0,t),this}};// Attach deferreds
// A cross-domain request is in order when the origin doesn't match the current origin.
if(w.promise(T),// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (#10093: consistency with old signature)
// We also use the url parameter if available
g.url=((e||g.url||wt.href)+"").replace(zt,wt.protocol+"//"),// Alias method option to type as per ticket #12004
g.type=t.method||t.type||g.method||g.type,// Extract dataTypes list
g.dataTypes=(g.dataType||"*").toLowerCase().match(O)||[""],null==g.crossDomain){a=C.createElement("a");// Support: IE <=8 - 11, Edge 12 - 15
// IE throws exception on accessing the href property if url is malformed,
// e.g. http://example.com:80x/
try{a.href=g.url,// Support: IE <=8 - 11 only
// Anchor's host property isn't correctly set when s.url is relative
a.href=a.href,g.crossDomain=jt.protocol+"//"+jt.host!=a.protocol+"//"+a.host}catch(e){
// If there is an error parsing the URL, assume it is crossDomain,
// it can be rejected by the transport if it is invalid
g.crossDomain=!0}}// Convert data if not already a string
// If request was aborted inside a prefilter, stop there
if(g.data&&g.processData&&"string"!=typeof g.data&&(g.data=E.param(g.data,g.traditional)),// Apply prefilters
Rt(Lt,g,t,T),h)return T;// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
// Check for headers option
for(i in// Watch for a new set of requests
(m=E.event&&g.global)&&0==E.active++&&E.event.trigger("ajaxStart"),// Uppercase the type
g.type=g.type.toUpperCase(),// Determine if request has content
g.hasContent=!Dt.test(g.type),// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
// Remove hash to simplify url manipulation
d=g.url.replace(Pt,""),// More options handling for requests with no content
g.hasContent?g.data&&g.processData&&0===(g.contentType||"").indexOf("application/x-www-form-urlencoded")&&(g.data=g.data.replace(It,"+")):(
// Remember the hash so we can put it back
r=g.url.slice(d.length),// If data is available and should be processed, append data to url
g.data&&(g.processData||"string"==typeof g.data)&&(d+=(bt.test(d)?"&":"?")+g.data,// #9682: remove data so that it's not used in an eventual retry
delete g.data),// Add or update anti-cache param if needed
!1===g.cache&&(d=d.replace(Mt,"$1"),r=(bt.test(d)?"&":"?")+"_="+xt+++r),// Put hash and anti-cache on the URL that will be requested (gh-1732)
g.url=d+r),// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
g.ifModified&&(E.lastModified[d]&&T.setRequestHeader("If-Modified-Since",E.lastModified[d]),E.etag[d]&&T.setRequestHeader("If-None-Match",E.etag[d])),// Set the correct header, if data is being sent
(g.data&&g.hasContent&&!1!==g.contentType||t.contentType)&&T.setRequestHeader("Content-Type",g.contentType),// Set the Accepts header for the server, depending on the dataType
T.setRequestHeader("Accept",g.dataTypes[0]&&g.accepts[g.dataTypes[0]]?g.accepts[g.dataTypes[0]]+("*"!==g.dataTypes[0]?", "+Ot+"; q=0.01":""):g.accepts["*"]),g.headers)T.setRequestHeader(i,g.headers[i]);// Allow custom headers/mimetypes and early abort
if(g.beforeSend&&(!1===g.beforeSend.call(v,T,g)||h))
// Abort if not done already and return
return T.abort();// Aborting is no longer a cancellation
// If no transport, we auto-abort
if(l="abort",// Install callbacks on deferreds
x.add(g.complete),T.done(g.success),T.fail(g.error),// Get transport
p=Rt(Nt,g,t,T)){// If request was aborted inside ajaxSend, stop there
if(T.readyState=1,// Send global event
m&&y.trigger("ajaxSend",[T,g]),h)return T;// Timeout
g.async&&0<g.timeout&&(f=S.setTimeout(function(){T.abort("timeout")},g.timeout));try{h=!1,p.send(o,u)}catch(e){
// Rethrow post-completion exceptions
if(h)throw e;// Propagate others as results
u(-1,e)}}// Callback for when everything is done
else u(-1,"No Transport");function u(e,t,n,a){var i,r,o,s,l,u=t;// Ignore repeat invocations
h||(h=!0,// Clear timeout if it exists
f&&S.clearTimeout(f),// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
p=void 0,// Cache response headers
c=a||"",// Set readyState
T.readyState=0<e?4:0,// Determine if successful
i=200<=e&&e<300||304===e,// Get response data
n&&(s=function(e,t,n){// Remove auto dataType and get content-type in the process
for(var a,i,r,o,s=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===a&&(a=e.mimeType||t.getResponseHeader("Content-Type"));// Check if we're dealing with a known content-type
if(a)for(i in s)if(s[i]&&s[i].test(a)){l.unshift(i);break}// Check to see if we have a response for the expected dataType
if(l[0]in n)r=l[0];else{
// Try convertible dataTypes
for(i in n){if(!l[0]||e.converters[i+" "+l[0]]){r=i;break}o||(o=i)}// Or just use first one
r=r||o}// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(r)return r!==l[0]&&l.unshift(r),n[r]}
/* Chain conversions given the request and the original response
       * Also sets the responseXXX fields on the jqXHR instance
       */(g,T,n)),// Convert no matter what (that way responseXXX fields are always set)
s=function(e,t,n,a){var i,r,o,s,l,u={},
// Work with a copy of dataTypes in case we need to modify it for conversion
p=e.dataTypes.slice();// Create converters map with lowercased keys
if(p[1])for(o in e.converters)u[o.toLowerCase()]=e.converters[o];// Convert to each sequential dataType
for(r=p.shift();r;)if(e.responseFields[r]&&(n[e.responseFields[r]]=t),// Apply the dataFilter if provided
!l&&a&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=r,r=p.shift())
// There's only work to do if current dataType is non-auto
if("*"===r)r=l;// Convert response if prev dataType is non-auto and differs from current
else if("*"!==l&&l!==r){// If none found, seek a pair
if(!(
// Seek a direct converter
o=u[l+" "+r]||u["* "+r]))for(i in u)if((
// If conv2 outputs current
s=i.split(" "))[1]===r&&(
// If prev can be converted to accepted input
o=u[l+" "+s[0]]||u["* "+s[0]])){
// Condense equivalence converters
!0===o?o=u[i]:!0!==u[i]&&(r=s[0],p.unshift(s[1]));break}// Apply converter (if not an equivalence)
if(!0!==o)
// Unless errors are allowed to bubble, catch and return them
if(o&&e.throws)t=o(t);else try{t=o(t)}catch(e){return{state:"parsererror",error:o?e:"No conversion from "+l+" to "+r}}}return{state:"success",data:t}}(g,s,T,i),// If successful, handle type chaining
i?(
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
g.ifModified&&((l=T.getResponseHeader("Last-Modified"))&&(E.lastModified[d]=l),(l=T.getResponseHeader("etag"))&&(E.etag[d]=l)),// if no content
204===e||"HEAD"===g.type?u="nocontent":304===e?u="notmodified":(u=s.state,r=s.data,i=!(o=s.error))):(
// Extract error from statusText and normalize for non-aborts
o=u,!e&&u||(u="error",e<0&&(e=0))),// Set data for the fake xhr object
T.status=e,T.statusText=(t||u)+"",// Success/Error
i?w.resolveWith(v,[r,u,T]):w.rejectWith(v,[T,u,o]),// Status-dependent callbacks
T.statusCode(b),b=void 0,m&&y.trigger(i?"ajaxSuccess":"ajaxError",[T,g,i?r:o]),// Complete
x.fireWith(v,[T,u]),m&&(y.trigger("ajaxComplete",[T,g]),// Handle the global AJAX counter
--E.active||E.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return E.get(e,t,n,"json")},getScript:function(e,t){return E.get(e,void 0,t,"script")}}),E.each(["get","post"],function(e,i){E[i]=function(e,t,n,a){// The url can be an options object (which then must have .url)
// Shift arguments if data argument was omitted
return y(t)&&(a=a||n,n=t,t=void 0),E.ajax(E.extend({url:e,type:i,dataType:a,data:t,success:n},E.isPlainObject(e)&&e))}}),E._evalUrl=function(e){return E.ajax({url:e,
// Make this explicit, since user can override this through ajaxSetup (#11264)
type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},E.fn.extend({wrapAll:function(e){var t;return this[0]&&(y(e)&&(e=e.call(this[0])),// The elements to wrap the target around
t=E(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return y(n)?this.each(function(e){E(this).wrapInner(n.call(this,e))}):this.each(function(){var e=E(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=y(t);return this.each(function(e){E(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){E(this).replaceWith(this.childNodes)}),this}}),E.expr.pseudos.hidden=function(e){return!E.expr.pseudos.visible(e)},E.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},E.ajaxSettings.xhr=function(){try{return new S.XMLHttpRequest}catch(e){}};var $t={
// File protocol always yields status code 0, assume 200
0:200,
// Support: IE <=9 only
// #1450: sometimes IE returns 1223 when it should be 204
1223:204},qt=E.ajaxSettings.xhr();v.cors=!!qt&&"withCredentials"in qt,v.ajax=qt=!!qt,E.ajaxTransport(function(i){var r,o;// Cross domain only allowed if supported through XMLHttpRequest
if(v.cors||qt&&!i.crossDomain)return{send:function(e,t){var n,a=i.xhr();// Apply custom fields if provided
if(a.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)a[n]=i.xhrFields[n];// Override mime type if needed
// Set headers
for(n in i.mimeType&&a.overrideMimeType&&a.overrideMimeType(i.mimeType),// X-Requested-With header
// For cross-domain requests, seeing as conditions for a preflight are
// akin to a jigsaw puzzle, we simply never set it to be sure.
// (it can always be set on a per-request basis or even using ajaxSetup)
// For same-domain requests, won't change header if already provided.
i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)a.setRequestHeader(n,e[n]);// Callback
r=function(e){return function(){r&&(r=o=a.onload=a.onerror=a.onabort=a.ontimeout=a.onreadystatechange=null,"abort"===e?a.abort():"error"===e?
// Support: IE <=9 only
// On a manual native abort, IE9 throws
// errors on any property access that is not readyState
"number"!=typeof a.status?t(0,"error"):t(// File: protocol always yields status 0; see #8605, #14207
a.status,a.statusText):t($t[a.status]||a.status,a.statusText,// Support: IE <=9 only
// IE9 has no XHR2 but throws on binary (trac-11426)
// For XHR2 non-text, let the caller handle it (gh-2498)
"text"!==(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},// Listen to events
a.onload=r(),o=a.onerror=a.ontimeout=r("error"),// Support: IE 9 only
// Use onreadystatechange to replace onabort
// to handle uncaught aborts
void 0!==a.onabort?a.onabort=o:a.onreadystatechange=function(){
// Check readyState before timeout as it changes
4===a.readyState&&
// Allow onerror to be called first,
// but that will not handle a native abort
// Also, save errorCallback to a variable
// as xhr.onerror cannot be accessed
S.setTimeout(function(){r&&o()})},// Create the abort callback
r=r("abort");try{
// Do send the request (this may raise an exception)
a.send(i.hasContent&&i.data||null)}catch(e){
// #14683: Only rethrow if this hasn't been notified as an error yet
if(r)throw e}},abort:function(){r&&r()}}}),// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
E.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),// Install script dataType
E.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return E.globalEval(e),e}}}),// Handle cache's special case and crossDomain
E.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),// Bind script tag hack transport
E.ajaxTransport("script",function(n){var a,i;
// This transport only deals with cross domain requests
if(n.crossDomain)return{send:function(e,t){a=E("<script>").prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){a.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),// Use native DOM manipulation to avoid our domManip AJAX trickery
C.head.appendChild(a[0])},abort:function(){i&&i()}}});var Wt,Yt=[],Vt=/(=)\?(?=&|$)|\?\?/;// Default jsonp settings
E.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||E.expando+"_"+xt++;return this[e]=!0,e}}),// Detect, normalize options and install callbacks for jsonp requests
E.ajaxPrefilter("json jsonp",function(e,t,n){var a,i,r,o=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(o||"jsonp"===e.dataTypes[0])// Delegate to script
// Get callback name, remembering preexisting value associated with it
return a=e.jsonpCallback=y(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,// Insert callback into url or form data
o?e[o]=e[o].replace(Vt,"$1"+a):!1!==e.jsonp&&(e.url+=(bt.test(e.url)?"&":"?")+e.jsonp+"="+a),// Use data converter to retrieve json after script execution
e.converters["script json"]=function(){return r||E.error(a+" was not called"),r[0]},// Force json dataType
e.dataTypes[0]="json",// Install callback
i=S[a],S[a]=function(){r=arguments},// Clean-up function (fires after converters)
n.always(function(){
// If previous value didn't exist - remove it
void 0===i?E(S).removeProp(a):S[a]=i,// Save back as free
e[a]&&(
// Make sure that re-using the options doesn't screw things around
e.jsonpCallback=t.jsonpCallback,// Save the callback name for future use
Yt.push(a)),// Call if it was a function and we have a response
r&&y(i)&&i(r[0]),r=i=void 0}),"script"}),// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
v.createHTMLDocument=((Wt=C.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Wt.childNodes.length),// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
E.parseHTML=function(e,t,n){return"string"!=typeof e?[]:(// Single tag
"boolean"==typeof t&&(n=t,t=!1),t||(
// Stop scripts or inline event handlers from being executed immediately
// by using document.implementation
v.createHTMLDocument?((// Set the base href for the created document
// so any parsed elements with URLs
// are based on the document's URL (gh-2965)
a=(t=C.implementation.createHTMLDocument("")).createElement("base")).href=C.location.href,t.head.appendChild(a)):t=C),r=!n&&[],(i=P.exec(e))?[t.createElement(i[1])]:(i=ve([e],t,r),r&&r.length&&E(r).remove(),E.merge([],i.childNodes)));var a,i,r},
/**
       * Load a url into a page
       */
E.fn.load=function(e,t,n){var a,i,r,o=this,s=e.indexOf(" ");return-1<s&&(a=ft(e.slice(s)),e=e.slice(0,s)),// If it's a function
y(t)?(
// We assume that it's the callback
n=t,t=void 0):t&&"object"===_t(t)&&(i="POST"),// If we have elements to modify, make the request
0<o.length&&E.ajax({url:e,
// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:i||"GET",dataType:"html",data:t}).done(function(e){
// Save response for use in complete callback
r=arguments,o.html(a?// If a selector was specified, locate the right elements in a dummy div
// Exclude scripts to avoid IE 'Permission Denied' errors
E("<div>").append(E.parseHTML(e)).find(a):// Otherwise use the full result
e)}).always(n&&function(e,t){o.each(function(){n.apply(this,r||[e.responseText,t,e])})}),this},// Attach a bunch of functions for handling common AJAX events
E.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){E.fn[t]=function(e){return this.on(t,e)}}),E.expr.pseudos.animated=function(t){return E.grep(E.timers,function(e){return t===e.elem}).length},E.offset={setOffset:function(e,t,n){var a,i,r,o,s,l,u=E.css(e,"position"),p=E(e),d={};// Set position first, in-case top/left are set even on static elem
"static"===u&&(e.style.position="relative"),s=p.offset(),r=E.css(e,"top"),l=E.css(e,"left"),// Need to be able to calculate position if either
// top or left is auto and position is either absolute or fixed
i=("absolute"===u||"fixed"===u)&&-1<(r+l).indexOf("auto")?(o=(a=p.position()).top,a.left):(o=parseFloat(r)||0,parseFloat(l)||0),y(t)&&(
// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
t=t.call(e,n,E.extend({},s))),null!=t.top&&(d.top=t.top-s.top+o),null!=t.left&&(d.left=t.left-s.left+i),"using"in t?t.using.call(e,d):p.css(d)}},E.fn.extend({
// offset() relates an element's border box to the document origin
offset:function(t){
// Preserve chaining for setter
if(arguments.length)return void 0===t?this:this.each(function(e){E.offset.setOffset(this,t,e)});var e,n,a=this[0];return a?// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
a.getClientRects().length?(// Get document-relative position by adding viewport scroll to viewport-relative gBCR
e=a.getBoundingClientRect(),n=a.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},
// position() relates an element's margin box to its offset parent's padding box
// This corresponds to the behavior of CSS absolute positioning
position:function(){if(this[0]){var e,t,n,a=this[0],i={top:0,left:0};// position:fixed elements are offset from the viewport, which itself always has zero offset
if("fixed"===E.css(a,"position"))
// Assume position:fixed implies availability of getBoundingClientRect
t=a.getBoundingClientRect();else{for(t=this.offset(),// Account for the *real* offset parent, which can be the document or its root element
// when a statically positioned element is identified
n=a.ownerDocument,e=a.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===E.css(e,"position");)e=e.parentNode;e&&e!==a&&1===e.nodeType&&(
// Incorporate borders into its offset, since they are outside its content origin
(i=E(e).offset()).top+=E.css(e,"borderTopWidth",!0),i.left+=E.css(e,"borderLeftWidth",!0))}// Subtract parent offsets and element margins
return{top:t.top-i.top-E.css(a,"marginTop",!0),left:t.left-i.left-E.css(a,"marginLeft",!0)}}},
// This method will return documentElement in the following cases:
// 1) For the element inside the iframe without offsetParent, this method will return
//    documentElement of the parent window
// 2) For the hidden or detached element
// 3) For body or html element, i.e. in case of the html node - it will return itself
//
// but those exceptions were never presented as a real life use-cases
// and might be considered as more preferable results.
//
// This logic, however, is not guaranteed and can change at any point in the future
offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===E.css(e,"position");)e=e.offsetParent;return e||ye})}}),// Create scrollLeft and scrollTop methods
E.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var r="pageYOffset"===i;E.fn[t]=function(e){return W(this,function(e,t,n){
// Coalesce documents and windows
var a;if(w(e)?a=e:9===e.nodeType&&(a=e.defaultView),void 0===n)return a?a[i]:e[t];a?a.scrollTo(r?a.pageXOffset:n,r?n:a.pageYOffset):e[t]=n},t,e,arguments.length)}}),// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
E.each(["top","left"],function(e,n){E.cssHooks[n]=$e(v.pixelPosition,function(e,t){if(t)// If curCSS returns percentage, fallback to offset
return t=Be(e,n),je.test(t)?E(e).position()[n]+"px":t})}),// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
E.each({Height:"height",Width:"width"},function(o,s){E.each({padding:"inner"+o,content:s,"":"outer"+o},function(a,r){
// Margin is only for outerHeight, outerWidth
E.fn[r]=function(e,t){var n=arguments.length&&(a||"boolean"!=typeof e),i=a||(!0===e||!0===t?"margin":"border");return W(this,function(e,t,n){var a;return w(e)?0===r.indexOf("outer")?e["inner"+o]:e.document.documentElement["client"+o]:// Get document width or height
9===e.nodeType?(a=e.documentElement,Math.max(e.body["scroll"+o],a["scroll"+o],e.body["offset"+o],a["offset"+o],a["client"+o])):void 0===n?// Get width or height on the element, requesting but not forcing parseFloat
E.css(e,t,i):// Set width or height on the element
E.style(e,t,n,i)},s,n?e:void 0,n)}})}),E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){
// Handle event binding
E.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),E.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),E.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,a){return this.on(t,e,n,a)},undelegate:function(e,t,n){
// ( namespace ) or ( selector, types [, fn] )
return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
E.proxy=function(e,t){var n,a,i;// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if("string"==typeof t&&(n=e[t],t=e,e=n),y(e))// Simulated bind
return a=s.call(arguments,2),// Set the guid of unique handler to the same of original handler, so it can be removed
(i=function(){return e.apply(t||this,a.concat(s.call(arguments)))}).guid=e.guid=e.guid||E.guid++,i},E.holdReady=function(e){e?E.readyWait++:E.ready(!0)},E.isArray=Array.isArray,E.parseJSON=JSON.parse,E.nodeName=I,E.isFunction=y,E.isWindow=w,E.camelCase=G,E.type=b,E.now=Date.now,E.isNumeric=function(e){
// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var t=E.type(e);return("number"===t||"string"===t)&&// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
!isNaN(e-parseFloat(e))};// Register as a named AMD module, since jQuery can be concatenated with other
var// Map over jQuery in case of overwrite
Xt=S.jQuery,
// Map over the $ in case of overwrite
Gt=S.$;return E.noConflict=function(e){return S.$===E&&(S.$=Gt),e&&S.jQuery===E&&(S.jQuery=Xt),E},// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
e||(S.jQuery=S.$=E),E},
// For CommonJS and CommonJS-like environments where a proper `window`
// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket #14549 for more info.
e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return n(e)}});e(function(e){
/*!
     * @fileOverview TouchSwipe - jQuery Plugin
     * @version 1.6.18
     *
     * @author Matt Bryson http://www.github.com/mattbryson
     * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
     * @see http://labs.rampinteractive.co.uk/touchSwipe/
     * @see http://plugins.jquery.com/project/touchSwipe
     * @license
     * Copyright (c) 2010-2015 Matt Bryson
     * Dual licensed under the MIT or GPL Version 2 licenses.
     *
     */
!function(se){function a(e,g){function t(e){if(!(!0===Q.data(ze+"_intouch")||0<se(e.target).closest(g.excludedElements,Q).length)){var t=e.originalEvent?e.originalEvent:e;if(!t.pointerType||"mouse"!=t.pointerType||0!=g.fallbackToMouseEvents){var n,a=t.touches,i=a?a[0]:t;return K=Ee,a?J=a.length:!1!==g.preventDefaultEvents&&e.preventDefault(),F=W=q=null,G=1,_=X=V=Y=$=0,(r={})[le]=M(le),r[ue]=M(ue),r[pe]=M(pe),r[de]=M(de),U=r,S(),k(0,i),!a||J===g.fingers||g.fingers===Se||w()?(ee=L(),2==J&&(k(1,a[1]),V=X=D(Z[0].start,Z[1].start)),(g.swipeStatus||g.pinchStatus)&&(n=y(t,K))):n=!1,!1===n?(y(t,K=Pe),n):(g.hold&&(oe=setTimeout(se.proxy(function(){Q.trigger("hold",[t.target]),g.hold&&(n=g.hold.call(Q,t,t.target))},this),g.longTapThreshold)),E(!0),null)}}var r}function n(e){var t,n,a,i,r,o,s,l,u=e.originalEvent?e.originalEvent:e;if(K!==Ie&&K!==Pe&&!C()){var p,d=u.touches,c=d?d[0]:u,f=I(c);if(te=L(),d&&(J=d.length),g.hold&&clearTimeout(oe),K=ke,2==J&&(0==V?(k(1,d[1]),V=X=D(Z[0].start,Z[1].start)):(I(d[1]),X=D(Z[0].end,Z[1].end),Z[0].end,Z[1].end,F=G<1?fe:ce),G=(X/V*1).toFixed(2),_=Math.abs(V-X)),J===g.fingers||g.fingers===Se||!d||w()){if(q=z(f.start,f.end),W=z(f.last,f.end),function(e,t){if(!1!==g.preventDefaultEvents)if(g.allowPageScroll===he)e.preventDefault();else{var n=g.allowPageScroll===me;switch(t){case le:(g.swipeLeft&&n||!n&&g.allowPageScroll!=be)&&e.preventDefault();break;case ue:(g.swipeRight&&n||!n&&g.allowPageScroll!=be)&&e.preventDefault();break;case pe:(g.swipeUp&&n||!n&&g.allowPageScroll!=Te)&&e.preventDefault();break;case de:(g.swipeDown&&n||!n&&g.allowPageScroll!=Te)&&e.preventDefault()}}}(e,W),s=f.start,l=f.end,$=Math.round(Math.sqrt(Math.pow(l.x-s.x,2)+Math.pow(l.y-s.y,2))),Y=A(),o=$,(r=q)!=he&&(o=Math.max(o,P(r)),U[r].distance=o),p=y(u,K),!g.triggerOnTouchEnd||g.triggerOnTouchLeave){var h=!0;if(g.triggerOnTouchLeave){var m={left:(i=(a=se(a=this)).offset()).left,right:i.left+a.outerWidth(),top:i.top,bottom:i.top+a.outerHeight()};t=f.end,n=m,h=t.x>n.left&&t.x<n.right&&t.y>n.top&&t.y<n.bottom}!g.triggerOnTouchEnd&&h?K=v(ke):g.triggerOnTouchLeave&&!h&&(K=v(Ie)),K!=Pe&&K!=Ie||y(u,K)}}else y(u,K=Pe);!1===p&&y(u,K=Pe)}}function a(e){var t,n=e.originalEvent?e.originalEvent:e,a=n.touches;if(a){if(a.length&&!C())return t=n,ne=L(),ae=t.touches.length+1,!0;if(a.length&&C())return!0}return C()&&(J=ae),te=L(),Y=A(),u()||!l()?y(n,K=Pe):g.triggerOnTouchEnd||!1===g.triggerOnTouchEnd&&K===ke?(!1!==g.preventDefaultEvents&&!1!==e.cancelable&&e.preventDefault(),y(n,K=Ie)):!g.triggerOnTouchEnd&&x()?s(n,K=Ie,ye):K===ke&&y(n,K=Pe),E(!1),null}function i(){X=V=ee=te=J=0,G=1,S(),E(!1)}function r(e){var t=e.originalEvent?e.originalEvent:e;g.triggerOnTouchLeave&&(K=v(Ie),y(t,K))}function o(){Q.unbind(O,t),Q.unbind(B,i),Q.unbind(j,n),Q.unbind(H,a),R&&Q.unbind(R,r),E(!1)}function v(e){var t=e,n=p(),a=l(),i=u();return!n||i?t=Pe:!a||e!=ke||g.triggerOnTouchEnd&&!g.triggerOnTouchLeave?!a&&e==Ie&&g.triggerOnTouchLeave&&(t=Pe):t=Ie,t}function y(e,t){var n,a=e.touches;return(!(!c()||!f())||f())&&(n=s(e,t,ge)),(!(!d()||!w())||w())&&!1!==n&&(n=s(e,t,ve)),T()&&b()&&!1!==n?n=s(e,t,we):Y>g.longTapThreshold&&$<Ce&&g.longTap&&!1!==n?n=s(e,t,xe):!(1!==J&&Me||!(isNaN($)||$<g.threshold)||!x())&&!1!==n&&(n=s(e,t,ye)),t===Pe&&i(),t===Ie&&(a&&a.length||i()),n}function s(e,t,n){var a;if(n==ge){if(Q.trigger("swipeStatus",[t,q||null,$||0,Y||0,J,Z,W]),g.swipeStatus&&!1===(a=g.swipeStatus.call(Q,e,t,q||null,$||0,Y||0,J,Z,W)))return!1;if(t==Ie&&c()){if(clearTimeout(re),clearTimeout(oe),Q.trigger("swipe",[q,$,Y,J,Z,W]),g.swipe&&!1===(a=g.swipe.call(Q,e,q,$,Y,J,Z,W)))return!1;switch(q){case le:Q.trigger("swipeLeft",[q,$,Y,J,Z,W]),g.swipeLeft&&(a=g.swipeLeft.call(Q,e,q,$,Y,J,Z,W));break;case ue:Q.trigger("swipeRight",[q,$,Y,J,Z,W]),g.swipeRight&&(a=g.swipeRight.call(Q,e,q,$,Y,J,Z,W));break;case pe:Q.trigger("swipeUp",[q,$,Y,J,Z,W]),g.swipeUp&&(a=g.swipeUp.call(Q,e,q,$,Y,J,Z,W));break;case de:Q.trigger("swipeDown",[q,$,Y,J,Z,W]),g.swipeDown&&(a=g.swipeDown.call(Q,e,q,$,Y,J,Z,W))}}}if(n==ve){if(Q.trigger("pinchStatus",[t,F||null,_||0,Y||0,J,G,Z]),g.pinchStatus&&!1===(a=g.pinchStatus.call(Q,e,t,F||null,_||0,Y||0,J,G,Z)))return!1;if(t==Ie&&d())switch(F){case ce:Q.trigger("pinchIn",[F||null,_||0,Y||0,J,G,Z]),g.pinchIn&&(a=g.pinchIn.call(Q,e,F||null,_||0,Y||0,J,G,Z));break;case fe:Q.trigger("pinchOut",[F||null,_||0,Y||0,J,G,Z]),g.pinchOut&&(a=g.pinchOut.call(Q,e,F||null,_||0,Y||0,J,G,Z))}}return n==ye?t!==Pe&&t!==Ie||(clearTimeout(re),clearTimeout(oe),b()&&!T()?(ie=L(),re=setTimeout(se.proxy(function(){ie=null,Q.trigger("tap",[e.target]),g.tap&&(a=g.tap.call(Q,e,e.target))},this),g.doubleTapThreshold)):(ie=null,Q.trigger("tap",[e.target]),g.tap&&(a=g.tap.call(Q,e,e.target)))):n==we?t!==Pe&&t!==Ie||(clearTimeout(re),clearTimeout(oe),ie=null,Q.trigger("doubletap",[e.target]),g.doubleTap&&(a=g.doubleTap.call(Q,e,e.target))):n==xe&&(t!==Pe&&t!==Ie||(clearTimeout(re),ie=null,Q.trigger("longtap",[e.target]),g.longTap&&(a=g.longTap.call(Q,e,e.target)))),a}function l(){var e=!0;return null!==g.threshold&&(e=$>=g.threshold),e}function u(){var e=!1;return null!==g.cancelThreshold&&null!==q&&(e=P(q)-$>=g.cancelThreshold),e}function p(){return!(g.maxTimeThreshold&&Y>=g.maxTimeThreshold)}function d(){var e=h(),t=m(),n=null===g.pinchThreshold||_>=g.pinchThreshold;return e&&t&&n}function w(){return!!(g.pinchStatus||g.pinchIn||g.pinchOut)}function c(){var e=p(),t=l(),n=h(),a=m(),i=u(),r=!i&&a&&n&&t&&e;return r}function f(){return!!(g.swipe||g.swipeStatus||g.swipeLeft||g.swipeRight||g.swipeUp||g.swipeDown)}function h(){return J===g.fingers||g.fingers===Se||!Me}function m(){return 0!==Z[0].end.x}function x(){return!!g.tap}function b(){return!!g.doubleTap}function T(){if(null==ie)return!1;var e=L();return b()&&e-ie<=g.doubleTapThreshold}function S(){ae=ne=0}function C(){var e=!1;if(ne){var t=L()-ne;t<=g.fingerReleaseThreshold&&(e=!0)}return e}function E(e){Q&&(!0===e?(Q.bind(j,n),Q.bind(H,a),R&&Q.bind(R,r)):(Q.unbind(j,n,!1),Q.unbind(H,a,!1),R&&Q.unbind(R,r,!1)),Q.data(ze+"_intouch",!0===e))}function k(e,t){var n={start:{x:0,y:0},last:{x:0,y:0},end:{x:0,y:0}};return n.start.x=n.last.x=n.end.x=t.pageX||t.clientX,n.start.y=n.last.y=n.end.y=t.pageY||t.clientY,Z[e]=n}function I(e){var t=void 0!==e.identifier?e.identifier:0,n=Z[t]||null;return null===n&&(n=k(t,e)),n.last.x=n.end.x,n.last.y=n.end.y,n.end.x=e.pageX||e.clientX,n.end.y=e.pageY||e.clientY,n}function P(e){if(U[e])return U[e].distance}function M(e){return{direction:e,distance:0}}function A(){return te-ee}function D(e,t){var n=Math.abs(e.x-t.x),a=Math.abs(e.y-t.y);return Math.round(Math.sqrt(n*n+a*a))}function z(e,t){if(a=t,(n=e).x==a.x&&n.y==a.y)return he;var n,a,i,r,o,s,l,u,p=(r=t,o=(i=e).x-r.x,s=r.y-i.y,l=Math.atan2(s,o),(u=Math.round(180*l/Math.PI))<0&&(u=360-Math.abs(u)),u);return p<=45&&0<=p?le:p<=360&&315<=p?le:135<=p&&p<=225?ue:45<p&&p<135?de:pe}function L(){var e=new Date;return e.getTime()}var g=se.extend({},g),N=Me||De||!g.fallbackToMouseEvents,O=N?De?Ae?"MSPointerDown":"pointerdown":"touchstart":"mousedown",j=N?De?Ae?"MSPointerMove":"pointermove":"touchmove":"mousemove",H=N?De?Ae?"MSPointerUp":"pointerup":"touchend":"mouseup",R=N?De?"mouseleave":null:"mouseleave",B=De?Ae?"MSPointerCancel":"pointercancel":"touchcancel",$=0,q=null,W=null,Y=0,V=0,X=0,G=1,_=0,F=0,U=null,Q=se(e),K="start",J=0,Z={},ee=0,te=0,ne=0,ae=0,ie=0,re=null,oe=null;try{Q.bind(O,t),Q.bind(B,i)}catch(e){se.error("events not supported "+O+","+B+" on jQuery.swipe")}this.enable=function(){return this.disable(),Q.bind(O,t),Q.bind(B,i),Q},this.disable=function(){return o(),Q},this.destroy=function(){o(),Q.data(ze,null),Q=null},this.option=function(e,t){if("object"==_t(e))g=se.extend(g,e);else if(void 0!==g[e]){if(void 0===t)return g[e];g[e]=t}else{if(!e)return g;se.error("Option "+e+" does not exist on jQuery.swipe.options")}return null}}var le="left",ue="right",pe="up",de="down",ce="in",fe="out",he="none",me="auto",ge="swipe",ve="pinch",ye="tap",we="doubletap",xe="longtap",be="horizontal",Te="vertical",Se="all",Ce=10,Ee="start",ke="move",Ie="end",Pe="cancel",Me="ontouchstart"in window,Ae=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled&&!Me,De=(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&!Me,ze="TouchSwipe";se.fn.swipe=function(e){var t=se(this),n=t.data(ze);if(n&&"string"==typeof e){if(n[e])return n[e].apply(n,Array.prototype.slice.call(arguments,1));se.error("Method "+e+" does not exist on jQuery.swipe")}else if(n&&"object"==_t(e))n.option.apply(n,arguments);else if(!(n||"object"!=_t(e)&&e))return function(n){return!n||void 0!==n.allowPageScroll||void 0===n.swipe&&void 0===n.swipeStatus||(n.allowPageScroll=he),void 0!==n.click&&void 0===n.tap&&(n.tap=n.click),n||(n={}),n=se.extend({},se.fn.swipe.defaults,n),this.each(function(){var e=se(this),t=e.data(ze);t||(t=new a(this,n),e.data(ze,t))})}.apply(this,arguments);return t},se.fn.swipe.version="1.6.18",se.fn.swipe.defaults={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:!0,triggerOnTouchLeave:!1,allowPageScroll:"auto",fallbackToMouseEvents:!0,excludedElements:".noSwipe",preventDefaultEvents:!0},se.fn.swipe.phases={PHASE_START:Ee,PHASE_MOVE:ke,PHASE_END:Ie,PHASE_CANCEL:Pe},se.fn.swipe.directions={LEFT:le,RIGHT:ue,UP:pe,DOWN:de,IN:ce,OUT:fe},se.fn.swipe.pageScroll={NONE:he,HORIZONTAL:be,VERTICAL:Te,AUTO:me},se.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,FOUR:4,FIVE:5,ALL:Se}}(e.exports?t:jQuery)})}();

//# sourceMappingURL=components.js.map