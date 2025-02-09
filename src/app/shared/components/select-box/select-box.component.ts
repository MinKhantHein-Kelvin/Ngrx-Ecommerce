import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, forwardRef, inject, Input, Output, SimpleChanges } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrl: './select-box.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectBoxComponent),
      multi: true
    }
  ]
})
export class SelectBoxComponent {
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
  @Input() readOnly: boolean = false;
  @Input() value: any = '';
  @Input() bindLabel: string = '';
  @Input() bindValue: string = '';
  @Input() isLoading : boolean = false;
  cdr = inject(ChangeDetectorRef);

  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};


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
        this.value = e;
        this.onChange(e); // Notify Angular Forms about the change
        this.valueChange.emit(e);
        this.cdr.markForCheck();
      }
    }

  getClearAble = () : boolean => {
    return this.value !== undefined && this.value !== null && this.value !== '';
  }

  writeValue(value: any): void {
    this.value = value;
    this.cdr.markForCheck();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
    this.cdr.markForCheck();
  }
}
