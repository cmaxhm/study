import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserModuleComponent } from './user-module/user-module.component';

const routes: Routes = [
  { path: '', component: UserModuleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyModuleRoutingModule { }
