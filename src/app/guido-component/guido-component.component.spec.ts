import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidoComponentComponent } from './guido-component.component';

describe('GuidoComponentComponent', () => {
  let component: GuidoComponentComponent;
  let fixture: ComponentFixture<GuidoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidoComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
