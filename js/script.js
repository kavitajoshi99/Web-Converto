$(document).ready(function(){
  var memory = '';
  var current = '';
  var oper = '';
  var ans = '';
    $(".number_button").click(function(){
        current += $(this).data('val');
        display();
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
  $(".unary.oper").click(function(){
    if(oper == '' ){
      oper = $(this).data('val');
      display();
    }
  });
  $(".clear_button").click(function(){
     memory = '';
     current = '';
     oper = '';
     display();
  });
  $(".result_button").click(function(){
    if(current != '' && oper != '' && memory != ''){
      binary_result();
    }
    else if(memory != '' && oper != '' && current == ''){
      unary_result();
    }
    else{
      display();
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
    oper = '';
    memory = '';
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
    switch(oper){
      case "%":
      ans = memory / 100;
      oper = '';
      result_display();
      break;
    }
  }
});
