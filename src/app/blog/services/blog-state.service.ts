import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {BlogService, Post} from './blog.service';
import {delay, tap} from 'rxjs/operators';

export interface BlogState {
  posts: Post[];
  status: 'idle' | 'loading' | 'complete' | 'error';
}

const initialState: BlogState = {
  posts: [],
  status: 'idle'
};

@Injectable({
  providedIn: 'root'
})
export class BlogStateService {
  state$ = new BehaviorSubject(initialState);

  get state(): BlogState {
    return this.state$.getValue();
  }

  constructor(readonly blogService: BlogService) { }

  fetchPosts(): Observable<Post[]> {
    this.state$.next({ ...this.state, ...{status: 'loading'}});

    return this.blogService.getLatestPosts().pipe(
      // Fake delay
      delay(1000),
      tap((posts) => {
        this.state$.next({ ...this.state, ...{status: 'complete', posts }});
      })
    );
  }
}
