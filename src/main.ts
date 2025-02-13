import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
//Import the routes file and the provideRouter function:
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';
//Update the call to bootstrapApplication to include the routing configuration:
bootstrapApplication(AppComponent, {
  providers: [provideProtractorTestingSupport(), provideRouter(routeConfig)],
}).catch((err) => console.error(err));