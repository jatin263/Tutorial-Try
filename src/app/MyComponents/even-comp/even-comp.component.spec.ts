import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenCompComponent } from './even-comp.component';

describe('EvenCompComponent', () => {
  let component: EvenCompComponent;
  let fixture: ComponentFixture<EvenCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvenCompComponent]
    });
    fixture = TestBed.createComponent(EvenCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
