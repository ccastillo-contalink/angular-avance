import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadingModuleRoutingModule } from './lazy-loading-module-routing.module';
import { LazyLoadingModuleComponent } from './lazy-loading-module.component';
import { DataTablesModule } from "angular-datatables";


@NgModule({
  declarations: [LazyLoadingModuleComponent],
  imports: [
    CommonModule,
    LazyLoadingModuleRoutingModule,
    DataTablesModule
  ]
})
export class LazyLoadingModuleModule { }
