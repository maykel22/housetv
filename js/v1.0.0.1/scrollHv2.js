 $("#prev").on("click", function() {
  $(".ul").animate({
    scrollLeft: "-=600"
  }, 1, "swing");
});

$("#next").on("click", function() {
  $(".ul").animate({
    scrollLeft: "+=600"
  }, 1, "swing");
});
