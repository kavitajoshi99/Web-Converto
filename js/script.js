$(document).ready(function(){
  var memory = '';
  var temp_memory = '';
  var current = '';
  var oper = '';
  var temp = '';
  var ans = '';
  var maxlength = '20';
    $(".number_button").click(function(){
      if(current.length < maxlength){
        current += $(this).data('val');
        display();
      }
      else{
        current = "Error";
        display();
      }
    });
  $(".binary_oper").click(function(){

    if(oper == ''){
      oper = $(this).data('val');
      memory = current;
      current = '';
      display();
    }
    else if(oper != ''){
      binary_result();
    }
  });
  $(".unary_oper").click(function(){
    if(oper == '' ){
      temp = $(this).data('val');
      temp_memory = current ;
      current = '';
      unary_result();
    }
    else if(oper != ''){
      temp = $(this).data('val');
      temp_memory = current;
      current = '';
      unary_result();
    }
  });
  $(".clear_button").click(function(){
     memory = '';
     current = '';
     oper = '';
     display();
  });
  $(".result_button").click(function(){
    if(oper != '' && temp == ''){
      binary_result();
    }
    else if(temp != ''){
      unary_result();
    }
  });
  $(".delete_button").click(function(){
    if( current != ''){
      current = '';
      display();
    }
    else{
      memory = '';
      current = '';
      ans = '';
    }
    });

  var display = function(){
    $('#display').text(current);
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
    }
  }
});
