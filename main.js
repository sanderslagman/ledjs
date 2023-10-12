    function on() {
      $.ajax('/test/on')
        .done(function (response) {
          console.log(response);
        });
      $('#toggle').html('<button class=\'btn btn-secondary m-2\' onclick=\'off()\'>OFF</button>');
    }
    function off() {
      $.ajax('/test/off')
        .done(function (response) {
          console.log(response);
        });
      $('#toggle').html('<button class=\'btn btn-primary m-2\' onclick=\'on()\' id=\'on\'>ON</button>');
    }
    var inputs, index, mainColor;
  
    inputs = document.getElementsByTagName('input');
    for (index = 0; index < inputs.length; index++) {
      if (inputs[index].type == 'color') {
        inputs[index].addEventListener('change', update, false);
      }
      else {
        inputs[index].addEventListener('change', sendcmd, false);
      }
    }
  
    function sendcmd(event) {
      $.ajax(event.target.id + '/' + event.target.value).done((response) => {
        console.log(response);
      });
    }
  
    function update(event) {
      console.log(event.target.id + event.target.value);
      if (event.target.id == 'strip1') {
        mainColor = event.target.value.substring(1);
      }
      $.ajax(event.target.id + '/' + event.target.value.substring(1)).done((response) => {
        console.log(response);
      });
    }
