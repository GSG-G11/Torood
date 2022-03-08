// **** open and close modal box ****

let close = document.getElementsByClassName('close-btn')[0];
let modal = document.getElementById('modal');
let overlay = document.getElementById('overlay');
var toggle = document.getElementById('container');
var toggleContainer = document.getElementById('toggle-container');
var toggleNumber = false;

// open

let open = document.getElementsByClassName('add-btn')[0];

open.addEventListener('click', openFun);

function openFun() {
  modal.style.display = 'block';
  overlay.style.opacity = 1;
}

// close

close.addEventListener('click', closeFun);

function closeFun() {
  modal.style.display = 'none';
  overlay.style.opacity = 0;
}

// **** Toggle button function ****

toggle.addEventListener('click', function () {
  toggleNumber = !toggleNumber;
  let allScr = document.querySelectorAll('#all-screen');
  let doneScr = document.querySelectorAll('#done-screen');

  if (toggleNumber) {
    toggleContainer.style.clipPath = 'inset(0 0 0 50%)';
    toggleContainer.style.backgroundColor = '#fea900';

    allScr[0].classList.toggle('hide');
    doneScr[0].classList.toggle('hide');
  } else {
    toggleContainer.style.clipPath = 'inset(0 50% 0 0)';
    toggleContainer.style.backgroundColor = '#fea900';

    doneScr[0].classList.toggle('hide');
    allScr[0].classList.toggle('hide');
  }
  console.log(toggleNumber ? 'done' : 'all');
});
