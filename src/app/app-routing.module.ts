import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListOfRepositoriesComponent } from './components/list-of-repositories/list-of-repositories.component';
import { PullRequestsComponent } from './components/pull-requests/pull-requests.component';
import { EntrarComponent } from './components/entrar/entrar.component';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';

const routes: Routes = [

  { path: '', redirectTo: 'entrar', pathMatch: 'full' },
  {path: 'entrar', component:EntrarComponent},
  {path: 'cadastrar', component:CadastrarComponent},
  { path: 'home', component: ListOfRepositoriesComponent },
  { path: 'respositorio/:fullName', component: PullRequestsComponent }
];


@NgModule({
  declarations: [],
  imports: [
     RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
})


export class AppRoutingModule { }
