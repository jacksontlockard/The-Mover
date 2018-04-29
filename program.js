document.onkeypress = keypressed;
document.onload = load;
var left = 0;
var _top = 0;

function load() {
  var character = document.getElementById('character');
}

function keypressed(event) {
  var amt = 15;
  var key = event.key.toLowerCase();
  
  if (key == 'd') {
    left += amt;
    character.style.left = left + 'px';
  } else if (key == 'a') {
    left -= amt;
    character.style.left = left + 'px';
  } else if (key == 'w') {
    _top -= amt;
    character.style.top = _top + 'px';
  } else if (key == 's') {
    _top += amt;
    character.style.top = _top + 'px';
  }
}
