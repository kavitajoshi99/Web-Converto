<?php
  include('header.php');
 ?>
 <div class="converter_container">
    <div class="converter_menu">
      <ul>
        <li>
          <a>Length</a>
        </li>
        <li>
          <a>Temperature</a>
        </li>
        <li>
          <a>Area</a>
        </li>
        <li>
          <a>Volume</a>
        </li>
        <li>
          <a>Weight</a>
        </li>
        <li>
          <a>Time</a>
        </li>
      </ul>
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
              <input type='text' name="fromval" style="width:250px" class="forminput" />
            </td>
            <td>
              <input type='text' name="toval" style="width:250px" class="forminput" />
            </td>
          </tr>
          <tr>
            <td style="padding-top:10px">
              <select name="calfrom" style="width:250px" class="cal-select">
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
              <select name="calfrom" style="width:250px" class="cal-select">
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
