import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewConsultaDialogComponent } from './new-consulta-dialog.component';

describe('NewConsultaDialogComponent', () => {
  let component: NewConsultaDialogComponent;
  let fixture: ComponentFixture<NewConsultaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewConsultaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewConsultaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
