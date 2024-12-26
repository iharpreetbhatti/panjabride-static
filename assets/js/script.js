/*
Author       : Dreamguys
Template Name: Dreams Rent - Bootstrap Template
Version      : 1.0
*/

(function ($) {
  "use strict";

  var $slimScrolls = $(".slimscroll");
  var $wrapper = $(".main-wrapper");

  // Sidebar
  $(".header-information ul li a[href^='#']").on("click", function (e) {
    // prevent default anchor click behavior
    e.preventDefault();

    // store hash
    var hash = this.hash;

    // animate
    var header_height = $("header").outerHeight();
    $("html, body").animate(
      { scrollTop: $(hash).offset().top - header_height },
      { duration: 500 }
    );
  });

  if ($(window).width() <= 991) {
    var Sidemenu = function () {
      this.$menuItem = $(".main-nav a");
    };

    function init() {
      var $this = Sidemenu;
      $(".main-nav a").on("click", function (e) {
        if ($(this).parent().hasClass("has-submenu")) {
          e.preventDefault();
        }
        if (!$(this).hasClass("submenu")) {
          $("ul", $(this).parents("ul:first")).slideUp(350);
          $("a", $(this).parents("ul:first")).removeClass("submenu");
          $(this).next("ul").slideDown(350);
          $(this).addClass("submenu");
        } else if ($(this).hasClass("submenu")) {
          $(this).removeClass("submenu");
          $(this).next("ul").slideUp(350);
        }
      });
    }

    // Sidebar Initiate

    init();
  }

  // Mobile menu sidebar overlay

  $("body").append('<div class="sidebar-overlay"></div>');
  $(document).on("click", "#mobile_btn", function () {
    $("main-wrapper").toggleClass("slide-nav");
    $(".sidebar-overlay").toggleClass("opened");
    $("html").addClass("menu-opened");
    return false;
  });

  $(document).on("click", ".sidebar-overlay", function () {
    $("html").removeClass("menu-opened");
    $(this).removeClass("opened");
    $("main-wrapper").removeClass("slide-nav");
  });

  $(document).on("click", "#menu_close", function () {
    $("html").removeClass("menu-opened");
    $(".sidebar-overlay").removeClass("opened");
    $("main-wrapper").removeClass("slide-nav");
  });

  // Select 2

  if ($(".select").length > 0) {
    $(".select").select2({
      minimumResultsForSearch: -1,
      width: "100%",
    });
  }

  if ($(".category-select").length > 0) {
    $(".category-select").select2({
      placeholder: "Choose Category",
      allowClear: false,
    });
  }

  if ($(".loc-select").length > 0) {
    $(".loc-select").select2({
      placeholder: "Choose Location",
      allowClear: false,
    });
  }

  if ($(".region select").length > 0) {
    $(".region select").select2({
      placeholder: "Region",
      allowClear: false,
    });
  }

  // Fade in Scroll

  if ($(".main-wrapper .aos").length > 0) {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }

  // Datepicker

  if ($(".datetimepicker").length > 0) {
    $(".datetimepicker").datetimepicker({
      format: "DD-MM-YYYY",
      icons: {
        up: "fas fa-angle-up",
        down: "fas fa-angle-down",
        next: "fas fa-angle-right",
        previous: "fas fa-angle-left",
      },
    });
  }

  // Timepicker

  if ($(".timepicker").length > 0) {
    $(".timepicker").datetimepicker({
      format: "hh:mm:ss",
      icons: {
        up: "fa fa-angle-up",
        down: "fa fa-angle-down",
        next: "fa fa-angle-right",
        previous: "fa fa-angle-left",
      },
    });
  }

  // Scroll Down

  $(".price-down").on("click", function () {
    $("html, body").animate({ scrollTop: $("#price").offset().top - 85 }, 150);
  });

  //Stick Sidebar

  if ($(window).width() > 767) {
    if ($(".theiaStickySidebar").length > 0) {
      $(".theiaStickySidebar").theiaStickySidebar({
        // Settings
        additionalMarginTop: 30,
      });
    }
  }

  //Range Slider

  if ($(".input-range").length > 0) {
    $(".input-range").ionRangeSlider({
      type: "double",
      grid: true,
      min: 0,
      max: 100,
      from: 50,
      to: 100,
      prefix: "$",
    });
  }

  $(".input-range").on("input", function () {
    $(".demo span").html(this.value);
  });

  //Show Filter

  $(".btn.filterbtn").on("click", function () {
    $(".showfilter").toggleClass("filter-open");
  });

  // Password Eye

  $(".toggle-password").on("click", function () {
    $(this).toggleClass("feather-eye");
    var input = $(".pass-input");
    if (input.attr("type") === "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });

  $(".toggle-password-two").on("click", function () {
    $(this).toggleClass("feather-eye");
    var input = $(".pass-input-two");
    if (input.attr("type") === "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });

  if ($(".toggle-password-three").length > 0) {
    $(document).on("click", ".toggle-password-three", function () {
      $(this).toggleClass("feather-eye feather-eye-off");
      var input = $(".pass-input-three");
      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });
  }

  if ($(".toggle-password-four").length > 0) {
    $(document).on("click", ".toggle-password-four", function () {
      $(this).toggleClass("feather-eye feather-eye-off");
      var input = $(".pass-input-four");
      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });
  }

  if ($(".toggle-password-five").length > 0) {
    $(document).on("click", ".toggle-password-five", function () {
      $(this).toggleClass("feather-eye feather-eye-off");
      var input = $(".pass-input-five");
      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });
  }

  if ($(".toggle-password-six").length > 0) {
    $(document).on("click", ".toggle-password-six", function () {
      $(this).toggleClass("feather-eye feather-eye-off");
      var input = $(".pass-input-six");
      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });
  }

  // Most Popular Cartypes Slider

  if ($(".popular-cartype-slider").length > 0) {
    $(".popular-cartype-slider").owlCarousel({
      loop: true,
      margin: 24,
      nav: true,
      dots: false,
      autoplay: true,
      smartSpeed: 2000,
      navText: [
        "<i class='fa-solid fa-arrow-left'></i>",
        "<i class='fa-solid fa-arrow-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },

        550: {
          items: 1,
        },
        700: {
          items: 3,
        },
        1000: {
          items: 4,
        },
        1200: {
          items: 5,
        },
      },
    });
  }

  // Recommended Car Rental Deals

  if ($(".rental-deal-slider").length > 0) {
    $(".rental-deal-slider").owlCarousel({
      loop: true,
      margin: 24,
      nav: true,
      dots: false,
      autoplay: false,
      smartSpeed: 2000,
      navText: [
        "<i class='fa-solid fa-arrow-left'></i>",
        "<i class='fa-solid fa-arrow-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },

        550: {
          items: 1,
        },
        700: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  }

  // Card Image Carousel

  if ($(".img-slider").length > 0) {
    $(".img-slider").owlCarousel({
      loop: true,
      margin: 24,
      nav: true,
      dots: true,
      smartSpeed: 2000,
      autoplay: false,
      navText: [
        '<i class="fa-solid fa-chevron-left"></i>',
        '<i class="fa-solid fa-chevron-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        550: {
          items: 1,
        },
        768: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
  }

  //What People Say Slider

  if ($(".about-testimonials").length > 0) {
    $(".about-testimonials").owlCarousel({
      loop: true,
      margin: 24,
      nav: false,
      dots: true,
      // autoplay:true,
      // smartSpeed: 2000,
      navText: [
        "<i class='fa-solid fa-angle-left'></i>",
        "<i class='fa-solid fa-angle-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },

        550: {
          items: 1,
        },
        700: {
          items: 2,
        },
        1000: {
          items: 2,
        },
      },
    });
  }

  // Slick Testimonial Two

  if ($(".detail-bigimg").length > 0) {
    $(".detail-bigimg").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: ".slider-nav-thumbnails",
    });
  }

  if ($(".slider-nav-thumbnails").length > 0) {
    $(".slider-nav-thumbnails").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: ".detail-bigimg",
      dots: false,
      arrows: false,
      centerMode: false,
      focusOnSelect: true,
    });
  }

  if ($(".car-details-slider").length > 0) {
    $(".car-details-slider").owlCarousel({
      loop: true,
      items: 3,
      margin: 24,
      nav: true,
      dots: false,
      smartSpeed: 2000,
      navText: [
        "<i class='fa-solid fa-arrow-left'></i>",
        "<i class='fa-solid fa-arrow-right'></i>",
      ],
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1170: {
          items: 3,
        },
        1200: {
          items: 3,
        },
      },
    });
  }

  if ($(".cars-slider").length > 0) {
    $(".cars-slider").owlCarousel({
      loop: true,
      margin: 24,
      nav: true,
      dots: false,
      autoplay: false,
      smartSpeed: 2000,
      navText: [
        "<i class='fa-solid fa-arrow-left'></i>",
        "<i class='fa-solid fa-arrow-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },

        550: {
          items: 1,
        },
        700: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  }

  // Select Favourite

  $(".fav-icon").on("click", function () {
    $(this).toggleClass("selected");
  });

  // Select Favourite

  $(".rating-select i").on("click", function () {
    $(this).toggleClass("filled");
  });

  // JQuery counterUp

  if ($(".counterUp").length > 0) {
    $(".counterUp, h4 span").counterUp({
      delay: 15,
      time: 1500,
    });
  }

  // Datatable

  if ($(".datatable").length > 0) {
    $(".datatable").DataTable({
      retrieve: true,
      lengthMenu: [
        [10, 25, 50, -1],
        [10, 25, 50, "All"],
      ],
      language: {
        search: " ",
        searchPlaceholder: "Search",
        info: "Showing _START_ - _END_ of _TOTAL_ entries",
        lengthMenu: "_MENU_",
        paginate: {
          next: 'Next <i class="feather-arrow-right"></i>',
          previous: '<i class="feather-arrow-left"></i> Prev',
        },
      },
      bLengthChange: true,
      bInfo: false,
      ordering: false,
      initComplete: (settings, json) => {
        $(".dataTables_info").appendTo("#tableinfo");
        $(".dataTables_paginate").appendTo("#tablepage");
        $(".dataTables_length").appendTo("#tablelength");
        $(".dataTables_filter").appendTo("#tablefilter");
      },
    });
  }

  // Otp Verfication

  $(".digit-group")
    .find("input")
    .each(function () {
      $(this).attr("maxlength", 1);
      $(this).on("keyup", function (e) {
        var parent = $($(this).parent());

        if (e.keyCode === 8 || e.keyCode === 37) {
          var prev = parent.find("input#" + $(this).data("previous"));

          if (prev.length) {
            $(prev).select();
          }
        } else if (
          (e.keyCode >= 48 && e.keyCode <= 57) ||
          (e.keyCode >= 65 && e.keyCode <= 90) ||
          (e.keyCode >= 96 && e.keyCode <= 105) ||
          e.keyCode === 39
        ) {
          var next = parent.find("input#" + $(this).data("next"));

          if (next.length) {
            $(next).select();
          } else {
            if (parent.data("autosubmit")) {
              parent.submit();
            }
          }
        }
      });
    });

  $(".digit-group input").on("keyup", function () {
    var self = $(this);
    if (self.val() != "") {
      self.addClass("active");
    } else {
      self.removeClass("active");
    }
  });

  // Tooltip

  if ($('[data-bs-toggle="tooltip"]').length > 0) {
    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }

  // Rent Types

  if ($(".rent-types").length > 0) {
    $(".rent-types").on("change", function () {
      if ($(this).is(":checked")) {
        $(".rent-radio").removeClass("active");
        $(this).closest(".rent-radio").addClass("active");
      } else {
        $(".rent-radio").removeClass("active");
      }
    });
  }

  // Chat

  var chatAppTarget = $(".chat-window");
  (function () {
    if ($(window).width() > 991) chatAppTarget.removeClass("chat-slide");

    $(document).on(
      "click",
      ".chat-window .chat-users-list a.open-chat",
      function () {
        if ($(window).width() <= 991) {
          chatAppTarget.addClass("chat-slide");
        }
        return false;
      }
    );
    $(document).on("click", "#back_user_list", function () {
      if ($(window).width() <= 991) {
        chatAppTarget.removeClass("chat-slide");
      }
      return false;
    });
  })();

  // Sidebar popup overlay

  if ($(".add-popup").length > 0) {
    $(".add-popup").on("click", function () {
      $(".toggle-popup").addClass("sidebar-popup");
      $(".sidebar-overlay").addClass("open");
    });
    $(".sidebar-close").on("click", function () {
      $(".toggle-popup").removeClass("sidebar-popup");
      $(".sidebar-overlay").removeClass("open");
    });
    $(".sidebar-overlay").on("click", function () {
      $(".toggle-popup").removeClass("sidebar-popup");
      $(".sidebar-overlay").removeClass("open");
    });
  }

  if ($(".more-adons").length > 0) {
    $(".more-adons").hide();
    $(".view-adon-btn").on("click", function () {
      $(this).text(
        $(this).text() === "Less Add-Ons" ? "View More Add-Ons" : "Less Add-Ons"
      );
      $(".more-adons").slideToggle(900);
    });
  }

  if ($(".more-adon-info").length > 0) {
    $(".more-adon-info").hide();
    $(".adon-info-btn").on("click", function () {
      $(this).closest("li").find(".more-adon-info").slideToggle(900);
      $(this).toggleClass("add-info-active");
    });
  }

  $("#acting_driver").click(function () {
    if ($(this).is(":checked")) {
      $(".acting-driver-info").show();
      $(".self-driver-info").hide();
    } else {
      $(".acting-driver-info").hide();
      $(".self-driver-info").show();
    }
  });
  $("#self_driver").click(function () {
    if ($(this).is(":checked")) {
      $(".acting-driver-info").hide();
      $(".self-driver-info").show();
    } else {
      $(".acting-driver-info").show();
      $(".self-driver-info").hide();
    }
  });
  if ($("#self_driver").is(":checked")) {
    $(".acting-driver-info").hide();
    $(".self-driver-info").show();
  } else {
    $(".acting-driver-info").show();
    $(".self-driver-info").hide();
  }
  if ($("#acting_driver").is(":checked")) {
    $(".acting-driver-info").show();
    $(".self-driver-info").hide();
  } else {
    $(".acting-driver-info").hide();
    $(".self-driver-info").show();
  }
  // Add New Card

  $("#add_new_card").click(function () {
    if ($(this).is(":checked")) {
      $(".add-new-cards").show();
    } else {
      $("add-new-cards").hide();
    }
  });

  $("#debit_card").click(function () {
    if ($(this).is(":checked")) {
      $(".add-new-cards").hide();
    }
  });

  $("#credit_card").click(function () {
    if ($(this).is(":checked")) {
      $(".add-new-cards").hide();
    }
  });

  // Locarion Changes

  $("#location_delivery").click(function () {
    if ($(this).is(":checked")) {
      $(".delivery-location").show();
      $(".pickup-location").hide();
    } else {
      $(".delivery-location").hide();
      $(".pickup-location").show();
    }
  });
  $("#location_pickup").click(function () {
    if ($(this).is(":checked")) {
      $(".delivery-location").hide();
      $(".pickup-location").show();
    } else {
      $(".delivery-location").show();
      $(".pickup-location").hide();
    }
  });
  if ($("#location_delivery").is(":checked")) {
    $(".acting-driver-info").hide();
    $(".delivery-location").show();
  } else {
    $(".acting-driver-info").show();
    $(".delivery-location").hide();
  }
  if ($("#location_pickup").is(":checked")) {
    $(".pickup-location").show();
    $(".delivery-location").hide();
  } else {
    $(".pickup-location").hide();
    $(".delivery-location").show();
  }

  $("#image_sign").change(function () {
    $("#frames").html("");
    for (var i = 0; i < $(this)[0].files.length; i++) {
      $("#frames").append(
        '<img src="' +
          window.URL.createObjectURL(this.files[i]) +
          '" width="100px" height="100px">'
      );
    }
  });

  if ($(".read-more").length > 0) {
    $(".more-text").hide();
    $(".more-link").on("click", function () {
      $(this).addClass("less");
      $(this).text($(this).text() === "Show Less" ? "Show More" : "Show Less");
      $(".more-text").slideToggle(900);
    });
  }

  // All Booking Calendar

  if ($("#calendar").length > 0) {
    document.addEventListener("DOMContentLoaded", function () {
      const calendarEl = document.getElementById("calendar");

      const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: "dayGridMonth",
        editable: true,
        initialDate: "2024-04-12",
        events: [
          {
            title: "Ferrari 458 MM Special",
            classNames: "event-completed",
            start: new Date($.now() - 168000000).toJSON().slice(0, 10),
            end: new Date($.now() - 168000000).toJSON().slice(0, 10),
          },
          {
            title: "Toyota Camry SE 350",
            classNames: "event-completed",
            start: new Date($.now() - 68000000).toJSON().slice(0, 10),
            end: new Date($.now() - 68000000).toJSON().slice(0, 10),
          },
          {
            title: "Kia Soul 2016",
            classNames: "event-inprogress",
            start: new Date().toJSON().slice(0, 10),
            end: new Date().toJSON().slice(0, 10),
          },
          {
            title: "Audi A3 2019 new",
            classNames: "event-cancel",
            start: new Date($.now() - 338000000).toJSON().slice(0, 10),
            end: new Date($.now() - 338000000).toJSON().slice(0, 10),
          },
          {
            title: "Toyota Tacoma 4WD",
            classNames: "event-cancel",
            start: new Date($.now() + 168000000).toJSON().slice(0, 10),
            end: new Date($.now() + 168000000).toJSON().slice(0, 10),
          },
          {
            title: "2018 Chevrolet Camaro",
            classNames: "event-upcoming",
            start: new Date($.now() + 338000000).toJSON().slice(0, 10),
            end: new Date($.now() + 338000000).toJSON().slice(0, 10),
          },
          {
            title: "Acura Sport Version",
            classNames: "event-upcoming",
            start: new Date($.now() + 238000000).toJSON().slice(0, 10),
            end: new Date($.now() + 238000000).toJSON().slice(0, 10),
          },
        ],
        headerToolbar: {
          start: "title",
          end: "prev,dayGridMonth,next book",
        },
        views: {
          dayGridMonth: {
            titleFormat: {
              month: "long",
            },
          },
        },
        customButtons: {
          book: {
            text: "Add Booking",
            click: function () {
              location.href = "listing-grid.html";
            },
          },
        },
        eventDidMount: function (info) {},

        eventLeave: function (info) {
          console.log("event left!", info.event);
        },
      });
      calendar.render();
    });
  }

  // Inprogress Booking Calendar

  if ($("#inprogress-calendar").length > 0) {
    document.addEventListener("DOMContentLoaded", function () {
      const calendarEl = document.getElementById("inprogress-calendar");

      const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: "dayGridMonth",
        editable: true,
        initialDate: "2024-04-12",
        events: [
          {
            title: "Kia Soul 2016",
            classNames: "event-inprogress",
            start: new Date().toJSON().slice(0, 10),
            end: new Date().toJSON().slice(0, 10),
          },
        ],
        headerToolbar: {
          start: "title",
          end: "prev,dayGridMonth,next book",
        },
        views: {
          dayGridMonth: {
            titleFormat: {
              month: "long",
            },
          },
        },
        customButtons: {
          book: {
            text: "Add Booking",
            click: function () {
              location.href = "listing-grid.html";
            },
          },
        },
        eventDidMount: function (info) {},

        eventLeave: function (info) {
          console.log("event left!", info.event);
        },
      });
      calendar.render();
    });
  }

  // Completed Booking Calendar

  if ($("#complete-calendar").length > 0) {
    document.addEventListener("DOMContentLoaded", function () {
      const calendarEl = document.getElementById("complete-calendar");

      const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: "dayGridMonth",
        editable: true,
        initialDate: "2024-04-12",
        events: [
          {
            title: "Ferrari 458 MM Special",
            classNames: "event-completed",
            start: new Date($.now() - 168000000).toJSON().slice(0, 10),
            end: new Date($.now() - 168000000).toJSON().slice(0, 10),
          },
          {
            title: "Toyota Camry SE 350",
            classNames: "event-completed",
            start: new Date($.now() - 68000000).toJSON().slice(0, 10),
            end: new Date($.now() - 68000000).toJSON().slice(0, 10),
          },
        ],
        headerToolbar: {
          start: "title",
          end: "prev,dayGridMonth,next book",
        },
        views: {
          dayGridMonth: {
            titleFormat: {
              month: "long",
            },
          },
        },
        customButtons: {
          book: {
            text: "Add Booking",
            click: function () {
              location.href = "listing-grid.html";
            },
          },
        },
        eventDidMount: function (info) {},

        eventLeave: function (info) {
          console.log("event left!", info.event);
        },
      });
      calendar.render();
    });
  }

  // Upcoming Booking Calendar

  if ($("#upcoming-calendar").length > 0) {
    document.addEventListener("DOMContentLoaded", function () {
      const calendarEl = document.getElementById("upcoming-calendar");

      const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: "dayGridMonth",
        editable: true,
        initialDate: "2024-04-12",
        events: [
          {
            title: "2018 Chevrolet Camaro",
            classNames: "event-upcoming",
            start: new Date($.now() + 338000000).toJSON().slice(0, 10),
            end: new Date($.now() + 338000000).toJSON().slice(0, 10),
          },
          {
            title: "Acura Sport Version",
            classNames: "event-upcoming",
            start: new Date($.now() + 238000000).toJSON().slice(0, 10),
            end: new Date($.now() + 238000000).toJSON().slice(0, 10),
          },
        ],
        headerToolbar: {
          start: "title",
          end: "prev,dayGridMonth,next book",
        },
        views: {
          dayGridMonth: {
            titleFormat: {
              month: "long",
            },
          },
        },
        customButtons: {
          book: {
            text: "Add Booking",
            click: function () {
              location.href = "listing-grid.html";
            },
          },
        },
        eventDidMount: function (info) {},

        eventLeave: function (info) {
          console.log("event left!", info.event);
        },
      });
      calendar.render();
    });
  }

  // Cancel Booking Calendar

  if ($("#cancel-calendar").length > 0) {
    document.addEventListener("DOMContentLoaded", function () {
      const calendarEl = document.getElementById("cancel-calendar");

      const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: "dayGridMonth",
        editable: true,
        initialDate: "2024-04-12",
        events: [
          {
            title: "Audi A3 2019 new",
            classNames: "event-cancel",
            start: new Date($.now() - 338000000).toJSON().slice(0, 10),
            end: new Date($.now() - 338000000).toJSON().slice(0, 10),
          },
          {
            title: "Toyota Tacoma 4WD",
            classNames: "event-cancel",
            start: new Date($.now() + 168000000).toJSON().slice(0, 10),
            end: new Date($.now() + 168000000).toJSON().slice(0, 10),
          },
        ],
        headerToolbar: {
          start: "title",
          end: "prev,dayGridMonth,next book",
        },
        views: {
          dayGridMonth: {
            titleFormat: {
              month: "long",
            },
          },
        },
        customButtons: {
          book: {
            text: "Add Booking",
            click: function () {
              location.href = "listing-grid.html";
            },
          },
        },
        eventDidMount: function (info) {},

        eventLeave: function (info) {
          console.log("event left!", info.event);
        },
      });
      calendar.render();
    });
  }

  $(".add-text-link").on("click", function () {
    $(".service-Price").append(
      ' <div class="row ">' +
        '<div class="col-lg-6 col-12">' +
        '<div class="mb-3">' +
        '<label class="form-label">Name of the Service  <span class="text-danger">*</span></label>' +
        '<input type="text" class="form-control" placeholder="Enter the Name">' +
        "</div>" +
        "</div>" +
        '<div class="col-lg-5 col-12">' +
        '<div class="mb-3">' +
        '<label class="form-label">Price <span class="text-danger">*</span></label>' +
        '<input type="text" class="form-control" placeholder="Enter the Amount">' +
        "</div>" +
        "</div>" +
        '<div class="col-lg-1">' +
        '<label class="form-label d-block">&nbsp;</label>' +
        '<a class="remove-approval delete-links" href="javascript:void(0)"><i class="feather-x"></i></a>' +
        "</div>" +
        "</div>"
    );
  });
  $(document).on("click", ".remove-approval", function () {
    $(this).parent().parent().hide();
  });

  // Bike Category

  if ($(".bike-category-slider").length > 0) {
    $(".bike-category-slider").owlCarousel({
      loop: true,
      margin: 24,
      nav: true,
      dots: false,
      autoplay: false,
      smartSpeed: 2000,
      navText: [
        "<i class='bx bx-chevron-left'></i>",
        "<i class='bx bx-chevron-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },

        550: {
          items: 1,
        },
        700: {
          items: 2,
        },
        1000: {
          items: 3,
        },
        1200: {
          items: 6,
        },
      },
    });
  }

  // Card Image Carousel
  if ($(".bike-feature-slider").length > 0) {
    $(".bike-feature-slider").owlCarousel({
      loop: true,
      margin: 24,
      nav: true,
      dots: false,
      autoplay: false,
      smartSpeed: 2000,
      items: 1,
      navText: [
        "<i class='bx bx-chevron-left'></i>",
        "<i class='bx bx-chevron-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },

        550: {
          items: 1,
        },
        700: {
          items: 2,
        },
        1000: {
          items: 3,
        },
        1400: {
          items: 4,
        },
      },
      onInitialized: function (event) {
        $(".image-slider", event.target).owlCarousel({
          loop: true,
          items: 1,
          margin: 0,
          nav: true,
          dots: true,
          smartSpeed: 2000,
          autoplay: false,
          navText: [
            '<i class="fa-solid fa-chevron-left"></i>',
            '<i class="fa-solid fa-chevron-right"></i>',
          ],
        });
      },
    });
  }

  if ($(".brand-slider").length > 0) {
    $(".brand-slider").owlCarousel({
      loop: true,
      margin: 24,
      nav: false,
      dots: false,
      smartSpeed: 2000,
      autoplay: false,
      navText: [
        '<i class="fa-solid fa-chevron-left"></i>',
        '<i class="fa-solid fa-chevron-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        550: {
          items: 3,
        },
        768: {
          items: 4,
        },
        1000: {
          items: 5,
        },
        1200: {
          items: 7,
        },
      },
    });
  }

  // Card Image Carousel

  if ($(".blog-slider").length > 0) {
    $(".blog-slider").owlCarousel({
      loop: true,
      margin: 24,
      nav: true,
      dots: false,
      smartSpeed: 2000,
      autoplay: false,
      navText: [
        '<i class="fa-solid fa-chevron-left"></i>',
        '<i class="fa-solid fa-chevron-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        550: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1200: {
          items: 3,
        },
      },
    });
  }

  // Fancybox

  if ($("[data-fancybox]").length > 0) {
    Fancybox.bind("[data-fancybox]", {});
  }

  $(window).scroll(function () {
    var sticky = $(".header-two"),
      scroll = $(window).scrollTop();
    if (scroll >= 150) sticky.addClass("header-fixed");
    else sticky.removeClass("header-fixed");
  });

  if ($(".banner-img-slider").length > 0) {
    $(".banner-img-slider").owlCarousel({
      loop: true,
      margin: 2,
      nav: true,
      dots: false,
      autoplay: false,
      smartSpeed: 2000,
      navText: [
        "<i class='fa-solid fa-arrow-left'></i>",
        "<i class='fa-solid fa-arrow-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },

        550: {
          items: 1,
        },
        1200: {
          items: 1,
        },
      },
    });
  }

  if ($(".banner-yacht-type-slider").length > 0) {
    $(".banner-yacht-type-slider").owlCarousel({
      loop: true,
      margin: 24,
      nav: false,
      dots: false,
      autoplay: true,
      smartSpeed: 2000,
      responsive: {
        0: {
          items: 2,
        },

        550: {
          items: 4,
        },
        1200: {
          items: 8,
        },
        1400: {
          items: 10,
        },
      },
    });
  }

  // Testimonial

  if ($(".testimonial-slider").length > 0) {
    $(".testimonial-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: ".testimonial-thumbnails",
    });
  }

  if ($(".testimonial-thumbnails").length > 0) {
    $(".testimonial-thumbnails").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: ".testimonial-slider",
      dots: false,
      arrows: false,
      centerMode: false,
      focusOnSelect: true,
    });
  }

  // Recommend Bike Slider

  if ($(".recommend-slider").length > 0) {
    $(".recommend-slider").owlCarousel({
      loop: true,
      margin: 24,
      nav: false,
      dots: false,
      autoplay: false,
      center: true,
      smartSpeed: 2000,
      responsive: {
        0: {
          items: 1,
        },

        767: {
          items: 1,
        },
        992: {
          items: 3,
        },
        1400: {
          items: 3,
        },
      },
    });
  }

  if ($(".charter-company-slider").length > 0) {
    $(".charter-company-slider").owlCarousel({
      loop: true,
      margin: 24,
      nav: false,
      dots: false,
      smartSpeed: 2000,
      autoplay: true,
      responsive: {
        0: {
          items: 1,
        },
        550: {
          items: 3,
        },
        768: {
          items: 4,
        },
        1000: {
          items: 5,
        },
        1200: {
          items: 5,
        },
      },
    });
  }

  // Card Image Carousel
  if ($(".top-rated-yachts-slider").length > 0) {
    $(".top-rated-yachts-slider").owlCarousel({
      loop: true,
      margin: 24,
      nav: true,
      dots: false,
      autoplay: false,
      smartSpeed: 2000,
      navContainer: ".slide-nav-1",
      items: 1,
      navText: [
        "<i class='bx bx-chevron-left'></i>",
        "<i class='bx bx-chevron-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },

        550: {
          items: 1,
        },
        700: {
          items: 2,
        },
        1000: {
          items: 2,
        },
        1300: {
          items: 2,
        },
      },
      onInitialized: function (event) {
        $(".image-slider", event.target).owlCarousel({
          loop: true,
          items: 1,
          margin: 2,
          nav: true,
          dots: true,
          smartSpeed: 2000,
          autoplay: false,
          navText: [
            '<i class="fa-solid fa-chevron-left"></i>',
            '<i class="fa-solid fa-chevron-right"></i>',
          ],
        });
      },
    });
  }

  if ($(".popular-location-slider").length > 0) {
    $(".popular-location-slider").owlCarousel({
      loop: true,
      margin: 15,
      dots: false,
      nav: true,
      navText: [
        '<i class="fas fa-chevron-left custom-arrow"></i>',
        '<i class="fas fa-chevron-right custom-arrow"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        500: {
          items: 2,
        },
        768: {
          items: 3,
        },
        1000: {
          items: 3,
        },
        1300: {
          items: 4,
        },
      },
    });
  }

  if ($(".yacht-image-slider").length > 0) {
    $(".yacht-image-slider").owlCarousel({
      loop: true,
      margin: 1,
      dots: true,
      nav: true,
      navText: [
        '<i class="fas fa-chevron-left custom-arrow"></i>',
        '<i class="fas fa-chevron-right custom-arrow"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        500: {
          items: 1,
        },
        768: {
          items: 1,
        },
        1000: {
          items: 1,
        },
        1300: {
          items: 1,
        },
      },
    });
  }
})(jQuery);

