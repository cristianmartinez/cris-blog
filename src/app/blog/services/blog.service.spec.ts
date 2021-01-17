import {inject, TestBed} from '@angular/core/testing';

import {BlogService, Post} from './blog.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('BlogService', () => {
  let service: BlogService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpController = TestBed.inject(HttpTestingController);
  });

  beforeEach(inject(
    [BlogService],
    (it: BlogService) => {
      service = it;
    }
  ));

  it('should return post data', () => {
    let result: Post[];
    service.getLatestPosts().subscribe((data) => result = data);
    const req = httpController.expectOne({
      method: 'GET',
      url: `${BlogService.API_URL}/posts`
    });

    const post1: Post = {
      id: 1,
      userId: 2,
      title: 'Title 1',
      body: 'Body 1'
    };

    const post2: Post = {
      id: 2,
      userId: 2,
      title: 'Title 2',
      body: 'Body 2'
    };

    req.flush([post1, post2]);

    expect(result.length).toEqual(2);
    expect(result[0]).toEqual(post1);
    expect(result[1]).toEqual(post2);
  });
});
