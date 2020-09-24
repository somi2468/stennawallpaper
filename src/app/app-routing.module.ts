import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BannerimageComponent } from './bannerimage/bannerimage.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {path:'',component:HomeComponent},
 {path:'Bannerimage/:BlogID',component:BannerimageComponent},
          
        

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
