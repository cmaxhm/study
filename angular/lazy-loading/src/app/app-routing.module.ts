import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'user', loadChildren: './my-module/my-module.module#MyModuleModule' },
  { path: 'order-list', loadChildren: './my-other-module/my-other-module.module#MyOtherModuleModule' },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
