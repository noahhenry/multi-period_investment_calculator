import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormComponent } from './form/form.component'
import { DataResultsComponent } from './data-results/data-results.component'


const routes: Routes = [
  { path: 'form-component', component: FormComponent },
  { path: 'data-results-component', component: DataResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
