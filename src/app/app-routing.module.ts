import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostItemComponent } from './post-item/post-item.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: 'post-list', component: PostListComponent},
  {path: 'post-item', component: PostItemComponent},
   {path: 'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
