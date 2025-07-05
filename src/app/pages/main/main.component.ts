import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import Typewriter from 'typewriter-effect/dist/core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-main',
  imports: [FontAwesomeModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements AfterViewInit {
  @ViewChild('typewriter', { static: false }) typewriterElement!: ElementRef;
  @ViewChild('typewriter2', { static: false }) typewriter2!: ElementRef;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  faWhatsapp = faWhatsapp;
    faEnvelope = faEnvelope;
  faLinkedin = faLinkedin;
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const typewriter = new Typewriter(this.typewriterElement.nativeElement, {
        loop: false,
        delay: 75,
      });

        typewriter
        .typeString(`
          <span class="text-5xl font-bold text-primary">Hola, soy </span>
          <span class="text-6xl font-bold text-white italic">José Antonio</span>
          <br>
          <span class="text-xl text-gray-300">Full Stack Developer</span>
        `)
        .start();
    }
  }
}
