gsap.to("#nav", {
  backgroundColor: "black",
  height: "80px",
  duration: "0.5",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",

  scrollTrigger: {
    trigger: "#main",
    scroller: "body",

    start: "top -25%",
    end: "top -75%",
    scrub: 2,
  },
});

var crsr = document.querySelector(".cursor");
var crsrBlur = document.querySelector(".cursorBlur");
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  crsrBlur.style.left = dets.x - 150 + "px";
  crsrBlur.style.top = dets.y - 150+ "px";
});


var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
    crsr.style.cursor ="pointer";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});

gsap.from(".aboutUs img, .aboutus-in", {
  y: 90,
  opacity: 0,
  duration: 3,
  scrollTrigger: {
    trigger: ".aboutUs",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from(".card", {
  scale: 0.8,
  // opacity:0,
  duration: 0.5,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers:false,
    start: "top 90%",
    end: "top 85%",
    scrub: 1,
  },
});


gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});


gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

document.getElementById("arrow").addEventListener("click", function () {
  document.querySelector("#page3").scrollIntoView({ behavior: "smooth" });
});

// gsap.from("#page4 h1", {
//   y:60,
//   scrollTrigger:{
//     trigger:"#page4 h1",
//     scroller:"body",
//     start: "top 75%",
//     end:"top 80%",

//   }
// });

gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});

