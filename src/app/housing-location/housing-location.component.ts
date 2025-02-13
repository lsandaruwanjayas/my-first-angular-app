//Update the file imports to include Input and HousingLocation
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterModule } from '@angular/router';

//Update HousingLocationComponent template to include interpolated values
//add an anchor tag to the section element and include the routerLink directive:
@Component({
  selector: 'app-housing-location',
  imports: [CommonModule, RouterModule],
  template: ` <section class="listing">
    <img
      class="listing-photo"
      [src]="housingLocation.photo"
      alt="Exterior photo of {{ housingLocation.name }}"
      crossorigin
    />
    <h2 class="listing-heading">{{ housingLocation.name }}</h2>
    <p class="listing-location">
      {{ housingLocation.city }}, {{ housingLocation.state }}
    </p>
    <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
  </section>`,
  styleUrl: './housing-location.component.css',
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
