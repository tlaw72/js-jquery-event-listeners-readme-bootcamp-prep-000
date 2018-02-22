//define functions here

function getIt (){
  $('p').on('click', function() {
    alert("Hey!");
  })
}

function frameIt () {
   $('img').on('load', function() {
     $('img').append('.tasty');
   })
}

function pressIt () {
  $('form:last-child').on('keydown', function (key) {
    if (key.which == '')
  })
}





$(document).ready(function(){

// call functions here

});
