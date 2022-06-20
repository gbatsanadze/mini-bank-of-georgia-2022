import {KrnComponent} from './krn.component';
import {OperationsComponent} from './operations/operations.component';
import {KrnicpComponent} from './krnicp/krnicp.component';
import {AccountsComponent} from './accounts/accounts.component';
import {AccountCreateComponent} from './accounts/account-create/account-create.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import { ShellModule } from '../../shell.module';
import {KrnRoutingModule} from './krn-routing.module';
import {SharedModule} from '../../../shared/shared.module';


@NgModule({

  declarations: [KrnComponent, OperationsComponent, KrnicpComponent,
    AccountsComponent, AccountCreateComponent],
  imports: [KrnRoutingModule, ShellModule, CommonModule, ReactiveFormsModule, SharedModule],
})
export class KrnModule {
}
