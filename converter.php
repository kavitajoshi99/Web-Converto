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
            <li class="nav-item">
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
            </li>
          </ul>
      </nav>
    </div>
    <div id="convert">
      <table style="border:1px solid #000000" class="convert-table">
        <form name="calform"></form>
        <tbody>
          <tr>
            <td width="300px">
            <b>From:</b>
          </td>
            <td width="300px">
              <b>To:</b>
            </td>
          </tr>
          <tr>
            <td>
              <input type='text' name="fromval" style="width:250px" class="forminput" id="fromfield"/>
            </td>
            <td>
              <input type='text' name="toval" style="width:250px" class="forminput" id="tofield" readonly />
            </td>
          </tr>
          <tr>
            <td style="padding-top:10px">
              <select name="calfrom" style="width:250px" class="cal-select" size="7">
                <option>Meter</option>
                <option>Kilometer</option>
                <option>Centimeter</option>
                <option>Millimeter</option>
                <option>Micrometer</option>
                <option>Nanometer</option>
                <option>Mile</option>
              </select>
            </td>
            <td style="padding-top:10px">
              <select name="calto" style="width:250px" class="cal-select" size="7">
                <option>Meter</option>
                <option>Kilometer</option>
                <option>Centimeter</option>
                <option>Millimeter</option>
                <option>Micrometer</option>
                <option>Nanometer</option>
                <option>Mile</option>
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
