import { Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserDialogoComponent } from 'src/app/components/dialog/user-dialogo/user-dialogo.component';
import { Alumns } from 'src/app/interfaces/alumns';
@Component({
  selector: 'app-alumns',
  templateUrl: './alumns.component.html',
  styleUrls: ['./alumns.component.css']
})
export class AlumnsComponent {

  constructor(
    private dialogService: MatDialog,
  ) { }

}
