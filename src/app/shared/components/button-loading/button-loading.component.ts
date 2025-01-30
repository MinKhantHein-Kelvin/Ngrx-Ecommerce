import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-loading',
  templateUrl: './button-loading.component.html',
  styleUrl: './button-loading.component.scss'
})
export class ButtonLoadingComponent {
  @Input() button_text!: string;
  @Input() load_button_text!: string;
  @Input() width!: string;
  @Input() isLoading!: boolean;
  @Input() isCancle!: boolean;
  @Output() onClick = new EventEmitter<any>();
  @Input() isDisabled : boolean = false;
  @Input() isRadiusbutton : boolean = false;

  handleClick = () => {
    this.onClick.emit();
  }

}
