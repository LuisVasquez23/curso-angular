import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: Character[] = [
    { id: uuid(), name: 'Goku', power: 15000 },
    { id: uuid(), name: 'Vegeta', power: 7500 },
    { id: uuid(), name: 'Trunks', power: 6000 },
  ];

  onNewCharacter(character: Character): void {
    character.id = uuid();
    this.characters.push(character);
  }

  // onDeleteCharacter(index: number): void {
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
