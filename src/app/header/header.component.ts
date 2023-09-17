import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
//new
declare var $: any; // Declare jQuery

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  status = false;
addToggle()
{
  this.status = !this.status;       
}
constructor(private router: Router,
  private viewportScroller: ViewportScroller) {}

redirectToNewPage() {
  // Use the router to navigate to a new page (e.g., 'new-page' route)
  this.router.navigate(['/skills.component.html']);
}

scrollToSection(sectionId: string) {
  // Use Angular's ViewportScroller to scroll smoothly to the section
  this.viewportScroller.scrollToAnchor(sectionId);
}

}  
