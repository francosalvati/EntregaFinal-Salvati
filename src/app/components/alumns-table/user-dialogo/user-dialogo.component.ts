import { Component, Inject } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Alumns } from 'src/app/models';
import { AlumnosService } from '../../../core/services/alumnos.service';
import { Store } from '@ngrx/store';
import { selectAlumnsState } from 'src/app/pages/alumns/store/alumns.selectors';
import { AlumnsActions } from 'src/app/pages/alumns/store/alumns.actions';

@Component({
  selector: 'app-user-dialogo',
  templateUrl: './user-dialogo.component.html',
  styleUrls: ['./user-dialogo.component.css']
})
export class UserDialogoComponent {



  nombreControll: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-zA-Z]+$/)
  ])

  apellidoControll: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-zA-Z]+$/)
  ])

  dateControll: FormControl = new FormControl('', [
    Validators.required
  ])

  formularioUser: FormGroup = new FormGroup({
    name: this.nombreControll,
    lastname: this.apellidoControll,
    registro: this.dateControll
  });

  constructor( private matDialog: MatDialogRef<UserDialogoComponent>, private store : Store) { }



  onSubmit() {
    this.formularioUser.valid?
    this.store.dispatch(AlumnsActions.createAlumn({...this.formularioUser.value, status: true})):
    this.formularioUser.markAllAsTouched()
  }
}
