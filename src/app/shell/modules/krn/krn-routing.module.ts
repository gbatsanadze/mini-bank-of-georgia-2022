import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {KrnComponent} from './krn.component';
import {KrnicpComponent} from './krnicp/krnicp.component';
import {AccountsComponent} from './accounts/accounts.component';
import {AccountCreateComponent} from './accounts/account-create/account-create.component';
import {OperationsComponent} from './operations/operations.component';
import {KrnGuard} from './krn.guard';

const routes: Routes = [
  {
    path: '',
    component: KrnComponent,
    canActivate: [KrnGuard],
    children: [
      {
        path: '',
        redirectTo: 'krnicp',
        pathMatch: 'full'
      },
      {
        path: 'krnicp',
        component: KrnicpComponent
      },
      {
        path: 'accounts',
        component: AccountsComponent
      },

      {
        path: 'accounts/create',
        component: AccountCreateComponent
      },

      {
        path: 'operations',
        component: OperationsComponent
      }
    ]

  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class KrnRoutingModule{}
