import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsaiahComponent4Component } from './isaiah-component4.component';

describe('IsaiahComponent4Component', () => {
  let component: IsaiahComponent4Component;
  let fixture: ComponentFixture<IsaiahComponent4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsaiahComponent4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsaiahComponent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
