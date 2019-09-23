import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreyUserComponent } from './grey-user.component';

describe('GreyUserComponent', () => {
  let component: GreyUserComponent;
  let fixture: ComponentFixture<GreyUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreyUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreyUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
