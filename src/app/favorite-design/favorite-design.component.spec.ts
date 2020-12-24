import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteDesignComponent } from './favorite-design.component';

describe('FavoriteDesignComponent', () => {
  let component: FavoriteDesignComponent;
  let fixture: ComponentFixture<FavoriteDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
