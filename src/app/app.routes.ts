import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { CategoryComponent } from './pages/category/category.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':category', component: CategoryComponent },
  { path: '**', component:  NotFoundPageComponent},
];

