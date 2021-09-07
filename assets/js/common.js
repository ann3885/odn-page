$(document).ready(function () {
  $(".section1 .img .box").click(function () {
    let nth = $(this).attr("data-set");
    $(".section1 .img div").eq(nth).toggleClass("on");
  });
});
