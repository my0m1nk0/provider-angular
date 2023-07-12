import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BothPageComponent } from './both-page.component';

describe('BothPageComponent', () => {
  let component: BothPageComponent;
  let fixture: ComponentFixture<BothPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BothPageComponent]
    });
    fixture = TestBed.createComponent(BothPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
