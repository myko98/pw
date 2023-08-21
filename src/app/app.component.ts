import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // constructor() {
  //   this.password = '';
  // }
  password = '';

  onButtonClick() {
    this.password = 'My password';
  }

  getPassword() {
    return this.password
  }
}
