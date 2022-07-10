$(document).ready(function () {
  var $home = $("#home"),
    $about = $("#about"),
    $project = $("#projects"),
    $body = $("body");

  $home.each(function () {
    $body.addClass("cover_w");
  });

  $about.each(function () {
    $body.addClass("cover_w");
  });

  $project.each(function () {
    $body.addClass("cover_lg");
    $("#project-filter").ckFilter({
      reset: true,
      multiple: false,
      animation: false,
    });
    $(".projects-inner .item").hover(
      function () {
        $(this).siblings().find("figure").addClass("is-off");
      },
      function () {
        $(this).siblings().find("figure").removeClass("is-off");
      }
    );
    $(".jqimgFill").imgLiquid();
  });

  /* header =========*/
  $(".menu-toggle").click(function () {
    $(this).toggleClass("active");
    $(this).next(".menu").toggleClass("active");
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $("header").addClass("active");
    } else {
      $("header").removeClass("active");
    }
  });

  var time = 1000;
  !(function TVclose() {
    if (time <= 0) {
      $(".tv").addClass("close");
    } else {
      setTimeout(TVclose, 500);
    }
    time -= 1000;
  })();

  /*document END*/
});
