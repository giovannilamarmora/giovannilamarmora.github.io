import { Injectable } from '@angular/core';
import { gsap } from 'gsap';
import { LOG } from 'src/app/shared/services/config/logger.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RevealUpAnimations {
  environment = environment;
  public scrollBox: any;

  initAnimation() {
    if (environment.isRevealUpActive) {
      LOG.info(
        'Is RevealUpActive: ' + environment.isRevealUpActive,
        'RevealUpAnimations: initAnimation'
      );
      gsap.registerPlugin(ScrollTrigger);
      this.reveal();
    }
  }
  reveal() {
    document.querySelectorAll('.revealUp').forEach((element) => {
      this.scrollBox = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom 20%',
          markers: false, // Change to true to view markers
          onEnter: function () {
            gsap.fromTo(
              element,
              { y: 100, autoAlpha: 0 },
              {
                duration: 1.25,
                y: 0,
                autoAlpha: 1,
                ease: 'back',
                overwrite: 'auto',
              }
            );
          },
          onLeave: function () {
            gsap.fromTo(
              element,
              { autoAlpha: 1 },
              { autoAlpha: 0, overwrite: 'auto' }
            );
          },
          onEnterBack: function () {
            gsap.fromTo(
              element,
              { y: -100, autoAlpha: 0 },
              {
                duration: 1.25,
                y: 0,
                autoAlpha: 1,
                ease: 'back',
                overwrite: 'auto',
              }
            );
          },
          onLeaveBack: function () {
            gsap.fromTo(
              element,
              { autoAlpha: 1 },
              { autoAlpha: 0, overwrite: 'auto' }
            );
          },
        },
      });
    });
    LOG.info('RevealUp TS is Started', 'RevealUpAnimations: reveal');
    LOG.info(ScrollTrigger.toString(), 'ScrollTrigger');
  }

  stop() {
    document.querySelectorAll('.revealUp').forEach(function (elem) {
      //elem.classList.replace('revealUp', 'stopRevealUp');
      gsap.fromTo(
        elem,
        { y: 100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: 'back',
          overwrite: 'auto',
        }
      );
      ScrollTrigger.disable();
      ScrollTrigger.refresh();
      gsap.registerPlugin(ScrollTrigger);
    });
    LOG.info('RevealUp TS is Stopped', 'RevealUpAnimations: stop');
  }
  play() {
    /*document.querySelectorAll('.revealUp').forEach(function (elem) {
      elem.classList.replace('revealUp', 'stopRevealUp');
      gsap.fromTo(
        elem,
        { y: 100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: 'back',
          overwrite: 'auto',
        }
      );*/
    ScrollTrigger.refresh();
    ScrollTrigger.refresh();
    gsap.registerPlugin(ScrollTrigger);
    /*console.log(elem);
    });*/
  }
}
