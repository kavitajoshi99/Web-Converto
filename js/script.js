$(document).ready(function(){
  var memory = '';
  var current = '';
  var oper = '';
  var ans = '';
    $(".number_button").click(function(){
      current += $(this).data('val');
      display();
      /*
      if(oper == '' && value2 == ''){
      value1 +=  $(this).data('val');
       display();
      }
      else if(oper != '' && value1 != ''){
        value2 += $(this).data('val');
        display();
      }
      */
    });
  $(".oper_button").click(function(){

  /*  if(value1 != ''){
      oper = $(this).data('val');
      display();
    } */
    oper = $(this).data('val');
    memory = current;
    current = '';
    display();
  });
  $(".clear_button").click(function(){
     memory = '';
     current = '';
     oper = '';
     display();
  });
  $(".result_button").click(function(){
     if(memory != '' && current != '' && oper != ''){
       switch(oper){
         case "+" :
          ans = parseFloat(memory) + parseFloat(current);
          result();
          break;
          case "-" :
          ans = memory - current ;
          result();
          break;
          case "x" :
          ans = memory * current;
          result();
          break;
          case "/" :
          ans = memory / current;
          result();
          break;
       }
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
      oper = '';
      display();

    }
    /*if(memory != '' && oper == '' && current == ''){
      memory = '';
      display();
    }
    else if(memory != '' && oper != '' && current == '')
     {
       oper = '';
       display();
     }
     else if(memory != '' && oper != '' && current == '')
      {
        current = '';
        display();
      }
      */
  });
  var display = function(){
    $("#display").text(current);
  }
  var result = function(){
    $("#display").text(ans);
    memory = ans;
    oper = '';
    current = '';
  }
});
