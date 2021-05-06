import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddassignorderComponent } from './addassignorder.component';

describe('AddassignorderComponent', () => {
  let component: AddassignorderComponent;
  let fixture: ComponentFixture<AddassignorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddassignorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddassignorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
