$(document).ready(function() {

  $("#first").click(function() {
    $("#first_img").css("display", "block");
    $("#text1").css("display", "block");
    $("#morning").css("display", "none");
        $("#night").css("display", "none");
  });

  $("#first_img").click(function() {
    $("#first_img").css("display", "none");
      $("#line").css("display", "block");
    $("#text1").css("display", "none");
    $("#second").css("display", "block");
    $("#morning").css("display", "block");
    $("#night").css("display", "block");
  });

  $("#second").click(function() {
    $("#second_img").css("display", "block");
    $("#text2").css("display", "block");
    $("#morning").css("display", "none");
        $("#night").css("display", "none");
  });

  $("#second_img").click(function() {
    $("#second_img").css("display", "none");
    $("#line2").css("display", "block");
    $("#text2").css("display", "none");
    $("#third").css("display", "block");
    $("#morning").css("display", "block");
    $("#night").css("display", "block");
  });

  $("#third").click(function() {
    $("#third_img").css("display", "block");
    $("#text3").css("display", "block");
    $("#morning").css("display", "none");
        $("#night").css("display", "none");
  });

  $("#third_img").click(function() {
    $("#third_img").css("display", "none");
    $("#text3").css("display", "none");
    $("#fourth").css("display", "block");
    $("#morning").css("display", "block");
    $("#night").css("display", "block");
  });

  $("#fourth").click(function() {
    $("#fourth_img").css("display", "block");
    $("#text4").css("display", "block");
    $("#morning").css("display", "none");
        $("#night").css("display", "none");
  });

  $("#fourth_img").click(function() {
    $("#line3").css("display", "block");
    $("#fourth_img").css("display", "none");
    $("#text4").css("display", "none");
    $("#fifth").css("display", "block");
    $("#morning").css("display", "block");
    $("#night").css("display", "block");
  });

  $("#fifth").click(function() {
    $("#fifth_img").css("display", "block");
    $("#text5").css("display", "block");
    $("#morning").css("display", "none");
        $("#night").css("display", "none");
  });

  $("#fifth_img").click(function() {
        $("#line4").css("display", "block");
    $("#fifth_img").css("display", "none");
    $("#text5").css("display", "none");
    $("#sixth").css("display", "block");
    $("#morning").css("display", "block");
    $("#night").css("display", "block");
  });


    $("#sixth").click(function() {
      $("#sixth_img").css("display", "block");
      $("#text6").css("display", "block");
      $("#morning").css("display", "none");
          $("#night").css("display", "none");
    });

    $("#sixth_img").click(function() {
      $("#sixth_img").css("display", "none");
      $("#text6").css("display", "none");
      $("#sixth").css("display", "block");
      $("#morning").css("display", "block");
      $("#night").css("display", "block");
    });

  $("#morning").click(function() {
    $("body").css('animation','gradient2 8s infinite');
        $("body").css('background-color','#721b65');
  });

  $("#night").click(function() {
    $("body").css('animation','gradient 8s infinite');
        $("body").css('background-color','#003494');
  });

});
