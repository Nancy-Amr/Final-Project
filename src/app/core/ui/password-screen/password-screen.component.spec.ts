import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordScreenComponent } from './password-screen.component';

describe('PasswordScreenComponent', () => {
  let component: PasswordScreenComponent;
  let fixture: ComponentFixture<PasswordScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordScreenComponent]
    });
    fixture = TestBed.createComponent(PasswordScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
