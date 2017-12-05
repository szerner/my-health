import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthDataViewComponent } from './health-data-view.component';

describe('HealthDataViewComponent', () => {
  let component: HealthDataViewComponent;
  let fixture: ComponentFixture<HealthDataViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthDataViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
