import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularXprintComponent } from './angular-xprint.component';

describe('AngularXprintComponent', () => {
  let component: AngularXprintComponent;
  let fixture: ComponentFixture<AngularXprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularXprintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularXprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
