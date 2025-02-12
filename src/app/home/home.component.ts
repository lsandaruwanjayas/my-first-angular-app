import { Component } from '@angular/core';
//import HousingLocationComponent by adding this line to the file level imports
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
//Import HomeComponent in src/app/home/home.component.ts
import { HousingLocation } from '../housinglocation'; 


//In home.component.ts, in @Component, update the template property
//update the imports property of the @Component metadata by adding HousingLocationComponent
//Update the template property of the @Component metadata to include a reference to the <app-housing-location> tag
//Update the HomeComponent template
@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent, CommonModule],
  template: ` <section>
    <form>
      <input type="text" placeholder="Filter by city" />
      <button class="primary" type="button">Search</button>
    </form>
  </section>
  <section class="results">
      <app-housing-location [housingLocation]="housingLocation"></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
  styles: ``,
})
//replace the empty export class HomeComponent {} definition 
export class HomeComponent {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  housingLocation: HousingLocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}
