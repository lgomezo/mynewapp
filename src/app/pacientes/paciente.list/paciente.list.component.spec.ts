/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Paciente.listComponent } from './paciente.list.component';

describe('Paciente.listComponent', () => {
  let component: Paciente.listComponent;
  let fixture: ComponentFixture<Paciente.listComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Paciente.listComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Paciente.listComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
