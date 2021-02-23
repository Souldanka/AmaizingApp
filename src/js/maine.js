$( document ).ready(function(){
  $('.single-item').slick({
      dots: true,
      arrows: false,
  });

});
$('.demo_request').click( function() {
  $('.overlay').fadeIn();
});


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

$(".form__box-comment-input").keyup(function () {
  if (this.value.length == this.maxLength) {
    $(this).nextAll('.form__box-comment-input:enabled:first').focus();
  }
});

