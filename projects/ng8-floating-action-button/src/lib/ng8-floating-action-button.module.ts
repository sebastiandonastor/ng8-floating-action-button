import { NgModule } from '@angular/core';
import { Ng8FloatingActionButtonComponent } from './ng8-floating-action-button.component';
import { CommonModule } from '@angular/common';
import { Ng8FloatingActionMenuComponent } from './ng8-floating-action-menu.component';



@NgModule({
  declarations: [Ng8FloatingActionButtonComponent, Ng8FloatingActionMenuComponent],
  imports: [
    CommonModule
  ],
  exports: [Ng8FloatingActionButtonComponent, Ng8FloatingActionMenuComponent]
})
export class Ng8FloatingActionButtonModule { }
