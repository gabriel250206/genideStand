import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SignUpPage implements OnInit {

  items: { username: string; password: string }[] = [];
  

  // Agregar un elemento con nombre, fecha y estado inicial (no completado)
  addItem(username: string,  password:string,): void {
   if (username.trim() && password.trim() ) {
     this.items.push({
       
       username: username.trim(),
       password: password.trim(),
       
       
       
     });
     console.log(username.trim(), password.trim());
   } else {
     console.error('El nombre y la fecha no pueden estar vacíos');
   }}
  constructor() { }

  ngOnInit() {
  }

}
