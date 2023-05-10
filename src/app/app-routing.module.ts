import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@views/home/home.component';
import { SubnetcalcComponent } from '@views/subnetcalc/subnetcalc.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent},
  { path: 'subnetcalc', pathMatch: 'full', component: SubnetcalcComponent},
  { path: "**", redirectTo: ''}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
