// update the template to import the functions, classes and services that you'll need to use in the DetailsComponent:
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import {HousingLocation} from '../housinglocation';
//import the Angular form classes
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
//Update the template property of the @Component decorator to display the value housingLocationId:
//update the template of the DetailsComponent to display the specific data represented by the housing location for the route parameter.
//In the DetailsComponent decorator metadata, update the imports property
//update the template HTML
@Component({
  selector: 'app-details',
  imports: [CommonModule, ReactiveFormsModule],
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
  <section class="listing-apply">
        <h2 class="section-heading">Apply now to live here</h2>
        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <label for="first-name">First Name</label>
          <input id="first-name" type="text" formControlName="firstName" />
          <label for="last-name">Last Name</label>
          <input id="last-name" type="text" formControlName="lastName" />
          <label for="email">Email</label>
          <input id="email" type="email" formControlName="email" />
          <button type="submit" class="primary">Apply now</button>
        </form>
      </section>
</article>`,
  styleUrl: './details.component.css'
})
//Update the body of the DetailsComponent class with the following code:
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  //before the constructor() method, add the following code to create the form object
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });
  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
      this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }
//after the constructor() method, add the following code to handle the Apply now click
  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
  }
}
