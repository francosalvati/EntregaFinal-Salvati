import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alumns } from 'src/app/interfaces/alumns';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';




@Component({
  selector: 'app-edit-dialogo',
  templateUrl: './edit-dialogo.component.html',
  styleUrls: ['./edit-dialogo.component.css']
})
export class EditDialogoComponent {

  constructor(
    private _formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Alumns,
  ) {  }
}
