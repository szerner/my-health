import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CirculationFormComponent } from './circulation-form.component';

describe('CirculationFormComponent', () => {
  let component: CirculationFormComponent;
  let fixture: ComponentFixture<CirculationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CirculationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CirculationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
