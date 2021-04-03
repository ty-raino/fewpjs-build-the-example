// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// need an event listener 
// submit request to server
// update DOM

let hearts = document.querySelectorAll(".like-glyph");

function likeCallback(e) {
  const heart = e.target;

  mimicServerCall()
  .then(resp => {
    heart.classList.add('activated-heart');
    heart.querySelector('span').innerText = FULL_HEART;
  })
  .catch(error => {
    const errorModal = document.querySelector('#modal');
    errorModal.classList.remove('hidden');
    setTimeout(function(){
      errorModal.classList.add('hidden');
    }, 5000);
  })
}

for (let glyph of hearts) {
  glyph.addEventListener("click", likeCallback);
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
