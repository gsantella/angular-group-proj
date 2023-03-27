import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiaComponent3Component } from './nia-component3.component';

describe('NiaComponent3Component', () => {
  let component: NiaComponent3Component;
  let fixture: ComponentFixture<NiaComponent3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NiaComponent3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NiaComponent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
