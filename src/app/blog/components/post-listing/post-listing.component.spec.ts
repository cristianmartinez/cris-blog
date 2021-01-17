import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListingComponent } from './post-listing.component';
import {BlogService} from '../../services/blog.service';
import {of} from 'rxjs';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {BlogHeaderComponent} from '../blog-header/blog-header.component';
import {PostItemComponent} from '../post-item/post-item.component';
import {BlogLogoComponent} from '../blog-logo/blog-logo.component';

describe('PostListingComponent', () => {
  let component: PostListingComponent;
  let fixture: ComponentFixture<PostListingComponent>;
  let dataStub: BlogService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [PostListingComponent, BlogHeaderComponent, PostItemComponent, BlogLogoComponent],
      providers: [BlogService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListingComponent);
    component = fixture.componentInstance;
    dataStub = fixture.debugElement.injector.get(BlogService);
    spyOn(dataStub, 'getLatestPosts').and.returnValue(
      of([{ id: 1, title: 'Title 1', body: 'Body 1', userId: 2 }, { id: 2, title: 'Title 2', body: 'Body 2', userId: 3 }])
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the posts', () => {
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.textContent).toContain('Title 1');
    expect(fixture.debugElement.nativeElement.textContent).toContain('Title 2');
  });
});
