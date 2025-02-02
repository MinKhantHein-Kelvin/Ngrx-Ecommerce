import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrl: './select-box.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectBoxComponent {
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
  cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    if (this.isReactiveForm && !this.isEssential) {
      this.control.clearValidators();
    }
    this.control.updateValueAndValidity();
  }

  get showError(): boolean {
    return this.control.touched && this.control.invalid || (this.submitted && this.control.invalid);
  }

  ngOnChanges(): void {
    if (this.isDisabled) {
      this.control.disable();
    } else {
      this.control.enable();
    }
    this.cdr.markForCheck();
  }

}
