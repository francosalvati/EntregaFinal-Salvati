import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Alumns } from 'src/app/models';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';




@Component({
  selector: 'app-edit-dialogo',
  templateUrl: './edit-dialogo.component.html',
  styleUrls: ['./edit-dialogo.component.css']
})
export class EditDialogoComponent {

  editForm: FormGroup;

  dateControl: FormControl = new FormControl ('',[
    Validators.required
  ])
  constructor(
    private matDialog: MatDialogRef<EditDialogoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alumns,
    private formGroup: FormBuilder
  ) {
    this.editForm = formGroup.group({
      registro: this.dateControl
    })
  }

  onSubmit(){
    this.editForm.valid?
    this.matDialog.close(this.editForm):
    alert('se debe llenar correctamente el formulario')
  }
}
