import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildRouteComponent } from './components/child-route/child-route.component';
import { ChildRouteChildComponent } from './components/child-route/child-route-child/child-route-child.component';

const routes: Routes = [
  {
    path: 'child',
    component: ChildRouteComponent,
    children: [
      { path: 'child', component: ChildRouteChildComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
