import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListingComponent } from './components/post-listing/post-listing.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import {HttpClientModule} from '@angular/common/http';
import { BogHeaderComponent } from './components/blog-header/bog-header.component';
import {BlogLogoComponent} from './components/blog-logo/blog-logo.component';

@NgModule({
  declarations: [PostListingComponent, PostItemComponent, BogHeaderComponent, BlogLogoComponent],
  exports: [
    PostListingComponent,
  ],
    imports: [
        CommonModule,
        HttpClientModule,
    ]
})
export class BlogModule { }
