<?php

  include('header.php');

?>
      <!-- calculator -->
      <div class="container">
        <div class="calculator-container">
          <div class="table-container">
            <table class="table">
              <thead class="thead-dark">
                <tr class="thead-row">
                  <td colspan="4">
                    <span id="display"></span>
                    <span id="result"></span>
                  </td>
                </tr>
              </thead>
              <tr class="table-row">
                <td class="oper_button" data-val="+">+</td>
                <td class="oper_button" data-val="-">-</td>
                <td class="oper_button" data-val="x">x</td>
                <td class="oper_button" data-val="/">/</td>
              </tr>
              <tr class="table-row">
                <td class="number_button"  data-val="1">1</td>
                <td class="number_button" data-val="2">2</td>
                <td class="number_button" data-val="3">3</td>
                <td class="delete_button">C</td>
              </tr>
              <tr class="table-row">
                <td class="number_button" data-val="4">4</td>
                <td class="number_button" data-val="5">5</td>
                <td class="number_button" data-val="6">6</td>
                <td rowspan="3" class="result_button ">=</td>
              </tr>
              <tr class="table-row">
                <td class="number_button" data-val="7">7</td>
                <td class="number_button" data-val="8">8</td>
                <td class="number_button" data-val="9">9</td>
              </tr>
              <tr class="table-row">
                <td class="number_button" data-val=".">.</td>
                <td class="number_button" data-val="0">0</td>
                <td class="clear_button">AC</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
<?php
  include('footer.php');
 ?>
