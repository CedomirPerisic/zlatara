import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramPostsComponent } from './instagram-posts.component';

describe('InstagramComponent', () => {
  let component: InstagramPostsComponent;
  let fixture: ComponentFixture<InstagramPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstagramPostsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
