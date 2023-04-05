import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiaComponent5Component } from './nia-component5.component';

describe('NiaComponent5Component', () => {
  let component: NiaComponent5Component;
  let fixture: ComponentFixture<NiaComponent5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NiaComponent5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NiaComponent5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
