import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDbzComponent } from './components/dbz.component';



@NgModule({
  declarations: [MainDbzComponent],
  imports: [
    CommonModule
  ],
  exports:[MainDbzComponent]
})
export class DbzModule { }
