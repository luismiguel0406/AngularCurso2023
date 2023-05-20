import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'dbz-page',
  templateUrl: './dbz-page.component.html',
  styleUrls: ['./dbz-page.component.scss'],
})
export class DbzPageComponent {

  public characterList:Character[]=[
    {
      name:'Goku',
      power:10000
    },
    {
      name:'Vegeta',
      power:8000
    },
    {
      name:'Freezer',
      power:9000
    },
    {
      name:'Broly super',
      power:9500
    }
  ]
}
