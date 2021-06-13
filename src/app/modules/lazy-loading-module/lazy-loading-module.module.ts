import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadingModuleRoutingModule } from './lazy-loading-module-routing.module';
import { LazyLoadingModuleComponent } from './lazy-loading-module.component';
import { DataTablesModule } from "angular-datatables";
import {SharedModule } from './../../modules/shared/shared.module';


@NgModule({
  declarations: [LazyLoadingModuleComponent],
  imports: [
    CommonModule,
    LazyLoadingModuleRoutingModule,
    DataTablesModule,
    SharedModule
  ]
})
export class LazyLoadingModuleModule { }
