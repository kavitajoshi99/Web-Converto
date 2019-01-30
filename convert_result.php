<?php

$return = [];
$err = 0;
if(empty($_POST['fromval'])){
  $err = 1;
  $err_msg[] = 'value not defined';
}
if(is_numeric($_POST['fromval']) && $err ==0){
  $fromval = $_POST['fromval'];
  $calfrom = $_POST['calfrom'];
  $calto   = $_POST['calto'];
  if($calfrom == 'meter'){
    if($calto == 'km'){
        $result = $fromval*(0.001);
    }
    elseif($calto == 'meter'){
      $result = $fromval*1;
    }
    elseif($calto == 'cm'){
      $result = $fromval*100;
    }
    elseif($calto == 'millimeter'){
      $result = $fromval*1000;
    }
    elseif($calto == 'micrometer'){
      $result = $fromval*1000000;
    }
    elseif($calto == 'nm'){
      $result = $fromval*1000000000;
    }
    elseif($calto == 'mile'){
      $result = $fromval*0.000621371;
    }
  }
  elseif($calfrom == 'km'){
    if($calto == 'km'){
      $result = $fromval*1;
    }
    elseif($calto == 'meter'){
      $result = $fromval*1000;
    }
    elseif($calto == 'cm'){
      $result = $fromval*100000;
    }
    elseif($calto == 'millimeter'){
      $result = $fromval*1000000;
    }
    elseif($calto == 'micrometer'){
      $result = $fromval*1000000000;
    }
    elseif($calto == 'nm'){
      $result = $fromval*1000000000000;
    }
    elseif($calto == 'mile'){
      $result = $fromval*0.621371;
    }
  }
  elseif($calfrom == 'cm'){
    if($calto == 'cm'){
      $result = $fromval*1;
    }
    elseif($calto == 'meter'){
      $result = $fromval*0.01;
    }
    elseif($calto == 'km'){
      $result = $fromval*0.00001;
    }
    elseif($calto == 'millimeter'){
      $result = $fromval*10;
    }
    elseif($calto == 'micrometer'){
      $result = $fromval*10000;
    }
    elseif($calto == 'nm'){
      $result = $fromval*10000000;
    }
    elseif($calto == 'mile'){
      $result = $fromval*0.0000062137;
    }
  }
  elseif($calfrom == 'millimeter'){
    if($calto == 'cm'){
      $result = $fromval*0.1;
    }
    elseif($calto == 'meter'){
      $result = $fromval*0.001;
    }
    elseif($calto == 'km'){
      $result = $fromval*0.000001;
    }
    elseif($calto == 'millimeter'){
      $result = $fromval*1;
    }
    elseif($calto == 'micrometer'){
      $result = $fromval*1000;
    }
    elseif($calto == 'nm'){
      $result = $fromval*1000000;
    }
    elseif($calto == 'mile'){
      $result = $fromval*0.00000062137;
    }
  }
  elseif($calfrom == 'micrometer'){
    if($calto == 'cm'){
      $result = $fromval*0.0001;
    }
    elseif($calto == 'meter'){
      $result = $fromval*0.000001;
    }
    elseif($calto == 'km'){
      $result = $fromval*0.000000001;
    }
    elseif($calto == 'millimeter'){
      $result = $fromval*0.001;
    }
    elseif($calto == 'micrometer'){
      $result = $fromval*1;
    }
    elseif($calto == 'nm'){
      $result = $fromval*1000;
    }
    elseif($calto == 'mile'){
      $result = $fromval*0.00000000062137;
    }
  }
  elseif($calfrom == 'nm'){
    if($calto == 'cm'){
      $result = $fromval*0.0000001;
    }
    elseif($calto == 'meter'){
      $result = $fromval*0.000000001;
    }
    elseif($calto == 'km'){
      $result = $fromval*0.000000000001;
    }
    elseif($calto == 'millimeter'){
      $result = $fromval*0.000001;
    }
    elseif($calto == 'micrometer'){
      $result = $fromval*0.001;
    }
    elseif($calto == 'nm'){
      $result = $fromval*1;
    }
    elseif($calto == 'mile'){
      $result = $fromval*0.00000000000062137;
    }
  }
  elseif($calfrom == 'mile'){
    if($calto == 'cm'){
      $result = $fromval*160934.4;
    }
    elseif($calto == 'meter'){
      $result = $fromval*1609.34;
    }
    elseif($calto == 'km'){
      $result = $fromval*1.60934;
    }
    elseif($calto == 'millimeter'){
      $result = $fromval*1609344;
    }
    elseif($calto == 'micrometer'){
      $result = $fromval*1609344000;
    }
    elseif($calto == 'nm'){
      $result = $fromval*1609344000000;
    }
    elseif($calto == 'mile'){
      $result = $fromval*1;
    }
  }
}
else{
  $err = 1;
  $err_msg[] = 'Enter a valid value';
}
  $return['result'] = $result;
  $return['err']  = $err;
  $return['err_msg'] = $err_msg;
echo json_encode($return);
die();
?>
