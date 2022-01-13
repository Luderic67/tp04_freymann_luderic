import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from '../components/catalog/list/list.component';
import { NotFoundComponent } from '../components/errors/not-found/not-found.component';
import { HomeComponent } from '../components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: ListComponent },
  {
    path: 'client',
    loadChildren: () => import('./client.module').then((m) => m.ClientModule),
  },
  { path: 'not-found-404', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found-404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
