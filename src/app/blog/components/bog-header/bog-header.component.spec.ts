import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BogHeaderComponent } from './bog-header.component';

describe('BogHeaderComponent', () => {
  let component: BogHeaderComponent;
  let fixture: ComponentFixture<BogHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BogHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BogHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
