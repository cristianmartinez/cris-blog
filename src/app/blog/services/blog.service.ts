import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  static API_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private readonly http: HttpClient) { }

  public getLatestPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(BlogService.API_URL);
  }
}
