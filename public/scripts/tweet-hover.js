$(document).ready(function () {
  $("article.tweet").hover(function () {
    console.log("found")
    $(this).css("box-shadow", "10px 5px 5px #98AFC7");
  }, function () {
    $(this).css("box-shadow", "none");
  });
});