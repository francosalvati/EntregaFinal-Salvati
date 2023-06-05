import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Alumns } from 'src/app/models';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserDialogoComponent } from './user-dialogo/user-dialogo.component';
import { EditDialogoComponent } from './edit-dialogo/edit-dialogo.component';
import { AlumnosService } from '../../core/services/alumnos.service';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AlumnsActions } from 'src/app/pages/alumns/store/alumns.actions';
import { Observable } from 'rxjs';
import { State } from 'src/app/pages/alumns/store/alumns.reducer';
import { selectAlumnsState } from 'src/app/pages/alumns/store/alumns.selectors';


@Component({
  selector: 'app-alumns-table',
  templateUrl: './alumns-table.component.html',
  styleUrls: ['./alumns-table.component.css'],
})

export class AlumnsTableComponent implements OnInit {
  alumnos!: Alumns[]
  displayedColumns: string[] = ['id', 'name', 'status', 'actions'];
  clickedRows = new Set<Alumns>()
  state$:Observable<State>

  constructor(
    private dialogService: MatDialog,
    private store: Store,
    private alumnosService: AlumnosService,
    private router: Router
  ) {
    this.state$ = this.store.select(selectAlumnsState)
  }
  ngOnInit(): void {
    this.store.dispatch(AlumnsActions.loadAlumns())
    this.state$.subscribe( alumns => this.alumnos = alumns.alumns)
  }

  deleteUser(alumn: Alumns) {
    const dialogRef = this.dialogService.open(ConfirmDialogComponent, {
      data: {
        mensaje: `¿Está seguro que desea eliminar al Alumno ${alumn.name} ${alumn.lastname}?`,
        alumn: alumn
      }
    });
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
  }

  navigateToDetails(row: Alumns) {
    this.router.navigate([`home/alumns/${row.id}`])
  }

}


