import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DbzPageComponent } from './pages/dbz-page.component';
import { ListComponent } from './components/list/list.component';
import { CharactersComponent } from './components/characters/characters.component';

@NgModule({
  declarations: [DbzPageComponent, ListComponent, CharactersComponent],
  imports: [CommonModule],
  exports: [DbzPageComponent],
})
export class DbzModule {}
