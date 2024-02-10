import { Component } from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage {
  loginData = {
    username: '',
    password: ''
  };

  constructor() {}

  login() {
    // Logique de connexion ici
    console.log('Formulaire soumis :', this.loginData);
  }
}
