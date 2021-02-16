import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorderdetailComponent } from './editorderdetail.component';

describe('EditorderdetailComponent', () => {
  let component: EditorderdetailComponent;
  let fixture: ComponentFixture<EditorderdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorderdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorderdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
