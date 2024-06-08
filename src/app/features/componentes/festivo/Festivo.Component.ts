import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ColumnMode, NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReferenciasMaterialModule } from '../../../shared/referencias-material.module';
import { FestivoService } from '../../servicios/festivo.service';
import { FestivoDialogComponent } from '../festivo-dialog/festivo-dialog.component';
import { festivo } from './../../../core/entidades/festivos';


@Component({
  selector: 'app-festivo',
  standalone: true,
  imports: [
    ReferenciasMaterialModule,
    FormsModule,
    NgxDatatableModule
  ],
  templateUrl: './festivo.component.html',
  styleUrl: './festivo.component.css'
})
export class FestivoComponent  {
  public festivos: festivo[]=[];
  public columnas=[
  {name:"Nombre festivo", prop:"nombre"},
  {name: "fecha", prop:"fecha"}
  ]



  public textobusqueda: number | null;
  public texto2: number=0;
  public texto3:number=0;
  public texto4:number=0;
  public modocolumna=ColumnMode;
  public selectedDate:Date | null ;

  constructor(private servicio:FestivoService,private servicioDialogo: MatDialog) {
      this.selectedDate=null;
      this.textobusqueda=null;
  }


    buscar(){

      if(this.textobusqueda)
        this.servicio.buscar(this.textobusqueda).subscribe({
          next: response=>{
            this.festivos=response;
        },
          error:error =>{
            window.alert(error.message);
          }
      });



      }



    verificar(){
      if(this.selectedDate){
      this.texto2=this.selectedDate.getFullYear();
      this.texto3=this.selectedDate.getMonth()+1;
      this.texto4=this.selectedDate.getDate();

      this.servicio.validar(this.texto2,this.texto3,this.texto4).subscribe({
        next: response=>{
         const dialogref= this.servicioDialogo.open(FestivoDialogComponent,{
            width:'250px',
            height: '210px',
            panelClass:'custom-dialog-container',
            disableClose: true,
            data:{
              encabezado:(response),

            }
          });
      },
      error: error =>{
        window.alert(error.message);
      }
    });

  }
}
}
