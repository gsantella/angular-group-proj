import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiaComponent4Component } from './nia-component4.component';

describe('NiaComponent4Component', () => {
  let component: NiaComponent4Component;
  let fixture: ComponentFixture<NiaComponent4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NiaComponent4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NiaComponent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
