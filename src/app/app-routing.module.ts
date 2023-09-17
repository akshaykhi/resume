// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { IndustryExperienceComponent } from './Experience/industry-experience.component';
import { SkillsComponent } from './skills/skills/skills.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ApiComponent } from './home/RestAPI/api.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent,
  children:[
      {
        path:'api',component:ApiComponent}
             ]
  },
  { path: '', component: HomeComponent,
  children:[
      {
        path:'api',component:ApiComponent}
             ]
  },
  { path: 'Skills', component: SkillsComponent },
  { path: 'Experience', component: IndustryExperienceComponent },
  { path: 'Extracurricular', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'TESTIMONIAL', component: TestimonialsComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}