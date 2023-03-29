import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiaComponentComponent } from './nia-component.component';

describe('NiaComponentComponent', () => {
  let component: NiaComponentComponent;
  let fixture: ComponentFixture<NiaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NiaComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NiaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
