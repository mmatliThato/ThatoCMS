import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeNuPage } from './me-nu.page';

describe('MeNuPage', () => {
  let component: MeNuPage;
  let fixture: ComponentFixture<MeNuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeNuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeNuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
