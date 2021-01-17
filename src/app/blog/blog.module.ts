import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListingComponent } from './components/post-listing/post-listing.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [PostListingComponent, PostItemComponent],
  exports: [
    PostListingComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class BlogModule { }
