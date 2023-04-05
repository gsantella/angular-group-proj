import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StevenComponent4Component } from './steven-component4.component';

describe('StevenComponent4Component', () => {
  let component: StevenComponent4Component;
  let fixture: ComponentFixture<StevenComponent4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StevenComponent4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StevenComponent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
