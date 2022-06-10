// elements===============

const header = document.querySelector("header");
const headerHeading = document.querySelector(".header_content h1");
const headerBtns = document.querySelector(".btn_container");
const sections = document.querySelectorAll(".section");
const contents = document.querySelectorAll(".content");
const servicesContainer = document.querySelector(".service_box_container");

// header hading scaling
const ovserver = new IntersectionObserver((e)=>{
    headerHeading.classList.remove('scale')
    headerBtns.classList.remove("move_to_right")
    ovserver.disconnect();
},{
    root:null,
    threshold:.25
})
ovserver.observe(header);
// section heading fadding aniamtion
const animateHeadings = new IntersectionObserver((e)=>{
    if (e[0].isIntersecting) {
        e[0].target.querySelector('.section_heading').classList.remove('fade');
        animateHeadings.unobserve(e[0].target);
        // animateHeadings.disconnect();
    }if (e[0].target == sections[sections.length-1]) {
        animateHeadings.disconnect();
        // if is this a last section then disconnect observer
    }
},{
    root:null,
    threshold:.17
})
sections.forEach((s)=>{
    animateHeadings.observe(s);
    // here we do fo all the sections
})

// content animation 
const contentAnimation = new IntersectionObserver((e)=>{
    if(e[0].isIntersecting){
        e[0].target.querySelector('.left_side').classList.remove('move_to_left');
        e[0].target.querySelector('.right_side').classList.remove('move_to_right');
        contentAnimation.unobserve(e[0].target);
    }
},{
    root:null,
    threshold:.50
})
contents.forEach(c=>{
    contentAnimation.observe(c)
})

const boxAnimation = new IntersectionObserver((e)=>{
    if (e[0].isIntersecting) {
        let boxes = e[0].target.querySelectorAll('.service_box');
        boxes.forEach(box=>{
            box.classList.remove('blur');
        })
        boxAnimation.disconnect();
    }
},{
    root:null,
    threshold:1
}) 
boxAnimation.observe(servicesContainer);