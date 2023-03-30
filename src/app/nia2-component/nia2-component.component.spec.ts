import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nia2ComponentComponent } from './nia2-component.component';

describe('Nia2ComponentComponent', () => {
  let component: Nia2ComponentComponent;
  let fixture: ComponentFixture<Nia2ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nia2ComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nia2ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
