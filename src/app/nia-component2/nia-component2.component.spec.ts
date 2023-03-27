import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiaComponent2Component } from './nia-component2.component';

describe('NiaComponent2Component', () => {
  let component: NiaComponent2Component;
  let fixture: ComponentFixture<NiaComponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NiaComponent2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NiaComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
