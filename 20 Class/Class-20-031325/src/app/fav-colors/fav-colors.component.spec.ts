import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavColorsComponent } from './fav-colors.component';

describe('FavColorsComponent', () => {
  let component: FavColorsComponent;
  let fixture: ComponentFixture<FavColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavColorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
