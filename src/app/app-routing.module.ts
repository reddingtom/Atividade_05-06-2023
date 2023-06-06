import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ContatosComponent } from './pages/contatos/contatos.component';
import { LoginComponent } from './pages/login/login.component';
import { GamesComponent } from './List/games/games.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'contatos', component: ContatosComponent },
  { path: 'adm@12751', component: LoginComponent },
  { path: 'B51D0FFD27FD1DE27F17998FEC81731C49658DE278EFD0E6DB107977098AC18E', component: GamesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
