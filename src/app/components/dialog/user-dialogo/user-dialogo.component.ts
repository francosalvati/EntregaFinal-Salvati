import { Component, Inject } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Alumns } from 'src/app/models';
import { AlumnosService } from '../../../core/services/alumnos.service';

@Component({
  selector: 'app-user-dialogo',
  templateUrl: './user-dialogo.component.html',
  styleUrls: ['./user-dialogo.component.css']
})
export class UserDialogoComponent {

  formularioUser: FormGroup;

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

  constructor(
    private matDialog: MatDialogRef<UserDialogoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alumns[],
    private fb: FormBuilder,) {
    this.formularioUser = this.fb.group({
      legajo: `a20-${data.length + 1}`,
      name: this.nombreControll,
      lastname: this.apellidoControll,
      registro: this.dateControll,
      status: true
    })
  }



  onSubmit() {
    this.formularioUser.valid?
    this.matDialog.close(this.formularioUser):
    alert('se debe llenar correctamente el formulario')
  }
}
