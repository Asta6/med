import { Component } from '@angular/core';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage {
  signupData = {
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    confirmPassword: ''
  };

  constructor() {}

  signup() {
    // Logique d'inscription ici
    console.log('Formulaire soumis :', this.signupData);
  }
}


