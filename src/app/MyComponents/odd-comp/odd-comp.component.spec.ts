import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OddCompComponent } from './odd-comp.component';

describe('OddCompComponent', () => {
  let component: OddCompComponent;
  let fixture: ComponentFixture<OddCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OddCompComponent]
    });
    fixture = TestBed.createComponent(OddCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
