import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrcakdisplayComponent } from './trcakdisplay.component';

describe('TrcakdisplayComponent', () => {
  let component: TrcakdisplayComponent;
  let fixture: ComponentFixture<TrcakdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrcakdisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrcakdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
