$(document).ready(function(){
  var value1 = '';
  var value2 = '';
  var oper = '';
  var ans = '';
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
  $(".result_button").click(function(){
     if(value1 != '' && value2 != '' && oper != ''){
       switch(oper){
         case "+" :
          ans = parseFloat(value1) + parseFloat(value2) ;
          result();
          break;
          case "-" :
          ans = value1 - value2 ;
          result();
          break;
          case "x" :
          ans = value1 * value2;
          result();
          break;
          case "/" :
          ans = value1 / value2;
          result();
          break;
       }
     }
  });
  var display = function(){
    $("#display").text(value1 + oper + value2);
  }
  var result = function(){
    $("#display").text(ans);
    
  }
});
