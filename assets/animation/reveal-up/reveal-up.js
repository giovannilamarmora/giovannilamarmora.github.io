// REVEAL //
function reveal() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray(".revealUp").forEach(function (elem) {
    ScrollTrigger.create({
      trigger: elem,
      start: "top 80%",
      end: "bottom 20%",
      markers: false, // Change to true to view markers
      onEnter: function () {
        gsap.fromTo(
          elem,
          { y: 100, autoAlpha: 0 },
          {
            duration: 1.25,
            y: 0,
            autoAlpha: 1,
            ease: "back",
            overwrite: "auto"
          }
        );
      },
      onLeave: function () {
        gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
      },
      onEnterBack: function () {
        gsap.fromTo(
          elem,
          { y: -100, autoAlpha: 0 },
          {
            duration: 1.25,
            y: 0,
            autoAlpha: 1,
            ease: "back",
            overwrite: "auto"
          }
        );
      },
      onLeaveBack: function () {
        gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
      }
    });
  });
  LOG('RevealUp JS is Started');
};

function stop() {
  console.log("Stop Up is loaded.");
  document.querySelectorAll(".revealUp").forEach(function (elem) {
    //elem.classList.replace("revealUp", "stopRevealUp");
    gsap.fromTo(
          elem,
          { y: 100, autoAlpha: 0 },
          {
            duration: 1.25,
            y: 0,
            autoAlpha: 1,
            ease: "back",
            overwrite: "auto"
          }
        );
      ScrollTrigger.disable();
      ScrollTrigger.refresh();
      gsap.registerPlugin(ScrollTrigger);
    });
    LOG('RevealUp JS is Stopped');
}

// Log Service
let LOG_Formatter = '[$DATE$] [$ENV$] [LOG] [$CLASS$]: $TEXT$';

  function LOG(text) {
    console.log(
      LOG_Formatter.replace('$DATE$', new Date().toDateString())
        .replace('$ENV$', 'NOT SPECIFIED')
        .replace('$TEXT$', text).replace('$CLASS$', 'Animation: Reveal-Up')
    );
  }