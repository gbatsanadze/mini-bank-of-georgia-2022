import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import { Validators} from '../../../../shared/validators.service';
import {AccountService} from '../../krn/accounts/account.service';
import {ClientsService} from '../../bpm/clients.service';
import {LoaderService} from '../../../../shared/loader/loader.service';
import {Account} from '../../krn/accounts/account.model';



@Component({
  selector: 'bg-pmd311',
  templateUrl: './pmd311.component.html',
  styleUrls: ['./pmd311.component.scss']
})
export class Pmd311Component implements OnInit {
  formGroup: FormGroup;
  accounts: Account[] = [];
  allAccounts: Account[] = [];

  constructor(private router: Router, private accountService: AccountService,
              private clientService: ClientsService, private loader: LoaderService,
  ) {
  }

  ngOnInit(): void {
    this.initForm();
    this.fetchAccounts(this.clientService.client.value.clientKey);
    this.fetchAllAccounts();
  }

  errors(controlName) {
    return this.get(controlName).errors && Object.values(this.get(controlName).errors);
  }

  get(controlName) {
    return this.formGroup.get(controlName);
  }


  initForm() {
    this.formGroup = new FormGroup({
      senderAccountKey: new FormControl('',
        Validators.required,
      ),
      receiverAccountKey: new FormControl('',
        Validators.required,
      ),
      amount: new FormControl(undefined, Validators.required)
    });
  }

  private fetchAccounts(clientKey: number) {
    this.accountService
      .fetchAccount(
        clientKey
      )
      .pipe((obs) => this.loader.useLoader(obs))
      .subscribe((accounts) => (this.accounts = accounts));
  }

  private fetchAllAccounts() {
    this.accountService.fetchAllAccounts()
      .pipe((obs) => this.loader.useLoader(obs))
      .subscribe((accounts) => (this.allAccounts = accounts));
  }

  onTransfer() {
    if (this.formGroup.invalid) {
      return;
    }

  }
}
