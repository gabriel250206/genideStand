import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonCard,IonCardHeader,IonCardContent,IonCardTitle } from '@ionic/angular/standalone';
import { OpenaiService } from '../openai.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,FormsModule,IonCard,IonCardHeader,IonCardContent,IonCardTitle,NgIf],
})
export class HomePage {
  constructor(private router:Router, private openaiservice:OpenaiService) {}
  ideaPrompt: string='';
  generatedIdea: string='idea';

  async generateIdea(){
    if(this.ideaPrompt.trim()){
      this.generatedIdea = await this.openaiservice.generateIdea(this.ideaPrompt);
      console.log(this.ideaPrompt);
    }else{
      alert("incresa algo pls");
    }
  }
 
}
