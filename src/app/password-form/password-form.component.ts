import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatchValidators } from './match-validator';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.scss']
})
export class PasswordFormComponent implements OnInit {
  public passwordForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.passwordForm = new FormGroup({
      'password': new FormControl('', Validators.required),
      'confirmPassword': new FormControl('', Validators.required)
    });
    const passwordCtrl = this.passwordForm.controls['password'] as FormControl;
    const confirmPasswordCtrl = this.passwordForm.controls['confirmPassword'] as FormControl;
    const match = new MatchValidators([passwordCtrl, confirmPasswordCtrl], {reactive: true});
  }

}
