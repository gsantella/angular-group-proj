import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsaiahComponent2Component } from './isaiah-component2.component';

describe('IsaiahComponent2Component', () => {
  let component: IsaiahComponent2Component;
  let fixture: ComponentFixture<IsaiahComponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsaiahComponent2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsaiahComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
