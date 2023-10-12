var inputs, index, mainColor;
$(function(){
inputs = document.getElementsByTagName('input');
    for (index = 0; index < inputs.length; index++) {
      if (inputs[index].type == 'color') {
        inputs[index].addEventListener('change', update, false);
      }
      else {
        inputs[index].addEventListener('change', sendcmd, false);
      }
    }
});
  

function led_on() {
      $.ajax('/test/on')
        .done(function (response) {
          console.log(response);
        });
      $('#toggle').html('<button class=\'btn btn-secondary m-2\' onclick=\'led_off()\'>OFF</button>');
    }
    function led_off() {
      $.ajax('/test/off')
        .done(function (response) {
          console.log(response);
        });
      $('#toggle').html('<button class=\'btn btn-primary m-2\' onclick=\'led_on()\' id=\'on\'>ON</button>');
    }
    function sendcmd(event) {
      $.ajax(event.target.id + '/' + event.target.value).done((response) => {
        console.log(response);
      });
    }
    function sendvar(vrb) {
        if(vrb == 'allSame'){
            vrb = vrb + '/' + mainColor;
        }
        $.ajax('/' + vrb).done((response) => {
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
