$(function () {
  //Selecting cursor
  var cursor = $(".cursor");

  //Following cursor
  $(document).bind("mousemove", function (e) {
    var offset = $(window).scrollTop();

    TweenLite.to(cursor, 0, {
      left: e.pageX - 10,
      top: e.pageY - offset - 10,
    });
    // -20 = half of your cursor width & height
    //Offset calculation to prevent position on scroll
  });

  var hoverElem = $("body a");
  var hoverElem2 = $("body .ckFilter-button");

  //Entering on the element, cursor changes
  hoverElem.on("mouseenter", function () {
    TweenLite.to(cursor, 0.3, {
      ease: Power1.easeOut,
      scale: 4.6,
      backgroundColor: "rgba(234, 101, 101, 1)",
    });
  });

  //Leaving the element, cursor goes default
  hoverElem.on("mouseleave", function () {
    TweenLite.to(cursor, 0.3, {
      ease: Power1.easeOut,
      scale: 1,
      // backgroundColor: 'rgba(255, 255, 255, 0.8)'
    });
  });

  //Entering on the element, cursor changes
  hoverElem2.on("mouseenter", function () {
    TweenLite.to(cursor, 0.3, {
      ease: Power1.easeOut,
      scale: 4.6,
      backgroundColor: "rgba(234, 101, 101, 1)",
    });
  });

  //Leaving the element, cursor goes default
  hoverElem2.on("mouseleave", function () {
    TweenLite.to(cursor, 0.3, {
      ease: Power1.easeOut,
      scale: 1,
      // backgroundColor: 'rgba(255, 255, 255, 0.8)'
    });
  });
});
