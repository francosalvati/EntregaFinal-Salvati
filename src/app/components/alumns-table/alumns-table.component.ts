import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Alumns } from 'src/app/models';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserDialogoComponent } from '../dialog/user-dialogo/user-dialogo.component';
import { EditDialogoComponent } from '../dialog/edit-dialogo/edit-dialogo.component';
import { AlumnosService } from '../../core/services/alumnos.service';
import { ConfirmDialogComponent } from '../dialog/confirm-dialog/confirm-dialog.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-alumns-table',
  templateUrl: './alumns-table.component.html',
  styleUrls: ['./alumns-table.component.css'],
})

export class AlumnsTableComponent {
  alumnos!: Alumns[]
  displayedColumns: string[] = ['id', 'name', 'status', 'actions'];
  clickedRows = new Set<Alumns>()

  constructor(
    private dialogService: MatDialog,
    private alumnosService: AlumnosService,
    private router: Router
  ) {
    alumnosService.getAlumnos().subscribe(a => {
      this.alumnos = a
    })
  }

  deleteUser(id: string) {

    const dialogRef = this.dialogService.open(ConfirmDialogComponent, {
      data: {
        mensaje: `¿Está seguro que desea eliminar el elemento con ID ${id}?`
      }
    });

    // Cuando se confirma la eliminación, borra el elemento de la tabla
    dialogRef.afterClosed().subscribe(confirmado => {
      if (confirmado) {
        this.alumnosService.deleteAlumnos(id)
      }
    });;
  }


  addUser(alumnos: Alumns[]) {
    const dialogRef = this.dialogService.open(UserDialogoComponent, {
      data: alumnos
    })

    dialogRef.afterClosed().subscribe(valor => {
      this.alumnosService.addAlumnos(valor.value)
    })
  }

  editUser(user: Alumns) {
    const dialogRef = this.dialogService.open(EditDialogoComponent, {
      data: user
    })

    dialogRef.afterClosed().subscribe(valor => {
      this.alumnosService.editAlumnos(user.id ,valor.value)
    })
  }

  navigateToDetails(row: Alumns){
    this.router.navigate([`alumns/${row.id}`])
  }

}


