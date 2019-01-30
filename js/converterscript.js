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


  $(document).on('change','.input-change', function(){
    //$('#tofield').val($('#fromfield').val());
    $.ajax({
      url : 'convert_result.php',
      method: 'post',
      dataType : 'json',
      data: {
        'fromval' : $('#fromfield').val(),
        'calfrom' : $('#calfrom').val(),
        'calto'   : $('#calto').val()
      },
      success : function(res){
                    $('#tofield').val(res.result);
              }
    });
  });

});
