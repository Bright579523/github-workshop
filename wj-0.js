const switchToggle=document.querySelector('input[type="checkbox"]');
const toggleIcon=document.getElementById('toggle-icon');
const nav=document.getElementById('nav');
const image1=document.getElementById('image1');
const image2=document.getElementById('image2');
const image3=document.getElementById('image3');

function switchMode(change){
    if(change.target.checked){
        document.documentElement.setAttribute('data-theme','animation')
        animateMode();
        imageSwitch('animation');
    }else{
        document.documentElement.setAttribute('data-theme','original')
        originalMode();
        imageSwitch('original');
    }
}

function animateMode(){
    toggleIcon.children[0].textContent="Animation Mode";
    toggleIcon.children[1].classList.replace('fa-frog','fa-crow');
    nav.style.backgroundColor='#aaf893';
}
function originalMode(){
    toggleIcon.children[0].textContent="Original Mode";
    toggleIcon.children[1].classList.replace('fa-crow','fa-frog');
    nav.style.backgroundColor='#fc6363';
}
function imageSwitch(mode){
    image1.src=`img-w0/mountain_${mode}.jpg`;
    image2.src=`img-w0/flower_${mode}.jpg`;
    image3.src=`img-w0/cave_${mode}.jpg`;
}

switchToggle.addEventListener('change',switchMode);
