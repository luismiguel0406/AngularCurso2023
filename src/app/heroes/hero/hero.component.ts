import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  public name       :string = 'IronMan';
  public age        :number = 45;
  public showChange :boolean = true;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  changeHero(value: string): void {
    this.name = value;
  }
  changeAge(value: number): void {
    this.age = value;
  }
}
