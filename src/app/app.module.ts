import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { ShellComponent } from './shell/shell.component';
// import { ShellHeaderComponent } from './shell/shell-header/shell-header.component';
// import { ShellSidebarComponent } from './shell/shell-sidebar/shell-sidebar.component';
// import { PopupDirective } from './shell/shell-header/popup.directive';
// import { BpmComponent } from './shell/modules/bpm/bpm.component';
// import { Bpm000Component } from './shell/modules/bpm/bpm000/bpm000.component';
// import { Bpm001Component } from './shell/modules/bpm/bpm001/bpm001.component';
// import { KrnComponent } from './shell/modules/krn/krn.component';
// import { AccountsComponent } from './shell/modules/krn/accounts/accounts.component';
// import { ClientHeaderComponent } from './shell/client-header/client-header.component';
// import { AccountCreateComponent } from './shell/modules/krn/accounts/account-create/account-create.component';
// import { KrnicpComponent } from './shell/modules/krn/krnicp/krnicp.component';
// import { OperationsComponent } from './shell/modules/krn/operations/operations.component';
// import { PmdComponent } from './shell/modules/pmd/pmd.component';
// import { Pmd311Component } from './shell/modules/pmd/pmd311/pmd311.component';
import { HttpClientModule } from '@angular/common/http';
import {  CoreModule } from './core.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    SharedModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
