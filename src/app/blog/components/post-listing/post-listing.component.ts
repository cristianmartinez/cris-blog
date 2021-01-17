import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BlogService, Post} from '../../services/blog.service';

@Component({
  selector: 'app-post-listing',
  templateUrl: './post-listing.component.html',
  styleUrls: ['./post-listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListingComponent {
  public readonly  posts$ = this.blogService.getLatestPosts();
  constructor(private readonly blogService: BlogService) { }

  public trackByPost(index, item: Post): number {
    return item.id;
  }
}
