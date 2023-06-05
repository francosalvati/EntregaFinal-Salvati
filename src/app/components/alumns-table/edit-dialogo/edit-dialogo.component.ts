import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Alumns } from 'src/app/models';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AlumnsActions } from 'src/app/pages/alumns/store/alumns.actions';




@Component({
  selector: 'app-edit-dialogo',
  templateUrl: './edit-dialogo.component.html',
  styleUrls: ['./edit-dialogo.component.css']
})
export class EditDialogoComponent {

  newAlumn: Alumns;
  status: boolean;
  constructor(
    private matDialog: MatDialogRef<EditDialogoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alumns,
    private store: Store
  ) {
    this.newAlumn = this.data
    this.status = this.newAlumn.status
  }

  onSubmit() {
    console.log(this.newAlumn)
    this.newAlumn = {
      ...this.newAlumn,
      status: this.status
    }
    this.store.dispatch(AlumnsActions.updateAlumn({ data: this.newAlumn }))
    this.matDialog.close()
  }
}
