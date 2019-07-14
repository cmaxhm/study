import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyModuleRoutingModule } from './my-module-routing.module';
import { UserModuleComponent } from './user-module/user-module.component';

@NgModule({
  declarations: [UserModuleComponent],
  imports: [
    CommonModule,
    MyModuleRoutingModule
  ]
})
export class MyModuleModule { }
