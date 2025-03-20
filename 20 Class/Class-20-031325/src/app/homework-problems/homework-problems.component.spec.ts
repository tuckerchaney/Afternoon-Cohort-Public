import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkProblemsComponent } from './homework-problems.component';

describe('HomeworkProblemsComponent', () => {
  let component: HomeworkProblemsComponent;
  let fixture: ComponentFixture<HomeworkProblemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeworkProblemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeworkProblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
