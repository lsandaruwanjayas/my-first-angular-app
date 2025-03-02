//Add navigation to the HomeComponent
import { Component } from '@angular/core';
//Import HomeComponent
import { HomeComponent } from './home/home.component';
//Add a file level import for RoutingModule:
import { RouterLink, RouterOutlet } from '@angular/router';

//update the imports array property and add HomeComponent
//In app.component.ts, in @Component, update the template property to include the following HTML code.
//Add RouterModule to the @Component metadata imports
//Add router-outlet in src/app/app.component.ts
@Component({
  selector: 'app-root',
  imports: [HomeComponent, RouterLink, RouterOutlet],
  template: ` <main>
    <a [routerLink]="['/']">
    <header class="brand-name">
      <img class="brand-logo" src="logo.svg" alt="logo" aria-hidden="true" />
    </header>
</a>
    <section class="content">
    <router-outlet></router-outlet>
    </section>
  </main>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}