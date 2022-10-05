import { Component, OnInit } from '@angular/core';

const verde = "background-color:green";
const rojo = "background-color:red";

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})
export class RelojComponent implements OnInit {
  public minutos :number=10;
  public segundos:number=59;
  public arrancado:boolean=false;

  public intervalo:any;

  public ColorStart = verde;
  public ColorEnd = rojo;

  constructor() {
    console.log("En el constructor...")
   }

  public ArrancarTemporizador():void {
    if(this.arrancado==false){
      this.arrancado=true;
   this.intervalo= setInterval(() => {
      this.segundos--;
      if (this.segundos == -1) {
            this.segundos = 59;
            this.minutos--;
            if(this.minutos<0 && this.segundos<0){
              clearInterval;
            }
      }
    }, 1000);
  }
}

public resetear():void{
  this.minutos=10;
  this.segundos=59;
  clearInterval(this.intervalo);
  this.arrancado=false;
}

  ngOnInit(): void {
    console.warn("En el ngOnInit...")
  }

}
