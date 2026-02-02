

let index = 0;

const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");
const total = slides.length;


/* ========= SLIDER ========= */
function update(){
    slider.style.transform = `translateX(-${index*100}vw)`;
}

function moveSlide(dir){
    index = (index + dir + total) % total;
    update();
}

function goToSlide(i){
    index = i;
    update();
}


/* auto */
setInterval(()=>{
    moveSlide(1);
},5000);


function scrollToSection(id){
    document.getElementById(id)
        .scrollIntoView({
            behavior: "smooth"
        });
}
