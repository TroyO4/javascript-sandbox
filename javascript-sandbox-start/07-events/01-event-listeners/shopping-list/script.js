const clearBtn = document.querySelector('#clear');
const ul = document.querySelector('ul');

function onClear() {
  const li = document.querySelectorAll('li');
  li.forEach((item) => {
    item.remove();
  });
}

// JavaScript event Listener
// clearBtn.onclick = function () {
//   alert('Clear Items');
// };

// clearBtn.onclick = function () {
//   alert('clear items');
// };

// clearBtn.onclick = function () {
//   console.log('clear items');
// };

// Add event listener
// clearBtn.addEventListener('click', () => alert('clear items'));

clearBtn.addEventListener('click', onClear);

// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// setTimeout(() => clearBtn.click(), 5000);
