/*  ---------------------------------------------------
    Template Name: Dreams
    Description: Dreams wedding template
    Author: Hamzeh Azizzadeh
    Author URI: https://hamzehazizzadeh.ir/
    Version: 1.0
---------------------------------------------------------  */

"use strict";

(function ($) {
  /*------------------
        Preloader
    --------------------*/
  $(window).on("load", function () {
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");

    /*------------------
            Gallery filter
        --------------------*/
    if ($(".portfolio__gallery").length > 0) {
      var containerEl = document.querySelector(".portfolio__gallery");
      var mixer = mixitup(containerEl);
    }

    /*------------------
            Feature filter
        --------------------*/
    $(".filter__controls li").on("click", function () {
      var filterData = $(this).attr("data-filter");

      $(".feature__gallery").isotope({
        filter: filterData,
      });

      $(".filter__controls li").removeClass("active");
      $(this).addClass("active");
    });

    $(".feature__gallery").isotope({
      itemSelector: ".fg__item",
      percentPosition: true,
      masonry: {
        // use element for option
        columnWidth: ".fg__item",
        horizontalOrder: true,
      },
    });
  });

  /*------------------
        Background Set
    --------------------*/
  $(".set-bg").each(function () {
    var bg = $(this).data("setbg");
    $(this).css("background-image", "url(" + bg + ")");
  });

  // Search model
  $(".search-switch").on("click", function () {
    $(".search-model").fadeIn(400);
  });

  $(".search-close-switch").on("click", function () {
    $(".search-model").fadeOut(400, function () {
      $("#search-input").val("");
    });
  });

  //Masonary
  $(".feature__gallery").masonry({
    itemSelector: ".fg__item",
    columnWidth: ".grid-sizer",
    gutter: 15,
  });

  /*------------------
		Navigation
	--------------------*/
  $(".mobile-menu").slicknav({
    prependTo: "#mobile-menu-wrap",
    allowParentLinks: true,
  });

  /*------------------
        Testimonial Slider
    --------------------*/
  $(".testimonial__carousel").owlCarousel({
    rtl: true,
    loop: true,
    margin: 0,
    items: 2,
    dots: true,
    dotsEach: 2,
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
    responsive: {
      768: {
        items: 2,
      },
      320: {
        items: 1,
      },
    },
  });

  /*------------------
        Logo Slider
    --------------------*/
  $(".logo__carousel").owlCarousel({
    rtl: true,
    loop: true,
    margin: 136,
    items: 5,
    dots: false,
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
    responsive: {
      992: {
        items: 5,
      },
      768: {
        items: 3,
      },
      320: {
        items: 2,
      },
    },
  });

  /*------------------
        Blog Pic Slider
    --------------------*/
  $(".blog__item__pic__slider").owlCarousel({
    rtl: true,
    loop: true,
    margin: 0,
    items: 1,
    dots: false,
    nav: true,
    navText: [
      "<span class='arrow_carrot-left'></span>",
      "<span class='arrow_carrot-right'></span>",
    ],
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
  });

  /*------------------
        Video Popup
    --------------------*/
  $(".video-popup").magnificPopup({
    type: "iframe",
  });

  /*------------------
        Nice Select
    --------------------*/
  $("select").niceSelect();

  /*------------------
        Achieve Counter
    --------------------*/
  $(".counter_num").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 4000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
})(jQuery);
