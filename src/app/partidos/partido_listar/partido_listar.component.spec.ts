/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PartidoListComponent } from './partido_listar.component';

describe('Partido_listarComponent', () => {
  let component: PartidoListComponent;
  let fixture: ComponentFixture<PartidoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartidoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
