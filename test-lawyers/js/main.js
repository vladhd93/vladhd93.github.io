$(document).ready(function(){var e=$("[data-component='promo-bar-toggle']"),n=$("[data-component='promo-bar']");e.on("click",function(){n.hide(500)});var i=$(".main-nav__item");i.on("click",function(){$(this).addClass("active-menu").siblings().removeClass("active-menu")});var t=$(".heading-nav__item");t.on("click",function(){$(this).addClass("active-menu").siblings().removeClass("active-menu")});var o=$(".header");document.onscroll=function(e){window.pageYOffset>$(".main-wall").offset().top+$(".main-wall").outerHeight()?o.addClass("scroll-header"):window.pageYOffset<=1&&o.removeClass("scroll-header")},$(".main-nav__list").slimmenu({resizeWidth:"1024",collapserTitle:"",animSpeed:"medium",easingEffect:null,indentChildren:!1,childrenIndenter:"&nbsp;"}),$(".collapse-button").on("click",function(){$(this).toggleClass("open")}),window.onresize=function(e){$(".collapse-button").removeClass("open")};new Swiper("[data-slider='insights-slider']",{pagination:".swiper-pagination",paginationClickable:!0,autoplay:3e3}),new Swiper("[data-slider='attorneys-slider']",{pagination:".swiper-pagination",paginationClickable:!0}),new Swiper("[data-slider='firm-slider']",{pagination:".swiper-pagination",paginationClickable:!0}),new Swiper("[data-slider='partners-slider']",{slidesPerView:4,spaceBetween:40,paginationClickable:!0,nextButton:".swiper-button-next",prevButton:".swiper-button-prev",breakpoints:{1024:{slidesPerView:3,spaceBetween:40},768:{slidesPerView:2,spaceBetween:30},480:{slidesPerView:1,spaceBetween:10}}}),new Swiper("[data-slider='board-slider']",{slidesPerView:3,spaceBetween:2,paginationClickable:!0,pagination:".swiper-pagination",nextButton:".swiper-button-next",prevButton:".swiper-button-prev",breakpoints:{768:{slidesPerView:2,spaceBetween:2},480:{slidesPerView:1,spaceBetween:0}}});$(".feature-item > .feature-content").hide(),$(".feature-title").on("click",function(){var e=$(this).parent(),n=e.hasClass("open");return $(".feature-item > .feature-content").slideUp(),$(".feature-item").removeClass("open"),n?e.find(".feature-content").slideUp():(e.addClass("open"),e.find(".feature-content").slideDown()),!1}),$(window).on("load resize",function(){window.innerWidth<=767?($(".load-more-btn").on("click",function(e){e.preventDefault(),$(".news-items-holder").find(".post-item").show(600),$(this).hide(),$(".news-items-holder").addClass("show")}),$(".news-items-holder").hasClass("show")||$(".news-items-holder").find(".post-item").not(":first").hide()):window.innerWidth>=768&&$(".news-items-holder").find(".post-item").not(":first").show()}),$(".js--tab-title").on("click",function(){var e=$(this).parent();e.find(".js--tab-content").slideToggle(400),e.toggleClass("show-content")}),$(window).on("resize load",function(){window.innerWidth>=641&&$(".js--tab-content").show(),window.innerWidth<=640&&$(".js--tab-wrapper:not(.show-content)").find(".js--tab-content").hide()}),$(".footer-menu__box-title .arrow").on("click",function(){var e=$(this).parent().parent(),n=e.hasClass("open");return $(".footer-menu__list").slideUp(),$(".footer-menu__box").removeClass("open"),n?e.find(".footer-menu__list").slideUp():(e.addClass("open"),e.find(".footer-menu__list").slideDown()),!1}),$(window).on("resize load",function(){window.innerWidth>=481?$(".footer-menu__list").show():$(".footer-menu__box:not(.open)").find(".footer-menu__list").hide()})});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJ0b2dnbGVCYXIiLCJwcm9tb0JhciIsIm9uIiwiaGlkZSIsIm1haW5OYXZJdGVtIiwidGhpcyIsImFkZENsYXNzIiwic2libGluZ3MiLCJyZW1vdmVDbGFzcyIsImhlYWRpbmdOYXZJdGVtIiwiaGVhZGVyIiwib25zY3JvbGwiLCJlIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJvZmZzZXQiLCJ0b3AiLCJvdXRlckhlaWdodCIsInNsaW1tZW51IiwicmVzaXplV2lkdGgiLCJjb2xsYXBzZXJUaXRsZSIsImFuaW1TcGVlZCIsImVhc2luZ0VmZmVjdCIsImluZGVudENoaWxkcmVuIiwiY2hpbGRyZW5JbmRlbnRlciIsInRvZ2dsZUNsYXNzIiwib25yZXNpemUiLCJTd2lwZXIiLCJwYWdpbmF0aW9uIiwicGFnaW5hdGlvbkNsaWNrYWJsZSIsImF1dG9wbGF5Iiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsIm5leHRCdXR0b24iLCJwcmV2QnV0dG9uIiwiYnJlYWtwb2ludHMiLCIxMDI0IiwiNzY4IiwiNDgwIiwiJGkiLCJwYXJlbnQiLCIkdiIsImhhc0NsYXNzIiwic2xpZGVVcCIsImZpbmQiLCJzbGlkZURvd24iLCJpbm5lcldpZHRoIiwicHJldmVudERlZmF1bHQiLCJzaG93Iiwibm90Iiwic2xpZGVUb2dnbGUiXSwibWFwcGluZ3MiOiJBQUFBQSxFQUFFQyxVQUFVQyxNQUFNLFdBR2QsR0FBSUMsR0FBWUgsRUFBRSx1Q0FDZEksRUFBV0osRUFBRSwrQkFDakJHLEdBQVVFLEdBQUcsUUFBUyxXQUNsQkQsRUFBU0UsS0FBSyxNQUdsQixJQUFJQyxHQUFjUCxFQUFFLGtCQUNwQk8sR0FBWUYsR0FBRyxRQUFTLFdBQ3BCTCxFQUFFUSxNQUFNQyxTQUFTLGVBQWVDLFdBQVdDLFlBQVksZ0JBRzNELElBQUlDLEdBQWlCWixFQUFFLHFCQUN2QlksR0FBZVAsR0FBRyxRQUFTLFdBQ3ZCTCxFQUFFUSxNQUFNQyxTQUFTLGVBQWVDLFdBQVdDLFlBQVksZ0JBTzNELElBQUlFLEdBQVNiLEVBQUUsVUFHZkMsVUFBU2EsU0FBVyxTQUFVQyxHQUN0QkMsT0FBT0MsWUFBY2pCLEVBQUUsY0FBY2tCLFNBQVNDLElBQU1uQixFQUFFLGNBQWNvQixjQUNwRVAsRUFBT0osU0FBUyxpQkFHWE8sT0FBT0MsYUFBZSxHQUMzQkosRUFBT0YsWUFBWSxrQkFNM0JYLEVBQUUsbUJBQW1CcUIsVUFFYkMsWUFBYSxPQUNiQyxlQUFnQixHQUNoQkMsVUFBVyxTQUNYQyxhQUFjLEtBQ2RDLGdCQUFnQixFQUNoQkMsaUJBQWtCLFdBSTFCM0IsRUFBRSxvQkFBb0JLLEdBQUcsUUFBUyxXQUU5QkwsRUFBRVEsTUFBTW9CLFlBQVksVUFHeEJaLE9BQU9hLFNBQVcsU0FBVWQsR0FFeEJmLEVBQUUsb0JBQW9CVyxZQUFZLFFBS3hCLElBQUltQixRQUFPLG1DQUNyQkMsV0FBWSxxQkFDWkMscUJBQXFCLEVBQ3JCQyxTQUFVLE1BR0EsR0FBSUgsUUFBTyxvQ0FDckJDLFdBQVkscUJBQ1pDLHFCQUFxQixJQUtYLEdBQUlGLFFBQU8sK0JBQ3JCQyxXQUFZLHFCQUNaQyxxQkFBcUIsSUFJWCxHQUFJRixRQUFPLG1DQUNyQkksY0FBZSxFQUNmQyxhQUFjLEdBQ2RILHFCQUFxQixFQUNyQkksV0FBWSxzQkFDWkMsV0FBWSxzQkFDWkMsYUFDSUMsTUFDSUwsY0FBZSxFQUNmQyxhQUFjLElBRWxCSyxLQUNJTixjQUFlLEVBQ2ZDLGFBQWMsSUFFbEJNLEtBQ0lQLGNBQWUsRUFDZkMsYUFBYyxPQUtaLEdBQUlMLFFBQU8sZ0NBQ3JCSSxjQUFlLEVBQ2ZDLGFBQWMsRUFDZEgscUJBQXFCLEVBQ3JCRCxXQUFZLHFCQUNaSyxXQUFZLHNCQUNaQyxXQUFZLHNCQUVaQyxhQUNJRSxLQUNJTixjQUFlLEVBQ2ZDLGFBQWMsR0FFbEJNLEtBQ0lQLGNBQWUsRUFDZkMsYUFBYyxLQUsxQm5DLEdBQUUsb0NBQW9DTSxPQUV0Q04sRUFBRSxrQkFBa0JLLEdBQUcsUUFBUyxXQUM1QixHQUFJcUMsR0FBSzFDLEVBQUVRLE1BQU1tQyxTQUNiQyxFQUFLRixFQUFHRyxTQUFTLE9BU3JCLE9BUkE3QyxHQUFFLG9DQUFvQzhDLFVBQ3RDOUMsRUFBRSxpQkFBaUJXLFlBQVksUUFDM0JpQyxFQUNBRixFQUFHSyxLQUFLLG9CQUFvQkQsV0FFNUJKLEVBQUdqQyxTQUFTLFFBQ1ppQyxFQUFHSyxLQUFLLG9CQUFvQkMsY0FFekIsSUFJWGhELEVBQUVnQixRQUFRWCxHQUFHLGNBQWUsV0FDcEJXLE9BQU9pQyxZQUFjLEtBQ3JCakQsRUFBRSxrQkFBa0JLLEdBQUcsUUFBUyxTQUFVVSxHQUN0Q0EsRUFBRW1DLGlCQUNGbEQsRUFBRSxzQkFBc0IrQyxLQUFLLGNBQWNJLEtBQUssS0FDaERuRCxFQUFFUSxNQUFNRixPQUNSTixFQUFFLHNCQUFzQlMsU0FBUyxVQUdoQ1QsRUFBRSxzQkFBc0I2QyxTQUFTLFNBQ2xDN0MsRUFBRSxzQkFBc0IrQyxLQUFLLGNBQWNLLElBQUksVUFBVTlDLFFBSXREVSxPQUFPaUMsWUFBYyxLQUM1QmpELEVBQUUsc0JBQXNCK0MsS0FBSyxjQUFjSyxJQUFJLFVBQVVELFNBSzdEbkQsRUFBRSxrQkFBa0JLLEdBQUcsUUFBUyxXQUM1QixHQUFJc0MsR0FBUzNDLEVBQUVRLE1BQU1tQyxRQUNyQkEsR0FBT0ksS0FBSyxvQkFBb0JNLFlBQVksS0FDNUNWLEVBQU9mLFlBQVksa0JBRzNCNUIsRUFBRWdCLFFBQVFYLEdBQUcsY0FBZSxXQUNyQlcsT0FBT2lDLFlBQWMsS0FDckJqRCxFQUFFLG9CQUFvQm1ELE9BR3RCbkMsT0FBT2lDLFlBQWMsS0FDcEJqRCxFQUFFLHVDQUF1QytDLEtBQUssb0JBQW9CekMsU0FPMUVOLEVBQUUsa0NBQWtDSyxHQUFHLFFBQVMsV0FDNUMsR0FBSXFDLEdBQUsxQyxFQUFFUSxNQUFNbUMsU0FBU0EsU0FDdEJDLEVBQUtGLEVBQUdHLFNBQVMsT0FTckIsT0FSQTdDLEdBQUUsc0JBQXNCOEMsVUFDeEI5QyxFQUFFLHFCQUFxQlcsWUFBWSxRQUMvQmlDLEVBQ0FGLEVBQUdLLEtBQUssc0JBQXNCRCxXQUU5QkosRUFBR2pDLFNBQVMsUUFDWmlDLEVBQUdLLEtBQUssc0JBQXNCQyxjQUUzQixJQUdmaEQsRUFBRWdCLFFBQVFYLEdBQUcsY0FBZSxXQUdyQlcsT0FBT2lDLFlBQWUsSUFDckJqRCxFQUFFLHNCQUFzQm1ELE9BRXhCbkQsRUFBRSxnQ0FBZ0MrQyxLQUFLLHNCQUFzQnpDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIHZhciB0b2dnbGVCYXIgPSAkKFwiW2RhdGEtY29tcG9uZW50PSdwcm9tby1iYXItdG9nZ2xlJ11cIik7XHJcbiAgICB2YXIgcHJvbW9CYXIgPSAkKFwiW2RhdGEtY29tcG9uZW50PSdwcm9tby1iYXInXVwiKTtcclxuICAgIHRvZ2dsZUJhci5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcHJvbW9CYXIuaGlkZSg1MDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIG1haW5OYXZJdGVtID0gJCgnLm1haW4tbmF2X19pdGVtJyk7XHJcbiAgICBtYWluTmF2SXRlbS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlLW1lbnUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUtbWVudScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIGhlYWRpbmdOYXZJdGVtID0gJCgnLmhlYWRpbmctbmF2X19pdGVtJyk7XHJcbiAgICBoZWFkaW5nTmF2SXRlbS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlLW1lbnUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUtbWVudScpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHZhciBoZWFkZXIgPSAkKCcuaGVhZGVyJyk7XHJcblxyXG5cclxuICAgIGRvY3VtZW50Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gJCgnLm1haW4td2FsbCcpLm9mZnNldCgpLnRvcCArICQoJy5tYWluLXdhbGwnKS5vdXRlckhlaWdodCgpKSB7XHJcbiAgICAgICAgICAgIGhlYWRlci5hZGRDbGFzcygnc2Nyb2xsLWhlYWRlcicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZSBpZiAod2luZG93LnBhZ2VZT2Zmc2V0IDw9IDEpIHtcclxuICAgICAgICAgICAgaGVhZGVyLnJlbW92ZUNsYXNzKCdzY3JvbGwtaGVhZGVyJyk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG5cclxuICAgICQoJy5tYWluLW5hdl9fbGlzdCcpLnNsaW1tZW51KFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmVzaXplV2lkdGg6ICcxMDI0JyxcclxuICAgICAgICAgICAgY29sbGFwc2VyVGl0bGU6ICcnLFxyXG4gICAgICAgICAgICBhbmltU3BlZWQ6ICdtZWRpdW0nLFxyXG4gICAgICAgICAgICBlYXNpbmdFZmZlY3Q6IG51bGwsXHJcbiAgICAgICAgICAgIGluZGVudENoaWxkcmVuOiBmYWxzZSxcclxuICAgICAgICAgICAgY2hpbGRyZW5JbmRlbnRlcjogJyZuYnNwOydcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgJCgnLmNvbGxhcHNlLWJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnb3BlbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgd2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgJCgnLmNvbGxhcHNlLWJ1dHRvbicpLnJlbW92ZUNsYXNzKCdvcGVuJylcclxuICAgIH07XHJcblxyXG5cclxuXHJcbiAgICB2YXIgc3dpcGVyMSA9IG5ldyBTd2lwZXIoXCJbZGF0YS1zbGlkZXI9J2luc2lnaHRzLXNsaWRlciddXCIsIHtcclxuICAgICAgICBwYWdpbmF0aW9uOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuICAgICAgICBwYWdpbmF0aW9uQ2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5OiAzMDAwXHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgc3dpcGVyNCA9IG5ldyBTd2lwZXIoXCJbZGF0YS1zbGlkZXI9J2F0dG9ybmV5cy1zbGlkZXInXVwiLCB7XHJcbiAgICAgICAgcGFnaW5hdGlvbjogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgcGFnaW5hdGlvbkNsaWNrYWJsZTogdHJ1ZVxyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICB2YXIgc3dpcGVyNSA9IG5ldyBTd2lwZXIoXCJbZGF0YS1zbGlkZXI9J2Zpcm0tc2xpZGVyJ11cIiwge1xyXG4gICAgICAgIHBhZ2luYXRpb246ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgIHBhZ2luYXRpb25DbGlja2FibGU6IHRydWVcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgc3dpcGVyMiA9IG5ldyBTd2lwZXIoXCJbZGF0YS1zbGlkZXI9J3BhcnRuZXJzLXNsaWRlciddXCIsIHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogNDAsXHJcbiAgICAgICAgcGFnaW5hdGlvbkNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICBuZXh0QnV0dG9uOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgcHJldkJ1dHRvbjogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgICAgIDEwMjQ6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDQwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNDgwOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHN3aXBlcjMgPSBuZXcgU3dpcGVyKFwiW2RhdGEtc2xpZGVyPSdib2FyZC1zbGlkZXInXVwiLCB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICBzcGFjZUJldHdlZW46IDIsXHJcbiAgICAgICAgcGFnaW5hdGlvbkNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICBwYWdpbmF0aW9uOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuICAgICAgICBuZXh0QnV0dG9uOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgcHJldkJ1dHRvbjogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG5cclxuICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNDgwOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuZmVhdHVyZS1pdGVtID4gLmZlYXR1cmUtY29udGVudCcpLmhpZGUoKTtcclxuXHJcbiAgICAkKCcuZmVhdHVyZS10aXRsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgJGkgPSAkKHRoaXMpLnBhcmVudCgpO1xyXG4gICAgICAgIHZhciAkdiA9ICRpLmhhc0NsYXNzKFwib3BlblwiKTtcclxuICAgICAgICAkKCcuZmVhdHVyZS1pdGVtID4gLmZlYXR1cmUtY29udGVudCcpLnNsaWRlVXAoKTtcclxuICAgICAgICAkKCcuZmVhdHVyZS1pdGVtJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICBpZiAoJHYpIHtcclxuICAgICAgICAgICAgJGkuZmluZCgnLmZlYXR1cmUtY29udGVudCcpLnNsaWRlVXAoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkaS5hZGRDbGFzcyhcIm9wZW5cIik7XHJcbiAgICAgICAgICAgICRpLmZpbmQoJy5mZWF0dXJlLWNvbnRlbnQnKS5zbGlkZURvd24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICQod2luZG93KS5vbignbG9hZCByZXNpemUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDc2Nykge1xyXG4gICAgICAgICAgICAkKCcubG9hZC1tb3JlLWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAkKCcubmV3cy1pdGVtcy1ob2xkZXInKS5maW5kKCcucG9zdC1pdGVtJykuc2hvdyg2MDApO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAkKCcubmV3cy1pdGVtcy1ob2xkZXInKS5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghJCgnLm5ld3MtaXRlbXMtaG9sZGVyJykuaGFzQ2xhc3MoJ3Nob3cnKSkge1xyXG4gICAgICAgICAgICAgICAgJCgnLm5ld3MtaXRlbXMtaG9sZGVyJykuZmluZCgnLnBvc3QtaXRlbScpLm5vdCgnOmZpcnN0JykuaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDc2OCkge1xyXG4gICAgICAgICAgICAkKCcubmV3cy1pdGVtcy1ob2xkZXInKS5maW5kKCcucG9zdC1pdGVtJykubm90KCc6Zmlyc3QnKS5zaG93KCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcuanMtLXRhYi10aXRsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSAkKHRoaXMpLnBhcmVudCgpO1xyXG4gICAgICAgICAgICBwYXJlbnQuZmluZCgnLmpzLS10YWItY29udGVudCcpLnNsaWRlVG9nZ2xlKDQwMCk7XHJcbiAgICAgICAgICAgIHBhcmVudC50b2dnbGVDbGFzcygnc2hvdy1jb250ZW50Jyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgJCh3aW5kb3cpLm9uKCdyZXNpemUgbG9hZCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYod2luZG93LmlubmVyV2lkdGggPj0gNjQxKXtcclxuICAgICAgICAgICAkKCcuanMtLXRhYi1jb250ZW50Jykuc2hvdygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYod2luZG93LmlubmVyV2lkdGggPD0gNjQwKXtcclxuICAgICAgICAgICAgJCgnLmpzLS10YWItd3JhcHBlcjpub3QoLnNob3ctY29udGVudCknKS5maW5kKCcuanMtLXRhYi1jb250ZW50JykuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICQoJy5mb290ZXItbWVudV9fYm94LXRpdGxlIC5hcnJvdycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgJGkgPSAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpO1xyXG4gICAgICAgIHZhciAkdiA9ICRpLmhhc0NsYXNzKFwib3BlblwiKTtcclxuICAgICAgICAkKCcuZm9vdGVyLW1lbnVfX2xpc3QnKS5zbGlkZVVwKCk7XHJcbiAgICAgICAgJCgnLmZvb3Rlci1tZW51X19ib3gnKS5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG4gICAgICAgIGlmICgkdikge1xyXG4gICAgICAgICAgICAkaS5maW5kKCcuZm9vdGVyLW1lbnVfX2xpc3QnKS5zbGlkZVVwKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGkuYWRkQ2xhc3MoXCJvcGVuXCIpO1xyXG4gICAgICAgICAgICAkaS5maW5kKCcuZm9vdGVyLW1lbnVfX2xpc3QnKS5zbGlkZURvd24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4kKHdpbmRvdykub24oJ3Jlc2l6ZSBsb2FkJywgZnVuY3Rpb24oKXtcclxuXHJcblxyXG4gICAgaWYod2luZG93LmlubmVyV2lkdGggPj0gIDQ4MSl7XHJcbiAgICAgICAgJCgnLmZvb3Rlci1tZW51X19saXN0Jykuc2hvdygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcuZm9vdGVyLW1lbnVfX2JveDpub3QoLm9wZW4pJykuZmluZCgnLmZvb3Rlci1tZW51X19saXN0JykuaGlkZSgpO1xyXG4gICAgfVxyXG59KTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
