import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CirculationTableComponent } from './circulation-table.component';

describe('CirculationTableComponent', () => {
  let component: CirculationTableComponent;
  let fixture: ComponentFixture<CirculationTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CirculationTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CirculationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
