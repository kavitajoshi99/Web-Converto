$(document).ready(function(){
  var memory = '';
  var current = '';
  var oper = '';
  var ans = '';
    $(".number_button").click(function(){
        current += $(this).data('val');
        display();
    });
  $(".oper_button").click(function(){

    if(oper == ''){
      oper = $(this).data('val');
      memory = current;
      current = '';
      display();
    }
    else if(oper != ''){
      result();
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
      result();
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
  var result = function(){
    if(memory != '' && current != '' && oper != ''){
      switch(oper){
        case "+" :
         ans = parseFloat(memory) + parseFloat(current);
         result_display();
         break;
         case "-" :
         ans = memory - current ;
         result_display();
         break;
         case "x" :
         ans = memory * current;
         result_display();
         break;
         case "/" :
         ans = memory / current;
         result_display();
         break;
      }
    }
  }
});
