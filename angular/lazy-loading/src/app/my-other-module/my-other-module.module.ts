import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyOtherModuleRoutingModule } from './my-other-module-routing.module';
import { OrderListComponent } from './order-list/order-list.component';

@NgModule({
  declarations: [OrderListComponent],
  imports: [
    CommonModule,
    MyOtherModuleRoutingModule
  ]
})
export class MyOtherModuleModule { }
