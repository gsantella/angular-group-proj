import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidoComponent5Component } from './guido-component5.component';

describe('GuidoComponent5Component', () => {
  let component: GuidoComponent5Component;
  let fixture: ComponentFixture<GuidoComponent5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidoComponent5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidoComponent5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
