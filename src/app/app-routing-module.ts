import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlueComponent } from 'app/blue/blue.component';
import { RedComponent } from 'app/red/red.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'red',
        component: RedComponent
      },
      {
        path: 'blue',
        component: BlueComponent
      },
    ]
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }