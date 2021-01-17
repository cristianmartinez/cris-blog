import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {BlogService, Post} from '../../services/blog.service';
import {Observable, Subject} from 'rxjs';
import {BlogStateService} from '../../services/blog-state.service';
import {delay, distinctUntilChanged, map, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-post-listing',
  templateUrl: './post-listing.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListingComponent implements OnInit, OnDestroy {
  posts$: Observable<Post[]>;
  isLoading$: Observable<boolean>;
  onDestroy$ = new Subject();

  constructor(readonly blogStateService: BlogStateService) { }

  ngOnInit(): void {
    this.posts$ = this.blogStateService.state$.pipe(
      map(({ posts}) => posts),
      distinctUntilChanged(),
      takeUntil(this.onDestroy$)
    );

    this.isLoading$ = this.blogStateService.state$.pipe(
      map(({ status}) => status === 'loading'),
      distinctUntilChanged(),
      takeUntil(this.onDestroy$)
    );

    this.blogStateService.fetchPosts().subscribe();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  public trackByPost(index, item: Post): number {
    return item.id;
  }
}
