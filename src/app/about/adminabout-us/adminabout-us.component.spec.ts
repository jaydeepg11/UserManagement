import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaboutUsComponent } from './adminabout-us.component';

describe('AdminaboutUsComponent', () => {
  let component: AdminaboutUsComponent;
  let fixture: ComponentFixture<AdminaboutUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminaboutUsComponent]
    });
    fixture = TestBed.createComponent(AdminaboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
