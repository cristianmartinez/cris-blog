import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostItemComponent } from './post-item.component';
import {ChangeDetectionStrategy} from '@angular/core';

describe('PostItemComponent', () => {
  let component: PostItemComponent;
  let fixture: ComponentFixture<PostItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostItemComponent ]
    })
      .overrideComponent(PostItemComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default }
      })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostItemComponent);
    component = fixture.componentInstance;
    component.postData = {
      id: 1,
      userId: 2,
      title: 'Title 1',
      body: 'Content 1'
    };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle to between user id and post id', () => {
    // Initial state
    component.isPostActive = false;
    component.onPostClick();
    fixture.detectChanges();
    expect(component.isPostActive).toEqual(true);
    expect(fixture.nativeElement.textContent).toContain('UID: 2');

    component.onPostClick();
    fixture.detectChanges();
    expect(component.isPostActive).toEqual(false);
    expect(fixture.nativeElement.textContent).toContain('ID: 1');
  });
});
