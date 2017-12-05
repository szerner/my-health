import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CirculationChartComponent } from './circulation-chart.component';

describe('CirculationChartComponent', () => {
  let component: CirculationChartComponent;
  let fixture: ComponentFixture<CirculationChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CirculationChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CirculationChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
