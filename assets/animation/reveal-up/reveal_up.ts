import { Injectable } from '@angular/core';
import { gsap } from 'gsap';
import { LoggerService } from 'src/app/shared/services/config/log.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RevealUpAnimations {
  environment = environment;
  public scrollBox: any;
  constructor(private logger: LoggerService) {}
  initAnimation() {
    if (environment.isRevealUpActive) {
      this.logger.LOG(
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
    this.logger.LOG('RevealUp TS is Started', 'RevealUpAnimations: reveal');
    this.logger.LOG(ScrollTrigger.toString(), 'ScrollTrigger');
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
    this.logger.LOG('RevealUp TS is Stopped', 'RevealUpAnimations: stop');
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
