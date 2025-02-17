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
//Update the HomeComponent template to include a template variable in the input element called #filter
//update the component template to attach an event handler to the "Search" button.
//Update the ngFor value to iterate over values from the filteredLocationList array
@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent, CommonModule],
  template: ` <section>
    <form>
      <input type="text" placeholder="Filter by city" #filter/>
      <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
    </form>
  </section>
  <section class="results">
      <app-housing-location  *ngFor="let housingLocation of filteredLocationList" [housingLocation]="housingLocation"></app-housing-location>
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
  //In src/app/home/home.component.ts, add new property to the class called filteredLocationList
  filteredLocationList: HousingLocation[] = [];
  
  //In HomeComponent, add the following code to inject the new service and initialize the data for the ap
  housingService: HousingService= inject(HousingService)
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    //The filteredLocationList should contain the total set of housing locations values by default when the page loads.
    this.filteredLocationList = this.housingLocationList;
  }
  // Update the constructor for the HomeComponent to set the value.
  filterResults(text: string) {
    //Update the HomeComponent class to include the implementation of the filterResults function
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }
}
