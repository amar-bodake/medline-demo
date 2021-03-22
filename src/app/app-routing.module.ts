import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountRegistrationComponent } from './account-registration/account-registration.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

const routes: Routes = [
  { path: 'home', component: AccountRegistrationComponent },
  { path: 'thanks', component: ThankYouComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: AccountRegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }