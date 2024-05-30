import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';
import { HomeComponent } from './home/home.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { HeaderComponent } from './component/header/header.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot', component: ForgotComponent },
  { path:'home', component: HomeComponent},
  { path:'shopping', component: ShoppingComponent},
  { path:'socialmedia', component: SocialmediaComponent},
  { path: 'header', component: HeaderComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
