import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidoComponent1Component } from './guido-component1.component';

describe('GuidoComponent1Component', () => {
  let component: GuidoComponent1Component;
  let fixture: ComponentFixture<GuidoComponent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidoComponent1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidoComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
