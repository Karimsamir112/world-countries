import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllWorldComponent } from './all-world.component';

describe('AllWorldComponent', () => {
  let component: AllWorldComponent;
  let fixture: ComponentFixture<AllWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllWorldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
