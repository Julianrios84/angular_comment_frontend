import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentAddUpdateComponent } from './components/comment-add-update/comment-add-update.component';
import { CommentDetailComponent } from './components/comment-detail/comment-detail.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';

const routes: Routes = [
  {
    path: 'add',
    component: CommentAddUpdateComponent
  },
  {
    path: 'update/:id',
    component: CommentAddUpdateComponent
  },
  {
    path: 'detail/:id',
    component: CommentDetailComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: CommentListComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
