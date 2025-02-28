import { Routes } from '@angular/router';
import { AddServiceComponent } from './components/add-service/add-service.component';
import { ServiceListComponent } from './components/service-list/service-list.component';

export const routes: Routes = [
  { path: 'add-service', component: AddServiceComponent },
  { path: 'services', component: ServiceListComponent },
  { path: '', redirectTo: '/add-service', pathMatch: 'full' }
];