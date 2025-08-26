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
