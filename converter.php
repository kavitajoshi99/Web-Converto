<?php
  include('header.php');
 ?>
 <div class="converter_container">
    <div class="converter_menu">
      <nav class="navbar navbar-expand-md">
          <ul class="navbar-nav">
            <li class="nav-item active menu_button">
              <button value="length" id="length">Length</button>
            </li>
          <!--  <li class="nav-item">
              <button value="temperature" id="temperature">Temperature</button>
            </li>
            <li class="nav-item">
              <button value="area" id='area'>Area</button>
            </li>
            <li class="nav-item">
              <button value="volume" id="volume">Volume</button>
            </li>
            <li class="nav-item">
              <button value="weight" id="weight">Weight</button>
            </li>
            <li class="nav-item">
              <button value="time" id="time">Time</button>
            </li> -->
          </ul>
      </nav>
    </div>
    <div id="convert">
      <table style="border:1px solid #000000" class="convert-table">
        <tbody>
          <tr class='row'>
            <td class='col-6'>
            <b>From:</b>
          </td>
            <td class='col-6'>
              <b>To:</b>
            </td>
          </tr>
          <tr class='row'>
            <td class='col-6'>
              <input type='text' name="fromval" class="forminput input-change" id="fromfield"/>
            </td>
            <td class='col-6'>
              <input type='text' name="toval" class="forminput input-change" id="tofield" readonly />
            </td>
          </tr>
          <tr class='row'>
            <td style="padding:10px 0px" class='col'>
              <select name="calfrom" id='calfrom' class="cal-select input-change" size='7'>
                <option value='meter'>Meter</option>
                <option value='km'>Kilometer</option>
                <option value='cm'>Centimeter</option>
                <option value='millimeter'>Millimeter</option>
                <option value='micrometer'>Micrometer</option>
                <option value='nm'>Nanometer</option>
                <option value='mile'>Mile</option>
              </select>
            </td>
            <td style="padding:10px 0px" class='col'>
              <select name="calto" id='calto' class="cal-select input-change" size='7'>
                <option value='meter'>Meter</option>
                <option value='km'>Kilometer</option>
                <option value='cm'>Centimeter</option>
                <option value='millimeter'>Millimeter</option>
                <option value='micrometer'>Micrometer</option>
                <option value='nm'>Nanometer</option>
                <option value='mile'>Mile</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</div>
<?php
  include('footer.php');
 ?>
