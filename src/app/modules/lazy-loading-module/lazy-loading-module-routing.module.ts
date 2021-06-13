import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazyLoadingModuleComponent } from './lazy-loading-module.component';

const routes: Routes = [{ path: '', component: LazyLoadingModuleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadingModuleRoutingModule { }
