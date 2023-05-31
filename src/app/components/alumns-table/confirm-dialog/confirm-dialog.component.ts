import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Alumns } from 'src/app/models';


@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { mensaje: string, alumn: Alumns },
    private dialogRef: MatDialogRef<ConfirmDialogComponent>,
    private store: Store
  ){}

confirmar(): void {
  this.dialogRef.close(true);
}

cancelar() {
  this.dialogRef.close();
}

delete(){
  console.log(MAT_DIALOG_DATA)
}
}
