import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubnetcalcComponent } from './subnetcalc.component';

describe('SubnetcalcComponent', () => {
  let component: SubnetcalcComponent;
  let fixture: ComponentFixture<SubnetcalcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubnetcalcComponent]
    });
    fixture = TestBed.createComponent(SubnetcalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
