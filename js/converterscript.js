$(document).ready(function(){

  //converter js //

  $('#length').click(function(){
    alert($("#length").val());
  });
  $('#temperature').click(function(){
    alert($("#temperature").val());
  });
  $('#area').click(function(){
    alert($("#area").val());
  });
  $('#volume').click(function(){
    alert($("#volume").val());
  });
  $('#weight').click(function(){
    alert($("#weight").val());
  });
  $('#time').click(function(){
    alert($("#time").val());
  });


  $("#fromfield").change(function(){
    $('#tofield').val($('#fromfield').val());
  });

});
