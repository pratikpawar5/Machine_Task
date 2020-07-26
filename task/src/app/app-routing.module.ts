import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';


const routes: Routes = [
  {
    path:'',component:NavigationBarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
