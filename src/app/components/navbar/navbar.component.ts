import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faHome, faUser, faClipboard, faClipboardList, faBriefcase, faEnvelope, faBars, faUserGraduate} from '@fortawesome/free-solid-svg-icons';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-navbar',
  imports: [ RouterLink, FontAwesomeModule, NgClass
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit {
  faHome = faHome;
  faUser = faUser;
  faUserg = faUserGraduate;
  faBars = faBars;
  faClipboard = faClipboard;
  faBriefcase = faBriefcase;
  faEnvelope = faEnvelope;
  faClipboardLis = faClipboardList;
  activeSection: string = 'home';
  isMenuOpen = false;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const sections = document.querySelectorAll('section');

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.activeSection = entry.target.id;
            }
          });
        },
        {
          rootMargin: '-50% 0px -50% 0px',
          threshold: 0,
        }
      );

      sections.forEach((section) => observer.observe(section));
    }
  }
}