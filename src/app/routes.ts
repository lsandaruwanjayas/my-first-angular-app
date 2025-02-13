//Add a file level imports for the HomeComponent, DetailsComponent and the Routes type
import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';

//Define a variable called routeConfig of type Routes and define two routes for the app:
const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page',
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Home details',
    },
  ];
  export default routeConfig;