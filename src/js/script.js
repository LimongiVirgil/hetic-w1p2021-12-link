// let messages = document.getElementById('messages');
// let main = document.getElementById('main');
// let red = document.getElementById('red');

// messages.addEventListener('click', function() {
//   main.innerHTML += '<div id="red" class="red">njkfgsjndsngd,</div>';
//   messages.addEventListener('click', function() {
//     main.removeChild(red);
//   });
//  document.getElementById("red").remove();
//   });
let main = document.getElementById('main');
let red = document.getElementById('red');

let messages = document.getElementById('messages');
let photos = document.getElementById('photos');
let music = document.getElementById('music');
let notes = document.getElementById('notes');
let bin = document.getElementById('bin');
let pineapple = document.getElementById('pineapple');
let footer = document.getElementById('footer');
let validation = document.getElementById('validation');

// ajout d'écouteur sur le bouton message
messages.addEventListener('click', () => {
  red.classList.add('red--open');
});

// ajout d'écouteur afin de fermer la fenetre message
red.addEventListener('click', () => {
  red.classList.remove('red--open');
});

// ajout d'écouteur sur le bouton photos
photos.addEventListener('click', () => {
  red.classList.add('red--open');
});

// ajout d'écouteur afin de fermer la fenetre photos
red.addEventListener('click', () => {
  red.classList.remove('red--open');
});

// ajout d'écouteur sur le bouton notes
notes.addEventListener('click', () => {
  red.classList.add('red--open');
});

// ajout d'écouteur afin de fermer la fenetre notes
red.addEventListener('click', () => {
  red.classList.remove('red--open');
});

// ajout d'écouteur sur le bouton music
music.addEventListener('click', () => {
  red.classList.add('red--open');
});

// ajout d'écouteur afin de fermer la fenetre music
red.addEventListener('click', () => {
  red.classList.remove('red--open');
});

// ajout d'écouteur sur le bouton bin
bin.addEventListener('click', () => {
  red.classList.add('red--open');
});

// ajout d'écouteur afin de fermer la fenetre bin
red.addEventListener('click', () => {
  red.classList.remove('red--open');
});


// gestion du bouton pineapple

pineapple.addEventListener('click', () => {
  validation.style.display = "flex";
  pineapple.addEventListener('click', () => {
    validation.style.display = "none";
    });
  });

  


