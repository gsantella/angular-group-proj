import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiaComponent1Component } from './nia-component1.component';

describe('NiaComponent1Component', () => {
  let component: NiaComponent1Component;
  let fixture: ComponentFixture<NiaComponent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NiaComponent1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NiaComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
