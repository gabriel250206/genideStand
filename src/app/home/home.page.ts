import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  items: { pregunta: string; }[] = [];
  

 // Agregar un elemento con nombre, fecha y estado inicial (no completado)
 addItem(pregunta: string,  ): void {
  if (pregunta.trim() ) {
    this.items.push({
      
      pregunta: pregunta.trim(),
   
      
      
      
    });
    console.log(pregunta.trim());
  } else {
    console.error('El nombre y la fecha no pueden estar vacíos');
  }}
  constructor() {}
}
