import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthDataComponent } from './components/health-data/health-data.component';
import { HealthDataViewComponent } from './components/health-data-view/health-data-view.component';

const routes: Routes = [
  {
    path: '', component: HealthDataComponent,
    children: [
      { path: '', redirectTo: 'circulation;view=table', pathMatch: 'full'},
      { path: 'circulation', component: HealthDataViewComponent },
      { path: 'weight', component: HealthDataViewComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HealthRoutingModule { }
