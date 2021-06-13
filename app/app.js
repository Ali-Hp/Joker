let playMy = document.getElementById('play');
let videoMy = document.querySelector('.video');
let exit = document.querySelector('.exit');
let videoTow = document.querySelector('video');
let body = document.querySelector('body');

playMy.addEventListener('click', () => {
    videoMy.classList.add('active');


});

exit.addEventListener('click', () => {
    videoMy.classList.remove('active');
    videoTow.pause();


});

/*loading */
let loading = document.querySelector('.loading');

window.addEventListener('load', () => {
    loading.classList.add('active')
});
/*loading */