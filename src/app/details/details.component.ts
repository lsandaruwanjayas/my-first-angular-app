// update the template to import the functions, classes and services that you'll need to use in the DetailsComponent:
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import {HousingLocation} from '../housinglocation';

//Update the template property of the @Component decorator to display the value housingLocationId:
//update the template of the DetailsComponent to display the specific data represented by the housing location for the route parameter.
@Component({
  selector: 'app-details',
  imports: [],
  template: `  <article>
  <img
    class="listing-photo"
    [src]="housingLocation?.photo"
    alt="Exterior photo of {{ housingLocation?.name }}"
    crossorigin
  />
  <section class="listing-description">
    <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
    <p class="listing-location">{{ housingLocation?.city }}, {{ housingLocation?.state }}</p>
  </section>
  <section class="listing-features">
    <h2 class="section-heading">About this housing location</h2>
    <ul>
      <li>Units available: {{ housingLocation?.availableUnits }}</li>
      <li>Does this location have wifi: {{ housingLocation?.wifi }}</li>
      <li>Does this location have laundry: {{ housingLocation?.laundry }}</li>
    </ul>
  </section>
</article>`,
  styleUrl: './details.component.css'
})
//Update the body of the DetailsComponent class with the following code:
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
      this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }
}
