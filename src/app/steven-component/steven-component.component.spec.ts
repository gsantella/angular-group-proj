import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StevenComponentComponent } from './steven-component.component';

describe('StevenComponentComponent', () => {
  let component: StevenComponentComponent;
  let fixture: ComponentFixture<StevenComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StevenComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StevenComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
