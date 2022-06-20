import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Validators} from '../../../../../shared/validators.service';

@Component({
  selector: 'bg-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.scss']
})
export class AccountCreateComponent implements OnInit {

  public form!: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.form = new FormGroup({
      accountName: new FormControl(undefined, [
        Validators.required,
      ]),
      amount: new FormControl('', [
        Validators.required,
      ]),
    });
  }
}
