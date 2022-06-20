import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PmdComponent} from './pmd.component';
import {Pmd311Component} from './pmd311/pmd311.component';

const routes: Routes = [
  {
    path: '',
    component: PmdComponent,
    children: [
      {
        path: 'pmd311',
        component: Pmd311Component
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class PmdRoutingModule {
}
