import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageChildComponent } from './page-child.component';

describe('PageChildComponent', () => {
  let component: PageChildComponent;
  let fixture: ComponentFixture<PageChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageChildComponent]
    });
    fixture = TestBed.createComponent(PageChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
