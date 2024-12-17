import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
})
export class AppComponent {
  title = 'sample-form';
  sampleForm: FormGroup;
  selectedOption: string = '';
  options: string[] = ['Option 1', 'Option 2', 'Option 3', 'Others'];

  constructor(private fb: FormBuilder) {
    this.sampleForm = this.fb.group({
      options: ['', Validators.required],
      inputText: [''],
    });
  }

  ngOnInit() {
    this.detectChanges();
  }

  detectChanges() {
    this.sampleForm.get('options')?.valueChanges.subscribe((option) => {
      if (option === 'Others') {
        this.sampleForm.get('inputText')?.setValidators(Validators.required);
      } else {
        this.sampleForm.get('inputText')?.clearValidators();
        this.sampleForm.get('inputText')?.setValue('');
      }
    });
  }

  onSubmit() {
    console.log('submitted');
  }

  handleSelectOptionChange(e: any) {
    console.log('option change');
  }
}
