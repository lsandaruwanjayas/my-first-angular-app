import { Injectable } from '@angular/core';
//Add a file level import for the HousingLocation
import {HousingLocation} from './housinglocation';

@Injectable({
  providedIn: 'root'
})
//copy and add the housingLocationList variable and its array value 
export class HousingService {
 //Add a string property called url and set its value to 'http://localhost:3000/locations'
 readonly baseUrl = 'homes-photos';
 url = 'http://localhost:3000/locations';
   housingLocationList: HousingLocation[] = [
     {
       id: 0,
       name: 'Acme Fresh Start Housing',
       city: 'Chicago',
       state: 'IL',
       photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
       availableUnits: 4,
       wifi: true,
       laundry: true,
     },
     {
       id: 1,
       name: 'A113 Transitional Housing',
       city: 'Santa Monica',
       state: 'CA',
       photo: `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
       availableUnits: 0,
       wifi: false,
       laundry: true,
     },
     {
       id: 2,
       name: 'Warm Beds Housing Support',
       city: 'Juneau',
       state: 'AK',
       photo: `${this.baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,
       availableUnits: 1,
       wifi: false,
       laundry: false,
     },
     {
       id: 3,
       name: 'Homesteady Housing',
       city: 'Chicago',
       state: 'IL',
       photo: `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,
       availableUnits: 1,
       wifi: true,
       laundry: false,
     },
     {
       id: 4,
       name: 'Happy Homes Group',
       city: 'Gary',
       state: 'IN',
       photo: `${this.baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
       availableUnits: 1,
       wifi: true,
       laundry: false,
     },
     {
       id: 5,
       name: 'Hopeful Apartment Group',
       city: 'Oakland',
       state: 'CA',
       photo: `${this.baseUrl}/r-architecture-JvQ0Q5IkeMM-unsplash.jpg`,
       availableUnits: 2,
       wifi: true,
       laundry: true,
     },
     {
       id: 6,
       name: 'Seriously Safe Towns',
       city: 'Oakland',
       state: 'CA',
       photo: `${this.baseUrl}/phil-hearing-IYfp2Ixe9nM-unsplash.jpg`,
       availableUnits: 5,
       wifi: true,
       laundry: true,
     },
     {
       id: 7,
       name: 'Hopeful Housing Solutions',
       city: 'Oakland',
       state: 'CA',
       photo: `${this.baseUrl}/r-architecture-GGupkreKwxA-unsplash.jpg`,
       availableUnits: 2,
       wifi: true,
       laundry: true,
     },
     {
       id: 8,
       name: 'Seriously Safe Towns',
       city: 'Oakland',
       state: 'CA',
       photo: `${this.baseUrl}/saru-robert-9rP3mxf8qWI-unsplash.jpg`,
       availableUnits: 10,
       wifi: false,
       laundry: false,
     },
     {
       id: 9,
       name: 'Capital Safe Towns',
       city: 'Portland',
       state: 'OR',
       photo: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
       availableUnits: 6,
       wifi: true,
       laundry: true,
     },
   ];
//These functions allow dependencies to access the service's data
//Update the getAllHousingLocations function to make a call to the web server you configured.
   async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
  //Update the getHousingLocationsById function to make a call to the web server you configured
  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`)
    return (await data.json()) ?? {};
  }
//adds a method to your app's service that receives the form data to send to the data's destination
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}
