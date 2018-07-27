$(document).ready(function(){
  var value1 = '';
  var value2 = '';
  var oper = '';
    $(".number_button").click(function(){
      if(oper == ''){
      value1 +=  $(this).data('val');
      $("#display").text(value1);
      }else{
        value2 += $(this).data('val');
        display();
      }
    });
  $(".oper_button").click(function(){

    if(value1 != ''){
      oper = $(this).data('val');
      display();
    }
  });

  var display = function(){
    $("#display").text(value1 + oper + value2);
  }

});
