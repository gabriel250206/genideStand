import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})

export class ForgotPasswordPage implements OnInit {
  items: { email: string;}[] = [];
  addItem(email: string,  ): void {
    if (email.trim() ) {
      this.items.push({
        
        email: email.trim(),
       
        
        
        
      });
      console.log(email.trim());
    } else {
      console.error('El nombre y la fecha no pueden estar vacíos');
    }}
  constructor(private router:Router) { }


  onLogin() {
    this.router.navigateByUrl("login");
  }
  
  ngOnInit() {
  }

}
