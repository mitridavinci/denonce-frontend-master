import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DenonciationComponent} from './denonciation/denonciation.component';
import {AccueilComponent} from './accueil/accueil.component';
import {EtablissementComponent} from './etablissement/etablissement.component';
import {AdminComponent} from './admin/admin.component';
import {VilleComponent} from './ville/ville.component';
import {ListVillesComponent} from './list-villes/list-villes.component';
import {RegionComponent} from './region/region.component';
import {ListQuartiersComponent} from './list-quartiers/list-quartiers.component';
import {QuartierComponent} from './quartier/quartier.component';
import {ListEtablissementsComponent} from './list-etablissements/list-etablissements.component';
import {ListDenonciationsComponent} from './list-denonciations/list-denonciations.component';
import {UpdateDenonciationComponent} from './update-denonciation/update-denonciation.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {RouteGuardService} from './service/route-guard.service';
import {ListUsersComponent} from './list-users/list-users.component';
import {UserComponent} from './user/user.component';
import {RouteGuard2Service} from './service/route-guard2.service';

const routes: Routes = [
  { path: '', component: AccueilComponent},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent, canActivate:[RouteGuardService]},
  { path: 'denoncer', component: DenonciationComponent },
  { path: 'etablissement', component: ListEtablissementsComponent, canActivate:[RouteGuard2Service]},
  { path: 'etablissement/:id', component: EtablissementComponent, canActivate:[RouteGuard2Service] },
  { path: 'admin', component: AdminComponent , canActivate:[RouteGuardService]},
  { path: 'ville', component: ListVillesComponent, canActivate:[RouteGuard2Service] },
  { path: 'ville/:id', component: VilleComponent, canActivate:[RouteGuard2Service] },
  { path: 'denonciation', component: ListDenonciationsComponent , canActivate:[RouteGuard2Service]},
  { path: 'denonciation/:id', component: UpdateDenonciationComponent, canActivate:[RouteGuard2Service] },
  { path: 'quartier', component: ListQuartiersComponent , canActivate:[RouteGuard2Service]},
  { path: 'quartier/:id', component: QuartierComponent , canActivate:[RouteGuard2Service]},
  { path: 'user', component: ListUsersComponent , canActivate:[RouteGuard2Service]},
  { path: 'user/:id', component: UserComponent , canActivate:[RouteGuard2Service]},
  { path: '**', component: AccueilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
