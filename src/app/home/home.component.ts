import { Component } from '@angular/core';

//In home.component.ts, in @Component, update the template property
@Component({
  selector: 'app-home',
  imports: [],
  template: ` <section>
    <form>
      <input type="text" placeholder="Filter by city" />
      <button class="primary" type="button">Search</button>
    </form>
  </section>`,
  styleUrls: ['./home.component.css'],
  styles: ``,
})
export class HomeComponent {}
