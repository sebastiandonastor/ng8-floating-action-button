import { Component, OnInit, Input } from '@angular/core';
import { FloatingActionButton8 } from './FloatingActionButton8';

@Component({
  selector: 'ng8-floating-action-button',
  template: `
  <a
    href
    [attr.data-mfb-label]="button.label"
    (click)="buttonClick()"
    class="mfb-component__button--child"
    [ngStyle]="{'background-color': button.color}"
  >
    <i class="mfb-component__child-icon {{ button.iconClass }}"></i>
  </a>
`,
  styles: []
})
export class Ng8FloatingActionButtonComponent implements OnInit {

  @Input() button: FloatingActionButton8;

  constructor() {}

  buttonClick() {
    this.button.onClick();
    return false;
  }

  ngOnInit() {}

}
