import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [];

  @Output()
  public onDeleteCharacterEvent: EventEmitter<string> = new EventEmitter();

  onDeleteCharacterById(id: string): void {
   this.onDeleteCharacterEvent.emit(id);
  }
}
