import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {BlogService, Post} from '../../services/blog.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-post-listing',
  templateUrl: './post-listing.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListingComponent implements OnInit {
  posts$: Observable<Post[]>;
  constructor(readonly blogService: BlogService) { }

  public trackByPost(index, item: Post): number {
    return item.id;
  }

  ngOnInit(): void {
    this.posts$ = this.blogService.getLatestPosts();
  }
}
