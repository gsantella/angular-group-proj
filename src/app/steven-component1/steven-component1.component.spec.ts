import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StevenComponent1Component } from './steven-component1.component';

describe('StevenComponent1Component', () => {
  let component: StevenComponent1Component;
  let fixture: ComponentFixture<StevenComponent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StevenComponent1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StevenComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