// const form = document.getElementById("tripDetailsForm");
// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   let isValid = true;

//   // Clear previous error messages
//   const errorMessages = form.querySelectorAll(".error-message");
//   errorMessages.forEach(function (message) {
//     message.remove();
//   });

//   // Validate Pickup Location
//   const pickupLocation = document.getElementById("pickupLocation");
//   if (pickupLocation.value.trim() === "") {
//     isValid = false;
//     showError(pickupLocation, "Pickup Location is required.");
//   }

//   // Validate Destination
//   const destination = document.getElementById("destinationLocation");
//   if (destination.value.trim() === "") {
//     isValid = false;
//     showError(destination, "Destination is required.");
//   }

//   // Validate Name
//   const name = document.getElementById("name");
//   if (name.value.trim() === "") {
//     isValid = false;
//     showError(name, "Name is required.");
//   }

//   // Validate Phone
//   const phone = document.getElementById("phone");
//   if (phone.value.trim() === "") {
//     isValid = false;
//     showError(phone, "Phone is required.");
//   } else if (!validatePhone(phone.value.trim())) {
//     isValid = false;
//     showError(phone, "Invalid phone number.");
//   }

//   // Validate Email
//   const email = document.getElementById("email");
//   if (email.value.trim() === "") {
//     isValid = false;
//     showError(email, "Email is required.");
//   } else if (!validateEmail(email.value.trim())) {
//     isValid = false;
//     showError(email, "Invalid email format.");
//   }

