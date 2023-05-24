import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'dbz-page',
  templateUrl: './dbz-page.component.html',
  styleUrls: ['./dbz-page.component.scss'],
})
export class DbzPageComponent {
  constructor(private dbzService: DbzService) {}

  get characterList(): Character[] {
    return [...this.dbzService.characterList];
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.onDeleteCharacterById(id);
  }

  onNewCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }
}
