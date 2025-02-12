import { Component } from '@angular/core';
//Import HomeComponent
import { HomeComponent } from './home/home.component';

//update the imports array property and add HomeComponent
//In app.component.ts, in @Component, update the template property to include the following HTML code.
@Component({
  selector: 'app-root',
  imports: [HomeComponent],
  template: ` <main>
    <header class="brand-name">
      <img class="brand-logo" src="logo.svg" alt="logo" aria-hidden="true" />
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  </main>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
