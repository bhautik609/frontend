import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmoruserComponent } from './viewmoruser.component';

describe('ViewmoruserComponent', () => {
  let component: ViewmoruserComponent;
  let fixture: ComponentFixture<ViewmoruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewmoruserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmoruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
