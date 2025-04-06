import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ModelDetailsComponent } from './pages/model-details/model-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'model/:id', component: ModelDetailsComponent },
];