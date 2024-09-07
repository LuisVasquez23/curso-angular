import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {
  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  // personaje del componente
  public character: Character = {
    id: '',
    name: '',
    power: 0,
  };

  emitCharacter(): void {
    // trim character name
    if (this.character.name.trim().length === 0) {
      return;
    }

    // emit character
    this.onNewCharacter.emit(this.character);

    // reset character
    this.character = { id: '', name: '', power: 0 };
  }
}
