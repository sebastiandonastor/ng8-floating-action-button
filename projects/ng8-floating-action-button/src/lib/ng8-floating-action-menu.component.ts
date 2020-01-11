import { Component, Input } from '@angular/core';
import { FloatingActionButton8 } from './FloatingActionButton8';

@Component({
    selector: 'ng8-floating-action-menu',
    template: `
    <ul
      mfb-menu
      class="mfb-component--{{ placement }} {{ effect }}"
      [attr.data-mfb-state]="state"
      [attr.toggling-method]="toggle"
      [attr.data-mfb-toggle]="toggle"
    >
      <li class="mfb-component__wrap">
        <a
          class="mfb-component__button--main"
          [attr.data-mfb-label]="label"
          (click)="clicked()"
          (mouseenter)="entered()"
          (mouseleave)="leaved()"
        >
          <!-- the main button icon visibile by default -->
          <i class="mfb-component__main-icon--resting {{ iconClass }}"></i>
          <!-- the main button icon visibile when the user is hovering/interacting with the menu -->
          <i class="mfb-component__main-icon--active {{ activeIconClass }}"></i>
        </a>

        <ul class="mfb-component__list">
          <!-- a child button, repeat as many times as needed -->
          <li *ngFor="let button of buttons">
            <ng8-floating-action-button
              [button]="button"
            ></ng8-floating-action-button>
          </li>
        </ul>
      </li>
    </ul>
  `,
  styleUrls: ['./ng8-floating-action-menu.component.scss']
})
export class Ng8FloatingActionMenuComponent {
    public isOpen = false;
    public state = 'closed';
  
    @Input() placement: string;
    @Input() effect: string;
    @Input() label: string;
    @Input() iconClass: string;
    @Input() activeIconClass: string;
    @Input() toggle = 'click';
    @Input() buttons: Array<FloatingActionButton8>;
  
    constructor() {}
  
    clicked() {
      if (this.toggle !== 'click') {
        return false;
      }
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        this.state = 'open';
      } else {
        this.state = 'closed';
      }
    }
  
    entered() {
      if (this.toggle !== 'hover') {
        return false;
      }
      this.state = 'open';
    }
  
    leaved() {
      if (this.toggle !== 'hover') {
        return false;
      }
      this.state = 'closed';
    }
  
    ngOnInit() {}
}