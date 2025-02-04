import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, inject, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrl: './input-box.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputBoxComponent implements OnInit {
  @Output() valueChange = new EventEmitter<any>();
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

  @Input() type: string = 'text';
  @Input() placeHolder: string = '';
  @Input() readOnly: boolean = false;
  @Input() value: any = '';
  cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    if (this.isReactiveForm && this.control) {
      if (!this.isEssential) {
        this.control.clearValidators();
        this.control.updateValueAndValidity();
      }
    }

  }

  get showError(): boolean {
    return this.control.touched && this.control.invalid || (this.submitted && this.control.invalid);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.control) {
      if (this.isDisabled) {
        this.control.disable();
      } else {
        this.control.enable();
      }
    }
    this.cdr.markForCheck();
  }

  onValueChanges(e: any) {
    if (e !== undefined && e !== null) {
      this.valueChange.emit(e);
      this.cdr.markForCheck();
    }
  }

}
