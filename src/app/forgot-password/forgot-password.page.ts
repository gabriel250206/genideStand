import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})

export class ForgotPasswordPage implements OnInit {
 
  

  constructor(private router:Router, private auth:AuthService) { }
  

  onResetPassword() {
     const email = (document.getElementById('email') as HTMLInputElement).value;
    this.auth.reset(email);
    console.log(email);
  }

  onLogin() {
    this.router.navigateByUrl("login");
  }
  
  ngOnInit() {
  }

}
