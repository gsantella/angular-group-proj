import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsaiahComponent5Component } from './isaiah-component5.component';

describe('IsaiahComponent5Component', () => {
  let component: IsaiahComponent5Component;
  let fixture: ComponentFixture<IsaiahComponent5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsaiahComponent5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsaiahComponent5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
