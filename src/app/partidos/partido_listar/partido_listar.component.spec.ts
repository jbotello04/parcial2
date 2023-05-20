/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Partido_listarComponent } from './partido_listar.component';

describe('Partido_listarComponent', () => {
  let component: Partido_listarComponent;
  let fixture: ComponentFixture<Partido_listarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Partido_listarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Partido_listarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
