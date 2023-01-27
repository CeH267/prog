const element = document.getElementById("menu");
element.addEventListener("click", myFunction);

function myFunction() {
    $(".navigation").slideToggle();
}

WebGLSampler.from("#txt", {
    scrollTrigger:{
        scrub: true
    },
    x: 350
});

WebGLSampler.froml