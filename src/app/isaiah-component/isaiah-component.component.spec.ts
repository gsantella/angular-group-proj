import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsaiahComponentComponent } from './isaiah-component.component';

describe('IsaiahComponentComponent', () => {
  let component: IsaiahComponentComponent;
  let fixture: ComponentFixture<IsaiahComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsaiahComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsaiahComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
