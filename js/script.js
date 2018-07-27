$(document).ready(function(){
  var value1 = '';
  var value2 = '';
  var oper = '';
  var ans = '';
  var mString = '';
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
  $(".delete_button").click(function(){
    if(oper == '' && value2 == '' && value1 != '' ){
      mString = value1.substring(0,value1.length-1);
      value1 = mString;
      display();
    }
    else if( value1 != '' && oper != '' && value2 != '')
      {
      mString = value2.substring(0,value2.length-1);
      value2 = mString;
      display();
      }
    else if( value1 != '' && oper != '' && value2 == '')
      {
      mString = oper.substring(0,oper.length-1);
      oper = mString;
      display();
      }
  });
  var display = function(){
    $("#display").text(value1 + oper + value2);
  }
  var result = function(){
    $("#display").text(ans);
    value1 = ans ;
    oper = '';
    value2 = '';
  }
});
