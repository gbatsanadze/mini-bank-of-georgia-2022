import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {ShellComponent} from './shell/shell.component';
import {Bpm000Component} from './shell/modules/bpm/bpm000/bpm000.component';
import {RegisterComponent} from './auth/register/register.component';
import {Bpm001Component} from './shell/modules/bpm/bpm001/bpm001.component';
import {LoginComponent} from './auth/login/login.component';
import {KrnComponent} from './shell/modules/krn/krn.component';
import {AccountsComponent} from './shell/modules/krn/accounts/accounts.component';
import {KrnicpComponent} from './shell/modules/krn/krnicp/krnicp.component';
import {OperationsComponent} from './shell/modules/krn/operations/operations.component';
import {AccountCreateComponent} from './shell/modules/krn/accounts/account-create/account-create.component';

const routes: Routes = [
  {path: 'auth', redirectTo: 'auth/login', pathMatch: 'full'},
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  },
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'bpm',
        component: Bpm000Component,
        children: [
          {path: 'bpm000', component: Bpm000Component},
          {path: 'bpm001', component: Bpm001Component}
        ]
      },
      {path: '', redirectTo: 'bpm/bpm000', pathMatch: 'full'},
      {
        path: 'krn',
        component: KrnComponent,
        children: [
          {
            path: 'operations',
            component: OperationsComponent},
          {
            path: 'krnicp',
            component: KrnicpComponent
          },
          {
            path: 'create',
            component: AccountCreateComponent,
          },
          {
            path: 'accounts',
            component: AccountsComponent,
          },
          {
            path: 'accounts/create',
            component: AccountCreateComponent,
            }
        ]
      },
    ]
  },
  {
    path: '', redirectTo: 'bpm',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
