import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperPageComponent } from './wrapper-page.component';

describe('WrapperPageComponent', () => {
  let component: WrapperPageComponent;
  let fixture: ComponentFixture<WrapperPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WrapperPageComponent]
    });
    fixture = TestBed.createComponent(WrapperPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
