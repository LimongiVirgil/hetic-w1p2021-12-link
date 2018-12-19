let solution = ['Teddy', 'teddy'];
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
let dashboard__messages =  document.getElementById('dashboard__messages');
let dashboard__photos =  document.getElementById('dashboard__photos');
let dashboard__notes =  document.getElementById('dashboard__notes');
let dashboard__music =  document.getElementById('dashboard__music');
let dashboard__bin =  document.getElementById('dashboard__bin');
let photos__one = document.getElementById('photos__one');
let article__miniature = document.getElementById('article__miniature');
let compteur = 0;
let validate = document.getElementById('validate');
let input = document.getElementById('input');

// ajout d'écouteur sur le bouton message
  messages.addEventListener('click', () => {
  dashboard__messages.classList.add('dashboard__messages--open');
});

// ajout d'écouteur afin de fermer la fenetre message
  document.getElementById('buttons__button--closeMessages').addEventListener('click', () => {
  dashboard__messages.classList.remove('dashboard__messages--open');
});

// ajout d'écouteur sur le bouton photos
photos.addEventListener('click', () => {
dashboard__photos.classList.add('dashboard__photos--open');
});

// // ajout d'écouteur afin de fermer la fenetre photos
  document.getElementById('buttons__button--closePhotos').addEventListener('click', () => {
  dashboard__photos.classList.remove('dashboard__photos--open');
});


// // ouverture photo miniature
// photos__one.addEventListener('click', () => {
//   document.getElementById('photo__big').classList.add('photo__big--isOpen');
// })

// // fermeture photo miniature
// document.getElementById('photo__big').addEventListener('click', () => {
//   document.getElementById('photo__big').classList.remove('photo__big--isOpen');
// }) 

// foncion qui permet d'ouvrir une image 
const open = (idMiniature, idBig) => {
  idMiniature.addEventListener('click', () => {
    document.getElementById(idBig).classList.add('photo__big--isOpen');
  });
};
// fonction qui permet de fermer l'image
const close = (idBig) => {
  document.getElementById(idBig).addEventListener('click', () => {
  document.getElementById(idBig).classList.remove('photo__big--isOpen');
  });
};

open(photos__one, 'photo__big--one');
close('photo__big--one');
open(photos__two, 'photo__big--two');
close('photo__big--two');
open(photos__three, 'photo__big--three');
close('photo__big--three');
open(photos__four, 'photo__big--four');
close('photo__big--four');
open(photos__five, 'photo__big--five');
close('photo__big--five');
open(photos__six, 'photo__big--six');
close('photo__big--six');



// // ajout d'écouteur sur le bouton notes
  notes.addEventListener('click', () => {
  dashboard__notes.classList.add('dashboard__notes--open');
});

// // ajout d'écouteur afin de fermer la fenetre notes
  document.getElementById('buttons__button--closeNotes').addEventListener('click', () => {
  dashboard__notes.classList.remove('dashboard__notes--open');
});

// // ajout d'écouteur sur le bouton music
  music.addEventListener('click', () => {
  dashboard__music.classList.add('dashboard__music--open');
});

// // ajout d'écouteur afin de fermer la fenetre music
  document.getElementById('buttons__button--closeMusic').addEventListener('click', () => {
  dashboard__music.classList.remove('dashboard__music--open');
});

// // ajout d'écouteur sur le bouton bin
bin.addEventListener('click', () => {
  dashboard__bin.classList.add('dashboard__bin--open');
});

article__miniature.addEventListener('click', () => {
  document.getElementById('article__open').classList.add('article--isOpen');
})
document.getElementById('article__open').addEventListener('click', () => {
  document.getElementById('article__open').classList.remove('article--isOpen');

})



// // ajout d'écouteur afin de fermer la fenetre bin
document.getElementById('buttons__button--closeBin').addEventListener('click', () => {
  dashboard__bin.classList.remove('dashboard__bin--open');
});


// gestion du bouton pineapple

// ajout d'écouteur sur le bouton pineapple
// pineapple.addEventListener('click', () => {
//   validation.classList.remove('validation--close');
//   validation.classList.add('validation--open');
//   pineapple.addEventListener('click', () => {
//     validation.classList.remove('validation--open');
//     validation.classList.add('validation--close');
//   });
// });

pineapple.addEventListener('click', () => {
  validation.classList.toggle('is-open');
});


// JS de la fenetre conversation 

var noms = document.querySelectorAll('.window .contacts__contact')
var win = document.querySelector('.window')
var toolbar = document.querySelector('.window__toolbar')


for (let i = 0; i < noms.length; i++) {

  noms[i].addEventListener('click', function () {
    console.log(noms[i].getAttribute('data-name'))


    console.log(document.querySelectorAll('.messages__conversations')[i].getAttribute('data-name'))

    for (let j = 0; j < noms.length; j++) {
      
      document.querySelectorAll('.messages__conversations')[j].classList.remove('message__conversations--isOpen')
    }

    document.querySelectorAll('.messages__conversations')[i].classList.add('message__conversations--isOpen')

  })

}
  toolbar.addEventListener("dragstart", function (event) {
  // Stocke une référence sur l'objet glissable
});

toolbar.addEventListener("dragend", function (event) {
  var e = e || window.event;
  var pageX = e.pageX -50;
  var pageY = e.pageY -50;
  win.style.transform = "translate(" + pageX + "px,"+ pageY+ "px)"

}, false);

  validate.addEventListener('click', () => {
    console.log(input.value)
  let password = input.value;
  validate.value = password;
  console.log(validation.value);
  if(password === solution[0] || password === solution[1]) {
    window.location.href = '../screens/end.html';
  }

  if(password != solution[1] || password != solution[2]) {
    compteur++
  }

  if(compteur === 2) {
    window.location.href = '../screens/loose.html';
  }
} );

// timer 


