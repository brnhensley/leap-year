$(document).ready(function() {
  $("form#leap-year").submit(funtion(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $("#result").text(result);
  });
});
