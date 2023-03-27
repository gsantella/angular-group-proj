import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StevenComponent3Component } from './steven-component3.component';

describe('StevenComponent3Component', () => {
  let component: StevenComponent3Component;
  let fixture: ComponentFixture<StevenComponent3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StevenComponent3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StevenComponent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
