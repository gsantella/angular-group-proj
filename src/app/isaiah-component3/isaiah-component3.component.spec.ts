import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsaiahComponent3Component } from './isaiah-component3.component';

describe('IsaiahComponent3Component', () => {
  let component: IsaiahComponent3Component;
  let fixture: ComponentFixture<IsaiahComponent3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsaiahComponent3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsaiahComponent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
