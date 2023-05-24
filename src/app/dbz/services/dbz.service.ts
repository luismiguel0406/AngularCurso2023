import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characterList: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 10000,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 8000,
    },
    {
      id: uuid(),
      name: 'Broly super',
      power: 9500,
    },
  ];

  addCharacter(character: Character): void {
    const newCharacter: Character = { ...character, id: uuid() };
    this.characterList.push(newCharacter);
  }

  onDeleteCharacterById(id: string): void {
    this.characterList = this.characterList.filter(
      (character) => character.id !== id
    );
  }
}
