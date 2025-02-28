import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class OpenaiService {
  privateApiKey=``;
  constructor() { }
  
  
  
  async generateIdea(prompt: string): Promise<string> {
    const url = 'https://api.openai.com/v1/chat/completions'; // URL de la API para el modelo de chat
  try {
    const response = await axios.post(url, {
          model: 'gpt-3.5-turbo', // Usamos el modelo correcto
          messages: [
              { role: 'system', content: 'Eres un generador de ideas.' },
              { role: 'user', content: prompt }
          ],
          max_tokens: 100, // Ajusta la longitud de la respuesta
          temperature: 0.7, // Ajusta la creatividad de la respuesta
        }, {
          headers: {
            'Authorization': `Bearer ${this.privateApiKey}`,
              'Content-Type': 'application/json'
          }
      });
      
      // Verifica la respuesta completa
      console.log('Respuesta de OpenAI:', response.data);
      // Asegúrate de que la respuesta contine `choices` y `message`
      if (response.data && response.data.choices && response.data.choices[0].message) {
          return response.data.choices[0].message.content.trim(); // Devuelve el contenido generado
      } else {
          console.error('La respuesta no tiene el formato esperado.');
          return 'Hubo un error con la respuesta de OpenAI.';
      }
    } catch (error) {
      console.error('Error al generar la idea:', error);
      return 'Hubo un error generando la idea. Inténtelo nuevamente.';
  }
}
}