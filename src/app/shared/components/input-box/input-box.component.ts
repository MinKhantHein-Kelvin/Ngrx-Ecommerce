import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrl: './input-box.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputBoxComponent implements OnInit {
  @Input() isReactiveForm: boolean = false;
  @Input() control!: FormControl;
  @Input() options: any[] = [];
  @Input() label = '';
  @Input() valueKey = 'value';
  @Input() labelKey = 'label';
  @Input() isDisabled = false;
  @Input() errorMessage = '*This field is required.';
  @Input() isEssential : boolean = false;
  @Input() submitted : boolean = false;

  ngOnInit(): void {
    if (this.isReactiveForm && !this.isEssential) {
      this.control.clearValidators();
    }
    this.control.updateValueAndValidity();
  }

  get showError(): boolean {
    return this.control.touched && this.control.invalid || (this.submitted && this.control.invalid);
  }

}
