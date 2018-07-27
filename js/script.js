$(document).ready(function(){
  var value1 = '';
  var value2 = '';
  var oper = '';
    $(".number_button").click(function(){
      if(oper == ''){
      value1 +=  $(this).data('val');
       display();
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
  $(".clear_button").click(function(){
     value1 = '';
     value2 = '';
     oper = '';
     display();
  });
  var display = function(){
    $("#display").text(value1 + oper + value2);
  }

});
