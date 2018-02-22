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
    if (key.which == '47') {
      alert('You have pressed the "g" key!');
      return;
    }
  })
}





$(document).ready(function(){

// call functions here

});
