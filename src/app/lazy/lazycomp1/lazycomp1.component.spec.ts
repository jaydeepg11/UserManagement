import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lazycomp1Component } from './lazycomp1.component';

describe('Lazycomp1Component', () => {
  let component: Lazycomp1Component;
  let fixture: ComponentFixture<Lazycomp1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Lazycomp1Component]
    });
    fixture = TestBed.createComponent(Lazycomp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
