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
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChar = '';

    if (this.includeLetters) {
      validChar += letters;
    }
    if (this.includeNumbers) {
      validChar += numbers;
    }
    if (this.includeSymbols) {
      validChar += symbols;
    }

    let counter = 0;
    let pw = ''
    while (counter < this.length) {
      const index = Math.floor(Math.random() * validChar.length);
      pw += validChar[index];
      counter += 1;
    }
    this.password = pw;
  }

  // getter function
  getPassword() {
    return this.password;
  }

  onChangeLength(value: string) {
    const num = parseInt(value);
    console.log(num)

    if (!isNaN(num)) {
      this.length = num;
    } else {
      this.length = 0;
    }
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
}
