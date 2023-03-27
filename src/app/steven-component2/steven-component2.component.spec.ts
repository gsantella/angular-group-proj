import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StevenComponent2Component } from './steven-component2.component';

describe('StevenComponent2Component', () => {
  let component: StevenComponent2Component;
  let fixture: ComponentFixture<StevenComponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StevenComponent2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StevenComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
