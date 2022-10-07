<html>
  <head>
  </head>
  <body>
    <form action="" method="post" id="form-input">
      <label>Nama</label><input type="text" name="nama" value="magelang1337"/>
      <label>Email</label><input type="text" name="email" value="magelang1337@gmail.com"/>
      <label>Website</label><input type="text" name="website" value="magelang1337.com"/>
      <input class="offset button" type="submit" name="submit" value="Submit"/>
    </form>

    <script type="text/javascript">
    $('#form-input').submit(function(e){
      e.preventDefault();
      data = {};
      $('input[name!="submit"]').each(function(i, elm) {
        data[$(elm).attr('name')] = elm.value;
      })
      
      data_json = JSON.stringify(data);
      alert(data_json);
      // Send data_json via AJAX...
    })
    </script>
  </body>
</html>
