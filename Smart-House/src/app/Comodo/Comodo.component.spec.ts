/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ComodoComponent } from './Comodo.component';

describe('ComodoComponent', () => {
  let component: ComodoComponent;
  let fixture: ComponentFixture<ComodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
