import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { DealsComponent } from './deals/deals.component';


const routes: Routes = [
 
// {path:'', redirectTo:'home', pathMatch:'full'},
// {path:'dashbaord',component:SignupComponent},
// {path:'home',component:DashBoardComponent},

// { path:'subtabs', children:[
//   {
//     path:'delas', component:CartComponent

//   },
//   {
//     path:'cart', component:SignupComponent
     
//   }
// ]

// }




  {path:'cart',component:CartComponent},
  {path:'sign',component:SignupComponent},
  {path:'favourite',component:FavouriteComponent},
  {path:'deals',component:DealsComponent},

 {
   path:'', redirectTo:'/home',pathMatch:'full'
 },
 {
  path:'**',component:DashBoardComponent
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
