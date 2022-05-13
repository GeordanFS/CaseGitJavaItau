import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListOfRepositoriesComponent } from './components/list-of-repositories/list-of-repositories.component';
import { HttpClientModule } from '@angular/common/http';
import { PullRequestsComponent } from './components/pull-requests/pull-requests.component';
import { AppRoutingModule } from './app-routing.module';
import { EntrarComponent } from './components/entrar/entrar.component';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ListOfRepositoriesComponent,
    PullRequestsComponent,
    EntrarComponent,
    CadastrarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
