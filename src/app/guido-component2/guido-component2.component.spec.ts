import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidoComponent2Component } from './guido-component2.component';

describe('GuidoComponent2Component', () => {
  let component: GuidoComponent2Component;
  let fixture: ComponentFixture<GuidoComponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidoComponent2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidoComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
