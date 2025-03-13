import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraionpageComponent } from './registraionpage.component';

describe('RegistraionpageComponent', () => {
  let component: RegistraionpageComponent;
  let fixture: ComponentFixture<RegistraionpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistraionpageComponent]
    });
    fixture = TestBed.createComponent(RegistraionpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
