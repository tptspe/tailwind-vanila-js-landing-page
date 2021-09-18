const slider = document.querySelector('.slider');
const slides = Array.from(document.querySelectorAll('.slide'));
const buttons = document.querySelectorAll('.buttons div');
console.log('slides length',slides.length)
function getNextPrev() {
    const activeSlide = document.querySelector('.slide.active');
    const activeIndex = slides.indexOf(activeSlide);
    let next, prev;
    if(activeIndex === slides.length - 1 ){
        next = slides[0];
    }else{
        next = slides[activeIndex + 1];
    }

    if(activeIndex === 0 ){
        prev = slides[slides.length -1];
    }else{
        prev = slides[activeIndex - 1];
    }
    return [next, prev];
}

function getPosition() {
    const activeSlide = document.querySelector('.slide.active');
    const activeIndex = slides.indexOf(activeSlide);
    const [next, prev] = getNextPrev();

    slides.forEach((slide, index) => {
        if(index === activeIndex) {
            slide.style.transform = 'translateX(0%)';
        }else if(slide === prev){
            slide.style.transform = 'translateX(-125%)';
        }else if(slide === next){
            slide.style.transform = 'translateX(125%)';
        }else {
            slide.style.transform = 'translateX(125%)';
        }

        slide.addEventListener('transitionend', ()=>{
            slide.classList.remove('top');
        })
    })
}
getPosition();

buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        if(button.classList.contains('next')) getNextSlide();
        else if(button.classList.contains('prev')) getPrevSlide();
    })
})

function getNextSlide(){
    const current = document.querySelector('.slide.active');
    const [next, prev] = getNextPrev();

    if(current.classList.contains('top')){
        return;
    }
    current.classList.add('top');
    next.classList.add('top');
    current.classList.remove('active');
    current.style.transform = 'translate(-125%)';
    next.classList.add('active');
    next.style.transform = 'translate(0%)';
    getPosition();
}

function getPrevSlide(){
    const current = document.querySelector('.slide.active');
    const [next, prev] = getNextPrev();

    if(current.classList.contains('top')){
        return;
    }
    current.classList.add('top');
    prev.classList.add('top');
    current.classList.remove('active');
    current.style.transform = 'translate(125%)';
    prev.classList.add('active');
    prev.style.transform = 'translate(0%)';
    getPosition();
}
// items.forEach((el) => {
//     const minPerSlide = 4
//     let next = el.nextElementSibling
//     for (var i=1; i<minPerSlide; i++) {
//         if (!next) {
//             // wrap carousel by using first child
//         	next = items[0]
//       	}
//         let cloneChild = next.cloneNode(true)
//         el.appendChild(cloneChild.children[0])
//         next = next.nextElementSibling
//     }
// })