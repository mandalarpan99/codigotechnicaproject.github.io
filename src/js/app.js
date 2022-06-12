// elements===============

const body = document.querySelector("body");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const menuBtn = document.querySelector(".menu_btn");
const aboutUsHeaderBtn = document.querySelector(".btn-about-us");
const menus = document.querySelector(".menus");
const headerHeading = document.querySelector(".header_content h1");
const headerBtns = document.querySelector(".btn_container");
const sections = document.querySelectorAll(".section");
const contents = document.querySelectorAll(".content");
const servicesContainer = document.querySelector(".service_box_container_pc");
const scrollTop = document.querySelector(".scroll_to_top");
const workExprience = document.querySelector("#work_exprience");
const aboutUs = document.querySelector("#about_us");
const overlay = document.querySelector(".overlay");

// header heading scaling
const ovserver = new IntersectionObserver((e)=>{
    headerHeading.classList.remove('scale')
    headerBtns.classList.remove("move_to_right")
    ovserver.disconnect();
},{
    root:null,
    threshold:.25,

})
ovserver.observe(header);
// section heading fadding aniamtion
const animateHeadings = new IntersectionObserver((e)=>{
    if (e[0].isIntersecting) {
        e[0].target.querySelector('.section_heading').classList.remove('fade');
        animateHeadings.unobserve(e[0].target);
        // animateHeadings.disconnect();
    }if (e[0].target == sections[sections.length-1]) {
        e[0].target.querySelector('.section_heading').classList.remove('fade');
        animateHeadings.disconnect();
        // if is this a last section then disconnect observer
    }
},{
    root:null,
    threshold:.15
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

// servicesContainer box animation
const boxAnimation = new IntersectionObserver((e)=>{
    console.log('mak');
    if (e[0].isIntersecting) {
        console.log('mak');
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


// nav activation 
const navObserver = new IntersectionObserver((e)=>{
    if (e[0].isIntersecting) {
        nav.classList.contains('active') && nav.classList.remove('active');
    }else{
        nav.classList.add('active');
    }
},{
    root:null,
    threshold:0
})
navObserver.observe(header);

// scroll to top
const scrollObserver = new IntersectionObserver((e)=>{
    if(e[0].isIntersecting && e[0].intersectionRatio>.25 && e[0].boundingClientRect.top>0){
        scrollTop.classList.add('active'); 
    }else if(!e[0].isIntersecting && e[0].intersectionRatio<.25 && e[0].boundingClientRect.top>0){
        scrollTop.classList.remove('active'); 
    }
},{
    root:null,
    threshold:.25
})
scrollObserver.observe(workExprience);
scrollTop.addEventListener('click',()=>{
    window.scrollTo(0,0)
})

// toggling menus
menuBtn.addEventListener("click",()=>{
    menus.classList.toggle('active');
    overlay.classList.toggle('active');
})
overlay.addEventListener('click',()=>{
    menus.classList.remove('active')
    overlay.classList.remove('active');
})
aboutUsHeaderBtn.addEventListener('click',()=>{
    aboutUs.scrollIntoView();
})