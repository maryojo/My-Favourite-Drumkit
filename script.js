const keys = document.querySelectorAll('.key');
window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
});

keys.forEach(key => {
    key.addEventListener('click', function(e){
        let dataKey = key.getAttribute('data-key');
        const audio = document.querySelector(`audio[data-key="${dataKey}"]`);
        const keys = document.querySelector(`.key[data-key="${dataKey}"]`);
        if(!audio) return;
        audio.currentTime= 0;
        audio.play();
        keys.classList.add('playing');
    })
});

keys.forEach(key => 
    key.addEventListener('transitionend', removeTransition = (e) =>{
        if(e.propertyName !== 'transform') return;
    key.classList.remove('playing');
    })
);