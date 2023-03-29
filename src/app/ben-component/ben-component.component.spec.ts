import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenComponentComponent } from './ben-component.component';

describe('BenComponentComponent', () => {
  let component: BenComponentComponent;
  let fixture: ComponentFixture<BenComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