//   // Validate Pickup Date
//   const tripDate = document.getElementById("tripDate");
//   if (tripDate.value.trim() === "") {
//     isValid = false;
//     showError(tripDate, "Pickup Date is required.");
//   }

//   // Validate Pickup Time
//   const tripTime = document.getElementById("tripTime");
//   if (tripTime.value.trim() === "") {
//     isValid = false;
//     showError(tripTime, "Pickup Time is required.");
//   }

//   // Validate Trip Type
//   const tripType = form.querySelector('input[name="tripType"]:checked');
//   if (!tripType) {
//     isValid = false;
//     showError(
//       form.querySelector('input[name="tripType"]'),
//       "Trip Type is required."
//     );
//   }

//   // Validate Vehicle Type
//   const vehicleType = document.getElementById("vehicleType");
//   if (vehicleType.value.trim() === "") {
//     isValid = false;
//     showError(vehicleType, "Vehicle Type is required.");
//   }

//   // Validate Agreement
//   const agreement = document.getElementById("agreement");
//   if (!agreement.checked) {
//     isValid = false;
//     showError(agreement, "You must agree to the terms and conditions.");
//   }

//   if (isValid) {
//     // Create a FormData object from the form
//     const formData = new FormData(form);

//     // Use Fetch API to submit the form data
//     fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       body: formData,
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // Handle the response from the server
//         console.log("Success:", data);
//         alert("Form submitted successfully!");
//       })
//       .catch((error) => {
//         // Handle any errors
//         console.error("Error:", error);
//         alert("There was an error submitting the form.");
//       });
//   }
// });
// function showError(element, message) {
//   const error = document.createElement("div");
//   error.className = "error-message";
//   error.style.color = "red";
//   error.textContent = message;
//   element.parentElement.appendChild(error);
// }

// function validateEmail(email) {
//   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return re.test(email);
// }

// // fuction validatePhone(phone) to only accept numbers
// function validatePhone(phone) {
//   const re = /^\d+$/;
//   return re.test(phone);
// }
