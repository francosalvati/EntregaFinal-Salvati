import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Alumns } from 'src/app/interfaces/alumns';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserDialogoComponent } from '../dialog/user-dialogo/user-dialogo.component';
import { EditDialogoComponent } from '../dialog/edit-dialogo/edit-dialogo.component';
import { AlumnosService } from '../../services/alumnos.service';
import { ConfirmDialogComponent } from '../dialog/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class TableComponent {
  columnsToDisplay: string[] = ['legajo', 'name', 'status'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  alumnos: Alumns[]
  expandedElement?: Alumns | null;


  constructor(
    private dialogService: MatDialog,
    private alumnosService: AlumnosService,
    private cd: ChangeDetectorRef
  ) {
    this.alumnos = alumnosService.alumnos
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
        const indice = this.alumnos.findIndex(user => user.legajo === id);
        this.alumnos.splice(indice, 1);
        this.alumnos = this.alumnos.slice();
      }
    });;
  }

  editUser(user: Alumns) {
    const dialogRef = this.dialogService.open(EditDialogoComponent, {
      data:user
    })
  }

  addUser(alumnos: Alumns[]) {
    const dialogRef = this.dialogService.open(UserDialogoComponent, {
      data: alumnos
    })

    dialogRef.afterClosed().subscribe(valor => {
      this.alumnos.push(valor.value)
      this.alumnos = this.alumnos.slice()
    })
  }


}
function Inpu(target: TableComponent, propertyKey: 'alumnos'): void {
  throw new Error('Function not implemented.');
}

