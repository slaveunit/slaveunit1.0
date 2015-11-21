// message box color exercise
$(".message-box, .message-box-sm").css("background-color", "black");


//fb like button
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


// exercise 19 object literals
var myworkimages = [
  {title: "Blown and Melted", pic: "img/blown.jpg"},
  {title: "Demon", pic: "img/demon.jpg"},
  {title: "Fender Mustang I", pic: "img/fender.jpg"},
  {title: "Fight!", pic: "img/fight.jpg"},
  {title: "King Queen", pic: "img/king.jpg"},
]


// google maps
var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.0675273, lng: -76.4424358},
    zoom: 16
  });
}

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {lat: 37.0675273, lng: -76.4424358}
  });

// google maps satellite view
var myLatlng = new google.maps.LatLng(37.0675273, -76.4424358);
var mapOptions = {
  zoom: 15,
  center: {lat: 37.0675273, lng: -76.4424358},
  mapTypeId: google.maps.MapTypeId.HYBRID
};
map.setTilt(45);
var map = new google.maps.Map(document.getElementById("map"),
    mapOptions);


  marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: 37.0675273, lng: -76.4424358}
  });
  marker.addListener('click', toggleBounce);
}

// pointer bounce on load
function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}
// end google maps


// document ready
$( document ).ready(function() {
  console.log( "document loaded" );


  // tooltip
  $(function () {
  $('#tooltip1').tooltip();
  });


  // tooltip in a button
  $(function () {
  $('[data-toggle=tooltip]').tooltip();
  });


  // stellar
  $.stellar({
  	horizontalScrolling: false,
  	responsive: true,
  });


  // javascript exercise 16
  //  ...event listener when submit button clicked
  $(".btn").on("click", function() {
  	console.log("red button clicked");
  	var comment = $(".message-box").val();
  	console.log(comment);
  	$("#visible-content").html("What you said: " + comment);
  });


  //javascript exercise 17
  //...conditional statements  
  $(".message-box").on("keyup", function() {
    console.log("keyup happened");
    var charCount = $(".message-box").val().length;
    console.log("charCOunt happened");
    $("#char-count").html(charCount)
    if(charCount > 50) {
      $("#char-count").css("color", "red");
    } else {
      $("#char-count").css("color", "white")};
  });


  //javascript exercise 18
  //...arrays and more
  var rows = $(".my-row");
    console.log("zebra");
  for(var i=0; i<rows.length; ++i) {
    if (i%2===0) {
      $(rows[i]).css("background-color", "gray");
      $(rows[i]).css("color", "black");
    };
  }   


  //javascript exercise 19
  //...object literals
  for(var i=0; i<myworkimages.length; ++i) {
    $("#" + i).css("background-image", 
      "url(" + myworkimages[i].pic + ")" 
    );
    $(".image").mouseenter( function() {
      console.log(this);
      $(this).html("<p class='info'><span class='project-title'>Title:</span>" + myworkimages[this.id].title + "</p>");
        }).mouseleave( function() {
      $("p.info").html("");
        console.log(myworkimages[this.id].title);
        });
  };


  // smoothscroll
    var $root = $('html, body');
    $('.navbar-nav a').click(function() {
      var href = $.attr(this, 'href');
      $root.animate({
          scrollTop: $(href).offset().top
      }, 500, function () {
          window.location.hash = href;
      });
      return false;
    });

// end document ready
});
