import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteRotatorComponent } from './quote-rotator.component';

describe('QuoteRotatorComponent', () => {
  let component: QuoteRotatorComponent;
  let fixture: ComponentFixture<QuoteRotatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuoteRotatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuoteRotatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
