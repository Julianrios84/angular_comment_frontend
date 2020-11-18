import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentAddUpdateComponent } from './components/comment-add-update/comment-add-update.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommentDetailComponent } from './components/comment-detail/comment-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CommentAddUpdateComponent,
    CommentListComponent,
    NavbarComponent,
    CommentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
