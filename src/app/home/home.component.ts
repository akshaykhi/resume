import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router,
    private viewportScroller: ViewportScroller) {}

    scrollToSection(sectionId: string) {
      // Use Angular's ViewportScroller to scroll smoothly to the section
      this.viewportScroller.scrollToAnchor(sectionId);
    }


    navigateToApiPage() {
      // Navigate to the '/api' route when the button is clicked
      this.router.navigate(['/api']);
    }

}
