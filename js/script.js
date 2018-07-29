$(document).ready(function(){
  var memory = '';
  var temp_memory = '';
  var current = '';
  var oper = '';
  var temp = '';
  var ans = '';
  var maxlength = '20';
    $(".number_button").click(function(){
      if(temp == ''){
        if(current.length < maxlength){
          current += $(this).data('val');
          display_current();
        }
        else{
          current = "Error";
          display_current();
        }
      }
      else if(temp != ''){
        if(current.length < maxlength){
          current += $(this).data('val');
          display_temp();
        }
        else{
          current = "Error";
          display_current();
        }
      }
    });
  $(".binary_oper").click(function(){

    if(oper == '' && temp == ''){
      oper = $(this).data('val');
      memory = current;
      current = '';
      display_current();
    }
    else if(oper != '' && temp == ''){
      binary_result();
    }
  });
  $(".unary_oper").click(function(){
    if(oper == '' && current != '' ){
      temp = $(this).data('val');
      temp_memory = current ;
      current = '';
      unary_result();
    }
    else if(oper != '' && current != ''){
      temp = $(this).data('val');
      temp_memory = current;
      current = '';
      unary_result();
    }
  });
  $(".math_fun").click(function(){
    temp = $(this).data('val');
    display_temp();
  });
  $(".clear_button").click(function(){
     memory = '';
     current = '';
     oper = '';
     display_current();
  });
  $(".result_button").click(function(){
    if(oper != '' && temp == '' && math_temp == ''){
      binary_result();
    }
    else if(temp != '' && math_temp == ''){
      unary_result();
    }
    else if(math_temp != ''){
      math_oper();
    }
  });
  $(".delete_button").click(function(){
    if( current != ''){
      current = '';
      display_current();
    }
    else{
      memory = '';
      current = '';
      ans = '';
    }
    });

  var display_current = function(){
    $('#display').text(current);
  }
  var display_temp = function(){
    $('#display').text(temp + current);
    math_temp = temp + current;

    }
  var result_display = function(){
    $("#display").text(ans);
    current = ans;
    ans = '';
  }
  var binary_result = function(){
      switch(oper){
        case "+" :
         ans = parseFloat(memory) + parseFloat(current);
         oper = '';
         result_display();
         break;
         case "-" :
         ans = memory - current ;
         oper = '';
         result_display();
         break;
         case "x" :
         ans = memory * current;
         oper = '';
         result_display();
         break;
         case "/" :
         ans = memory / current;
         oper ='';
         result_display();
         break;
      }
  }
  var unary_result = function(){
    switch(temp){
      case "%":
      ans = (temp_memory / 100).toFixed(2);
      temp = '';
      temp_memory = '';
      result_display();
      break;
      case "square" :
      ans = (temp_memory * temp_memory);
      temp = '';
      result_display();
      break;

    }
  }
var math_oper = function(){
  switch(temp){
    case "sin":
    ans = Math.abs(Math.sin(current).toFixed(2));
    temp = '';
    current = '';
    math_temp = '';
    result_display();
    break;
  }
}
});
