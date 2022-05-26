import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent {
  serverFrameworks = ['C#', 'Python', 'Java', 'NodeJS', 'DJango'];
  clientFrameworks = ['Angular', 'React', 'JS'];

  isSubmitted = false;

  constructor(public fb: FormBuilder) {}

  /*########### Form ###########*/
  registrationForm = this.fb.group({
    serverFramework: ['', [Validators.required]],
    clientFramework: ['', [Validators.required]]
  });

  // Getter method to access form control
  get myForm() {
    return this.registrationForm.get('clientFramework');
  }

  // Submit Registration Form
  onSubmit() {
    if (!this.registrationForm.valid) {
      return false;
    } else {
      alert(JSON.stringify(this.registrationForm.value));
      this.registrationForm.reset();
    }
  }
}
