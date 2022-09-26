const white_key =['z','x','c','v','b','n','m'];
const black_key=['s','d','f','g','h'];
const keys=document.querySelectorAll('.key');
const whites=document.querySelectorAll('.key.white');
const blacks=document.querySelectorAll('.key.black');

keys.forEach(key => {
  key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown',event=>{
  const key= event.key;
  const windex = white_key.indexOf(key);
  const bindex = black_key.indexOf(key);

  if(windex>-1)playNote(whites[windex]);
  if(bindex>-1)playNote(blacks[bindex]);
})

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime=0;
  noteAudio.play()
  key.classList.add("active");
  noteAudio.addEventListener('ended',()=>{
    key.classList.remove("active");
  })
}