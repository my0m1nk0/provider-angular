import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootPageComponent } from './root-page.component';

describe('RootPageComponent', () => {
  let component: RootPageComponent;
  let fixture: ComponentFixture<RootPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RootPageComponent]
    });
    fixture = TestBed.createComponent(RootPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
