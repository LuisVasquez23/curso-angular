import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} is ${this.age} years old`;
  }

  resetForm(): void {
    this.name = 'Ironman';
    this.age = 45;
  }

  changeName(): void {
    this.name = 'Captain America';
  }

  changeAge(): void {
    this.age = 100;
  }
}
