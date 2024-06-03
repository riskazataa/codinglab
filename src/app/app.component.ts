import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonEngine } from '@angular/ssr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, AppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'codinglab-tes';
  evenNumbers: { value: number, type: string }[] = [];
  inputNumber: number | null = null;
  result: string = ''
  time: number = 0;
  speed: number = 0;
  distance: number | null = null;
  factorialResult: number | null = null;

  constructor() {
    this.showNumber();
  }

  factorial(n: number): number {
    if (n === 0) {
      return 1;
    }
    else {
      return n * this.factorial(n - 1);
    }
  }

  showFactorial(): void {
    if (this.inputNumber === null || isNaN(this.inputNumber)) {
      this.factorialResult = null;
    } else {
      this.factorialResult = this.factorial(this.inputNumber)
    }
  }

  distanceInformation() {
    if (this.time && this.speed) {
      this.distance = (this.time / 60) * this.speed;
    } else {
      this.distance = null;
    }
  }

  showNumber(): void {
    this.evenNumbers = [];
    for (let i = 1; i <= 100; i++) {
      this.evenNumbers.push({
        value: i,
        type: this.isEven(i) ? 'genap' : 'ganjil'
      });
    }
    console.log(this.evenNumbers);
  }


  checkNumber(): void {
    if (this.inputNumber === null || isNaN(this.inputNumber)) {
      this.result = 'Masukkan bilangan yang valid terlebih dahulu'
    } else {
      if (this.isEven(this.inputNumber)) {
        this.result = 'Bilangan ini adalah bilangan genap'
      } else {
        this.result = 'Bilangan ini adalah bilangan ganjil'
      }
    }
  }

  isEven(num: number): boolean {
    return num % 2 === 0;
  }
}
