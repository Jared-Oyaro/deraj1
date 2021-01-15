(function IIFE() {
  let slider = document.querySelector('.slider'),
     c = 0;
  setInterval( () => {
    slider.style.backgroundImage = 'url("images/bg' + c + '.png")';
    if (c < 2) {
      c++;
    } else {
      c = 0;
    }
  }, 3000);
} ());