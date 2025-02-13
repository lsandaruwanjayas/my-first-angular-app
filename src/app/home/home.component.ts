////add the inject to the items imported from @angular/core
import { Component, inject, Inject } from '@angular/core';
//import HousingLocationComponent by adding this line to the file level imports
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
//Import HomeComponent in src/app/home/home.component.ts
import { HousingLocation } from '../housinglocation'; 
//Add a new file level import for the HousingService
import { HousingService } from '../housing.service';



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
      <app-housing-location  *ngFor="let housingLocation of housingLocationList" [housingLocation]="housingLocation"></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
  styles: ``,
})
//replace the empty export class HomeComponent {} definition 
export class HomeComponent {
  readonly baseUrl = 'homes-photos';
  //Update the HomeComponent class to have a property called housingLocationList
  //delete the housingLocationList array entries and assign housingLocationList the value of empty array ([])
  housingLocationList: HousingLocation[] = [];
  
  //In HomeComponent, add the following code to inject the new service and initialize the data for the ap
  housingService: HousingService= inject(HousingService)
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
