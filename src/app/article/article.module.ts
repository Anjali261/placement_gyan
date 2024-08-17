import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { SocialLoginModule } from 'ng-social-login-module';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { ArticleComponent } from './article.component';
import { ArticleRoutingModule } from './article-routing.module';
import { QuillModule } from 'ngx-quill'
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReviewComponent } from './review/review.component';
import { ModalModule } from '../_modal';


@NgModule({
  declarations: [
   ArticleComponent,
   ReviewComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    ArticleRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    TagInputModule,
    QuillModule.forRoot(),
        // SocialLoginModule,
    ToastrModule.forRoot(),
    ModalModule

  ]
})
export class ArticleModule { }
