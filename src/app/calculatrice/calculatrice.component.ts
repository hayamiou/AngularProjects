import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Nécessaire pour standalone

@Component({
  selector: 'app-calculatrice',
  standalone: true,
  imports: [CommonModule], // Ajouter les modules nécessaires si besoin
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.scss'] // Correction: styleUrls au pluriel
})
export class CalculatriceComponent {
  randomNumber1: number = 0;
  randomNumber2: number = 0;
  result: number | string = '';

  // Générer un nombre aléatoire pour le premier bouton
  generateRandomNumber1() {
    this.randomNumber1 = Math.floor(Math.random() * 100);
  }

  // Générer un nombre aléatoire pour le second bouton
  generateRandomNumber2() {
    this.randomNumber2 = Math.floor(Math.random() * 100);
  }

  // Exécuter l'opération en fonction de l'opérateur cliqué
  performOperation(operation: string) {
    switch (operation) {
      case '+':
        this.result = this.randomNumber1 + this.randomNumber2;
        break;
      case '-':
        this.result = this.randomNumber1 - this.randomNumber2;
        break;
      case '*':
        this.result = this.randomNumber1 * this.randomNumber2;
        break;
      case '/':
        // Gestion du cas où la division par zéro est impossible
        this.result = this.randomNumber2 !== 0 ? this.randomNumber1 / this.randomNumber2 : 'Erreur: division par 0';
        break;
      default:
        this.result = 'Opération non reconnue';
    }
  }
}
