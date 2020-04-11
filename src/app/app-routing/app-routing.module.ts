import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from '../registration/registration.component';




const routes: Routes = [
   {path:'home',redirectTo:'home', pathMatch:'full'},
    {path:'registration',component:RegistrationComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }