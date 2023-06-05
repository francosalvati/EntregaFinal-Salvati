import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Alumns } from 'src/app/models';
import { AlumnsActions } from 'src/app/pages/alumns/store/alumns.actions';


@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {

  id: number
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { mensaje: string, alumn: Alumns },
    private dialogRef: MatDialogRef<ConfirmDialogComponent>,
    private store: Store
  ){
    this.id = data.alumn.id
  }

submit(){
  this.store.dispatch(AlumnsActions.deleteAlumn({id: this.id}))
}
}
