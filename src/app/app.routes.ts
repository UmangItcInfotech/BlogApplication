import { Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { authGuardGuard } from './auth/auth-guard.guard';

export const routes: Routes = [
    { path: 'posts', component: PostListComponent },
    { path: 'post/:id', component: PostDetailComponent },
    { path: 'add-post', component: AddPostComponent, canActivate: [authGuardGuard] },
    { path: '', redirectTo: '/posts', pathMatch: 'full' },
  ];
  
