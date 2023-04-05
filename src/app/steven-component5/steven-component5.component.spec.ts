import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StevenComponent5Component } from './steven-component5.component';

describe('StevenComponent5Component', () => {
  let component: StevenComponent5Component;
  let fixture: ComponentFixture<StevenComponent5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StevenComponent5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StevenComponent5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
