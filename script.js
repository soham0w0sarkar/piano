const keys=document.querySelectorAll('.key');

keys.forEach(key => {
  key.addEventListener('click', () => playNote(key))
})


document.addEventListener('keydown',event=>{
  const key= event.key;
  const windex = white_key.indexOf(key);
  const bindex = black_key.indexOf(key);

  if(windex>-1) playNote(whites[windex]);
  if(bindex>-1) playNote(blacks[bindex]);
})



function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note)

  noteAudio.play()
  noteAudio.currentTime=0;

  noteAudio.play()
  key.classList.add("active");
  noteAudio.addEventListener('ended',()=>{
    key.classList.remove("active");
  })
}

