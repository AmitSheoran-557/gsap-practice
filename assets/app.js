// gsap.to("#black-box", {
//     x: 400,
//     duration: 2,
//     backgroundColor: "red",
//     width: 500,
//     hight: 600,
//     rotate: 90,
// })
// gsap.to(".red-box", {
//     x: 400,
//     duration: 2,
//     backgroundColor: "black",
//     width: 500,
//     hight: 600,
//     rotate: 90,
//     borderRadius: 24
// })


let btn = document.querySelector(".btn");
let get = document.querySelector(".get");
let star = document.querySelector(".star");
let gsapElement = document.querySelector(".gsap");

let animation = gsap.to(".get", {
    x: -13,
    duration: 0.5,
    paused: true
});

let animation2 = gsap.to(".gsap", {
    x: 13,
    duration: 0.5,
    paused: true
});
let animation3 = gsap.to(".star", {
    y: -32,
    duration: 1.5,
})
let isReversing = false;

btn.addEventListener("mouseover", () => {
    if (!isReversing) {
        animation.play();
        animation2.play();
        animation3.play();

        setTimeout(() => {
            animation.reverse();
            animation2.reverse();
            animation3.reverse();
            isReversing = false;
        }, 1000);
    }
});

btn.addEventListener("mouseout", () => {

});

animation.addEventListener("complete", () => {
    isReversing = false;
});
