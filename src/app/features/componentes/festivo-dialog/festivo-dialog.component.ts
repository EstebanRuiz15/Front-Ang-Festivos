import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReferenciasMaterialModule } from '../../../shared/referencias-material.module';

export interface DatosDialogo {
  encabezado: string;
  respuesta:string;
}
@Component({
  selector: 'app-festivo-dialog',
  standalone: true,
  imports: [
    ReferenciasMaterialModule
  ],
  templateUrl: './festivo-dialog.component.html',
  styleUrl: './festivo-dialog.component.css'
})
export class FestivoDialogComponent {

  constructor(public dialogRef: MatDialogRef<FestivoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public datos:DatosDialogo
  ){

  }

  public aceptar(){
    this.dialogRef.close();
  }

}
