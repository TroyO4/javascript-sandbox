const itemInput = document.getElementById('item-input');

const onKeyPress = (e) => {
  console.log('keypress');
};

const onKeyUp = (e) => {
  console.log('keyup');
};
const onKeyDown = (e) => {
  //key
  //   if (e.key === 'Shift') {
  //     alert('Pressed Shift');
  //   }

  //keyCode
  if (e.keyCode === 13) {
    alert('You pressed enter');
  }

  //code
  if (e.code === 'Digit1') {
    console.log('you pressed one');
  }

  if (e.repeat) {
    console.log('you are holding down ' + e.key);
  }

  console.log('Shift: ' + e.shiftKey);
  console.log('Control: ' + e.ctlKey);
  console.log('Alt: ' + e.altKey);

  if (e.shiftKey && e.key === 'K') {
    console.log('you hit shift plus k');
  }
};

// itemInput.addEventListener('keypress', onKeyPress);
// itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);
