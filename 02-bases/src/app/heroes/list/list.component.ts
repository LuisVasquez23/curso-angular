import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  // List of heroes
  public heroes: string[] = [
    'Ironman',
    'Captain America',
    'Thor',
    'Hulk',
    'Black Widow',
  ];

  public deteletedHero?: string;

  removeLastHero(): void {
    this.deteletedHero = this.heroes.pop();
    console.log(`Hero deleted: ${this.deteletedHero}`);
  }
}
