//define functions here

function getIt (){
  $('p').on('click', function() {
    alert("Hey!");
  })
}

function frameIt () {
   $('img').on('load', function() {
     $('img').bind('.tasty');
   })
}

function pressIt () {
  $('input:last').on('keydown', function (key) {
    if (key.which == 47) {
      alert('g was pressed');
      
    }
  })
}

function submitIt () {
  $('form').on('submit', function () {
    alert("Your form is going to be submitted now.");
  })
}





$(document).ready(function(){

// call functions here

});
