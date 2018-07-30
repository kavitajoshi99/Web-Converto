<?php
  include('header.php');
 ?>
 <!-- scientific calculator -->
<div class= "container">
  <div class="calculator-container">
    <div class="table-container">
      <table class="table">
        <thead class="thead-dark">
          <tr class="thead-row">
            <td colspan="5">
              <span id="display"></span>
              <span id="result"></span>
            </td>
          </tr>
        </thead>
        <tr class="table-row">
          <td class="math_fun" data-val="sin">sin</td>
          <td class="math_fun" data-val="cos">cos</td>
          <td class="math_fun" data-val="tan">tan</td>
          <td class="math_fun" data-val="log10">log<sub>10</sub></td>
          <td class="math_fun" data-val="ln">ln</td>
        </tr>
        <tr class="table-row">
          <td class="binary_oper" data-val="+">+</td>
          <td class="binary_oper" data-val="-">-</td>
          <td class="binary_oper" data-val="x">x</td>
          <td class="binary_oper" data-val="/">/</td>
          <td class="math_fun" data-val="log2">log<sub>2<sub></td>
        </tr>
        <tr class="table-row">
          <td class="number_button"  data-val="1">1</td>
          <td class="number_button" data-val="2">2</td>
          <td class="number_button" data-val="3">3</td>
          <td class="unary_oper" data-val="%">%</td>
          <td class="math_fun" data-val="π">π</td>
        </tr>
        <tr class="table-row">
          <td class="number_button" data-val="4">4</td>
          <td class="number_button" data-val="5">5</td>
          <td class="number_button" data-val="6">6</td>
          <td class="math_fun" data-val="√">√x</td>
          <td class="delete_button">C</td>
        </tr>
        <tr class="table-row">
          <td class="number_button" data-val="7">7</td>
          <td class="number_button" data-val="8">8</td>
          <td class="number_button" data-val="9">9</td>
          <td class="unary_oper" data-val="square">x<sup>2</sup></td>
          <td rowspan="3" class="result_button ">=</td>
        </tr>
        <tr class="table-row">
          <td class="number_button" data-val=".">.</td>
          <td class="number_button" data-val="0">0</td>
          <td class="clear_button">AC</td>
          <td class="unary_oper" data-val ="+/-">+/-</td>
        </tr>
      </table>
    </div>
  </div>
</div>
<?php
 include('footer.php');
?>
