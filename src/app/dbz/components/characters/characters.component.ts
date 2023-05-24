import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent {
  @Output()
  public onNewCharacterEvent: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id:'',
    name: '',
    power: 0,
  };

  onNewCharacter(): void {
    this.onNewCharacterEvent.emit(this.character);
    this.character = { id: '', name: '', power: 0 };
  }
}
