import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsaiahComponent1Component } from './isaiah-component1.component';

describe('IsaiahComponent1Component', () => {
  let component: IsaiahComponent1Component;
  let fixture: ComponentFixture<IsaiahComponent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsaiahComponent1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsaiahComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
