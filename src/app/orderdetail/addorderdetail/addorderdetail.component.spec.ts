import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddorderdetailComponent } from './addorderdetail.component';

describe('AddorderdetailComponent', () => {
  let component: AddorderdetailComponent;
  let fixture: ComponentFixture<AddorderdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddorderdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddorderdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
