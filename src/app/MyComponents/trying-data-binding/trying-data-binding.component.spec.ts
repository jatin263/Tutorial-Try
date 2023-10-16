import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryingDataBindingComponent } from './trying-data-binding.component';

describe('TryingDataBindingComponent', () => {
  let component: TryingDataBindingComponent;
  let fixture: ComponentFixture<TryingDataBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TryingDataBindingComponent]
    });
    fixture = TestBed.createComponent(TryingDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
