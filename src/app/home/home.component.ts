import { Component } from '@angular/core';
//import HousingLocationComponent by adding this line to the file level imports
import { HousingLocationComponent } from '../housing-location/housing-location.component';

//In home.component.ts, in @Component, update the template property
//update the imports property of the @Component metadata by adding HousingLocationComponent
//Update the template property of the @Component metadata to include a reference to the <app-housing-location> tag
@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent],
  template: ` <section>
    <form>
      <input type="text" placeholder="Filter by city" />
      <button class="primary" type="button">Search</button>
    </form>
  </section>
  <section class="results">
      <app-housing-location></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
  styles: ``,
})
export class HomeComponent {}
