import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidoComponent4Component } from './guido-component4.component';

describe('GuidoComponent4Component', () => {
  let component: GuidoComponent4Component;
  let fixture: ComponentFixture<GuidoComponent4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidoComponent4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidoComponent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
