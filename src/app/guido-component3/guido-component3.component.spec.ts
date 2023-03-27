import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidoComponent3Component } from './guido-component3.component';

describe('GuidoComponent3Component', () => {
  let component: GuidoComponent3Component;
  let fixture: ComponentFixture<GuidoComponent3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidoComponent3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidoComponent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
