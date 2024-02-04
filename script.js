let cube = document.querySelector('.image-cube');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let pos = 0;

next.addEventListener('click', function(){
    pos -= 90;
    cube.style.transform =  `rotateY(${pos}deg)`;
});
prev.addEventListener('click', function(){
    pos += 90;
    cube.style.transform =  `rotateY(${pos}deg)`;
});