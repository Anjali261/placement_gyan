import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPostComponent } from './all-post/all-post.component';
import { ReviewComponent } from './article/review/review.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '',component:HomeComponent},
  { path: 'profile',component:ProfileComponent},
  { path: 'posts',component:AllPostComponent},
  {path:'review-posts',component:ReviewComponent},
  { path: 'auth', loadChildren: () => import('src/app/auth/auth.module').then(m => m.AuthModule) },
  { path: 'article', loadChildren: () => import('src/app/article/article.module').then(m => m.ArticleModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
