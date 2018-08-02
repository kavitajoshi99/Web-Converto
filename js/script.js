$(document).ready(function(){
  var memory = '';
  var temp_memory = '';
  var current = '';
  var temp_current = '1';
  var oper = '';
  var back_oper ='';
  var temp = '';
  var ans = '';
  var math_temp ='';
  var radio_val = 'degree';
  var temp_result = '';
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
      else if(memory != '' && oper != ''){
        current += $(this).data('val');
        display_current();
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
      math_temp =  '';
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
    math_temp = '';
    display_temp();
  });
  $(".backoper_button").click(function(){
    back_oper = $(this).data('val');
    display_backoper();
  });
  $(".clear_button").click(function(){
     memory = '';
     current = '';
     oper = '';
     temp = '';
     math_temp = '';
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
    else if(back_oper != ''){
      backoper_fun();
    }
  });

  $("#radio_button").click(function(){
    if (document.getElementById('rad').checked) {
      radio_val = document.getElementById('rad').value;
    }
    else if(document.getElementById('deg').checked){
      radio_val = document.getElementById('deg').value;
    }
  });
  // delete button functionality
  $(".delete_button").click(function(){
    if( current != ''){
      current = '';
      display_current();
    }
    else{
      memory = '';
      current = '';
      temp = '';
      ans = '';
      display_current();
    }
    });

  var display_current = function(){
    $('#display').text(current);
  }
  var display_temp = function(){
    $('#display').text(temp + ' ' + current);
    math_temp = temp + current;
    }
    var display_backoper = function(){
      $('#display').text(current + back_oper );
    }
  var result_display = function(){
    $("#display").text(ans);
    current = ans;
    ans = '';
  }
  function fact(value){
    var fact = '1';
    var num = value;
    var i = '1';
    for(i=1; i<=num; i++){
        fact = fact*i;
      }
    return fact;
  }
  var binary_result = function(){
      switch(oper){
        case "+" :
         ans = parseFloat(memory) + parseFloat(current);
         oper = '';
         math_temp = '';
         result_display();
         break;
         case "-" :
         ans = memory - current ;
         oper = '';
         math_temp = '';
         result_display();
         break;
         case "x" :
         ans = memory * current;
         oper = '';
         math_temp = '';
         result_display();
         break;
         case "/" :
         ans = memory / current;
         oper ='';
         math_temp = '';
         result_display();
         break;
         case "^":
         ans = Math.pow(memory , current);
         oper = '';
         math_temp = '';
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
      math_temp = '';
      result_display();
      break;
      case "square" :
      ans = (temp_memory * temp_memory);
      temp = '';
      math_temp = '';
      result_display();
      break;
      case "+/-":
      ans = temp_memory*(-1);
      temp = '';
      math_temp = '';
      current= '';
      result_display();
      break;
    }
  }
    var math_oper = function(){
      switch(temp){
        case "sin":
        if(radio_val == 'degree'){
          temp_current = (current * 0.0174533);
        }
        else if(radio_val == 'radian'){
          temp_current = current;
        }
        ans = Math.sin(temp_current);
        temp = '';
        current = '';
        math_temp = '';
        result_display();
        break;
        case "cos":
        if(radio_val == 'degree'){
          temp_current = (current * 0.0174533);
        }
        else if(radio_val == 'radian'){
          temp_current = current;
        }
        ans = Math.cos(temp_current);
        temp = '';
        current = '';
        math_temp = '';
        result_display();
        break;
        case "tan":
        if(radio_val == 'degree'){
          temp_current = (current * 0.0174533);
        }
        else if(radio_val == 'radian'){
          temp_current = current;
        }
        ans = Math.tan(temp_current);
        temp = '';
        current = '';
        math_temp = '';
        result_display();
        break;

        case "π":
        if(current == ''){
          ans = Math.PI * temp_current;
          temp = '';
          math_temp = '';
          result_display();
          break;
        }
        else if( current != ''){
          ans = Math.PI * current;
          temp = '';
          math_temp = '';
          current = '';
          result_display();
          break;
        }
        case "ln":
        if(current != ''){
          ans = Math.log(current);
          temp = '';
          math_temp ='';
          current = '';
          result_display();
          break;
        }
        else{
          ans = 'Error';
          temp = '';
          math_temp ='';
          current = '';
          result_display();
          break;
        }
        case "log10":
        if(current != ''){
         ans = Math.log10(current);
         temp = '';
         math_temp  = '';
         current = '';
         result_display();
         break;
       }
       else{
         ans = 'Error';
         temp = '';
         math_temp  = '';
         current = '';
         result_display();
         break;
       }
       case "log2":
       if(current != ''){
        ans = Math.log2(current);
        temp = '';
        math_temp  = '';
        current = '';
        result_display();
        break;
      }
      else{
        ans = 'Error';
        temp = '';
        math_temp  = '';
        current = '';
        result_display();
        break;
      }
      case "3√":
       if(current == ''){
         ans = 'Error';
         temp = '';
         math_temp  = '';
         current = '';
         result_display();
         break;
       }
       else if(current != ''){
         ans = Math.cbrt(current);
         temp = '';
         math_temp  = '';
         current = '';
         result_display();
         break;
       }
       case "√":
        if(current == ''){
          ans = 'Error';
          temp = '';
          math_temp  = '';
          current = '';
          result_display();
          break;
        }
        else if(current != ''){
          ans = Math.sqrt(current);
          temp = '';
          math_temp  = '';
          current = '';
          result_display();
          break;
        }
        case "e":
        if(current != ''){
          ans = Math.exp(current);
          temp = '';
          math_temp  = '';
          current = '';
          result_display();
          break;
        }
        else if(current == ''){
          ans = 'Error';
          temp = '';
          math_temp  = '';
          current = '';
          result_display();
          break;
        }
        case "sin-1":
        temp_current = Math.asin(current);
        if(radio_val == 'degree'){
        temp_result = (temp_current * 57.2958).toFixed(2);
        }
        else if(radio_val == 'radian'){
          temp_result = temp_current;
        }
        ans = temp_result;
        temp_current = '';
        temp = '';
        temp_result = '';
        current = '';
        math_temp = '';
        result_display();
        break;
        case "cos-1":
        temp_current = Math.acos(current);
        if(radio_val == 'degree'){
        temp_result = (temp_current * 57.2958).toFixed(2);
        }
        else if(radio_val == 'radian'){
          temp_result = temp_current;
        }
        ans = temp_result;
        temp_current = '';
        temp = '';
        current = '';
        math_temp = '';
        result_display();
        break;
        case "tan-1":
        temp_current = Math.atan(current);
        if(radio_val == 'degree'){
        temp_result = (temp_current * 57.2958).toFixed(2);
        }
        else if(radio_val == 'radian'){
          temp_result = temp_current;
        }
        ans = temp_result;
        temp_current = '';
        temp = '';
        current = '';
        math_temp = '';
        result_display();
        break;
        case "1/":
        if(current != ''){
          var result ;
          result = 1/current;
          ans = result;
          result ='';
          temp = '';
          math_temp  = '';
          current = '';
          result_display();
          break;
        }
        else if(current == ''){
          ans = 'Error';
          temp = '';
          math_temp  = '';
          current = '';
          result_display();
          break;
        }
      }
    }
    var backoper_fun = function(){
      switch(back_oper){
        case "!":
        if(current != ''){
          var result ;
          result = fact(current);
          ans = result;
          result = '';
          temp = '';
          math_temp  = '';
          current = '';
          result_display();
          break;
        }
        else if(current == ''){
          ans = 'Error';
          temp = '';
          math_temp  = '';
          current = '';
          result_display();
          break;
        }

      }
    }
});
