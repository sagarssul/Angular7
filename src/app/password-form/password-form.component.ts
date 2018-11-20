import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatchValidator } from './match.validator';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html'
})
export class PasswordFormComponent implements OnInit {
  public passwordForm: FormGroup;
  public matchValidator: MatchValidator;

  constructor() { }

  ngOnInit() {
    this.passwordForm = new FormGroup({
      'password': new FormControl('', Validators.required),
      'confirmPassword': new FormControl('', Validators.required),
      'confirmPassword1': new FormControl('', Validators.required)
    });
    const fc1 = this.passwordForm.controls['password'] as FormControl;
    const fc2 = this.passwordForm.controls['confirmPassword'] as FormControl;
    this.matchValidator = new MatchValidator([fc1, fc2], { reactive: true });
  }

  public onSaveClick(): void {
    const match = this.matchValidator.validate();
    if (!match) {

    }
  }

}
