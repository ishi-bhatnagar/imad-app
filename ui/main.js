console.log('Loaded!');

var element = document.getElementById('main-text');
element.innerHTML='New';

var img=document.getElementById('image');
img.onclick=function(){
    img.style.marginLeft ='100px';
}