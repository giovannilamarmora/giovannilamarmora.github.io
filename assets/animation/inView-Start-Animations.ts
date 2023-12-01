import { Injectable } from '@angular/core';
import { LoggerService } from 'src/app/shared/services/log.service';
import { environment } from 'src/environments/environment';

const inViewport = (entries: any[], observer: any) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle('is-inViewport', entry.isIntersecting);
  });
};

@Injectable({
  providedIn: 'root',
})
export class InViewStartAnimations {
  environment = environment;
  obs: IntersectionObserver = new IntersectionObserver(inViewport);

  constructor(private logger: LoggerService) {}

  animateOnView() {
    this.logger.LOG(
      'Is Animate on View Status Active: ' + environment.isOnViewAnimationsActive,
      'InViewStartAnimations: AnimateOnView'
    );
    if (environment.isOnViewAnimationsActive) {
      document.querySelectorAll('[data-inviewport]').forEach((EL: any) => {
        this.obs.observe(EL);
      });
      this.logger.LOG(
        'Animate on View is loaded',
        'InViewStartAnimations: AnimateOnView'
      );
    }
  }
}
