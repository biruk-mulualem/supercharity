
import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-homepageherobannercard',
  imports: [RouterLink],
  templateUrl: './homepageherobannercard.html',
  styleUrl: './homepageherobannercard.css'
})
export class Homepageherobannercard implements AfterViewInit{
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

ngAfterViewInit() {
  if (isPlatformBrowser(this.platformId)) {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.hero-slide') as NodeListOf<HTMLElement>;

    slides.forEach((slide) => {
      slide.style.transition = 'opacity 1s ease-in-out';
      slide.style.opacity = '0';
      slide.style.zIndex = '0';
    });

    slides[currentSlide].style.opacity = '1';
    slides[currentSlide].style.zIndex = '1';

    setInterval(() => {
      const previousSlide = currentSlide;
      currentSlide = (currentSlide + 1) % slides.length;

      // fade out previous slide
      slides[previousSlide].style.opacity = '0';
      slides[previousSlide].style.zIndex = '1';

      // fade in current slide
      slides[currentSlide].style.opacity = '1';
      slides[currentSlide].style.zIndex = '2';

      // after fade out completes, send previous slide back
      setTimeout(() => {
        slides[previousSlide].style.zIndex = '0';
      }, 1000);
    }, 5000); // 5 seconds per slide
  }
}



}
